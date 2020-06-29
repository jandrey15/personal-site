const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

async function fetchAPI (slug, { variables } = {}) {
  const type = variables.type // posts/slug
  const include = variables.include // include=authors,tags
  const res = await fetch(`${API_URL}/${type}/${slug}/?key=${API_KEY}&${include}`)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllPostsWithSlug () {
  const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&fields=slug`)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.posts
}

export async function getAllPostsForHome (preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              sourceUrl
            }
            author {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview
      }
    }
  )

  return data?.posts
}

export async function getPostSlug (slug) {
  const res = await fetch(`${API_URL}/posts/slug/${slug}/?key=${API_KEY}&include=authors,tags`)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  const { posts: post } = json

  if (post === undefined) {
    const resPage = await fetch(`${API_URL}/pages/slug/${slug}/?key=${API_KEY}&include=authors,tags`)
    const json = await resPage.json()
    // const pages = await resPage.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    // console.log('Is this page -> ', page)
    const { pages: page } = json

    return page[0]
  }

  return post[0]
}

export async function getMorePosts (slug) {
  const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=3&filter=featured:false%2Bslug:-${slug}&include=authors`)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  const { posts: morePost } = json

  return morePost
}
