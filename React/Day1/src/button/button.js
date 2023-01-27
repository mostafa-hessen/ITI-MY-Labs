

       

import React from 'react';
function Button(props) {
  return (
    <>
    
    <a className={`btn btn-${props.type}`} href='' role='button'>
       {
       props.name
       }
    </a>
 
    </>

  );
}

export default Button;
