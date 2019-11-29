import React, { useEffect , useRef } from 'react'
import Sortable from 'sortablejs'
import styles from './spus.module.less'

type ItemIProps = {
  name: string,
  level: number,
  index?: number,
  status?: string,
  created?: string,
  action?: string,
  children?: ItemIProps[]
}

type IProps = {
  tree: ItemIProps[]
}

const SortableTree = ({ tree }:IProps) => {
  const elid = 'items' + tree[0].level
  const ref = useRef(null)
  
  useEffect(() => {
    Sortable.create(ref.current!, {
      handle: `.group-parent-node-${tree[0].level}`
    })
  }, [])
  return (
    <ul ref={ref} className={styles.spus}>
      {
        tree.map((item:ItemIProps) => {
          return (
            <li key={item.name}>
              <div className={`group-parent-node group-parent-node-${item.level}`}><div>{item.name}</div><div>{item.index}</div><div>{item.status}</div><div>{item.created}</div><div>{item.action}</div></div>
              { item.children && item.children.length ?
                <div className="group-children-node">
                  <SortableTree tree={item.children} />
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