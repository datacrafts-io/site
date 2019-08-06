import React from 'react'
import SimpleReactValidator from 'simple-react-validator'
import './index.sass'

export default class Contacts extends React.Component {
  validator = new SimpleReactValidator()

  state = {
    form: {
      name: null,
      email: null,
      message: null
    }
  }

  handleInputChange = (event) => {
    let updated_attrs = { [event.target.name]: event.target.value }
    this.setState(state => {
      return { form: { ...state.form, ...updated_attrs }}
    })
  }

  submit = () => {
    this.validator.allValid() ? this.validator.hideMessages() : this.validator.showMessages()
    return false
  }

  componentDidMount() {
    this.setState(state => {
      return { form: { ...state.form, name: 'asdfasdf' } }
    })
  }

  render() {
    return (
      <div className="d-flex align-items-center block-plain p-4" id="contacts">
        <div className="container">
          <h2 className="text-center mb-5">Contacts</h2>
          <div className="row">
            <div className="col-7">
              <p>Drop us a line:</p>
              <form action="/" method="POST">
                <div className="form-group">
                  <input className="form-control form-control-lg py-3" name="name" placeholder="Name" required="required" type="text" value={this.state.name} onChange={ this.handleInputChange } />
                  {this.validator.message('name', this.state.name, 'required|email')}
                </div>
                <div className="form-group">
                  <input className="form-control form-control-lg py-3" name="email" placeholder="Email" required="required" type="email" value={this.state.email} onChange={ this.handleInputChange } />
                </div>
                <div className="form-group">
                  <textarea className="form-control form-control-lg py-3" name="message" placeholder="Message" required="required" value={this.state.message} onChange={ this.handleInputChange } />
                </div>
                <div className="form-group">
                  <input className="btn btn-lg btn-solid py-0 px-5 mt-5" type="button" value="SEND" onClick={this.submit} />
                </div>
              </form>
            </div>
            <div className="col-5">
              <p>Or get in touch via:</p>
              <div className="contact-item mb-3">
                <img className="contact-icon align-middle" src="/images/slack.svg" />
                <span className="contact-id align-middle">@datacrafts.io</span></div>
              <div className="contact-item mb-3">
                <img className="contact-icon align-middle" src="/images/skype.svg" />
                <span className="contact-id align-middle">
                  <a href="skype:live:hello_24906?chat">datacrafts</a>
                </span>
              </div>
              <div className="contact-item">
                <img className="contact-icon align-middle" src="/images/envelope.svg" />
                <span className="contact-id align-middle">
                  <a href="mailto:hello@datacrafts.io">hello@datacrafts.io</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}