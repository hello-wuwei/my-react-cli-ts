import React, { useState } from 'react'
// import SortableTree from 'react-sortable-tree'
// import 'react-sortable-tree/style.css' // This only needs to be imported once in your app

// const initTreeData = [
//   { title: 'Chicken', children: [{ title: 'Egg' }] },
//   { title: 'Fish', children: [{ title: 'fingerline'}] }
// ]

// const ClassifyDrapTree = () => {
//   const [ treeData, setTreeData ] = useState(initTreeData)

//   return (
//     <div style={{ height: 400 }}>
//       <SortableTree
//         treeData={treeData}
//         onChange={(treeData:any) => setTreeData(treeData)}
//       />
//     </div>
//   )
// }

// export default ClassifyDrapTree

import { Tree } from 'antd';
import styles from './tree.module.less'

const { TreeNode } = Tree;

const x = 3;
const y = 2;
const z = 1;
const gData:any = [];

const generateData = (_level:any, _preKey?:any, _tns?:any) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

console.log(gData)

class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
  };

  onDragEnter = (info:any) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  onDrop = (info:any) => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data:any, key:any, callback:any) => {
      data.forEach((item:any, index:number, arr:any) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj:any;
    loop(data, dragKey, (item:any, index:number, arr:any) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item:any) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item:any) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      let ar:any;
      let i:any;
      loop(data, dropKey, (item:any, index:number, arr:any) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      gData: data,
    });
  };

  render() {
    const loop = (data:any) =>
      data.map((item:any) => {
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={item.title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} />;
      });
    return (
      <Tree
        className={styles["draggable-tree"]}
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        blockNode
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}

export default Demo