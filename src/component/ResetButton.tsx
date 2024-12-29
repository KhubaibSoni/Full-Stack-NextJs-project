'use client'
import {  X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ResetButton() {
    const reset=()=>{
        const form = document.querySelector('.search-form') as HTMLFormElement
        const params = new URLSearchParams(window.location.search)
        params.delete('query')
        if (form) form.reset()
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`)
    }
  return (
  <button type='reset' onClick={reset} title='Clear_Search' >
<Link href="" className='search-btn'>
<X className='text-white'/>
</Link>
  </button>
  )
}

export default ResetButton
