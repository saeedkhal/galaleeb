import React from 'react';
import heroabout from '../../assets/images/aboutus.jpg';
function AboutSecond(props) {
  return (
    <main className="container">
      <section className="AboutSecond-content">
        <article>
          <img src={heroabout} alt="about" />
        </article>
        <article>
          <h2>our story</h2>
          <div className="hr"></div>
          <p>
            Dress stores are popular shopping destinations for people looking for stylish and comfortable clothing. One of the key offerings of many dress stores is the ability to customize dresses to meet the specific needs and preferences of individual customers. Whether you're looking for a summer dress or a winter dress, there's sure to be a style that suits you. In the summer, lightweight and breezy fabrics like cotton and linen are popular choices. These materials are breathable, making them ideal for hot weather. You can also opt for dresses with bright and bold patterns or prints that will help you stand out in the sun. Winter dresses, on the other hand, are typically made from heavier and more insulating materials like wool and velvet. These fabrics help to keep you warm and cozy during the cold months. You can also find winter dresses in darker and more neutral colors, perfect for the holiday season. Whether you're looking for a dress for a special occasion or just to wear on a casual day, the right dress store can help you find the perfect piece. With so many styles, materials, and customization options to choose from, you're sure to find a dress that you love.
          </p>
        </article>
      </section>
    </main>
  );
}

export default AboutSecond;
