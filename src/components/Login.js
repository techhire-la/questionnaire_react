import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image, Item, Responsive, Segment , Form, Button, } from 'semantic-ui-react'

import { Link, NavLink} from 'react-router-dom'


class Login extends React.Component {




render() {


    return (

        <div className="ui filterContainer">

            <h2>Login</h2>
            

            <p>If you are the head of a department, you'll likely have admin access.  Sign in below to add, edit, or remove programs!</p>


            <Form>
                    < Form.Group widths = 'equal' >
                        < Form.Input fluid label = 'Email'
                        id = "email"
                        type = "text"
                        className = "form-control"
                        placeholder = "First and Last"
                        name = "ypiEmployeeName" />

                        < Form.Input fluid label = 'Password'
                        id = "password"
                        type = "password"
                        className = "form-control"
                        placeholder = "password"
                        name = "password" />
                    </Form.Group>
            </Form>





        </div>

        );
    }
}


export default Login;
