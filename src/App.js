// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import Home from './component/Home';
// import Store from './component/Store';
// import About from './component/About';

// function App() {

//   const [activeSection, setActiveSection] = useState('home');

//   const [showCart, setShowCart] = useState(false); // State to manage cart visibility

//   // Function to handle section click
//   // const handleSectionClick = (section) => {
//   //   setActiveSection(section);
//   // };

//   // Function to handle section click
//   const handleSectionClick = (section) => {
//     if (section === 'cart') {
//       setShowCart(true); // Show cart when clicking on 'cart'
//     } else {
//       setActiveSection(section);
//     }
//   };

//   // Function to close the cart
//   const handleCloseCart = () => {
//     setShowCart(false);
//   };




//   return (
  
//     <div>
//     {/* Navbar */}

//     {/* <nav className="p-3 flex bg-black justify-center items-center"> */}
//     <nav className="p-3 flex bg-black justify-center items-center">

//       <div className={`flex-none w-20 h-7 `}>
//         <a href="#" onClick={() => handleSectionClick('home')} className="text-white h-2">
//           Home
//         </a>
//       </div>
//       <div className={`flex-none w-20 h-7 `}>
//         <a href="#" onClick={() => handleSectionClick('store')} className="text-white">
//           Store
//         </a>
//       </div>
//       <div className={`flex-none w-20 h-7 `}>
//         <a href="#" onClick={() => handleSectionClick('about')} className="text-white">
//           About
//         </a>
//       </div>

//       <div className='text-white text-base w-20 h-7 flex items-end'>
//       <button className='border border-blue-500 px-4' onClick={()=> handleSectionClick('cart')}>cart</button>
//       </div>
//     </nav>
//     </div>

//     {/* Content */}
    
//     <div>
//       {activeSection === 'home' && <Home/>}      
//       {activeSection === 'store' && <Store/>}
//       {activeSection === 'about' && <About/>}
//       </div>
    




//        {/* Cart Section */}
//     {showCart && (
//       <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-4 rounded-lg">
//           <button className="absolute top-2 right-2 text-gray-500" onClick={handleCloseCart}>Close</button>
//           <h2 className="text-lg font-bold mb-2">Cart</h2>
//           {/* Your cart items here */}
//           {/* Example item */}
//           <div className="flex items-center mb-2">
//             <img src="example.jpg" alt="Item" className="w-10 h-10 mr-2" />
//             <div>
//               <p className="text-sm">Item Name</p>
//               <p className="text-sm text-gray-500">$10</p>
//               <p className="text-sm text-gray-500">Quantity: 1</p>
//             </div>
//           </div>
//           {/* End of example item */}
//         </div>
//       </div>
//     )}
    



//   );
// }

// export default App;


// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';
import Home from './component/Home';
import Store from './component/Store';
import About from './component/About';
import CartMain from './cart/CartMain';

function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [showCart, setShowCart] = useState(false); // State to manage cart visibility

  // Function to handle section click
  const handleSectionClick = (section) => {
    if (section === 'cart') {
      setShowCart(true); // Show cart when clicking on 'cart'
    } else {
      setActiveSection(section);
    }
  };

  // Function to close the cart
  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
  
    <div>
    {/* Navbar */}

    {/* <nav className="p-3 flex bg-black justify-center items-center"> */}
    <nav className="p-3 flex bg-black justify-center items-center">

      <div className={`flex-none w-20 h-7 `}>
        <a href="#" onClick={() => handleSectionClick('home')} className="text-white h-2">
          Home
        </a>
      </div>
      <div className={`flex-none w-20 h-7 `}>
        <a href="#" onClick={() => handleSectionClick('store')} className="text-white">
          Store
        </a>
      </div>
      <div className={`flex-none w-20 h-7 `}>
        <a href="#" onClick={() => handleSectionClick('about')} className="text-white">
          About
        </a>
      </div>

      <div className='text-white text-base w-20 h-7 flex items-end'>
        <button className='border border-blue-500 px-4' onClick={()=> handleSectionClick('cart')}>Cart</button>
      </div>
    </nav>

    {/* Content */}
    
    {activeSection === 'home' && <Home/>}      
    {activeSection === 'store' && <Store/>}     
    {activeSection === 'about' && <About/>}
    
    {/* Cart Section */}
    {showCart && (
      // <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      //   <div className="bg-white w-[22rem] h-[25rem] rounded-lg px-3 py-2">
      //     <div className='flex justify-between'>
          
      //     <h2 className="text-lg font-bold mb-2">Cart</h2>
      //     <button className="top-2 right-2 text-gray-500 border rounded-sm border-gray-800 px-2" onClick={handleCloseCart} >Close</button>
      //     </div>

      //     <div>
      //     <section className='flex justify-center'>
      //   <table class="border-collapse border-b border-slate-500">
      //   <thead>
      //   <tr>
      //       <th className="border-b border-slate-700 text-base px-6 ">ITEM</th>
      //       <th className="border-b border-slate-700 text-base px-6 ">PRICE</th>
      //       <th className="border-b border-slate-700 text-base px-6 ">QUANTITY</th>
      //   </tr>
      //   </thead>
      //     </table>
      //     </section>
      //       </div>
      //     {/* Your cart items here */}
      //     {/* Example item */}
      //     <div className="flex items-center mb-2">
      //       <img src="example.jpg" alt="Item" className="w-10 h-10 mr-2" />
      //       <div>
      //         <p className="text-sm">Item Name</p>
      //         <p className="text-sm text-gray-500">$10</p>
      //         <p className="text-sm text-gray-500">Quantity: 1</p>
      //       </div>
      //     </div>
      //     {/* End of example item */}
      //     <div className='flex justify-end'>
      //       <h1 className='text-xl'>total</h1>
      //     </div>

      //     <div className='flex justify-center '>
      //       <button className='h-[2rem] bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400  '>purchase</button>
      //       </div>
      //   </div>
      // </div>
      <>
      <CartMain   closeCart={handleCloseCart}/>
      </>
    )}
    </div>

  );
}

export default App;

