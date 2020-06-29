const ProfileApoyar = () => {
  return (
    <div className='apoyar'>
      <p>Si te gusta lo que lees puedes apoyarme haciendo una donación con PayPal, de antemano gracias por su apoyo.</p>
      <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
        <input type='image' src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' />
      </form>
      <style jsx>{`
        .apoyar {
          max-width: 700px;
          margin: 50px auto 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.25rem;
          border-top: 2px solid #eeeeee;
          padding-top: 30px;
        }
        .apoyar p {            
          text-align: center; 
          line-height: 1.5rem;
          border: none;
        }  
      `}</style>
    </div>
  )
}

export default ProfileApoyar
