import React from 'react';



function App() {
  return (
    <>
      <nav className='navbar bg-light shadow-sm p-3'>
        <div className='container-fluid '>
          <a className='navbar-brand text-center d-block d-sm-inline' href="/">Company name</a>
          <ul className='nav justify-content-end'>
            <li className='nav-item'>
              <a className='nav-link text-dark' href="/">Features</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href="/">Enterprise</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href="/">Support</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href="/">Pricing</a>
            </li>
            <a className='btn btn-outline-primary' href="/">Sign up</a>
          </ul>
        </div>
      </nav>
      <section className='price-header mx-auto text-center pt-5 px-5 '>
        <h1 className='price-title fw-light'>Pricing</h1>
        <p className='price-text fs-5 fw-light'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
      </section>
      <div className='container'>
        <div className='row mx-5 px-5'>
          <div className='col-md-6 col-lg-4 p-4'>
            <div className='card text-center'>
              <div className='card-header '>
                <h4 className='fw-normal'>Free</h4>
              </div>
              <div className='card-body'>
                <h1 className=' mt-2'>$0 <span className='text-muted fw-normal'>/ mo</span></h1>
                <p className='py-0 m-1'>10 users included</p>
                <p className='py-0 m-1'>2 GB of storage</p>
                <p className='py-0 m-1'>Email support</p>
                <p className='py-0 m-1'>Help center access</p>
                <button className='btn btn-outline-primary d-block w-100 btn-lg mt-3'>Sign up for free</button>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 p-4'>
            <div className='card text-center'>
              <div className='card-header '>
                <h4 className='fw-normal'>Pro</h4>
              </div>
              <div className='card-body'>
                <h1 className=' mt-2'>$15 <span className='text-muted fw-normal'>/ mo</span></h1>
                <p className='py-0 m-1'>20 users included</p>
                <p className='py-0 m-1'>10 GB of storage</p>
                <p className='py-0 m-1'>Priority email support</p>
                <p className='py-0 m-1'>Help center access</p>
                <button className='btn btn-primary d-block w-100 btn-lg mt-3'>Get started</button>
              </div>
            </div>
          </div>
          <div className='col-d-6 col-lg-4 p-4'>
            <div className='card text-center'>
              <div className='card-header '>
                <h4 className='fw-normal'>Enterprise</h4>
              </div>
              <div className='card-body'>
                <h1 className=' mt-2'>$29 <span className='text-muted fw-normal'>/ mo</span></h1>
                <p className='py-0 m-1'>30 users included</p>
                <p className='py-0 m-1'>15 GB of storage</p>
                <p className='py-0 m-1'>Priority email support</p>
                <p className='py-0 m-1'>Help center access</p>
                <button className='btn btn-primary d-block w-100 btn-lg mt-3'>Get started</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <footer className='my-5 border-top'>
        <div className='container'>
          <div className=' pt-5'>
            <div className='row '>
              <div className='col-md'>
                <img className='bootstrap-icon d-block' src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="bootstrap" />
                <span className='d-block py-2 text-muted'>© 2017-2018</span>
              </div>
              <div className='col-6 col-md'>
              <h5>Features</h5>
                <ul className='list-unstyled text-small'>
                  <li><a className='text-muted' href="/">Cool stuff</a></li>
                  <li><a className='text-muted' href="/">Random feature</a> </li>
                  <li><a className='text-muted' href="/">Team feature</a></li>
                  <li><a className='text-muted' href="/">Stuff for developers</a></li>
                  <li><a className='text-muted' href="/">Another one</a></li>
                  <li><a className='text-muted' href="/">Last time</a></li>
                </ul>
              </div>
              <div className='col-6 col-md'>
              <h5>Resources</h5>
                <ul className='list-unstyled text-small'>
                  <li><a href="/" className="text-muted">Resource</a></li>
                  <li><a href="/" className="text-muted">Resource name</a></li>
                  <li><a href="/" className="text-muted">Another resource</a></li>
                  <li><a href="/" className="text-muted">Final resource</a></li>
                </ul>
              </div>
              <div className='col-6 col-md'>
              <h5>About</h5>
                <ul className='list-unstyled text-small'>
                  <li><a href="/" className="text-muted">Team</a></li>
                  <li><a href="/" className="text-muted">Locations</a></li>
                  <li><a href="/" className="text-muted">Privacy</a></li>
                  <li><a href="/" className="text-muted">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
