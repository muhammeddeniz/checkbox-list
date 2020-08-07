import React from "react";
import { observer } from "mobx-react";

import styled from "styled-components";
import Input from "./input";

const Items: React.FC<any> = ({ store }) => {
  const ItemText = styled.p`
    color: #111;

    font-size: 19px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 0px 8px;
  `;

  const ItemContainer = styled.div`
    margin: 4px 0px;
    background: #fff;
    background: #a7ff83;

    width: 200px;
    height: 40px;

    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div>
      {store.Checked.map((item: any) => {
        return (
          <ItemContainer>
            <ItemText>{item}</ItemText>
          </ItemContainer>
        );
      })}
    </div>
  );
};

export default observer(Items);
