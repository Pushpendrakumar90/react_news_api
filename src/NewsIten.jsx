import React from 'react'
import { Link } from 'react-router-dom'
import './styles/newsIten.css'


function NewsIten(props) {
  return (
    <>
      <div className='col-md-4 col-xl-3 col-sm-6 col-lg-6'>

        <div className="card abc" >
         <Link to={props.source} target='_blank'><img src={props.pic} className="card-img-top" alt='imag' style={{ height: '150px'}}></img></Link>
          <div className="card-body ">
            <h5 className="card-title"> {props.pub}</h5>
            <p className="card-text ">{props.dis}</p>
            <Link to={props.source} target='_blank' className=" text-primary fs-3 text-center p-3 pt-4" title='go to page' ><i className="bi bi-arrow-right-short bg-warning rounded" ></i></Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default NewsIten
