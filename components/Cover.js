const Cover = ({ children, cover, url }) => {
  let bgm
  if (cover === '/background_2.jpg') {
    // bgm = '/background_2m.jpg'
    bgm = 'https://res.cloudinary.com/john-serrano/image/upload/v1602534065/John%20Serrano/background_2m_dbykph.jpg'
  } else if (cover === '/background.jpg') {
    // bgm = '/background_m.jpg'
    bgm = 'https://res.cloudinary.com/john-serrano/image/upload/v1602534064/John%20Serrano/background_m_turhv7.jpg'
  }

  return (
    <section id='Cover'>
      <div className='inner'>
        {children}
      </div>
      <style jsx>{`
        #Cover {
          position: relative;
          padding-top: 12px;
          padding-bottom: 12px;
          color: #ffffff;
          height: 400px;
          background: #090a0b no-repeat 50%;
          background-image: url(${url || cover.replace('admin', 'static')});
          background-size: cover;          
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        #Cover:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          z-index: 10;
          display: block;
          bottom: 0;
          background: rgba(28, 28, 28, .55);
        }
        .inner {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 11;
          width: 100%;
        }      
        @media screen and (max-width: 768px) {
          #Cover {
            background-position: left center;
            background: #090a0b no-repeat 50%;
            background-image: url(${bgm || cover.replace('admin', 'static')});
            background-size: cover;  
          }
        }
      `}</style>
    </section>
  )
}

export default Cover
