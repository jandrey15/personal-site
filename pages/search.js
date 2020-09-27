import Layout from '../components/Layout'
import Posts from '../components/PostsGrid'
import Seo from 'components/Seo'

import useSearchPage from '../hooks/useSearchPage'

const SearchPage = () => {
  const { state, onChange } = useSearchPage()

  let SEO = {
    title: `${state.search} - John Serrano`,
    description: '',
    image: '',
    url: `https://johnserrano.co/search`,
    titleOpenGraph: '',
    date: '',
    modified: '',
    imagenFacebook: '',
    imagenTwitter: '',
    type: 'article'
  }

  return (
    <Layout>
      <Seo {...SEO} />
      <section id='SearchPage'>
        <div className='searcher__container'>
          <form className='search__form'>
            <input type='text' value={state.search} placeholder='Buscar...' onChange={onChange} />
          </form>
        </div>

        <div className='results'>
          {state.loading && <p className='loading'>Loading...</p>}

          {state.data.length >= 1 && (
            <Posts posts={state.data} columns='3' />
          )}

          {state.search.length >= 3 && state.data.length <= 0 && !state.loading && <p className='search_not_found'>No se encontraron resultados para la búsqueda.</p>}
        </div>

        <style jsx>{`
          #SearchPage {
            flex: 1;
          }
          .searcher__container {
            box-shadow: 0 2px 4px 0 rgba(207,207,207,0.5);
            padding: 1.5em;
            z-index: 2;
          }
          .search__form {
            margin: 0 auto;
            position: relative;       
            width: 400px;
          }

          .search__form input {
            border-radius: 5px;
            border: 1px solid #0078ae;
            height: 35px;
            color: #1c1c1c;
            margin: 0;
            padding: 0 50px 0 10px;
            border-radius: 5px 5px 0;
            box-sizing: border-box;
            transition: all .2s ease-out;       
            width: 100%;
          }
          .search__form:before {
            content: "";
            background: #0078ae url('/lupa.svg') center/20px no-repeat;
            height: 35px;
            position: absolute;
            top: 0;
            right: 0;
            width: 50px;
          }
          .search__form input:focus {
            box-shadow: 0 0 10px 0px rgba(28, 28, 28, 0.33);
            outline: none;
          }
          .loading, .search_not_found {
            margin: 30px auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 50vh;
          }
          .results {
            display: flex;
            justify-content: center;
            align-items: center;           
            flex-direction: column;
            padding-top: 50px;
          }
          @media screen and (max-width: 768px) {
            .search__form {
              width: 100%;
            }
            .results {
              margin: 0 auto;
              padding-top: 0;
              width: 96%;
            }
          }
        `}</style>
      </section>
    </Layout>
  )
}

export default SearchPage
