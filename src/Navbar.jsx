import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  let [q, setQ] = useState('');
  let [language] = useState('en');
  // let [searchParam] = useSearchParams();
  let navigate = useNavigate();

  function subform(e) {
    e.preventDefault()
      navigate(`/?q=${q}&language=${language}`)
  }
  function handlePost(e) {

    setQ(e)
  }



  return (
    <>
      {/* this is my navbar code last tag nav end-- */}
      <nav className="navbar navbar-expand-lg bg-danger sticky-top">
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to={`/?q=all&language=${language}`}>NEWs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"><i className="bi bi-list"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to={`/?q=all&language=${language}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link {q===sports? 'active' : ''} text-white" to={`/?q=sports&language=${language}`}>Sport</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={`/?q=entertainment&language=${language}`}>entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={`/?q=cricket&language=${language}`}>cricket</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={`/?q=crime&language=${language}`}>crime</Link>
              </li>

              <li className="nav-item dropdown text-white">
                <Link className="nav-link dropdown-toggle text-white" to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={`/?q=all&language=hi`}>Hindi</Link></li>
                  <li><Link className="dropdown-item" to={`/?q=all&language=en`}>English</Link></li>
                </ul>
              </li>
               <li className="nav-item">
                <Link className="nav-link text-white text-decoration-underline" target='_blank' to='https://epaper.aajtak.in/'>e-paper</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={`/country`}>getCountry app</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white"target='_blank' to={`https://pushpendrakumar90.github.io`}>portfolio</Link>
              </li>

            </ul>
            <form className="d-flex" role="search" name='myform' onSubmit={(e) => subform(e)}>
              <input className="form-control me-2" onChange={(e) => handlePost(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
