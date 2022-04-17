import React from 'react'
import { FiCode } from 'react-icons/fi';
import './CalltoAction.css';

const CalltoAction = () => {
  return (
    <div className='cta-bg'>
        <div className="overlay"></div>
        <div className="container">
          <div className="cta-text">
            <FiCode />
            <h2>Are you ready to travel with us?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate quis veritatis, iste dignissimos dolorem minus ab nihil fugiat autem blanditiis natus molestias mollitia laborum molestiae. Voluptatum delectus inventore voluptas. Earum ratione quisquam, saepe quos tenetur dolorum similique? Quam, reprehenderit?</p>
            <a href="#" className='cta-btn'>Contact us</a>
          </div>
        </div>
    </div>
  )
}

export default CalltoAction