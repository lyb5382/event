import React from 'react'
import('./css/Contect.css')

const Contect = () => {
  const contactList = [
    { type: "Email", value: "yourname@example.com" },
    { type: "Phone", value: "010-1234-5678" },
    { type: "GitHub", value: "github.com/yourname" }
  ];
  return (
    <section className='contect'>
      <div className='t-wrap'>
        <h1>Contect title</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis?</p>
        <ul className='lists'>
          {contactList.map(({ type, value }, i) => (<li key={i}>{type} : {value}</li>))}
        </ul>
      </div>
    </section>
  )
}

export default Contect