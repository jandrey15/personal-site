const Cover = ({ children, cover = '/background.jpg' }) => {
  return (
    <section id='Cover'>
      {children}
      <style jsx>{`
        #Cover {
          position: relative;
          padding-top: 12px;
          padding-bottom: 12px;
          color: #ffffff;
          height: 400px;
          background: #090a0b no-repeat 50%;
          background-image: url(${cover.replace('admin', 'static')});
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
        #Cover .category {
          max-width: 700px;
          margin: 20px auto 0;
          text-align: center;
          font-size: 1.2rem;
          text-transform: capitalize;
          font-weight: 700;
        }
        #Cover .category a {
          text-decoration: none;
          color: #ffffff;
          text-align: center;
          transition: .2s; 
          border: 1px solid #0078ae;
          padding: 3px 10px;
          border-radius: 10px;
        }
        #Cover .category a:hover {
          opacity: 0.8;
        }
        #Cover .profile__post span {
          font-size: 1.2rem;
          line-height: 1.5rem;
        }
        #Cover .profile__post {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 60px;
          width: 330px;
        }
        #Cover .profile__post .profile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 155px;
        }
        #Cover .profile__post .profile_avatar {
          height: 35px;
          border: 2px solid #ffffff;
          border-radius: 100%;
          display: block;
          width: 35px;
        }
        #Cover .profile__post .profile__image {
          border-radius: 100%;
          object-fit: cover;
          display: block;
          width: 100%;
          height: 100%;
          background: #e3e9ed;
        }

        @media screen and (max-width: 768px) {
          #Cover {
            background-position: left center;
          }
          #Cover .profile__post {
            margin-top: 20px;
            width: 100%;
          }
          #Cover .profile__post .profile {
            justify-content: center;
          }
          #Cover .profile__post span {
            margin-left: 10px;
            font-size: 1rem;
            line-height: 1.2rem;
          }
          #Cover .category {
            margin-top: 30px;
          }
          .inner h1 {
            font-size: 3rem;
            line-height: 3.2rem;
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default Cover
