import algoliasearch from 'algoliasearch/lite'

const API_KEY_ALGOLIA = process.env.NEXT_PUBLIC_API_KEY_ALGOLIA
// console.log('this is api key ' + API_KEY_ALGOLIA)
// Config algolia
const client = algoliasearch('ZKVB80BMVH', API_KEY_ALGOLIA)
const index = client.initIndex('instant_search_prod')

export default index
