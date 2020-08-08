import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Checkbox from "./checkbox";

import { X, Search } from "./icons";

interface IProps {
  checkboxs?: Array<string>;
}

const InputComponent = styled.input`
  padding: 5px;

  border-radius: 6px;
  border: 1px solid #ccc;

  box-shadow: 2px 3px 6px #ccc;
  outline: none;

  &:focus {
    box-shadow: 4px 3px 6px #ccc;
  }
`;

const SearchWord = (search: string, word: string, store: any) => {
  for (let i = 0; i < search.length; i++) {
    if (search[i] != word[i]) {
      return "";
    } else if (search[i] == word[i] && i == search.length - 1) {
      return <Checkbox store={store}>{word}</Checkbox>;
    }
  }
};

const Input: React.FC<any> = ({ checkboxs = ["deneme"], store }) => {
  const [search, setSearch] = useState("");

  const CheckboxContainer = styled.div`
    margin-top: 10px;
    overflow: hidden;
    overflow-y: scroll;

    padding: 0px 10px;
    height: 230px;
    width: 220px;
  `;

  const Close = styled.div`
    position: absolute;
    right: 15px;
    top: 3px;
  `;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <InputComponent
          style={{ paddingRight: 30 }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></InputComponent>
        <Close onClick={() => setSearch("")}>
          <X></X>
        </Close>
      </div>
      <CheckboxContainer>
        {checkboxs.map((item: string, key: any) => {
          return search == "" ? (
            <div key={key}>{<Checkbox store={store}>{item}</Checkbox>}</div>
          ) : (
            <div key={key}>{SearchWord(search, item, store)}</div>
          );
        })}
      </CheckboxContainer>
    </div>
  );
};

export default Input;
