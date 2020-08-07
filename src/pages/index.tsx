import React from "react";
import styled from "styled-components";
import Input from "../components/input";
import Checkbox from "../components/checkbox";
import { observer } from "mobx-react";

import Items from "../components/items";

const HomePage: React.FC<any> = ({ store }) => {
  const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const InputContainer = styled.div`
    background: #fff;
    border: 1px solid #ccc;

    box-shadow: 2px 0px 6px #ccc;

    padding: 10px;
    height: 260px;

    display: flex;
    align-content: center;

    border-radius: 4px;
  `;

  const Space = styled.div`
    margin-bottom: 14px;
  `;

  const CheckedItems = styled.div`
    position: absolute;
    right: 40px;
    top: 40px;
  `;

  return (
    <div>
      <Container>
        <InputContainer>
          <Input
            store={store}
            checkboxs={[
              "deneme1",
              "deneme2",
              "deneme3",
              "deneme4",
              "deneme5",
              "deneme6",
              "deneme7",
              "deneme8",
              "deneme9",
              "deneme10",
              "deneme11",
            ]}
          />
          <Space />
        </InputContainer>
      </Container>

      <CheckedItems>
        <Items store={store}></Items>
      </CheckedItems>
    </div>
  );
};

export default observer(HomePage);
