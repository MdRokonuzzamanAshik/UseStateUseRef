import { useState,useRef } from 'react'
import Heading from './components/Heading'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Button from './components/Button'
import Menu from './components/Menu'
import Product from './components/Product'


function App() {
  let dropRef = useRef (null)
  let handleDrop =()=>{
   if (dropRef.current.style.display == 'block'){
    dropRef.current.style.display = 'none'
   }
   else{
    dropRef.current.style.display = 'block'
   }
    
  }
  
  return (
    <>
    <Container className={' mt-[250px] mb-[50px] rounded-lg'}>
  <div onClick={handleDrop}>
    <button className='py-3 px-7 text-4xl rounded-3xl bg-yellow-700 text-white'>Click</button>
  <div className="bg-teal-500 rounded-lg mt-5 hidden" ref={dropRef}>
   <ul className='text-4xl p-8 text-center font-bold'>
  <li className='bg-purple-400'>Menu</li>
  <li className='bg-teal-400'>Home</li>
  <li className='bg-purple-400'>About</li>
  <li className='bg-teal-400'>News</li>
  <li className='bg-purple-400'>Webs</li>
  <li className='bg-teal-400'>Maps</li>
  <li className='bg-purple-400'>Contact</li>
 </ul>
   </div>
  </div>
    </Container>
    
    </>
  )
}

export default App
