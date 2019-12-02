import React, { useEffect , useRef } from 'react'
import Sortable from 'sortablejs'
import styles from './spus.module.less'

type ItemIProps = {
  name: string,
  level?: number,
  index?: number,
  status?: string,
  created?: string,
  action?: string,
  children?: ItemIProps[]
}

type IProps = {
  tree: ItemIProps[],
  textIndent?: number
}

const SortableTree = ({ tree, textIndent = 15 }:IProps) => {
  const ref = useRef(null)
  const level = tree[0].level || 0  // 默认为0（即为一级节点）
  
  useEffect(() => {
    Sortable.create(ref.current!, {
      handle: `.group-parent-node-${level}`
    })
  }, [])
  return (
    <ul ref={ref} id="items" className={styles.spus}>
      {
        tree.map((item:ItemIProps) => {
          return (
            <li key={item.name}>
              <div className={`group-parent-node group-parent-node-${level}`}>
                <div style={{ textIndent: level * textIndent }} className="name">{item.name}</div><div>{item.index}</div><div>{item.status}</div><div>{item.created}</div><div>{item.action}</div>
              </div>
              { item.children && item.children.length ?
                <div className="group-children-node">
                  <SortableTree tree={item.children.map(child => { child["level"] = level + 1; return child })} />
                </div> : null
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default SortableTree