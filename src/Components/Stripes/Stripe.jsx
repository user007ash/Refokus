import React from 'react'

function stripe({value,index}) {
    const {url,number} = value;
  return (
    <div className={`w-1/6 px-4 py-5 border-t-[1.2px] border-b-[1.2px] ${index === 5? "":"border-r-[1.2px]"} border-zinc-600 flex justify-between items-center`}>
        <img src={url} alt="" />
        <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default stripe;