import react, { useState } from "react";

function Login() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            {isLogin ? (
                <button className="button" onClick={() => setIsLogin(false)}>
                    Wyloguj się
                </button>
            ) : (
                <button className="button" onClick={() => setIsLogin(true)}>
                    Zaloguj się
                </button>
            )}
        </div>
    );
}
export default Login;

/*import react, { Component, useState } from "react";

import propTypes from "prop-types";

class Login extends Component {
  state = {
    isActive: false,
  };
  handleLogin = () => {
    this.setState({
      isActive: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.isActive ? (
          <button className="button" onClick={this.handleLogout}>
            Wyloguj
          </button>
        ) : (

                    
          <button className="button" onClick={this.handleLogin}>
            Zaloguj
          </button>
        )}
      </div>
    );
  }
}
export default Login;
*/
