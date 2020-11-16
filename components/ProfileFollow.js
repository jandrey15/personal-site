const ProfileFollow = () => {
  return (
    <div className='follow'>
      <p>
        Soy <strong>John Serrano</strong>. <strong>Desarrollador Web Full-Stack</strong>. Entusiasta de las tecnologías web: JavaScript, Node.js, Docker, Firebase, React, etc. Me puedes encontrar en las siguientes redes sociales:
      </p>
      <ul className='follow__buttons'>
        <li><a href='https://www.facebook.com/johnserrano15' title='Facebook' target='_blank'><img alt='en Facebook' src='/follow/Facebook.svg' width='32' height='32' /></a></li>
        <li><a href='https://twitter.com/jandrey15' target='_blank' title='Twitter'><img alt='Twitter' src='/follow/Twitter.svg' width='32' height='32' /></a></li>
        <li><a href='https://github.com/johnsi15' target='_blank' title='GitHub'><img alt='GitHub' src='/follow/Github.svg' width='32' height='32' /></a></li>
        <li><a href='https://www.linkedin.com/in/jandreys15' target='_blank' title='LinkedIn' ><img alt='LinkedIn' src='/follow/LinkedIn.svg' width='32' height='32' /></a></li>
      </ul>
      <style jsx>{`
        .follow {
          max-width: 700px;
          margin: 50px auto 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.25rem;
          border-top: 2px solid #eeeeee;
          padding-top: 30px;
        }
        .follow p {
          border: none;
          line-height: 1.5rem;
        }

        ul.follow__buttons {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-evenly;
          max-width: 190px;
          width: 100%;
        }

        ul.follow__buttons li{
          display: inline;
        }
        ul.follow__buttons img{
          width: 32px;
        }
      `}</style>
    </div>
  )
}

export default ProfileFollow
