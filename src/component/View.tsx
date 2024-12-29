import React from 'react'
import { Id } from 'sanity'
import Ping from './Ping'
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEWS_QUERY } from '@/lib/queries';
import { Writeclient } from '@/sanity/lib/write-client';
import { after } from 'next/server'
const View = async ({id}:{id:Id}) => {
    const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });
    
    after( async()=>{
      await Writeclient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit() 
    })

    

     return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{ Number(totalViews) > 1 ? `Views : ${totalViews}` : ` View: ${totalViews} ` } </span>
      </p>
    </div>
  )
}

export default View
