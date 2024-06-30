'use client'

import "./test.css"
import {DndContext, DragEndEvent} from '@dnd-kit/core';  
import {useState} from 'react';
import Draggable from '../../../components/Draggable/Draggable';
import Droppable from '../../../components/Droppable/Droppable';


export default function GamePage() {
  const [dragPosition,setDragPosition] = useState(0)

  function DragIncreace(){
    setDragPosition(dragPosition + 1)
  }

  const [drops,setDrops] = useState([
    {id : 0, reseni : 'Meruňka', img : "https://cdn-icons-png.flaticon.com/512/5726/5726678.png"},
    {id : 1, reseni : 'Višeň', img : "https://cdn-icons-png.flaticon.com/512/5726/5726678.png"},
    {id : 2, reseni : 'Pomelo', img : "https://cdn-icons-png.flaticon.com/512/5726/5726678.png"}
  ])

  const drags = [
    {id : 1, reseni : 'Višeň', img : "https://cdn-icons-png.flaticon.com/512/3137/3137038.png"},
    {id : 2, reseni : 'Pomelo', img : "https://cdn-icons-png.flaticon.com/512/3944/3944198.png"},
    {id : 3, reseni : 'Tresen', img : "https://cdn-icons-png.flaticon.com/512/3944/3944198.png"}
  ]

  const drag = <Draggable id={drags[dragPosition]['id']} reseni={drags[dragPosition]['reseni']} img={drags[dragPosition]['img']}></Draggable>

    return (
      <>
      <div className='test'>
       <DndContext onDragEnd={test}>
            <div className='droppables'>
              {drops.map(drop => 
              <Droppable key={drop.id} id={drop.id} reseni={drop.reseni} img={drop.img}></Droppable>
              )}
            </div>
            {drag}
        </DndContext>
      </div>
      </>
    );


    function test(event : DragEndEvent){
      let drag = event.active?.data.current
      let drop = event.over?.data.current

      if(drag && drop){    
        if(drop['reseni'] === drag['reseni']){
          let index = drops.map((e) => {return e.reseni}).indexOf(drop['reseni'])
          drops[index]['img'] = drag['img_link']
          if(drags.length == 1){
            console.log("Dokončil si balíček")
            return
          }

          DragIncreace()
          console.log(drops)
          console.log("data - 1")
        }else{
          console.log("data - 0")
        }
      }
      else {
        throw new Error
      }
    }
}