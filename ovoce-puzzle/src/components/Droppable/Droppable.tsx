import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import Image from 'next/image'

export default function Droppable(props:any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data: {
      reseni : props.reseni,
      img_link : props.img
    }
  });
  return (
    <div ref={setNodeRef} className='drop-card-border'>
         <div className="card-border">
      <div className="card-content select-none">
        <Image
        className='img'
        src={props.img ? props.img : "https://cdn-icons-png.flaticon.com/512/5726/5726678.png"}
        width={75}
        height={75}
        alt="cdn-icons-png"
        />
        <h1>{props.reseni}</h1>
      </div>
    </div>
    </div>
  );
}