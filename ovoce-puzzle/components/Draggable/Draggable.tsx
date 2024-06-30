import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import Image from 'next/image'
import {useState} from 'react';


export default function Draggable(props:any) {
  const [isDropped,setIsDropped] = useState(false)

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    data: {
      reseni : props.reseni,
      img_link : props.img
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <div className="card-border card-border-select" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="card-content select-none cursor-pointer"   >
        <Image
        className='img'
        src={props.img}
        width={75}
        height={75}
        alt="cdn-icons-png"
        />
        <h1>________________</h1>
      </div>
    </div>
  );
}