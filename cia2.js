import React from "react";
import "./cia2.css";
import {useState} from "react";
function Dropdown(){
    const[color,setcolor]=useState("white");
    return(
        <>
        <h1 className="head">Color Changer Dropdown</h1>
        <div className="drop">
        <select onChange={e=>setcolor(e.target.value)} style={{backgroundColor:color}}> 
        <option value="choose a color">Choose A Color</option>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="pink">pink</option>
        <option value="">violet</option>
        <option value="lightgreen">light green</option>
        <option value="brown">brown</option>
        </select>
        
        <div className="box"
         onChange={e=>setcolor(e.target.value)} style={{backgroundColor:color}}>
        </div>
        </div>
        </>
    )
}
export default Dropdown