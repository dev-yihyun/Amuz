import { atom } from "recoil"

export const todoListState = atom({
    key:'todoListState',
    default:[
        {
            id: 1,
            text: "할일1",
            done: false
        },
        {
            id: 2,
            text: "할일2",
            done: false
        },
        {
            id: 3,
            text: "할일3",
            done: false
        },
        {
            id: 4,
            text: "할일4",
            done: false
        },
    ]
});
