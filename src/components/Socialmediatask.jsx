import React from 'react'

const wrapper= { position: 'absolute',
  left: '50%',
  top: '75%',
  transform: 'translate(-50%, -50%)',
  animation: 'fadeIn 1000ms ease',
};

const h1style= {
  fontsize: '50px',
  fontfamily: "Poppins",
  marginbottom: 0,
  lineheight: 1,
  fontweight: 700,
}

function socialmedia() {

  document.title="K3hrms · Social Media";

  return (
    <>
      <div className="wrapper" style={wrapper}>
        <h1 style={h1style}>coming soon.</h1>
    
   </div></>
  )
}

export default socialmedia;