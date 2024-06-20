'use client'

import {DndContext} from '@dnd-kit/core';  
import {useState} from 'react';
import Draggable from '../../../components/Draggable/Draggable';
import Droppable from '../../../components/Droppable/Droppable';



export default function GamePage() {
    const [isDropped,setIsDropped] = useState(false);

    const draggableMarkup = (
        <Draggable>Drag me</Draggable>
    )

    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                {!isDropped ? draggableMarkup : null}
                <Droppable>
                    {isDropped ? draggableMarkup : 'Drop here'}
                </Droppable>
            </DndContext>
        </>
    )

    function handleDragEnd(event : any) {
        if(event.over && event.over.id === 'droppable'){
            setIsDropped(true);
        }
    }
}