import React from "react";
import heroabout from "../../assets/images/aboutus.jpg";
import { useNavigate } from "react-router-dom";
function AboutSecond() {
  const navigate = useNavigate();
  return (
    <main className="container">
      <section className="AboutSecond-content">
        <article>
          <h6>About Us</h6>
          <div className="hr"></div>
          <h2>Helping businesses deliver 
          <span class="doodle"> exceptional </span>
             buyer experiences .</h2>
          <p>
            Dress stores are popular shopping destinations for people looking
            for stylish and comfortable clothing. One of the key offerings of
            many dress stores is the ability to customize dresses to meet the
            specific needs and preferences of individual customers. Whether
            you're looking for a summer dress or a winter dress, there's sure to
            be a style that suits you. In the summer, lightweight and breezy
            fabrics like cotton and linen are popular choices. These materials
            are breathable, making them ideal for hot weather. You can also opt
            for dresses with bright and bold patterns or prints that will help
            you stand out in the sun. Winter dresses, 
          </p>
        </article>
        <article>
          <img src={heroabout} alt="about" />
        </article>
      </section>
      <button className="shop-now shop-btn" onClick={() => navigate('/Products')}>Shop</button>
    </main>
  );
}

export default AboutSecond;
