import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <div className="container">
        <section className='content-container'>
            <div className="content-left">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80" alt="Map" />
                </div>
            </div>
            <div className="content-right">
                <h2>Plan Ahead</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ducimus illum, minus aspernatur perspiciatis cum temporibus soluta unde est alias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, molestias praesentium! Nostrum maiores alias numquam ea, vitae ipsam suscipit dicta commodi et similique incidunt, dolore debitis enim eligendi fuga sed, perferendis placeat voluptatem voluptas nesciunt beatae culpa aut reiciendis? Ut!</p>
            </div>
        </section>
        <section className='content-container'>
            <div className="content-right">
                <h2>Travel</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ducimus illum, minus aspernatur perspiciatis cum temporibus soluta unde est alias.</p>
            </div>
            <div className="content-left">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Airport" />
                </div>
            </div>
        </section>
        <section className='content-container'>
            <div className="content-left">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="Forest traveling" />
                </div>
            </div>
            <div className="content-right">
                <h2>Experience</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ducimus illum, minus aspernatur perspiciatis cum temporibus soluta unde est alias.</p>
            </div>
        </section>
    </div>
  )
}

export default Content