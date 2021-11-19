import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="contact">
                <div className="con-details">
        
                <h4>+0789123567</h4>
             
                <h4>info@emaildomain.com </h4>
                </div>
                <div className="con-icons">
                

                <i class="fab fa-facebook" style={{color:'white'}}></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
                </div>
                   
            </div>
            <div className="nav-bar">
                <div className="logo">
                    <h3>LOGO BEAUTY</h3>
                </div>
                     <div className="nav-opts">
                         <ul className="nav-ul">
                             <li className="home"> Home  </li>
                             <li>About us</li>
                             <li>Services</li>
                             <li>Our Team</li>
                             <li>Contact us</li>
                             <li>Testimonials</li>
                         </ul>
                     </div>
                         <div className="btn">
                             <button>VIRTUAL CONSULTATION</button>
                            
                         </div>
            </div>
        </div>
    )
}

export default Header
