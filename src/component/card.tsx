import React from 'react'
import ProfileImage from"../app/public/CardImage.png"
import Image from 'next/image'
import { Eye } from 'lucide-react'
import Link from 'next/link'
function Card({data}:{
    data:{_id : string , title:string , category:string , createdAt:string , view:number , author:{
        id:string,
        name:string
    },
    image:string
}}
) {
  return (
    <div className='startup-card'>
      <div className='flex justify-between items-center'>
        <div className='startup-card_date'>
            <h3 className='font-medium '>{data.createdAt}</h3>
        </div>
        <div className='flex flex-row-reverse items-center gap-1.5'>
            <span className='text-16-medium'>{data.view}</span>
            <Eye className='text-[#EE2B69]'/>
        </div>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <div> 
          <Link href={`user/${data.author.id}`}>
         <p className='text-16-medium line-clamp-1'>{data.author.name}</p>
         </Link>
         <Link href={`/startup/${data._id}`}>
         <h2 className='font-semibold text-[26px]'>{data.title}</h2>
         </Link>
        </div>
        <div>
        <Image src={ProfileImage} alt='authorImage' height={40} width={40}/>
        </div>
      </div>

      <div>
        <p className='startup-card_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet cum natus eius quas totam ad beatae nulla quisquam optio animi velit facere at temporibus numquam dolores ut, consequatur odio?</p>
      </div>
        
     <div>
      <Image src={data.image} alt='statup Image' height={164} width={276} className='startup-card_img' />
     </div>

     <div className='flex justify-between items-center mt-5'>
      <div>
        <p>{data.category}</p>
      </div>
      <div>
        <button type='button' className='startup-card_btn'>
          Details
        </button>
      </div>
     </div>

    </div>
  )
}

export default Card
