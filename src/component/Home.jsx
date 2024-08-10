import React, { useState } from "react";
import ListItem from "./ListItem";

function HomeBlock() {
    const [doneFilter,setDoneFilter] = useState("all");

    return(<>
        홈
        <div className="List">
            <ListItem doneFilter={doneFilter}/>
            <div className="ComplateButton">
                <button onClick={()=>setDoneFilter("all")}>전체</button>
                <button onClick={()=>setDoneFilter("done")}>완료</button>
                <button onClick={()=>setDoneFilter("notdone")}>미완료</button>
            </div>
        </div>
        
    </>)
}

export default HomeBlock;