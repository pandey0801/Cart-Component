
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa'; // Import icons from react-icons
import Album1 from '../image/Album 1.png';
import Album2 from '../image/Album 2.png';
import Album3 from '../image/Album 3.png';
import Album4 from '../image/Album 4.png';
import { Context } from '../store/Context';

function Store() {
  const { addCart } = useContext(Context);

  const handleAddToCart = (itemName, itemPrice) => {
    addCart(itemName, itemPrice);
  };

  return (
    <>
      <div className="bg-slate-400 h-48 flex justify-center items-center">
        <h1 className='text-4xl text-white font-serif font-bold'>The Generics</h1>
      </div>

      <div className='bg-white h-20 flex justify-center items-center'>
        <h1 className='text-xl'>Music</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4">
        <div className='text-center text-lg font-bold'>
          <Link to="/store/1">Album 1</Link>
          <img className='p-4 mx-auto' src={Album1} alt="Album 1" />
          <div className="flex justify-between items-center m-4">
            <h1>$12.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={() => handleAddToCart("album1", 12.99)}>Add To Cart</button>
          </div>
        </div>

        <div className='text-center text-lg font-bold'>
          <Link to="/store/2">Album 2</Link>
          <img className='p-4 mx-auto' src={Album2} alt="Album 2" />
          <div className="flex justify-between items-center m-4">
            <h1>$14.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={() => handleAddToCart("album2", 14.99)}>Add To Cart</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-4">
        <div className='text-center text-lg font-bold'>
          <Link to="/store/3">Album 3</Link>
          <img className='p-4 mx-auto' src={Album3} alt="Album 3" />
          <div className="flex justify-between items-center m-4">
            <h1>$9.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={() => handleAddToCart('album3', 9.99)}>Add To Cart</button>
          </div>
        </div>

        <div className='text-center text-lg font-bold'>
          <Link to="/store/4">Album 4</Link>
          <img className='p-4 mx-auto' src={Album4} alt="Album 4" />
          <div className="flex justify-between items-center m-4">
            <h1>$19.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={() => handleAddToCart("album4", 19.99)}>Add To Cart</button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center h-40'>
        <button className='bg-slate-500 text-white px-2 py-4 rounded border-2 border-blue-600'>See the cart</button>
      </div>

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
  );
}

export default Store;
