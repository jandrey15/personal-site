const Cover = ({ children, cover, url }) => {
  let urlM
  // if (url) {
  //   urlM = url.replace('h_1000', 'h_425')
  //   urlM = urlM.replace('w_1920', 'w_380')
  // }

  return (
    <section id='Cover'>
      <div className='inner'>
        {children}
      </div>
      <style jsx>{`
        #Cover {
          position: relative;
          color: #ffffff;
          height: auto;
          padding: 50px 0;
          /* width: 700px;
          margin: 0 auto;*/
          background: #0078ae;
          /* border-radius: 5px; */
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;  
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        #Cover:before {
          
        }
        .inner {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 11;
          width: 1000px;
        }      
        @media screen and (max-width: 768px) {
          #Cover {
            padding: 0 0 35px;
          }
          .inner { 
            width: 96%;
          }
        }
      `}</style>
    </section>
  )
}

export default Cover
