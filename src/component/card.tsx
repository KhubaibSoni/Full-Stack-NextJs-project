import React from 'react'
import ProfileImage from"../app/public/CardImage.png"
import Image from 'next/image'
function Card({data}:{
    data:{_id : string , title:string , category:string , createdAt:string , view:number , author:{
        id : string,
        name:string
    },
    image:string
}}
) {
  return (
    <div>
      <div>
        <div>
            <p>{data.createdAt}</p>
        </div>
        <div>
            <p>{data.view}</p>
        </div>
      </div>

      <div>
        <div>
         <p>{data.author.name}</p>
        </div>
        <div>
        <Image src={ProfileImage} alt='authorImage'/>
        </div>
      </div>
    </div>
  )
}

export default Card
