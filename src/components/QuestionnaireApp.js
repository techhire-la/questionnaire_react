import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'
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


            <Link to="/form">
                <Button secondary size='massive'>
                    <p>Form</p>
                </Button>
            </Link>



            <Link to="/catalogue">
                <Button primary size='massive'>
                    <p>Catalogue</p>
                </Button>
            </Link>

        </div>

        );
    }
}


export default QuestionnaireApp;



// <Button style={myStyle}>