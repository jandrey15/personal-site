import { useState, useEffect } from 'react'
import algoliasearch from 'algoliasearch/lite'
import Layout from '../components/Layout'
import Posts from '../components/PostsGrid'

const Search = () => {
  const API_KEY_ALGOLIA = process.env.API_KEY_ALGOLIA

  const client = algoliasearch('ZKVB80BMVH', API_KEY_ALGOLIA)
  const index = client.initIndex('instant_search')

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    index.search(search).then(({ hits }) => {
      // console.log(hits)
      setLoading(false)
      setData(hits)
    })
  }, [search])

  return (
    <Layout>
      <section id='Search'>
        <h3>Hola mundo search</h3>

        <form className='search'>
          <input type='text' placeholder='Buscar' onChange={(e) => setSearch(e.target.value)} />
          <p>The word is - {search} </p>
        </form>

        {loading && <p>Loading...</p>}

        {data.length <= 0 && !loading && <p>No se encontraron resultados para la búsqueda.</p>}

        <Posts posts={data} columns='3' />

      </section>
    </Layout>
  )
}

export default Search
