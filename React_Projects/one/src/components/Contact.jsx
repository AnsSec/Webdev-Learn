import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>Contact
    <main>
        <h1>Contact Us</h1>

        <form>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Name'/>
            </div>

            <div>
                <label>Email</label>
                <input type="email" required placeholder='Email'/>
            </div>

            <div>
                <label>Message</label>
                <input type="text" required placeholder='Your Message'/>
            </div>
            
            <button type="submit">Send</button>
        </form>
    </main>
    </div>
  )
}

export default Contact;