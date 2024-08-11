import React from "react";
import ListItem from "./ListItem";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "./TodoState";

function HomeBlock() {
    const [filter,setFilter] = useRecoilState(todoListFilterState);
    return(<>
        <ListItem itemType="Home"/>

        <div className="ComplateButton">
            <button  onClick={() => setFilter('Show All')}>전체</button>
            <button onClick={() => setFilter('Show Completed')}>완료</button>
            <button onClick={() => setFilter('Show Uncompleted')}>미완료</button>
        </div>

    </>)
}

export default HomeBlock;