import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"; 


function Navbar() {

  const [showLogin , setShowLogin] = useState(true)

  return (
    <>
       <nav className="navbar tops sticky-top navbar-expand-lg nav-custom py-3">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            BOXX
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(75, 21, 135)" className="bi bi-caret-down" viewBox="0 0 16 16">
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active navlink-custom" to="unboxings-from-customers">UNBOXINGS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlink-custom" to="contact-us">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlink-custom" to="mystery-box">MYSTERY BOXES</Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active navlink-custom" data-bs-toggle="modal" data-bs-target="#exampleModal" to="">LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* modal login */}

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content border-radius-custom bgLogin mx-auto bg-light">
            <div className="modal-header border-none d-flex justify-content-end">
              <Link to="" data-bs-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(75, 21, 135)" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </Link>
            </div>
            {showLogin ? (
              <div className="modal-body border-none">
                <h3 className=''>Welcome back</h3>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control border-radius-custom" id="floatingInput" placeholder="name@example.com"/>
                  <label htmlFor="floatingInput text-white">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control border-radius-custom" id="floatingPassword" placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className='btn text-white vs-btn' >login</button>
                <p className='cursor-pointer mt-3' onClick={() => setShowLogin(false)}>Don't have an Account?</p>
              </div>
            ) : (
              <div className="modal-body border-none">
                <h3 className=''>Register</h3>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control border-radius-custom" id="floatingInput" placeholder="boxx_user"/>
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control border-radius-custom" id="floatingInput" placeholder="name@example.com"/>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control border-radius-custom" id="floatingPassword" placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button className='btn text-white vs-btn' >sign up</button>
                <p className='cursor-pointer mt-3'  onClick={() => setShowLogin(true)}>Already have an Account?</p>
              </div>
              
            )}
            
            <div className="modal-footer border-none">
              <p>or continue with?</p>
              <Link to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(75, 21, 135)" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
              </Link>
              <Link to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(75, 21, 135)" className="bi bi-steam" viewBox="0 0 16 16">
                  <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/>
                  <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar