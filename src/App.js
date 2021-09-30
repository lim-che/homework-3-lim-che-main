import { Component } from 'react';
import MediaButtons from 'MediaButtons/MediaButtons';
import LoginForm from 'LoginForm/LoginForm';
import Pager from 'Pager/Pager';
import RadioButtons from 'RadioButtons/RadioButtons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-component">
          <header className="App-header">
            Media Buttons Component (Example)
          </header>
          <div className="App-content">
            <MediaButtons />
          </div>
        </div>

        <div className="App-component login">
          <header className="App-header"> </header>
          <div className="loginForm">
            {/* <form method="get" action="...">
              <fieldset className="loginField">
                <input
                  className="loginInput"
                  type="text"
                  name="username"
                  size="40"
                  placeholder="username"
                />
                <br />
                <br />
                <input
                  className="loginInput"
                  type="text"
                  name="username"
                  size="40"
                  placeholder="password"
                />
                <br />
                <br />

                <input className="buttonSubmit" type="submit" value="Login" />
                <br/><br/>
                <div className="loginText">Not registered?
                    <a className="loginCreate" href="..."> Create an account</a>
                </div>
              </fieldset>
            </form> */}
          </div>
          <div className="App-content">
            <LoginForm />
          </div>
        </div>

        <div className="App-component pager">
          <header className="App-header">Pager component (TODO)</header>
          <div className="App-content">
            <Pager />
          </div>
        </div>

        <div className="App-component radio">
          <header className="App-header">Radio Buttons component (TODO)</header>
          <div className="App-content">
            <RadioButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
