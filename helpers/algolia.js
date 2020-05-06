import algoliasearch from 'algoliasearch/lite'

const API_KEY_ALGOLIA = process.env.API_KEY_ALGOLIA
// Config algolia
const client = algoliasearch('ZKVB80BMVH', API_KEY_ALGOLIA)
const index = client.initIndex('instant_search_prod')

export default index
