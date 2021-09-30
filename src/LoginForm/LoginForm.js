import { Component } from 'react';
import './LoginForm.css';
import input from '../components/Input/Input'

class LoginForm extends Component {
  render() {
    return <form method="get" action="...">
      <fieldset className="loginField">
        <input
          className="loginInput"
          placeholder="username"
        />
        <br />
        <br />
        <input
          className="loginInput"
          placeholder="password"
        />
        <br />
        <br />

        <input className="buttonSubmit" type="submit" value="Login" />
        <br />
        <br />
        <div className="loginText">
          Not registered?
          <a className="loginCreate" href="...">
            {" "}
            Create an account
          </a>
        </div>
      </fieldset>
    </form>;
  }
}

export default LoginForm;
