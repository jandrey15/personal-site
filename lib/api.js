const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export async function getAllPostsWithSlug () {
  const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&fields=slug&limit=20`)

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.posts
}

export async function getAllPostsForBlog () {
  try {
    let [
      res,
      resPosts
    ] = await Promise.all([
      fetch(
        `${API_URL}/posts/?key=${API_KEY}&limit=1&filter=featured:true&include=authors`
      ),
      fetch(
        `${API_URL}/posts/?key=${API_KEY}&limit=5&filter=featured:false&include=authors`
      )
    ])

    let { posts: feature } = await res.json()

    let data = await resPosts.json()
    // console.log(data)

    if (data.errors) {
      console.error(data.errors)
      throw new Error('Failed to fetch API')
    }

    return { data, feature: feature[0] }
  } catch (err) {
    console.error(`Algo salio mal :( ${err}`)
    return {
      data: [],
      feature: false
    }
  }
}

export async function getPostSlug (slug) {
  try {
    const res = await fetch(`${API_URL}/posts/slug/${slug}/?key=${API_KEY}&include=authors,tags`)

    const json = await res.json()

    const { posts: post } = json

    if (!post) {
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
  } catch (err) {
    console.log(`Algo salio mal :( ${err}`)
    return false
  }
}

export async function getMorePosts (slug) {
  try {
    const res = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=3&filter=featured:false%2Bslug:-${slug}&include=authors`)

    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }

    const { posts: morePost } = json

    return morePost
  } catch (err) {
    console.log(`Algo salio mal :( ${err}`)
    return []
  }
}
