import React, { useRef, useState } from "react";
import ListItem from "./ListItem";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoState";



function CreateUpdateBlock() {

    const ButtonType =(todos,onDelete,onOpenEdit)=>(
        <button onClick={()=>onOpenEdit(todos.id)}>수정</button>
    )

    const todos = useSetRecoilState(todoListState)
    const [value,setValue] = useState('');
    const nextId = useRef(5);
    const onChange = (e)=>{
        setValue(e.target.value);
    }

    const onCreate = (e)=>{
        if(value===""){
            alert("공백은 입력할 수 없습니다.");
        }else{
            todos((todos)=>[
                ...todos,
                {
                    id:nextId.current,
                    text:value,
                    done:false,
                }
            ])
            setValue("");
            nextId.current+=1;
            e.preventDefault();
        }
    }

    return(<>
        <div className="Create">
            <ListItem  doneFilter="all" ButtonType={ButtonType}/>
            <form onSubmit={onCreate}>
                <input
                autoFocus 
                placeholder="할 일을 입력 후, Enter 를 누르세요"
                onChange={onChange}
                value={value}
                ></input>
            </form>
        </div>
    </>)
}
export default CreateUpdateBlock;