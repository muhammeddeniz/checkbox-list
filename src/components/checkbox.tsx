import React, { useState } from "react";
import styled from "styled-components";

import Input from "./input";
import { Check } from "./icons";
import { observer } from "mobx-react";

const CheckBox: React.FC<any> = ({ children, store }) => {
  const [checked, setChecked] = useState(false);
  const [isfocus, setIsfocus] = useState(false);

  const CheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    padding-right: 2px;
    width: 20px;
    height: 20px;

    border-radius: 4px;
    border: 1px solid #111;

    cursor: pointer;
  `;

  const CheckBoxContainer = styled.div`
    margin: 6px 10px;
    min-width: 200px;

    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;
    user-select: none;
  `;

  const Text = styled.p`
    padding: 0;
    margin: 0;
    color: ${isfocus ? "#111" : "#5c5757"};

    width: 145px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  return (
    <CheckBoxContainer
      onClick={() => {
        setChecked(!checked);
        setIsfocus(!isfocus);

        if (checked) {
          store.RemoveChecked(children);
        } else {
          store.AddChecked(children);
        }
      }}
    >
      <CheckBox>{checked ? <Check></Check> : null}</CheckBox>
      <Text>{children}</Text>
    </CheckBoxContainer>
  );
};

export default CheckBox;
