const ProfileApoyar = () => {
  return (
    <div className='apoyar'>
      <p>Si te gusta lo que lees puedes apoyarme haciendo una donación con PayPal, de antemano gracias por su apoyo.</p>
      <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
        <input type='image' src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
      </form>
      <p className='cripto'>Puedes donar criptomonedas con: <br />
        <strong>TRX Tron red TRC20:</strong> <br />
        TDDmbLNFcjYsddsdiUAgxDDTaR5EarDbKo <br />
        <strong>BTC Bitcoin red BTC:</strong>  <br />
        1Bd849Xr3T3i9nn96uF2JuYhp98wZyod6Q
      </p>
      <q className='citaBible'>
      No hay un amor más grande que el dar la vida por los amigos. Juan 15:13
      </q>
      <style jsx>{`
        .apoyar {
          max-width: 700px;
          margin: 50px auto 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 2px solid #eeeeee;
          padding-top: 30px;
        }
        .apoyar p {            
          text-align: center; 
          font-size: 1.25rem;
          line-height: 1.5rem;
          border: none;
        }
        .apoyar .cripto {
          font-size: 1rem;
        }
        .citaBible {
          font-style: italic;
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}

export default ProfileApoyar
