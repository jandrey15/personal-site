import Image from 'next/image'

export default function Pauta () {
  return (
    <div className='pautas'>
      <div className='pauta_d'>
        <a href='https://pay.hotmart.com/O67718482D' target='_blank'>
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
        <a href='https://pay.hotmart.com/O67718482D' target='_blank'>

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
