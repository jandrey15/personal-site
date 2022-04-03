import Image from 'next/image'

export default function Pauta () {
  return (
    <div className='pautas'>
      <div className='pauta_d'>
        <a href='https://www.clickam.com.co/url/eeteikdyed' target='_blank'>
          <Image
            className='feature_image'
            src='/movies_d.jpg'
            alt='Movies shop'
            width={700}
            height={1244}
          />
        </a>
      </div>
      <div className='pauta_m'>
        <a href='https://www.clickam.com.co/url/eeteikdyed' target='_blank'>

          <Image
            className='feature_image_m'
            src='/movies_m.jpg'
            alt='Movies shop'
            width={300}
            height={533}
          />
        </a>
      </div>
      <style jsx>{`
        .pauta_d {
          display: block;
          max-width: 700px;
          margin: 0 auto;
        }

        .pauta_m {
          display: none;
        }      

        @media screen and (max-width: 768px) {
          .pauta_m {
            display: flex;
            justify-content: center
            align-items: center;
            max-width: 300px;
            margin: 0 auto;
          }
          .pauta_d {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
