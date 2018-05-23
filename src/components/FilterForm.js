import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Header, Form, Radio, Checkbox } from 'semantic-ui-react'



class FilterForm extends React.Component {

    state = {
        kids: "",
        kidsAge: []
    }

    //add expression to clear kids age if No is selected
    handleChildrenChange = (e, { value }) => this.setState({ kids: value })

    // handleAgeChange = (e, { value }) => this.setState({ kidsAge: value })
    // if value exists in the array, pop it
    // else push to the array

    handleAgeChange = (e, {value}) => {
        // console.log("clicked")


        // console.log(value)

        console.log("~~~~~~ State before Loop: " + this.state.kidsAge + "~~~~~~~~~~")

        // var matchIndex = ""

        var matchIndex = undefined

        for(var i = 0 ; i <= this.state.kidsAge.length ; i++) {
            console.log("######### for loop ##########")
            var array = this.state.kidsAge


            if (value === array[i]) {
                console.log("value " + value + " is being compared to array element " + array[i] )
                matchIndex = array.indexOf(value);
                console.log("Index value saved as " + matchIndex )
            }

            console.log("MatchIndex in for after if: " + matchIndex)

        }
        console.log("------------after for loop-------------")
        console.log("Value: " + value)
        console.log("matchIndex: " + matchIndex);
        if ((matchIndex != undefined ) && (matchIndex > -1)) {

            console.log("****** ******* Entering the Splicer ****** ******* ")

            array.splice(matchIndex, 1);
            console.log("Array after splice: " + array)
            this.setState({ kidsAge: array })
            console.log("State after splice: " + this.state.kidsAge)


        } else {

            console.log("%%%%%%%%%% Entering the PUSHER %%%%%%%%%%%%")
            console.log("matchIndex in PUSHER: " + matchIndex);


            array.push( value )
            console.log("Array with new pushed value: " + array)
            this.setState({ kidsAge: array })
            console.log("State after push: " + this.state.kidsAge)
        }

    }

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
                        Do you have any children?
                        Selected value: <b>{this.state.kids}</b>
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

                            <Form.Field>
                                <Checkbox label={{ children: '0-1' }} value='0-1' onChange={this.handleAgeChange} />
                                <Checkbox label={{ children: '1-3' }} value='1-3' onChange={this.handleAgeChange} />
                                <Checkbox label={{ children: '4-5' }} value='4-5' onChange={this.handleAgeChange} />
                                <Checkbox label={{ children: '5-10' }} value='5-10' onChange={this.handleAgeChange} />
                                <Checkbox label={{ children: '10-14' }} value='10-14' onChange={this.handleAgeChange} />
                                <Checkbox label={{ children: '14-18' }} value='14-18' onChange={this.handleAgeChange} />
                                <Checkbox label={{ children: '18-25' }} value='18-25' onChange={this.handleAgeChange} />
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


// <div className="ui checkbox">
//     <input type="checkbox" className="example"/>
//     <label>Make my profile visible</label>
// </div>


// <Checkbox label={{ children: '0-1' }} value='0-1' onChange={this.handleAgeChange} />
// <Checkbox label={{ children: '1-3' }} value='1-3' onChange={this.handleAgeChange} />
// <Checkbox label={{ children: '4-5' }} value='4-5' onChange={this.handleAgeChange} />
// <Checkbox label={{ children: '5-10' }} value='5-10' onChange={this.handleAgeChange} />
// <Checkbox label={{ children: '10-14' }} value='10-14' onChange={this.handleAgeChange} />
// <Checkbox label={{ children: '14-18' }} value='14-18' onChange={this.handleAgeChange} />
// <Checkbox label={{ children: '18-25' }} value='18-25' onChange={this.handleAgeChange} />



// if (value === array[i]) {
//     var index = array.indexOf(value);
//     if (index > -1) {
//         array.splice(index, 1);
//     }
//     // console.log(array)
//     this.setState({ kidsAge: array })
//     console.log(this.state.kidsAge)
// }else{
//     array.push(value)
//     this.setState({ kidsAge: array })
//     console.log(this.state.kidsAge)
// }