import { useState,useRef } from 'react'
import Heading from './components/Heading'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Button from './components/Button'
import Menu from './components/Menu'
import Product from './components/Product'


function App() {
  let [count, setcount] = useState(0);

  let handleClick=() => {
    count+=5
    setcount(count)
  }
   
  let countRef = useRef(0)
  let handleClick2=()=>{
    console.log(countRef.current+=25)
  
    
  }
 
  

  return (
    <>
    <Container className={'bg-teal-800 mt-[250px] mb-[50px]'}>
      
    <h1 className='text-4xl'>Usestate</h1>
       <h2 className='text-4xl'>{count}</h2>
      <button onClick={handleClick} className='text-4xl bg-violet-700 p-1 rounded-lg'>Click</button>
    </Container>



    <Container className={'bg-orange-800 m-4 '}>
      
    <h1 className='text-4xl'>UseRef</h1>
       <h2 className='text-4xl'>{countRef.current}</h2>
      <button onClick = {handleClick2} className= 'text-4xl  bg-violet-700 p-1 rounded-lg'>Click</button>
    </Container>
    
    </>
  )
}

export default App
