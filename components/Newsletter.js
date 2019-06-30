import React, { Fragment, Component } from 'react'
import Reaptcha from 'reaptcha'

class Newsletter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 0,
      message: '',
      token: null
    }

    this.captcha = null
  }

  setInputName = element => {
    this.name = element
  }

  setRefEmail = element => {
    this.email = element
  }

  // SetRefRecaptcha = element => {
  //   this.recaptcha = element
  // }

  validateEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  onVerify = token => {
    // console.log('token -> ', token)
    if (this.name.value !== '' && this.email.value !== '') {
      if (this.validateEmail(this.email.value)) {
        fetch(`/api/contact`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email.value,
            firstName: this.name.value,
            'g-recaptcha-response': token
          })
        })
          .then(res => res.json())
          .then(data => {
            // console.info(data)
            this.setState({
              status: data.status,
              message: data.message
            })

            if (data.status !== 200) {
              this.captcha.reset()
            }
            // document.getElementById('formContactenos').reset()
          })
          .catch(err => {
            if (err) console.log(`Error ${err}`)
          })
      } else {
        this.setState({
          message: 'Email inválido.'
        })
        this.captcha.reset()
      }
    } else {
      this.setState({
        message: 'Debes completar los campos.'
      })
      this.captcha.reset()
    }
  }

  render () {
    return (
      <section id='Newsletter'>
        <h3>¿Te gusta lo que lees?</h3>
        <span>Suscríbete</span>
        {/* <p>Desarrollador web Full-Stack y apasionado de JavaScript</p> */}
        {this.state.status === 200 || this.state.status === 500 ? (
          <p className='message'>{this.state.message}</p>
        ) : (
          <Fragment>
            <div className='newsletter'>
              {/* <input type='email' placeholder='Email' required />
                <button>Suscribirme</button> */}
              <input
                type='text'
                name='firstName'
                placeholder='Nombres'
                required
                ref={this.setInputName}
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                required
                ref={this.setRefEmail}
              />

              <button
                id='enviar'
                className='enviar'
                type='submit'
                onClick={() => {
                  this.captcha.execute()
                }}
              >
                Suscribirme
              </button>

              <Reaptcha
                ref={e => (this.captcha = e)}
                sitekey='6LevYasUAAAAAMRZG-0BZOlKBo0oFX4rJBvIXWbe'
                onVerify={this.onVerify}
                size='invisible'
                hl='es-419'
              />

              <aside className='messageRequest'>{this.state.message}</aside>
            </div>
          </Fragment>
        )}
        <style jsx>{`
          #Newsletter {
            background: #eaeaea;
            padding: 30px 20px;
            border-radius: 5px;
            width: 500px;
            margin: 70px auto 80px;
          } 
          p {
            font-size: 1.3rem;
            line-height: 1.6rem;
            text-align: center;
            margin: 15px 0 0;
          }
  
          h3 {
            text-align: center;
            font-size: 1.5rem;
            line-height: 1.9rem;
            margin: 0;
          }
          span {
            text-align: center;
            font-size: 1.5rem;
            line-height: 1.9rem;
            font-weight: 700;
            margin: 0 auto;
            display: block;
          }
  
          .newsletter {
            margin: 20px 0 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            position: relative;
          }
  
          .newsletter input {
            border: none;
            border-radius: 2px;
            border: 1px solid #444444;
            outline: none;
            padding-left: 10px;
            box-sizing: border-box;
            height: 40px;
            transition: .2s;
            width: 220px;
          }
  
          .newsletter input:focus {
            border-color: #0078ae;
          }
  
          .newsletter button {
            margin: 20px auto 0;
            height: 40px;
            width: 150px;
            border: none;
            color: #ffffff;
            border-radius: 2px;
            cursor: pointer;
            background: #0078ae;
            font-size: 1.2rem;
          }

          .newsletter button:active {
            transform: scale(1.1);
          }

          .messageRequest {
            position: absolute;
            bottom: -22px;
            left: 0;
            right: 0;
            font-size: 13px;
            text-align: center;
            color: #1c1c1c;
          }
        `}</style>
      </section>
    )
  }
}

export default Newsletter
