import React from 'react'

const Head = () => {
  return (
   <>
   <section className="head">
    <div className="container f_flex">
        <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor=''> Call Us for Inquires +91 1234567890</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor=''> Email Us for Details ninoteam@gmail.com</label>
        </div>
        <div className="right row RText">
            <label> Theme FAQ's</label>

            <label> Support</label>

            <label> Account</label>

            <label> Wishlist</label>
            
        </div>
    </div>
    </section>
   </>
  )
}

export default Head
