import Link from 'next/link'
import PostTitle from './PostTitle'

const ProfileHome = ({ title }) => {
  return (
    <>
      <Link href='/'>
        <a className='profile'>
          <img className='profile__avatar' src='/profile.jpg' alt='Profile' />
        </a>
      </Link>
      <PostTitle>{title}</PostTitle>
      <p>Desarrollador Web Full-Stack</p>
      <style jsx>{`
        .profile .profile__avatar {
          border-radius: 50%;
          max-width: 120px;
          border: 3px solid #ffffff;
          width: 120px;
          height: 120px;
          background: #ffffff17;
        }
        
        p {
          font-size: 2rem;
          line-height: 2.5rem;
          text-align: center;
          font-weight: 700;
          margin: 0;
          text-shadow: -1px 1px 2px #1c1c1c;
        }
      `}</style>
    </>
  )
}

export default ProfileHome
