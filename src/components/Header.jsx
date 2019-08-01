import React from "react";

import { Layout , Menu } from 'antd';

const { Header } = Layout;

export const BlockHeader = () => (
    <Header>
        <a href="#" className="logo"><img src={require('../assets/images/logo.png')} alt="image" /></a>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="nav"
        >
            <Menu.Item key="1">Главная</Menu.Item>
            <Menu.Item key="2">Расписание</Menu.Item>
        </Menu>
    </Header>
);