import React from "react";
import { Button } from "antd";

function GradeTypeButton({index, label}) {
  return (
    <Button
      size="large"
      id={`grade-type-${index}`}
      block
      type="primary"
      className="grade-type-button"
    >
      {label}
    </Button>
  );
}

export default GradeTypeButton;
