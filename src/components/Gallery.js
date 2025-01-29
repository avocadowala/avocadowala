import React from 'react';
import './Gallery.css';  // Add styles for the gallery

const foods = [
  { id: 1, src: './assets/toast.jpg', alt: 'Avocado Toast' },
  { id: 2, src: './assets/salad.jpg', alt: 'Avocado Tomato Salad' },
  { id: 3, src: './assets/sourdough.jpg', alt: 'Avocado Sandwiches' },
  { id: 4, src: './assets/gua.jpg', alt: 'Avocado Guacamole' },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Avocado Wala</h2>
      <div className="gallery-container">
        {foods.map(food => (
          <div key={food.id} className="gallery-item">
            <img src={food.src} alt={food.alt} />
            <h3>{food.alt}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
