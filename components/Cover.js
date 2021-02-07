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
          padding-top: 12px;
          padding-bottom: 12px;
          color: #ffffff;
          height: 400px;
          /* width: 700px;
          margin: 0 auto;*/
          background: #eeeeee;
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
          width: 100%;
        }      
        @media screen and (max-width: 768px) {
          #Cover {
          }
        }
      `}</style>
    </section>
  )
}

export default Cover
