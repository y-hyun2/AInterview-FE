import React from "react";
import styled from "styled-components";

const IntroInput = ({ type, handleInput, values }) => {
  return (
    <>
      <Box1
        type={type}
        value={values.motivation}
        onChange={(e) => handleInput(e, "motivation")}
      />
      <Box2
        type={type}
        value={values.teamwork}
        onChange={(e) => handleInput(e, "teamwork")}
      />
      <Box3
        type={type}
        value={values.effort}
        onChange={(e) => handleInput(e, "effort")}
      />
      <Box4
        type={type}
        value={values.aspiration}
        onChange={(e) => handleInput(e, "aspiration")}
      />
    </>
  );
};

export default IntroInput;

const Box1 = styled.textarea`
  position: absolute;
  background-color: #d9d9d9;
  width: 306px;
  height: 100px;
  margin-left: 15px;
  margin-top: 43px;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  text-align: left;

  &:focus {
    border: 1px solid;
    border-color: #3a00f9; /* 포커스 시 보라색 */
  }
`;

const Box2 = styled.textarea`
  position: absolute;
  background-color: #d9d9d9;
  width: 306px;
  height: 100px;
  margin-left: 15px;
  margin-top: 189px;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  text-align: left;

  &:focus {
    border: 1px solid;
    border-color: #3a00f9; /* 포커스 시 보라색 */
  }
`;

const Box3 = styled.textarea`
  position: absolute;
  background-color: #d9d9d9;
  width: 306px;
  height: 100px;
  margin-left: 15px;
  margin-top: 343px;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  text-align: left;

  &:focus {
    border: 1px solid;
    border-color: #3a00f9; /* 포커스 시 보라색 */
  }
`;

const Box4 = styled.textarea`
  position: absolute;
  background-color: #d9d9d9;
  width: 306px;
  height: 100px;
  margin-left: 15px;
  margin-top: 482px;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: none;
  text-align: left;

  &:focus {
    border: 1px solid;
    border-color: #3a00f9; /* 포커스 시 보라색 */
  }
`;
