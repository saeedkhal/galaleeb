import React, { useState } from 'react';
import { useAlert } from 'react-alert'
function HomeForth() {
  const alert = useAlert()

  const [emailBody, setEmailBody] = useState('');

  const sendEmail = async (to, subject, text) => {
    const data = { to, subject, text }
    try {
      const response = await fetch('./.netlify/functions/hello', {

        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
      });

      const resonseJson = await response.json(); // parses JSON response into native JavaScript objects
      alert.success('message sent suucefuly')

    } catch (err) {
      alert.error('Internal server error')
      console.log(err)
    }
  }

  return (
    <main className="forth-container container">
      <h1>Join our newsletter and get 20% off</h1>
      <section className="forth-content">
        <p className="forth-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <article className="inputs">
          <input value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder="Enter Message" />
          <button
            onClick={() => sendEmail('saeed55khaled@gmail.com', 'e-commerce', emailBody)}
          >
            Contact
          </button>
        </article>
      </section>
    </main >
  );
}

export default HomeForth;
