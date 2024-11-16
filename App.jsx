import { useRef } from 'react'
import Container from './components/Container'
const App = () => {

  let firstName=useRef();
  let lastName=useRef();
  
  const form = () => {
    let fName = firstName.current.value;
    let lName = lastName.current.value;
    alert(fName + "" +lName)
         
  }



  return (
    <>
    <Container className={' mt-[250px]'}>
      <input ref={firstName} placeholder ="First Name" className='text-2xl bg-slate-500  font-semibold'/> <br />
      <input ref={lastName} placeholder ="Last Name" className='text-2xl bg-purple-500  font-semibold'/> <br />
      <button onClick={form} className='bg-green-950 text-4xl font-bold text-white px-5 py-3 rounded-lg'>Submit</button>
      
   
    </Container>
    
    </>
  )
}

export default App
