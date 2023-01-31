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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </section>
    </main>
  );
}

export default AboutSecond;
