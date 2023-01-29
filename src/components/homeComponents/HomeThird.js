import React from 'react';
import { GiCompass } from 'react-icons/gi';
function HomeThird(props) {
  return (
    <main className="home-third container">
      <section className="third-des">
        <h1 className="third-header">
          custom colothes <br /> built only for you
        </h1>
        <p className="third-par">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </section>
      <section className="third-content">
        <article>
          <GiCompass />
          <h2>history</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </article>
        <article>
          <GiCompass />
          <h2>mission</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </article>
        <article>
          <GiCompass />
          <h2>Vission</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </article>
      </section>
    </main>
  );
}

export default HomeThird;
