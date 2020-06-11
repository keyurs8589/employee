import React from "react";
import { Form } from "react-bootstrap";

const HeadRadio = ({ labelHead, activeHead }) => {
  return (
    <Form.Check
      type="radio"
      name="head"
      label={labelHead}
      checked={activeHead}
      readOnly
    />
  );
};

export default HeadRadio;
