import React from 'react'
import "./Constyle.css"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState } from 'react';

function Constyle() {
    const[isOpen,setIsOpen]=useState(false);
    const onClickHeader=()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <div className='header' onClick={onClickHeader}>click me <span className={`icon ${isOpen ? 'icon-active':'' }`}><AiFillCaretDown /></span></div>
        <div className={`content ${isOpen ? 'content-active':'' } gg`} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum consequatur quo dicta veniam eum, molestias maxime autem itaque officia earum asperiores laudantium rerum consequuntur velit cumque architecto neque obcaecati.
        </div>
        </>
    )
}

export default Constyle