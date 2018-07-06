import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image, Item, Responsive, Segment , Form, Button, } from 'semantic-ui-react'

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

            <h2>Welcome to the YPI Referral Tool</h2>
            <hr/>

            <p>The purpose of this app is to help you find the most relevant services for our clients and to put them in touch with the right person within those programs.</p>

            <Grid columns={12}>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <p>If you are uncertain which programs may benefit your client, you can answer a few questions and the app will filter relevant results. Please answer from the point of view of the client.</p>
                    </Grid.Column>

                    <Grid.Column className="pushLeft" centered width={1}>
                        <Link to="/form">
                            <Button secondary size='massive'>
                                <p>Questions</p>
                            </Button>
                        </Link>
                    </Grid.Column>

                </Grid.Row>
            </Grid>

            <Grid columns={12}>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <p>If you are familiar with our services and would like to view our full list of YPI programs, check out our catalogue</p>
                    </Grid.Column>

                    <Grid.Column className="pushLeft" width={1}>
                        <Link to="/catalogue">
                            <Button secondary size='massive'>
                                <p>Catalogue</p>
                            </Button>
                        </Link>
                    </Grid.Column>

                </Grid.Row>
            </Grid>




        </div>

        );
    }
}


export default QuestionnaireApp;



// <Button style={myStyle}>


{/*<Form>*/}
    {/*<Form.Group widths='equal'>*/}

        {/*<Link to="/form">*/}
            {/*<Button secondary size='massive'>*/}
                {/*<p>Questions Form</p>*/}
            {/*</Button>*/}
        {/*</Link>*/}

        {/*<Link to="/catalogue">*/}
            {/*<Button secondary size='massive'>*/}
                {/*<p>Catalogue</p>*/}
            {/*</Button>*/}
        {/*</Link>*/}
    {/*</Form.Group>*/}



    {/*<Form.Group widths='equal'>*/}

    {/*</Form.Group>*/}
{/*</Form>*/}

{/*<div className="center">*/}

    {/*</div>*/}