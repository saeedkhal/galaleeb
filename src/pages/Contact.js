import React from 'react';
import email from '../assets/images/sendEmail2.svg'
function Contact() {
    return (
        <main className='contact-form-container'>
            <section>
                <div className='contact-form'>
                    <article>
                        <label for='name'>Name</label>
                        <input placeholder='Name' />
                    </article>
                    <article>
                        <label for='name'>Email</label>
                        <input placeholder='Email' />
                    </article>
                </div>
                <div>
                    <article>
                        <label for='name'>Message</label>
                        <textarea cols='12222222' rows='5' placeholder='Message' />
                    </article>
                </div>
                <button>Send</button>
            </section>
            <section>
                <img width='70%' src={email} alt='email' />
            </section>
        </main>
    );
}

export default Contact;