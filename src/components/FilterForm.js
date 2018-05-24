import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Header, Form, Radio, Checkbox } from 'semantic-ui-react'



class FilterForm extends React.Component {

    state = {
        kids: "",
        kidsAge: []
    }

    //add expression to clear kids age if No is selected
    // handleChildrenChange = (e, { value }) => this.setState({ kids: value })

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
                                <Checkbox label={{ children: '0-1' }} value='0-1' onChange={this.handleAgeChange} checked={checkStatus}/>
                                <Checkbox label={{ children: '1-3' }} value='1-3' onChange={this.handleAgeChange} checked={checkStatus}/>
                                <Checkbox label={{ children: '4-5' }} value='4-5' onChange={this.handleAgeChange} checked={checkStatus}/>
                                <Checkbox label={{ children: '5-10' }} value='5-10' onChange={this.handleAgeChange} checked={checkStatus}/>
                                <Checkbox label={{ children: '10-14' }} value='10-14' onChange={this.handleAgeChange} checked={checkStatus}/>
                                <Checkbox label={{ children: '14-18' }} value='14-18' onChange={this.handleAgeChange} checked={checkStatus}/>
                                <Checkbox label={{ children: '18-25' }} value='18-25' onChange={this.handleAgeChange} checked={checkStatus}/>
                            </Form.Field>

                            <Form.Field>
                                <div className="ui checkbox"><input type="checkbox" className="hidden" readOnly="" tabIndex="0" value="4-5"/><label>4-5</label></div>
                            </Form.Field>
                        </div>

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