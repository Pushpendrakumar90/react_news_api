import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    return (
        <>
            <div className='container'>
                <div className="row d-flex flex-column fixed-top g-1 " style={social}>
                    <div className="col-2 px-3 fs-3"><Link to='https://www.instagram.com' target='_blank'><i className="bi bi-instagram"></i></Link></div>
                    <div className="col-2 px-3 fs-3"><Link to='https://www.twitter.com' target='_blank'><i className="bi bi-twitter"></i></Link></div>
                    <div className="col-2 px-3 fs-3"><Link to='https://www.youtube.com' target='_blank'><i className="bi bi-youtube"></i></Link></div>
                    <div className="col-2 px-3 fs-3"><Link to='https://www.whatsapp.com' target='_blank'><i className="bi bi-whatsapp"></i></Link></div>
                    <div className="col-2 px-3 fs-3"><Link to='https://www.facebook.com' target='_blank'><i className="bi bi-facebook"></i></Link></div>
                    <div className="col-2 px-3 fs-3"><Link to='https://web.whatsapp.com/' target='_blank'><i className="bi bi-telegram"></i></Link></div>
                </div>
            </div>

        </>
    )
}

export default SocialMedia
let social = {
    marginTop: '36vh'
}
