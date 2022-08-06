import React from 'react';

function CeckCart(props) {
  return (
    <main className="ceckcart-container">
      <section>
        <article>
          <h5>
            subtotal : <span>452.97$</span>
          </h5>
          <div>
            shipping free : <span>452.97$</span>
          </div>
          <h2>
            order Total : <span>452.97$</span>
          </h2>
        </article>
        <button>Login</button>
      </section>
    </main>
  );
}

export default CeckCart;
