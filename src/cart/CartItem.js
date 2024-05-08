import React from 'react'

export default function CartItem({item, key}) {
    console.log(item.title);
    
  return (
    <>
     <tbody>
    <tr className='flex justify-evenly w-[20rem]'>
        
      <td className="border-b border-slate-700 text-xl ">{item.name}</td>
      <td className="border-b border-slate-700 text-xl ">{item.price}</td>
      <td className=" border-slate-700 text-xl px-6 flex justify-between">
      <button  className='bg-green-600 text-white font-semibold  rounded border-2 border-blue-400 m-2 px-1'>1</button>
        <button  className='bg-red-500 text-white font-semibold  rounded border-2 border-blue-400  m-2 px-1'>Remove</button>
      </td>
      
    </tr>
    </tbody>
    </>
  )
}
