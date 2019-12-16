import React, { useState, ReactNode } from 'react'
import { Select, AutoComplete } from 'antd'
import { SelectProps } from 'antd/es/select'
import { AutoCompleteProps } from 'antd/es/auto-complete'

const clearEmoji = (text:string) => {
  return text.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, '')
}


// 模糊搜索控件
type KeyConfig = {
  keyName: string,
  valueName: string
}

type SearchSelectProps = {
  fetch: (value: string, cb: (data:any) => void) => void,
  optionConfig?: KeyConfig,
  value?: string | number,
  notFoundContent?: string | ReactNode,
  onChange: (value:any) => void
} & SelectProps

export const SearchSelect = (props:SearchSelectProps) => {
  const { fetch, placeholder = '请输入关键字', optionConfig = { keyName: 'id', valueName: 'name' }, value = '', notFoundContent = '暂无数据', onChange, ...restProps } = props
  const [ currentValue, setCurrentValue ] = useState(value)
  const [ data, setData ] = useState([])
  const [ empty, setEmpty ] = useState<any>('')
  const handleSearch = (value:any) => {
    value ? setEmpty(notFoundContent) : setEmpty('')
    fetch(value, data => setData(data))
  }

  const handleChange = (value:any) => {
    onChange(value)
    setCurrentValue(value)
  }

  const keyName = optionConfig.keyName
  const valueName = optionConfig.valueName
  const options = data.map(option => <Select.Option key={option[keyName]} value={option[keyName]}>{option[valueName]}</Select.Option>);
  return (
    <Select
      showSearch
      value={currentValue}
      placeholder={placeholder}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={<div style={{ textAlign: 'center' }}>{empty}</div>}
      {...restProps}
    >
      {options}
    </Select>
  )
}

type SearchInputIProps = {
  fetch: (value: string, cb: (data:any) => void) => void,
  value?: string | number,
  onChange: (value:any) => void
} & AutoCompleteProps
  
export const SearchInput = (props:SearchInputIProps) => {
  const { fetch, style, placeholder = '请输入关键字', value = '', onChange, ...restProps } = props
  const [ currentValue, setCurrentValue ] = useState(value)
  const [ data, setData ] = useState([])
  const handleSearch = (value:any) => {
    const text = clearEmoji(value)
    text && fetch(text, data => setData(data))
  }
  const handleChange = (value:any) => {
    const text = clearEmoji(value)
    onChange(text)
    setCurrentValue(text)
  }
  return (
    <AutoComplete
      value={currentValue}
      dataSource={data}
      onChange={handleChange}
      // onSelect={handleSelect} // 只对选择项点击有回调（对输入无效）
      onSearch={handleSearch}
      placeholder={placeholder}
      {...restProps}
    />
  )
}