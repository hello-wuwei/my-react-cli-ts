import React, { useState, forwardRef, CSSProperties } from 'react';
import { Upload, Button, Modal, message, Icon } from 'antd';
import { uniqueId } from 'lodash'
import styles from './index.module.less'

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

const beforeUpload = (file:any, maxSize:number) => {
  const isLt2M = file.size / 1024 / 1024 < maxSize;
  if (!isLt2M) {
    message.error('文件大小不能超过20M!');
  }
  console.log(isLt2M)
  return isLt2M;
}

const baseUrl = '/api/v2'

type IProps = {
  api?: string,
  maxSize?: number,
  defaultFileList?: object[],
  onChange?: (list:object[]) => void,
  style?: CSSProperties,
  accept?: string,
  disabledPriview?: boolean,
  startUpload?: (file:object) => void
}

type FileProps = {
  uid?: string,
  name?: string,
  status?: string
}

const GoPicUpload = (props:IProps, ref:any) => {
  
  const {
    api = '/upload/avatar',    // 上传url
    accept = '',               // 能接受的文件类型
    defaultFileList = [],      // 默认文件数组
    onChange,                  // 上传文件触发回调
    maxSize = 20,              // 上传最大尺寸
    style,                     // 最外层自定义样式
    disabledPriview = false,     // 能否预览，默认true，可以预览
    // startUpload,   // 开始上传
  } = props

  const [list, setList] = useState<any>(defaultFileList.map((file:FileProps) => ({ uid: uniqueId(), name: '', status: 'done', ...file })))
  const handleChange = ({ file, fileList }:any) => {
    // startUpload && startUpload(file)
    // if (!file.status) {
    //   return
    // }
    // let cloneList = [...fileList]
    // if (file.status === 'done' || file.status === 'removed' || !cloneList.length) {
    //   onChange && onChange(cloneList.map(file => ({...file.response.data, name: file.name})))
    // }
    setList(fileList)
    onChange!(fileList)
  }

  const [ visible, setVisible ] = useState(false)
  const [ image, setImage ] = useState('')
  const onPreview = (file:any) => {
    if (disabledPriview) {
      return
    }
    const { response } = file
    setImage(response.data.url)
    setVisible(true)
  }

  return (
    <div style={style} ref={ref}>
      <Modal title="预览" visible={visible} footer={null} onCancel={() => setVisible(false)} afterClose={() => setImage('')}>
        <img alt="example" style={{ width: '100%' }} src={image} />
      </Modal>
      <Upload
        // className={ disabledDelete ? styles.closeHide : styles.closeShow }
        accept={accept}
        listType='picture-card'
        action={`${baseUrl}${api}`}
        beforeUpload={file => beforeUpload(file, maxSize)}
        fileList={list}
        onChange={handleChange}
        onPreview={onPreview}
      >
        { uploadButton }
      </Upload>
    </div>
  )
}

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
)

export default forwardRef(GoPicUpload)
