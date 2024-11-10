import React from 'react'
import Badge from './Badge'
import Image from './Image'
import Cat from '../assets/Product_4-DPtYopGC.png'
import Flex from './Flex'

export const Product = () => {
  return (
          <>
          <Badge badgeName={'Ashik'} className={'absolute top-[6px] left-[7px]'}/>
          <Image imgSrc={Cat}/>
           <div className="bg-stone-500 py-6">
            <Flex className={'justify-end invisible group-hover:visible'}>
            <p>My Name is Ashik </p>
            <p>MR RA </p>
            </Flex>
            <Flex className={'justify-end invisible group-hover:visible'}>
            <p>My Name is Ashik </p>
            <p>MR RA </p>
            </Flex>
            <Flex className={'justify-end invisible group-hover:visible'}>
            <p>My Name is Ashik </p>
            <p>MR RA </p>
            </Flex>
           </div>
          </>
  )
}

export default Product