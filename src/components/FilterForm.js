import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Header, Form, Radio } from 'semantic-ui-react'



class FilterForm extends React.Component {

    state = {
        kids: ""
    }

    handleChange = (e, { value }) => this.setState({ kids: value })


    render() {

        let showKids = ""
        // let hideKids = ""
        if(this.state.kids === 'true'){
            showKids = {display: 'block' }
        }else{
            showKids = {display: 'none' }
        }

        return (

            <div className="ui filterContainer">


                <h3>Your FilterForm is here</h3>
                <p>Red Text</p>

                <Form>
                    <Form.Field>
                        Do you have any kids?
                        Selected value: <b>{this.state.kids}</b>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.kids === 'true'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.kids === 'false'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>

                        <div style={showKids}>

                            <Form.Field>
                                <Radio
                                    label='thing'
                                    name='radioGroup'
                                    value='thing'
                                    checked={this.state.value === 'thing'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>

                        </div>



                </Form>

                --------------------------------------

                <Grid>
                    <Grid.Column only='computer' computer={5}>
                        <Header>Articles</Header>
                    </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                        <p> Thing 2 </p>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <p>thing 1</p>
                     </Grid.Column>
                </Grid>


            </div>

        );
    }
}


export default FilterForm;