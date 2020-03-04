import React from "react";
import { Button } from "antd";

function GradeTypeButton({ index, label, onClick }) {
  return (
    <Button
      size="large"
      id={`grade-type-${index}`}
      block
      onClick={onClick}
      type="primary"
      className="grade-type-button"
    >
      {label}
    </Button>
  );
}

export default GradeTypeButton;
