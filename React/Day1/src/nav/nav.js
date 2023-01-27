// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

// export default function Nav() {
//   return (
//     <>

//     <MDBProgress>
//       <MDBProgressBar width={75} valuemin={0} valuemax={100} />
//     </MDBProgress>
//     <MDBCard>
//       <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href='#'>Button</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     </>

//   );
// }


import React from 'react'
import './nav.css'

function Nav() {
  return (
    //  <>
     
     <nav className="navbar navbar-expand-lg navbar-light  p-2">
         {/* Container wrapper        */}
    <div className ="container">
           {/* Toggle button        */}
      <a className="navbar-brand" href="#"  style={{color: '#fff'}}>Bebo</a>
  
           {/* Toggle button        */}
      <button
        className="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{color: '#fff'}}
      >
        <i className ="fas fa-bars"></i>
      </button>
  
           {/* Collapsible wrapper        */}
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        // mdbCollapse
        // #basicNavbar="mdbCollapse"
      >
             {/* Left links        */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a className="nav-link active"  style={{color: '#fff'}}aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  style={{color: '#fff'}} href="#">Link</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link  "style="color: #fff;" href="#" tabindex="-1" aria-disabled="true"
              >Disabled</a
 >
          </li> */}
        </ul>
             {/* Left links        */}
  
             {/* Search form        */}
 
      </div>
      
           {/* Right elements        */}
      <div className="d-flex align-items-center">
             {/* Icon        */}
        <a className="text-reset me-3" style={{color: '#fff'}} href="#">
          <i className="fas fa-shopping-cart" style={{color: '#fff'}}></i>
        </a>
  
             {/* Notifications        */}
        <div className="dropdown">
          <a
          style={{color: '#fff'}}
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          
        </div>
             {/* Avatar        */}
        <div className="dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
        {/* <div   className="img rounded-circle"
        //  style={{height: '30px',width:'30px',overflow: 'hidden',
        //     backgroundImage: url('../../assets/images/WhatsApp\ Image\ 2022-12-22\ at\ 21.01.26.jpeg'), backgroundSize: 'cover',
        //     backgroundPosition:'center' 
        // }}
        >mn
            </div> */}
          </a>
          
        </div>
      </div>
           {/* Right elements        */}
    </div>
  </nav>
        

     
    //  </>
  )
}

export default Nav