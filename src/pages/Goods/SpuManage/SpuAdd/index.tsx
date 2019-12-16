import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { formItemLayout, formTailLayout } from '@/config'
import styles from './index.module.less'
import { GoTitle, GoSelect, GoPicUpload } from 'components'
import history from '@/history'
import SpuClassifySelect from './SpuClassifySelect'

const SpuAdd = (props:FormComponentProps) => {
  const { getFieldDecorator } = props.form
  const handleSubmit = () => {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  }
  return (
    <div className='main-info-page'>
      <div className="title">
        <GoTitle style={{ marginBottom: 40 }} action={<Button onClick={() => history.goBack()}>返回</Button>}>添加SPU基本信息</GoTitle>
      </div>
      
      <div className="form">
        <Form {...formItemLayout} className="login-form">
          <Form.Item label="SPU名称">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入SPU名称!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入SPU名称"
                style={{ width: '40%' }}
              />,
            )}
          </Form.Item>
          <Form.Item label="SPU副标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入SPU副标题!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入SPU副标题"
                style={{ width: '40%' }}
              />,
            )}
          </Form.Item>
          <Form.Item label="商品品牌">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <GoSelect enmuType="enmu_brands" placeholder="Password" style={{ width: '40%' }} />
            )}
          </Form.Item>
          <Form.Item label="商品供应商" style={{ marginBottom: 0 }}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <GoSelect enmuType="enmu_brands" placeholder="Password" style={{ width: '40%' }} />
            )}
          </Form.Item>
          <Form.Item {...formTailLayout}>
            {getFieldDecorator('isShowStore', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Checkbox>不显示店铺</Checkbox>
            )}
          </Form.Item>
          <Form.Item label="商品品类">
            {getFieldDecorator('classify', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <SpuClassifySelect style={{ width: '40%' }} />
            )}
          </Form.Item>
          <Form.Item label="商品类型">
            {getFieldDecorator('prodType', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Radio.Group>
                <Radio value={1}>实物SPU（物流发货）</Radio>
                <Radio value={2}>虚拟SPU（无需物流）</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="商品主图">
            {getFieldDecorator('main_pic', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <GoPicUpload />
            )}
          </Form.Item>
          <Form.Item label="商品详情图">
            {getFieldDecorator('spu_detail_pic', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <GoPicUpload />
            )}
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button type="primary" onClick={handleSubmit}>提交</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

const SpuAddForm = Form.create()(SpuAdd)

export default SpuAddForm