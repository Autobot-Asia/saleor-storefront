import React from "react";

import { Icon } from "../Icon";
import { Tile } from "../Tile";
import * as S from "./styles";
import { IProps } from "./types";

export const AddNewTile: React.FC<IProps> = ({ type, ...props }: IProps) => {
  return (
    <Tile tileType="addNew" {...props}>
      <S.Content>
        <p>
          <Icon size={32} name="plus" color="#188C72" />
        </p>
        <S.Text>Thêm mới</S.Text>
      </S.Content>
    </Tile>
  );
};
