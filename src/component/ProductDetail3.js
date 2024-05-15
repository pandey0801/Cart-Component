


import React from 'react';
// import Album2 from '../image/Album 2.png';
import Album3 from '../image/Album 3.png';


const ProductDetail3 = () => {
  // Dummy data for the product and reviews
  const product = {
    name: 'Album3',
    image: Album3,
    price: '$19.99',
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ',
  };

  const reviews = [
    { id: 1, user: 'User 1', rating: 4, review: 'Great product, highly recommend!' },
    { id: 2, user: 'User 2', rating: 5, review: 'Amazing quality, exceeded my expectations.' },
    { id: 3, user: 'User 3', rating: 3, review: 'Good product, but could be better.' },
  ];

  return (
    <div className="container w-[80rem] px-10 py-8 content-center">
      {/* Product Image */}
      <div className="mb-8">
        <img src={product.image} alt={product.name} className="w-[80rem] h-[35rem] rounded-lg shadow-lg" />
      </div>

      {/* Product Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-xl font-bold mb-2">{product.price}</p>
      </div>

      {/* Reviews */}
      <div>
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
        {reviews.map(review => (
          <div key={review.id} className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold mr-2">{review.user}</span>
              {[...Array(review.rating)].map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0c-.206 0-.398.079-.543.223l-4.4 4.4-2.4 7.2c-.093.278-.05.579.111.821a1.273 1.273 0 0 0 1.045.521h7.2l1.8 5.4c.093.279.275.507.521.646.245.139.534.178.802.107.268-.07.494-.217.646-.433l5-8c.164-.265.225-.584.163-.894-.061-.309-.231-.576-.487-.738l-7.2-5.4A1.2 1.2 0 0 0 10 0z"/>
                </svg>
              ))}
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default ProductDetail3;