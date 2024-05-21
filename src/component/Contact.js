// import React, { useRef } from 'react'

// export default function Contact() {


// const name = useRef("");
// const email = useRef("");
// const phone = useRef("");

// const submitHandler = (event) =>
//   {
//     event.preventDefault();
//     const contactDeitail = [{
//       name:name.current.value,
//       email:email.current.value,
//       phone:phone.current.value,

//     }]

//     console.log(contactDeitail);

//     async function addData(contactDeitail)
//       {
//           const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/contact.json',{
//             method:'POST',
//             body:JSON.stringify(contactDeitail),
//           })

//           const data = await response.status
//           console.log(data);
//           alert('Vinay will contact soon...')
//       }

//       addData(contactDeitail);
//   }



//   return (
//     <>
    
//      <form onSubmit={submitHandler}>
//       <div className="space-y-12 px-6 py-4">

//       <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Let's Connect</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">I'm always eager to learn new things and take on new challenges. Whether you're looking to collaborate on a project, need assistance with front-end development, or just want to connect, feel free to reach out.</p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//               Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   ref={name}
//                   className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

       
//             <div className="sm:col-span-4">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   ref={email}
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

   
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 phone number
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                   name="phone"
//                   id="phone"
//                   ref={phone}
//                   autoComplete="phone"
//                   className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>


        
//             </div>
//             </div>

//             <div className="mt-6 flex items-center justify-center gap-x-6">
//           <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//           </button>
//           <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//           Save
//           </button>
//           </div>

//       </div>
//       </form>
    
//     </>
//   )
// }

// // https://react-http-af8d1-default-rtdb.firebaseio.com/


import React, { useRef } from 'react';

export default function Contact() {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const contactDetail = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };

    console.log(contactDetail);

    async function addData(contactDetail) {
      try {
        const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/contact.json', {
          method: 'POST',
          body: JSON.stringify(contactDetail),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to submit contact details');
        }

        alert('Vinay will contact soon...');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    addData(contactDetail);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={submitHandler} className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let's Connect</h2>
        <p className="text-sm text-gray-600 mb-6">
          I'm always eager to learn new things and take on new challenges. Whether you're looking to collaborate on a project, need assistance with front-end development, or just want to connect, feel free to reach out.
        </p>
        {/* <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 "> */}
        <div className='grid gris-cols-1 gap-4 sm:grid-cols-2'>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              ref={name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              ref={email}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              ref={phone}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
