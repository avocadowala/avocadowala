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
      <p>At Avocado Wala, we believe that avocados aren’t just a food—they’re a lifestyle. Whether you're a lifelong fan or a newcomer to the creamy, nutrient-packed goodness, our menu is crafted to showcase the versatile superfood in all its glory. From fresh guacamole and delicious avocado toasts to bold, innovative dishes that put a modern spin on classic flavors, we’re here to make every bite an adventure.
Our passion for fresh, sustainable ingredients drives us to provide the highest quality meals, made from locally sourced produce and crafted with love. Whether you’re in the mood for a light snack, a hearty lunch, or a flavorful dinner, there’s something on our menu that will satisfy your cravings.
Join us for a truly unique dining experience where vibrant flavors meet wholesome goodness. Celebrate the beauty of the avocado with us today!</p>
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
