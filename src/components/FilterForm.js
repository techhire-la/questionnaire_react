import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Header, Form, Radio, Checkbox } from 'semantic-ui-react'



class FilterForm extends React.Component {

    state = {
        kids: "",
        kidsAge: [],
        working: undefined,
        housingHardships: undefined,
        financialHardships: undefined
    }


    handleChildrenChange = (e, { value }) => {(value === "true") ? this.setState({ kids: value }) : this.setState({ kids: value, kidsAge: [] })}


    handleAgeChange = (e, {value}) => {

        var matchIndex = undefined

        for(var i = 0 ; i <= this.state.kidsAge.length ; i++) {

            var array = this.state.kidsAge

            if (value === array[i]) {
                console.log("value " + value + " is being compared to array element " + array[i] )
                matchIndex = array.indexOf(value);
                console.log("Index value saved as " + matchIndex )
            }

        }

        if ((matchIndex != undefined ) && (matchIndex > -1)) {
            array.splice(matchIndex, 1);
            this.setState({ kidsAge: array })
            console.log("State after splice: " + this.state.kidsAge)


        } else {
            array.push( value )
            console.log("Array with new pushed value: " + array)
            this.setState({ kidsAge: array })
            console.log("State after push: " + this.state.kidsAge)
        }

    }

    handleWorkingChange = (e, { value }) => this.setState({ working: value })


    handleHousingHardshipsChange = (e, { value }) => this.setState({ housingHardships: value })


    handleFinancialHardshipsChange = (e, { value }) => this.setState({ financialHardships: value })

    render() {

        let showKids = ""
        let checkStatus = false
        if(this.state.kids === 'true'){
            showKids = {display: 'block' }
            checkStatus = undefined
        }else{
            showKids = {display: 'none' }
            let checkStatus = false
        }

        return (

            <div className="ui filterContainer">

                <Form>
                    <Form.Field className="large">
                        <h3>Do you have any children?</h3>

                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.kids === 'true'}
                            onChange={this.handleChildrenChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.kids === 'false'}
                            onChange={this.handleChildrenChange}
                        />
                    </Form.Field>

                        <div style={showKids} className="push-right">


                            <h3>Do you have children in the ages of:</h3>

                            <Form.Field>
                                <Checkbox label={{ children: '0-1' }} value='0-1' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                <Checkbox label={{ children: '1-3' }} value='1-3' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                <Checkbox label={{ children: '4-5' }} value='4-5' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                <Checkbox label={{ children: '5-10' }} value='5-10' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                <Checkbox label={{ children: '10-14' }} value='10-14' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                <Checkbox label={{ children: '14-18' }} value='14-18' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                <Checkbox label={{ children: '18-25' }} value='18-25' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                            </Form.Field>

                        </div>

                </Form>

                    <h3>Question 2</h3>
                <Form>

                    <Form.Field className="large">
                        <h3>Are you currently working?</h3>

                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.working === 'true'}
                            onChange={this.handleWorkingChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.working === 'false'}
                            onChange={this.handleWorkingChange}
                        />
                    </Form.Field>

                </Form>




                <h3>Question 3</h3>
                <Form>
                    <Form.Field className="large">
                        <h3>Are you facing Housing Hardships?</h3>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.housingHardships === 'true'}
                            onChange={this.handleHousingHardshipsChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.housingHardships === 'false'}
                            onChange={this.handleHousingHardshipsChange}
                        />
                    </Form.Field>

                </Form>


                <h3>Question 4</h3>
                <Form>
                    <Form.Field className="large">
                        <h3>Are you facing Financial Hardships?</h3>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.financialHardships === 'true'}
                            onChange={this.handleFinancialHardshipsChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.financialHardships === 'false'}
                            onChange={this.handleFinancialHardshipsChange}
                        />
                    </Form.Field>

                </Form>


            </div>

        );
    }
}


export default FilterForm;


// <div className="ui checkbox">
//     <input type="checkbox" className="example"/>
//     <label>Make my profile visible</label>
// </div>


// <Grid>
// <Grid.Column only='computer' computer={5}>
//     <Header>Articles</Header>
//     </Grid.Column>
//     <Grid.Column mobile={16} tablet={8} computer={5}>
//     <p> Thing 2 </p>
// </Grid.Column>
//
// <Grid.Column mobile={16} tablet={8} computer={5}>
//     <p>thing 1</p>
// </Grid.Column>
// </Grid>
//
// <Form.Field>
//     <div className="ui checkbox"><input type="checkbox" className="hidden" readOnly="" tabIndex="0" value="4-5"/><label>4-5</label></div>
// </Form.Field>