import Head from 'next/head'
import { DEFAULT_SEO } from '../../config'

function Seo ({ children, title, titleOpenGraph, description, url, image, imagenFacebook, imagenTwitter, date, modified, type = 'article' }) {
  const addJSONLD = (title, description, url, image, date, modified) => {
    return {
      __html: `{
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${url}"
      },
      "headline": "${title}",
      "image": [
        "${image}"
      ],
      "datePublished": "${date}",
      "dateModified": "${modified}",
      "author": {
        "@type": "Person",
        "name": "John Serrano"
      },
      "publisher": {
        "@type": "Organization",
        "name": "JohnSerrano",
        "logo": {
          "@type": "ImageObject",
          "url": "https://johnserrano.co/default.jpg"
        }
      },
      "description": "${description}"
    }`
    }
  }

  title = title !== '' ? title : DEFAULT_SEO.title
  titleOpenGraph = titleOpenGraph !== '' ? titleOpenGraph : DEFAULT_SEO.openGraph.title
  description = description !== '' ? description : DEFAULT_SEO.description
  url = url !== '' ? url : DEFAULT_SEO.openGraph.url
  image = image !== '' ? image : DEFAULT_SEO.openGraph.image
  imagenFacebook = imagenFacebook !== '' ? imagenFacebook : DEFAULT_SEO.openGraph.image
  imagenTwitter = imagenTwitter !== '' ? imagenTwitter : DEFAULT_SEO.openGraph.image
  date = date !== '' ? date : '2015-09-15T15:49:50-05:00'
  modified = modified !== '' ? modified : ''
  type = type !== '' ? type : DEFAULT_SEO.openGraph.type

  return (
    <>
      <Head>
        <title>{title || 'John Serrano'}</title>

        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />

        <meta key='title' name='title' content={titleOpenGraph} />
        <meta key='description' name='description' content={description} />

        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='canonical' href={url} />

        {children}

        <meta
          key='twitter:card'
          name='twitter:card'
          content={DEFAULT_SEO.twitter.cardType}
        />
        <meta
          key='twitter:site'
          name='twitter:site'
          content={DEFAULT_SEO.twitter.handle}
        />
        <meta
          key='twitter:title'
          name='twitter:title'
          content={titleOpenGraph}
        />
        <meta
          key='twitter:description'
          name='twitter:description'
          content={description}
        />
        <meta key='twitter:url' name='twitter:url' content={url} />
        <meta name='twitter:image:src' content={imagenTwitter} />
        <meta key='og:url' property='og:url' content={url} />
        <meta key='og:type' property='og:type' content={type} />
        <meta
          key='og:title'
          property='og:title'
          content={titleOpenGraph}
        />
        <meta
          key='og:description'
          property='og:description'
          content={description}
        />
        <meta key='og:image' property='og:image' content={imagenFacebook} />
        <meta
          key='og:image:secure_url'
          property='og:image:secure_url'
          content={imagenFacebook}
        />
        <meta
          key='og:image:width'
          property='og:image:width'
          content={DEFAULT_SEO.openGraph.imageWidth}
        />
        <meta
          key='og:image:height'
          property='og:image:height'
          content={DEFAULT_SEO.openGraph.imageHeight}
        />
        <meta property='fb:pages' content='323137824476732' />
        <meta
          key='og:locale:alternate'
          property='og:locale:alternate'
          content='es_LA'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addJSONLD(
            title,
            description,
            url,
            image,
            date,
            modified
          )}
        />

      </Head>
    </>
  )
}

export default Seo
