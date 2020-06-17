import Link from 'next/link'
import useSearch from '../hooks/useSearch'

const Search = () => {
  const { state, onChange, handleSubmit } = useSearch()

  const { search, data, loading } = state
  // console.log('This is state the component -> ', state)

  return (
    <div id='Search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input type='text' value={search} placeholder='Buscar' onChange={onChange} />
        <button type='submit' />
      </form>
      {search.length >= 3 && data.length >= 1 && (
        <div className='search__results'>
          {data.map(({ id, title, slug }) => {
            return (
              <article className='post-item' key={id}>
                <Link prefetch href={`/post?slug=${slug}`} as={`/blog/${slug}`}>
                  <a className='title'>{title}</a>
                </Link>
              </article>
            )
          })}
        </div>
      )}

      {search.length >= 3 && data.length <= 0 && !loading && (
        <div className='search__results'>
          <div className='search__noResults'>
            <span>No tenemos resultados</span>
          </div>
        </div>
      )}

      <style jsx>{`
        #Search {
          position: relative;
          width: 280px;
        }
        .search__results {
          position: absolute;
          top: 100%;
          right: 0;
          background: #ffffff;
          box-shadow: 0 10px 20px 0 rgba(0,0,0,0.22);
          padding: 12px 14px;
          max-width: 100%;
          box-sizing: border-box;
          overflow: auto;
          width: 100%;
          z-index: 50;
        }

        .search__form {
          display: grid;
          grid-template-columns: 1fr auto;
        }
        .search__form input {
          outline: none;
          border: 1px solid #eeeeee;
          border-radius: 2px 0 0 2px;
          color: #1c1c1c;
          padding: 5px;
        }

        .search__form button {
          background: #0078ae url('/static/lupa.svg') center/20px no-repeat;
          height: 100%;
          border: 1px solid #0078ae;
          border-radius: 0 2px 2px 0;
          cursor: pointer;
          padding: 0;
          width: 45px;
        }

        .search__form button a {
          display: block;
          height: 100%;
        }

        .post-item {
          margin-bottom: 10px;
        }

        .title {
          text-decoration: none;
          color: #1c1c1c;
        }
        .title:hover {
          opacity: 0.9;
          color: #0078ae;
        }

        @media screen and (max-width: 768px) {
          #Search {
            margin-right: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default Search
