import React from 'react'
import { Link } from 'react-router-dom'
import './style/component.css'

const Footer = () => {
  return (
    <>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '16rem', backgroundColor: '#973735'}}>
            <div className="first-line-footer mt-4">
                <Link className="" to="/">
                    <img src="https://tupine.engr.tu.ac.th/assets/front/img/logo/tupinelogo_White.png" alt="Logo" className="img-fluid" />
                </Link>
            </div>
            <hr className='container w-100 bg-secondary'/>
            <div className="p-2 text-light">
                <p>&copy; {new Date().getFullYear()} คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์</p>
            </div>
            <hr className='container w-100 bg-secondary'/>
        </div>
    </>
  )
}

export default Footer