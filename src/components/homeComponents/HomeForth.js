import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useContextProvider } from '../../context/context';
function HomeForth() {
  const alert = useAlert();
  const { user } = useContextProvider();

  const [emailBody, setEmailBody] = useState('');

  const sendEmail = (e) => {
    if (!user?.email) {
      return alert.error('please Log in first')
    }
    if (!emailBody.trim()) {
      return alert.error('please provide amessage')

    }
    var data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        'message': emailBody,
        'sender_name': user?.displayName,
        'sender_email': user?.email
      }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {

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
    }).then(function () {
      alert.success('Your mail is sent!');
    }).catch(function (error) {
      alert.error('Oops... ' + JSON.stringify(error));
    });

  };

  return (
    <main className="forth-container container">
      <h1>Contact us </h1>
      <section className="forth-content">
        <p className="forth-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <article className="inputs">

          <input value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder="Enter Message" />
          <button
            onClick={sendEmail}
          >
            Contact
          </button>
        </article>
      </section>
    </main>
  );
}

export default HomeForth;
