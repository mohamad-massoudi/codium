import React from 'react'

import type { Metadata } from 'next'
import { Button } from '@heroui/button'
 
export const metadata: Metadata = {
  title: 'about',
}
 

function About() {
  return (
    <>
    <Button className='bg-amber-400'>hello</Button>
    </>
  )
}

export default About