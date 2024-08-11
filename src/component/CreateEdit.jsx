import React, { useState } from "react";
import ListItem from "./ListItem";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoState";

let id = 3;
function getId() {
    return id++;
}

function CreateEditBlock() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
      if(inputValue===""){
        alert("공백은 입력할 수 없습니다.")
      }
      else{
        setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
      }
      
    };
  
    const onChange = ({target: {value}}) => {
      setInputValue(value);
    };

    return(<>
        
        <ListItem itemType="CreateEdit"/>
        <div className='Create'>
            <input type="text" placeholder='할 일을 입력 후, Add 를 누르세요' 
            value={inputValue} 
            onChange={onChange} 
            />
            <button onClick={addItem}>Add</button>
        </div>
    </>)
}

export default CreateEditBlock;