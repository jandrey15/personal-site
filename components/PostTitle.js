const PostTitle = ({ children, capitalize, flex }) => {
  return (
    <h1 className={capitalize ? 'capitalize' : undefined}>
      {children}
      <style jsx>{`
        h1 {
          font-size: 3.75rem;            
          line-height: 3.5rem;
          font-weight: 700;
          margin: 20px 0;
          /* text-shadow: -1px 1px 2px #1c1c1c; */
          text-align: center;
          color: #1c1c1c;
          ${flex ? `flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;` : ''}
        }
        .capitalize {
          text-transform: capitalize;
        }
        @media screen and (max-width: 768px) {
          h1 {
            font-size: 3rem;
            line-height: 3.2rem;
            width: 100%;
          }
        }  
      `}</style>
    </h1>
  )
}

export default PostTitle
