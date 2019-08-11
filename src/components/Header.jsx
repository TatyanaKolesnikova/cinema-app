import React from "react";
import { Link } from "react-router-dom";

import { Layout , Menu } from 'antd';

const { Header } = Layout;

export const BlockHeader = () => (
    <Header>
        <Link to='/' className="logo"><img src={require('../assets/images/logo.png')} alt="image" /></Link>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="nav"
        >
            <Menu.Item key="1"><Link to='/'>Главная</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/schedule'>Расписание</Link></Menu.Item>
        </Menu>
    </Header>
);