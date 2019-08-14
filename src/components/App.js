import React from 'react';

import { Layout } from 'antd';
import { BlockHeader } from './index';
import { MainContainer } from '../routes'

const { Footer } = Layout;

export const App = () => (
    <Layout className="layout">
      <BlockHeader/>
      <MainContainer/>
      <Footer>Kolesnikova Tatyna © 2019 Hillel IT School</Footer>
    </Layout>

  );

