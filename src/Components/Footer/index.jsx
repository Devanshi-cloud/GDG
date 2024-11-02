import React from 'react'
import './Footer.css'
import { contactOptions,footer } from '../../sources'
import footerImage from '../../assets/realist-footer.png'
import Logo from '../../Commons/Logo'
import  SocialHandles  from '../../Commons/SocialHandles'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
        <div className="contact-option">
          {
            contactOptions.map((option,index)=>(
              <div className="flex-center option" key={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted title">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>
      </div>
      <div className="bottom-row">
        <div className="wrapper">
          <div className="column">
            <Logo/>
            <div className="footer-image">
              <img src={footerImage} alt="" />
            </div>
            <SocialHandles/>
          </div>
          {
            footer.map((list,index)=>(
              <div className="column" key={index}>
                <h3 className="muted title">{list.title}</h3>
                {
                  list.routes.map((route,i)=>(
                    <Link
                    to={route.id || ''}
                    smooth={true}
                    className='route'
                    key={i}
                    >
                    {route.name}
                    </Link>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className="copyright">
          <h4>Copyright &copy; All right reserved -| 2024</h4>
          <p className='muted'>Built with love by Devanshi Jaiswal</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer