'use client'

import {DndContext} from '@dnd-kit/core';  
import {useState} from 'react';
import Draggable from '../../../components/Draggable/Draggable';
import Droppable from '../../../components/Droppable/Droppable';



export default function GamePage() {
    return (
        <>
        <div className="game">
            <DndContext>
                <div className="container-drop flex gap-9 justify-center">
                        <DndContext>
                            <Droppable id="1" reseni="tresen"/>
                            <Droppable id="2" reseni="broskev"/>
                            <Droppable id="3" reseni="tyramisa"/>
                        </DndContext>
                </div>
                <div className="option">
                    <div className='agree'>
                    <svg width="65" height="65" viewBox="0 0 48 48" className='svgAgree'>
                    <path fill="#c8e6c9" 
                    d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                    <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                    </svg>
                    </div>
                    <div className='disagree'>
                    <svg width="55" height="55" viewBox="0 0 512 512" className='mt-1 ml-1'>
                    <path fill="#E04F5F" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path>
                    <path fill="#FFF" d="M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"></path>
                    </svg>
                    </div>
                </div>
                <div className="container-drag">
                    <div className="draggables flex gap-8 justify-center ">
                            <DndContext>
                                <Draggable id="1" reseni="tresen"/>
                                <Draggable id="2" reseni="broskev"/>
                                <Draggable id="3" reseni="tyramisa"/>
                            </DndContext>
                    </div>
                </div>
            </DndContext>
        </div>
        </>
    )

    function handleDragEnd(event : any) {
        if(event.over && event.over.id === 'droppable'){
            // setIsDropped(true);
        }
    }
}