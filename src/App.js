import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const regex = /^([\w]+\.{0,1})+@([\w]+\.)[\w]{2,4}$/

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      emailIsValid: regex.test(e.target.value)
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: e.target.value.length > 5
    })
  }

  handleRememberMeChange = (e) => {
    this.setState({ rememberMe: e.target.checked })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({
        isSubmitted: true,
        password: ''
      })
    }
  }
  
  render() {
    return (
      <>
        {this.state.isSubmitted ? (
          <div className="container col-6 p-5">
            <h1>success</h1>
            <p>{this.state.email}</p>
          </div>
        ) : (
          <form
            className="container col-6 p-5"
            onSubmit={this.handleSubmit}
          >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input
                placeholder="Enter email"
                type="email"
                className={`form-control ${this.state.emailIsValid ? 'is-valid' : 'is-invalid'}`}
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input
                placeholder="Enter password"
                type="password"
                value={this.state.password}
                className={`form-control ${this.state.passwordIsValid ? 'is-valid' : 'is-invalid' }`}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={this.handleRememberMeChange}
                checked={this.state.rememberMe}
              />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </>
    )
  }
}

export default App