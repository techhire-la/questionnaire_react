import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Grid, Image, Item, Responsive, Segment , Form, Button, } from 'semantic-ui-react'

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { login } from '../../actions/auth';



class Login extends React.Component {

    state = {
        email: "",
        password: "",
        errors: {},
        errorAlert: false
    }

    handleChange = e => {
        debugger
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = e => {

        console.log("handle the login")
        
        debugger

        let formFields = { email: this.state.email, password: this.state.password };

        axios
            .post("../../back-end/routes/api/users/login", formFields)
            .then(res => {
            console.log(res.data);
            })
            .catch(e => console.log(e));
        

        console.log("after the debugger")

    }






render() {


    return (

        <div className="ui filterContainer">

            <h2>Login</h2>
            

            <p>If you are the head of a department, you'll likely have admin access.  Sign in below to add, edit, or remove programs!</p>


            <Form>
                    < Form.Group widths = 'equal' >
                        < Form.Input fluid label = 'Email'
                        id = "email"
                        onChange={this.handleChange}
                        type = "text"
                        className = "form-control"
                        placeholder = "email"
                        name = "email" />

                        < Form.Input fluid label = 'Password'
                        id = "password"
                        onChange={this.handleChange}
                        type = "password"
                        className = "form-control"
                        placeholder = "password"
                        name = "password" />
                    </Form.Group>
            </Form>


            <Button basic color='black' onClick={this.handleLogin}> Login </Button>



        </div>

        );
    }
}


export default Login;
