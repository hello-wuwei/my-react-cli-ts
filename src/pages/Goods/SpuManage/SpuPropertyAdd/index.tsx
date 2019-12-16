import React, { useState } from 'react'
import { Icon, Button } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { GoTitle } from 'components'
import history from '@/history'
import TagGroup from './TagGroup'

type GroupIProps = {
  name: string,
  values: string[]
}

const SpuPropertyAdd = (props:FormComponentProps) => {
  const handleSubmit = () => {
  }

  const [ groups, setGroups ] = useState<GroupIProps[]>([])

  const addGroup = () => {
    const group = {
      name: '颜色',
      values: []
    }
    setGroups([...groups, group])
  }

  return (
    <div className='main-info-page'>
      <div className="title">
        <GoTitle style={{ marginBottom: 40 }} action={<Button onClick={() => history.goBack()}>返回</Button>}>添加SPU基本信息</GoTitle>
      </div>
      <div>
        <Button type="primary" icon="plus" onClick={addGroup}>添加销售属性</Button>
      </div>
      
      <div style={{ marginTop: 20 }}>
        <PropertyGroup name="颜色" values={[ '白色', '黄色' ]} />
        {
          groups.map(group => <PropertyGroup key={name} name={group.name} values={group.values} />)
        }
      </div>
    </div>
  )
}

type PropertyGroupIProps = {
  name: string,
  values?: string[]
}

const PropertyGroup = ({ name = '属性名', values  = [] }:PropertyGroupIProps) => {
  return (
    <div style={{ marginBottom: 25 }}>
      <div className="group-name" style={{ lineHeight: '40px', background: '#f8f8f8', padding: '0 15px', marginBottom: 15, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h4>属性名：{ name }</h4>
        <Icon type="close-circle" style={{ fontSize: 20, cursor: 'pointer' }} />
      </div>
      <div className="group-value-list">
        <TagGroup tags={values} />
      </div>
    </div>
  )
}

export default SpuPropertyAdd