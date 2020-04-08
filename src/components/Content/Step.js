import React from 'react'
import Title from "antd/lib/typography/Title";

export default ({ step }) => (
  <>
    <section className="container banner">
      <Title id="page-progress-title" level={2}>
        {step.title}
      </Title>
    </section>
    <section className="container main">
      {step.content}
    </section>
    <section className="container description">
      <p>{step.description[step.description.length - 1]}</p>
    </section>
  </>
)