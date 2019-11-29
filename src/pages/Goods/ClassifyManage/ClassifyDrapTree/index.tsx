import React, { useEffect } from 'react'
import Sortable from 'sortablejs'
import styles from './spus.module.less'
import SortableList from './SortableList'

const treeData = [
  {
    name: '家用电器',
    level: 1,
    index: 1,
    status: '开启',
    created: '2016-09-21  08:50:08',
    action: '新增子类 编辑 删除',
    children: [
      {
        name: '大家电',
        level: 2,
        index: 11,
        status: '关闭',
        created: '2016-09-21  08:50:08',
        action: '新增子类 编辑 删除',
        children: [
          {
            name: '空调',
            level: 3,
            index: 111,
            status: '关闭',
            created: '2016-09-21  08:50:08',
            action: '新增子类 编辑 删除'
          },
          {
            name: '液晶电视',
            level: 3,
            index: 112,
            status: '关闭',
            created: '2016-09-21  08:50:08',
            action: '新增子类 编辑 删除'
          }
        ]
      },
      {
        name: '小家电',
        level: 2,
        index: 12,
        status: '开启',
        created: '2016-09-21  08:50:08',
        action: '新增子类 编辑 删除'
      }
    ]
  },
  {
    name: '时尚服装',
    level: 1,
    index: 2,
    status: '开启',
    created: '2016-09-21  08:50:08',
    action: '新增子类 编辑 删除'
  }
]

type Ip = typeof treeData

const ClassifyDrapTree = () => {
  
  useEffect(() => {
    const el:HTMLElement = document.getElementById('items')!;
    Sortable.create(el)
  }, [])
  return (
    <div>
      <SortableList tree={treeData} />
    </div>
  )
}

export default ClassifyDrapTree