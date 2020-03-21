import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import Main from "./Main";
import FooterContent from './Footer';

import "./style.scss";

export default () => {
  const steps = useSelector(state => state.steps.steps);
  const currentStep = useSelector(state => state.steps.currentStep);
  const { Header, Content, Footer } = Layout;
  const currentProgress = steps[currentStep];

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Title>Me nota IF!</Title>
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <Main currentProgress={currentProgress} currentStep={currentStep} steps={steps} />
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  );
}
