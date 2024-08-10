import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { MdDelete } from "react-icons/md";

export const Remove = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  color: #95badf;
`

function DeleteBlock() {
    const ButtonType = (todo,onDelete)=>(
        <Remove onClick={() => onDelete(todo.id)}>
            <MdDelete/>
        </Remove>
    )

    return(<>
    삭제
    <ListItem ButtonType={ButtonType} doneFilter="all"/>
    </>)
}

export default DeleteBlock;