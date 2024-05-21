// import React, { useContext } from 'react'
// import { Context } from '../store/Context'
//  function Home() {

//   const ctx = useContext(Context);
//   console.log(ctx)

//   return (
//     <>
    
//       {/* <h1 className="text-8xl text-center text-white font-bold font-serif">The Generics Home Page</h1> */}
//       <div className="bg-slate-400 h-[25rem]">
//         <h1 className='text-8xl text-center text-white font-bold font-serif'>The Generics</h1>

//         <div className="flex justify-center ">
//       <button className=" hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded border-2 border-blue-400 m-16">
//       Get Our laters album
//       </button>
//       </div>
//       </div>

//       <div className='flex justify-center bg-white'>
//         <h1 className='text-3xl font-bold'>TOURS</h1>
//         </div>

//         <section className='flex justify-center h-[25rem] items-center'>
//         <table class="border-collapse border-b border-slate-500">
//   <tbody>
//     <tr>
//       <td className="border-b border-slate-700 text-2xl px-9">JUL16</td>
//       <td className="border-b border-slate-700 text-2xl px-9">DETROIT</td>
//       <td className="border-b border-slate-700 text-2xl px-9">MI DTE ENERGY MUSIC THEATRE</td>
//       <td className="border-b border-slate-700 text-2xl px-9">
//         <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
//       </td>
      
//     </tr>
//     <tr>
//       <td className="border-b border-slate-700 text-2xl px-9">JUL19</td>
//       <td className="border-b border-slate-700 text-2xl px-9">TORONTO</td>
//       <td className="border-b border-slate-700 text-2xl px-9">ON BUDWEISER STAGE</td>
//       <td className="border-b border-slate-700 text-2xl px-9">
//       <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
//       </td>
//     </tr>
//     <tr>
//     <td className="border-b border-slate-700 text-2xl px-9">JUL 22</td>
//       <td className="border-b border-slate-700 text-2xl px-9">BRISTOW</td>
//       <td className="border-b border-slate-700 text-2xl px-9">VA JIGGY LUBE LIVE</td>
//       <td className="border-b border-slate-700 text-2xl px-9">
//       <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
//       </td>
//     </tr>
//     <tr>
//     <td className="border-b border-slate-700 text-2xl px-9">JUL 29</td>
//       <td className="border-b border-slate-700 text-2xl px-9">PHOENIX</td>
//       <td className="border-b border-slate-700 text-2xl px-9">AZ AK-CHIN PAVILION</td>
//       <td className="border-b border-slate-700 text-2xl px-9">
//       <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
//       </td>
//     </tr>
//     <tr>
//     <td className="border-b border-slate-700 text-2xl px-9">AUG 2</td>
//       <td className="border-b border-slate-700 text-2xl px-9">LAS VEGAS</td>
//       <td className="border-b border-slate-700 text-2xl px-9">NV T-MOBILE ARENA</td>
//       <td className="border-b border-slate-700 text-2xl px-9">
//       <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
//       </td>
//     </tr>
//     <tr>
//     <td className="border-b border-slate-700 text-2xl px-9">AUG 7</td>
//       <td className="border-b border-slate-700 text-2xl px-9">CONCORD</td>
//       <td className="border-b border-slate-700 text-2xl px-9">CA CONCORD PAVILION</td>
//       <td className="border-b border-slate-700 text-2xl px-9">
//       <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
//       </td>
//     </tr>
//   </tbody>
// </table>
// </section>

// <div className='bg-cyan-300 h-[8rem] text-white py-4 px-5'>
// <h2 className='text-2xl font-semibold'>The Generics</h2>
// </div>

    
//     </>
//   )
// }
// export default Home


import React, { useContext } from 'react'
import { Context } from '../store/Context'
import { FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';

function Home() {
  const ctx = useContext(Context);
  console.log(ctx)

  return (
    <>
      <div className="bg-slate-400 h-[25rem] flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center text-white font-bold font-serif">
          The Generics
        </h1>
        <div className="flex justify-center">
          <button className="hover:bg-blue-700 text-white font-semibold py-2 px-3 sm:py-3 sm:px-4 rounded border-2 border-blue-400 m-4 sm:m-16">
            Get Our Latest Album
          </button>
        </div>
      </div>

      <div className="flex justify-center bg-white py-4">
        <h1 className="text-2xl sm:text-3xl font-bold">TOURS</h1>
      </div>

      <section className="flex justify-center items-center py-4">
        <table className="border-collapse w-full sm:w-auto border-b border-slate-500">
          <tbody>
            {[
              { date: "JUL 16", city: "DETROIT", venue: "MI DTE ENERGY MUSIC THEATRE" },
              { date: "JUL 19", city: "TORONTO", venue: "ON BUDWEISER STAGE" },
              { date: "JUL 22", city: "BRISTOW", venue: "VA JIGGY LUBE LIVE" },
              { date: "JUL 29", city: "PHOENIX", venue: "AZ AK-CHIN PAVILION" },
              { date: "AUG 2", city: "LAS VEGAS", venue: "NV T-MOBILE ARENA" },
              { date: "AUG 7", city: "CONCORD", venue: "CA CONCORD PAVILION" },
            ].map((tour, index) => (
              <tr key={index}>
                <td className="border-b border-slate-700 text-xl sm:text-2xl px-4 sm:px-9 py-2">{tour.date}</td>
                <td className="border-b border-slate-700 text-xl sm:text-2xl px-4 sm:px-9 py-2">{tour.city}</td>
                <td className="border-b border-slate-700 text-xl sm:text-2xl px-4 sm:px-9 py-2">{tour.venue}</td>
                <td className="border-b border-slate-700 text-xl sm:text-2xl px-4 sm:px-9 py-2">
                  <button className="bg-cyan-300 text-white font-semibold px-2 sm:px-4 py-1 rounded border-2 border-blue-400 m-1.5">
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* <div className="bg-cyan-300 h-[8rem] text-white py-4 px-5 flex justify-center items-center">
        <h2 className="text-xl sm:text-2xl font-semibold">The Generics</h2>
      </div> */}

<div className='bg-cyan-300 h-32 text-white py-4 px-5 flex flex-col md:flex-row justify-between items-center'>
        <h2 className='text-2xl font-semibold mb-4 md:mb-0'>The Generics</h2>
        <div className='flex space-x-4'>
          <a href="https://www.instagram.com/vinay_pandey_9826/" target="_blank" rel="noopener noreferrer" className='text-white text-3xl'>
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-white text-3xl'>
            <FaYoutube />
          </a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className='text-white text-3xl'>
            <FaSpotify />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home;
