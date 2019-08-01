import React from 'react';

import { Layout } from 'antd';
import { BlockHeader } from '../components/';

const { Content, Footer } = Layout;

export const App = () => (
    <Layout className="layout">
      <BlockHeader/>
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  );

