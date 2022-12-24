import React from "react";
import Pictures from "./Pictures";

//In case we need more than one icon to drag/drop
const pictureList = [
    {
        id: 1,
        src: "/../../Images/table.png"
    }
];

function DragDrop(){
    return(
        <>
        <div className="pictures"> {pictureList.map((picture) => {
            return <Pictures src ={picture.src} id = {picture.id}/>
        })}</div>
        <div className="board"></div>
        </>
    );
}

export default DragDrop;