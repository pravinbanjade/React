// https://ant.design/components/dropdown/
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
)

export class AntDropDown extends React.Component{

  render() {
    return (
      <Dropdown overlay={menu}>
      <a href="#">
        Hover me <Icon type="down" />
      </a>
      </Dropdown>
    );
  }
}
