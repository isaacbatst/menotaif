import React from "react";
import { InputNumber } from "antd";

export default function GradeInput({ onInputChange }) {
  
  return (
    <InputNumber
      className="grade-input"
      min={0}
      max={100}
      size="large"
      step={1}
      onChange={value => onInputChange(value)}
    />
  );
}
