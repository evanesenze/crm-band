import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
    return (
        <div className="wrapper">
            <div className="login-wrapper">
                <div>
                    <button onClick={props.auth}>Войти</button>
                </div>
            </div>
        </div>
        

    )
}

Login.propTypes = {
    auth: PropTypes.func.isRequired
}

export default Login;