import React, { useState, useEffect } from 'react'
import { Tag, Input, Tooltip, Icon } from 'antd';

const EditableTagGroup = (props:any) => {

  const [ tags, setTags ] = useState(['Unremovable', 'Tag 2', 'Tag 3'])
  const [ inputVisible, setInputVisible ] = useState(false)
  const [ inputValue, setInputValue ] = useState('')
  let ref:any;
  

  const handleClose = (removedTag:any) => {
    const newTags = tags.filter((tag:any) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags)
  };

  const showInput = () => {
    setInputVisible(true)
    // this.setState({ inputVisible: true }, () => this.input.focus());
  };

  useEffect(() => {
    console.log(ref)
    inputVisible && ref.focus()
  }, [inputVisible])

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value)
  };

  const handleInputConfirm = () => {
    let newTags:any = [...tags]
    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...tags, inputValue];
    }
    console.log(newTags);
    setTags(newTags)
    setInputVisible(false)
    setInputValue('')
  };

//   saveInputRef = input => (this.input = input);

  return (
    <div>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag key={tag} closable={index !== 0} onClose={() => handleClose(tag)}>
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          ref={(input) => ref = input}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> New Tag
        </Tag>
      )}
    </div>
  )
}

export default EditableTagGroup