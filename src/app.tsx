import React from 'react';
import './style/common.less';
import background from './assets/images/picture.png'
import Icon from 'components/Icon'
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <div className="banner">
        <Button type="primary">按钮</Button>
        <img src={background} alt="" />
        <div className="title">
          <p style={{ display: 'flex', alignItems: 'center', fontSize: 30 }}>
            自制Webpack + React脚手架
            {/* <Icon style={{ marginLeft: 20 }} type="maimaihoutaitubiao-2" /> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;