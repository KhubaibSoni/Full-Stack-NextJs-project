import React from 'react'
import ProfileImage from"../app/public/CardImage.png"
import Image from 'next/image'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Author, Startup } from '../../sanity.types'

export type StartupTypeCard = Omit<Startup,"author"> & {author?:Author}
function Card({data}:{data: StartupTypeCard}) {

  const {
    _createdAt,
    views,
    author,
    _id,
    image,
  } = data;
  return (
 <li key={_id}>
      <div className='startup-card'>
      <div className='flex justify-between items-center'>
        <div className='startup-card_date'>
            <h3 className='font-medium '>{formatDate(_createdAt)}</h3>
        </div>
        <div className='flex flex-row-reverse items-center gap-1.5'>
            <span className='text-16-medium'>{views}</span>
            <Eye className='text-[#EE2B69]'/>
        </div>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <div> 
          <Link href={`user/${author?._id}`}>
         <p className='text-16-medium line-clamp-1'>{author?.name}</p>
         </Link>
    
         <h2 className='font-semibold text-[26px]'>{data.title}</h2>

        </div>
        <div>
        <Image src={ProfileImage} alt='authorImage' height={40} width={40}/>
        </div>
      </div>

      <div>
        <p className='startup-card_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet cum natus eius quas totam ad beatae nulla quisquam optio animi velit facere at temporibus numquam dolores ut, consequatur odio?</p>
      </div>
        
     <div>
      <Image src={image as string} alt='statup Image' height={164} width={276} className='startup-card_img' />
     </div>

     <div className='flex justify-between items-center mt-5'>
      <div>
        <p>{data.category}</p>
      </div>
      <div>
      <Link href={`/startup/${data._id}`}>
        <button type='button' className='startup-card_btn' >
       
          Details
        </button>
        </Link>
      </div>
     </div>

    </div>
    </li>

  )
}

export default Card
