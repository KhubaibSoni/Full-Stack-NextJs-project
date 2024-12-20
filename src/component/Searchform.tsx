import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
import ResetButton from './ResetButton'

const Searchform = ({query}: {query?:string}) => {

  return (
      <Form action="/" className='search-form' scroll={false}>
       <input  name='query' placeholder='Search Here' className='search-input' />
       <div className="flex gap-2">
       {query && <ResetButton/>}
       <button type="submit" className='search-btn text-white' title='Seacrh-btn'>
        <Search className='size-5'/>
       </button>
       </div>
      </Form>
 
  )
}

export default Searchform
