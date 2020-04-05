import React from "react";
import { useHistory } from 'react-router-dom';
import { Row, Col } from "antd";
import GradeTypeButton from "./GradeTypeButton";

import SUBJECT_TYPES from "../../../constants/subjectTypes";

import "./style.scss";

export default () => {
  let history = useHistory();

  const handleGradeTypeClick = slug => {
    history.push(`/preencha-suas-notas/${slug}`)
  };

  return (
    <Row gutter={20} id="first-step-row" justify="center" type="flex">
      {Object.entries(SUBJECT_TYPES).map(([key, { label, slug }], index) => (
        <Col key={index} xs={12} md={6} xl={4}>
          <GradeTypeButton
            label={label}
            type={key}
            onClick={() => handleGradeTypeClick(slug)}
          />
        </Col>
      ))}
    </Row>
  );
};
