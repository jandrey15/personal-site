import Image from 'next/image'

export default function Pauta () {
  return (
    <div className='pautas'>
      <div className='pauta_d'>
        <a href='https://leanpub.com/fundamentos-de-programacin-con-javascript' target='_blank'>
          <Image
            className='feature_image'
            src='/ads_700x630.jpg'
            alt='Ebook'
            width={700}
            height={368}
          />
        </a>
      </div>
      <div className='pauta_m'>
        <a href='https://leanpub.com/fundamentos-de-programacin-con-javascript' target='_blank'>

          <Image
            className='feature_image_m'
            src='/ads_300x250.jpg'
            alt='Ebook'
            width={300}
            height={250}
          />
        </a>
      </div>
      <style jsx>{`
        .pauta_d {
          display: block;
        }

        .pauta_m {
          display: none;
        }      

        @media screen and (max-width: 768px) {
          .pauta_m {
            display: flex;
            justify-content: center
            align-items: center
          }
          .pauta_d {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
