import React, { useState } from "react";
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

function ListItemBlock({ ButtonType,doneFilter }) {

    const [todoState,setTodoState] = useRecoilState(todoListState);
    const [openedit,setOpenedit] = useState(false);
    const [value,setValue] = useState('');

    const onOpenEdit = (id)=>{
        setOpenedit(prevIndex => (prevIndex === id ? null : id))
    }
    const onCancleEdit = ()=>{
        setOpenedit(false);
    }    
    const onEdit = (id) =>{
        if(value ===""){
            alert("공백은 입력할 수 없습니다.");
        }else{
            setTodoState(
                todoState.map((item)=>
              item.id === id?{...item,text:value }:item
            )
          )
          setValue("");
          setOpenedit(false);
        }
    }
    

    const onDone = (id) => {
        const state = todoState.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
        setTodoState(state);
    }

    const onDelete = (id) => {
        const state = todoState.filter((todo) => todo.id !== id);
        setTodoState(state);
    };   

    const showDone = () =>{
        return todoState.filter(todo=>todo.done);
    }
    const showNotDone = () =>{
        return todoState.filter(todo=>!todo.done);
    }

    const todoItem = (todoArr) =>{
        return todoArr.map((todos)=>(
            <div className="Item" key={todos.id}>
                <CheckCircle onClick={() => onDone(todos.id)} $done={todos.done}>
                    {todos.done ? (<MdDone />) : null}
                </CheckCircle>
                {
                    openedit===todos.id?
                    <>
                    <form onSubmit={()=>onEdit(todos.id)}>
                        <input
                            autoFocus 
                            placeholder={todos.text}
                            value={value}
                            onChange={(event)=>setValue(event.target.value)}
                        ></input>
                    </form>         
                    <button onClick={onCancleEdit}>취소</button>
                    {ButtonType=null}
                    </>
                    :
                    <Text $done={todos.done}>{todos.text}</Text>
                }
                {ButtonType &&ButtonType(todos,onDelete,onOpenEdit)}
            </div>
        ))
    }

    return(<>
        {
            doneFilter === "all"?
                todoItem(todoState)
            :doneFilter ==="done"?
                todoItem(showDone())
            :
                todoItem(showNotDone())
        }

    </>)
}

export default ListItemBlock;