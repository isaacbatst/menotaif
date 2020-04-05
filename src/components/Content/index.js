import React from "react";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import Main from "./Main";
import FooterContent from './Footer';

import "./style.scss";

export default () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Title>Me nota IF!</Title>
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <Main />
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
}
