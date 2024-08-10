import React from "react";
import styled,{css} from "styled-components";
import { useRecoilState } from "recoil";
import { todoListState} from './TodoState';
import { MdDone } from "react-icons/md";


export const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 18px;
  border: 2px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  color:#AAD7D9;
  background-color:white;
  ${(props) =>
    props.$done ?
    css`
      border: 2px solid #38d9a9;
      color: #38d9a9;
    `:null}
`
export const Text = styled.div`
  font-size: 21px;
  color: black;
  font-weight: bolder;
  ${props => props.$done?
    css`
    color:#a09f9c
    `
    :null
  }
`

function ListItemBlock({ doneFilter }) {

    const [todoState,setTodoState] = useRecoilState(todoListState);

    const onDone = (id) => {
        const state = todoState.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
        setTodoState(state);
    }

    const showDone = () =>{
        return todoState.filter(todo=>todo.done);
    }
    const showNotDone = () =>{
        return todoState.filter(todo=>!todo.done);
    }

    return(<>
        {
            doneFilter === "all"?
            (
                todoState.map((todos)=>(
                    <div className="Item" key={todos.id}>
                        <CheckCircle onClick={() => onDone(todos.id)} $done={todos.done}>
                            {todos.done ? (<MdDone />) : null}
                        </CheckCircle>
                        <Text $done={todos.done}>{todos.text}</Text>
                    </div>
                ))
            )
            :doneFilter ==="done"?
            (
                showDone().map((todos)=>(
                    <div className="Item" key={todos.id}>
                         <CheckCircle onClick={() => onDone(todos.id)} $done={todos.done}>
                            {todos.done ? (<MdDone />) : null}
                        </CheckCircle>
                        <Text $done={todos.done}>{todos.text}</Text>
                    </div>
                ))
            )
            :
            (
                showNotDone().map((todos)=>(
                    <div className="Item" key={todos.id}>
                         <CheckCircle onClick={() => onDone(todos.id)} $done={todos.done}>
                            {todos.done ? (<MdDone />) : null}
                        </CheckCircle>
                        <Text $done={todos.done}>{todos.text}</Text>
                    </div>
                ))
            )
        }





       
       

    </>)
}

export default ListItemBlock;