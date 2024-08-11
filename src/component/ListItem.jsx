import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./TodoState";
import TodoItem from "./TodoItem";

function ListItem({itemType}){
    const todoList = useRecoilValue(filteredTodoListState);

    return(<>
    <div className='TodoListBlock'>
        <div className='TodoList'>
            {
                todoList.map((todoItem) => (
                    <div key={todoItem.id} >
                        <TodoItem 
                            key={todoItem.id} 
                            item={todoItem} 
                            itemType={itemType}
                        />
                    </div>
                ))
            }
        </div>
    </div>
        
    </>)
}


export default ListItem;