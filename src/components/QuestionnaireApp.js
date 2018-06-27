import React from 'react';
import ReactDOM from 'react-dom';
import { Image, Item, Responsive, Segment , Form, Button, } from 'semantic-ui-react'

import { Link, NavLink} from 'react-router-dom'


class QuestionnaireApp extends React.Component {




render() {

    // let showNew = ""
    // let showAll = ""
    // if(this.props.toggle){
    //     showNew = {display: 'none' }
    //     showAll = {display: 'block' }
    // }else{
    //     showNew = {display: 'block' }
    //     showAll = {display: 'none' }
    // }

    return (

        <div className="ui filterContainer">

            <Form>
                    <Form.Group widths='equal'>
                        <Link to="/form">
                            <Button secondary size='massive'>
                                <p>Form</p>
                            </Button>
                        </Link>

                        <Link to="/catalogue">
                            <Button secondary size='massive'>
                                <p>Catalogue</p>
                            </Button>
                        </Link>
                    </Form.Group>



                    <Form.Group widths='equal'>

                    </Form.Group>
            </Form>

            <div className="center">

            </div>


        </div>

        );
    }
}


export default QuestionnaireApp;



// <Button style={myStyle}>