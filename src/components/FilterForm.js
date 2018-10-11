import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from './Catalogue';
import { Input, Button, Grid, Header, Form, Radio, Checkbox, Responsive, Segment } from 'semantic-ui-react'

import $ from 'jquery';
import catalogueData from "../api/contacts.json";


class FilterForm extends React.Component {

    state = {
        location: undefined,
        clientAge: undefined,
        kids: undefined,
        veteran: undefined,
        interestedInTraining: undefined,
        interestedAfterSchoolPrograms: undefined,
        interestedInCriminalServices: undefined,
        interestedInCompletingDiploma: undefined,


        // working: undefined,
        // levelOfEducation: undefined,



        zip: undefined,

        truthyArray: [],
        filteredList: undefined
    }

///////////////////////////////////////////////////////////////////////////////////
//////////////// Checks for zip ///////////////////////////////////////////////
//     if(typeof(clonedHash[x].zip[0] === 'number') ) {
//         var zipsArray = hash.zip
//
//
//         for(var y = 0 ; y < zipsArray.length ; y++){
//
//             var zipMatch = zipsArray[y].match(zip)
//             if(zipMatch != null) {
//
//             }
//         }
//     }
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

    handleMatch = (catalogueAttribute, stateData) => {
        // debugger

    // function handleMatch(catalogueAttribute, stateData) {

        var returnVal = undefined

            if (typeof(catalogueAttribute) === 'object'){

                for(var y = 0 ; y < catalogueAttribute.length ; y++){

                    var stringyElement = String(catalogueAttribute[y]);
                    var match = stringyElement.match(stateData);

                    if (match != null){
                        return match;
                    }

                }

            }

        if (typeof(catalogueAttribute) === 'string'){


                var stringyElement = String(catalogueAttribute);
                var match = stringyElement.match(stateData);

                // returnVal = match;
                return match

        }



        // return returnVal
    };

    // }

    inTheRightZip = (zipList, zipState) => {

            var returnValue = undefined;
            // console.log("inTheRightZip")
            ///////////// HANDLE ZIPS //////////////////////
            console.log("typeof(zipList[0] === 'number') RESULT:  " + typeof(zipList[0]))
            if(typeof(zipList[0] === 'number') ) {

                var zipsArray = zipList

                for(var y = 0 ; y < zipsArray.length ; y++){

                    var stringyZip = String(zipsArray[y]);
                    var zipMatch = stringyZip.match(zipState);

                    returnValue = zipMatch;
                    // return stringyZip.match(zipState);
                }

            }

            console.log("typeof(zipList[0] === 'string') RESULT:  " + typeof(zipList[0]))
            if(typeof(zipList[0] === 'string') ){
                returnValue = "string"
                // return typeof(zipList[x].zip[0])


            }

            return returnValue
    };


    handleFormData = (arr) => {

        var filterCatalogue = [];
        var clonedHash = catalogueData.contacts.slice(0);

        console.log("arr: " + arr);


        /////////// HANDLE TRUTHY ARRAY ///////////////////////////////////////////////
        for( var i = 0 ; i <= arr.length ; i++ ) {

            //sort through contacts
            for( var x = 0 ; x < clonedHash.length ; x++) {

                var checkMatch = this.handleMatch(clonedHash[x][arr[i]], this.state[arr[i]])
                console.log("arr[i]: " + arr[i])

                if(clonedHash[x].hasOwnProperty(arr[i]) === true  && checkMatch != null && checkMatch[0] == this.state[arr[i]]){

                    var zipCheck = this.inTheRightZip(clonedHash[x].zip, this.state.zip);

                    if( zipCheck === 'string') {

                        filterCatalogue.push(clonedHash[x]);
                        clonedHash.splice(x, 1);
                        console.log("popped " + clonedHash[x]);

                    }

                    if(zipCheck != null && zipCheck[0] === this.state.zip) {

                        filterCatalogue.push(clonedHash[x]);
                        clonedHash.splice(x, 1);
                        console.log("popped " + clonedHash[x]);
                    }

                }
            }
        }
        console.log("filterCatalogue.length: " + filterCatalogue.length);
        console.log("filterCatalogue: " + filterCatalogue);
        return filterCatalogue
    };

    //Question 0
    handleLocation = (e, { value }) => this.setState({ location: value });

    // Question 1
    handleClientAgeChange = (e, { value }) => this.setState({ clientAge: value });


    //Question 2
    // handleWorkingChange = (e, { value }) => {(value === "false") ? this.setState({ working: value }) : this.setState({ working: value, levelOfEducation: undefined, veteran: undefined, interestedInTraining: undefined, othersJobless: undefined })};
    handleInterestedInTraining = (e, { value }) => this.setState({ interestedInTraining: value })




    /////////////////////////////////////////////////////////////////////////////
    ///////////// Zip Code and Submit ///////////////////////////////////////////

    handleZipChange = (e, { value }) => this.setState({ zip: parseInt(value) });


    handleZipValidation = (zip) => {


        console.log(zip) //DOES NOT WORK FOR ZIPS STARTING WITH ZEROS

        var zipAsInt = parseInt(zip)

        if(zip === undefined  ||  zip === NaN) {
            alert(' Please Enter A Zip Code')

        }

        if(zip != undefined && zip.toString().length !== 5) {
            alert('Zip Code must be 5 digits')

        }

        if( !(Number.isInteger(zipAsInt)) ){
            alert('Zip Code must be numbers only')
        }

        // if( !(/^\d{5}(-\d{4})?$/.test(zip))) ){
        //     alert('Zip Code must be numbers only')
        // }

        if (zip != undefined && zip.toString().length === 5 && Number.isInteger(zipAsInt)) {
            console.log("Zip Validated!")
            return true
            // this.setState({zip: parseInt(zip)})
        }

    };


    handleTruthyArray = () => {
        // truthyArray
        // var arrayOfTruth = [];
        var arrayOfTruth = ['clientAge', 'kidsAge' ];

        var formState = this.state;

        // does not uptake "kids"
        for (var key in formState) {
            if (formState.hasOwnProperty(key) && formState[key] === "true" && key != "kids") {
                // console.log("formState value: " + formState[key]);
                arrayOfTruth.push(key)
                // console.log("ARRAY OF TRUTH: " + arrayOfTruth);
            }
        }


        return arrayOfTruth


    }


    handleSubmit = () => {


        var passZip = this.handleZipValidation(this.state.zip);

        if (passZip === true) {

            var truthyArray = this.handleTruthyArray();


            var filteredData = this.handleFormData(truthyArray);

            this.setState({ filteredList : filteredData})

        }



    };


    render() {

        var filteredList = this.state.filteredList
        var truthyArray = this.state.truthyArray

        // console.log("Here's Filter Form's truthyArray: " + truthyArray)


        // var levelOfEducation = this.state.levelOfEducation
        var zip = this.state.zip;

        var location = this.state.location;
        var clientAge = this.state.clientAge;
        var kids = this.state.kids;
        var veteran = this.state.veteran;
        var interestedInTraining = this.state.interestedInTraining;
        var interestedAfterSchoolPrograms = this.state.interestedAfterSchoolPrograms;
        var interestedInCriminalServices = this.state.interestedInCriminalServices;
        var interestedInCompletingDiploma = this.state.interestedInCompletingDiploma;


        //Question 1
        // let showKids = "";
        // let checkStatus = false;
        // if(this.state.kids === 'true'){
        //     showKids = {display: 'block' };
        //     //clears the state
        //     checkStatus = undefined
        // }else{
        //     showKids = {display: 'none' };
        //     let checkStatus = false
        // }

        //Question 2
        // let showWorking = "";
        // if(this.state.working === 'false'){
        //     showWorking = {display: 'block' }
        // }else{
        //     showWorking = {display: 'none' }
        // }

        let showForm = "";
        if(this.state.filteredList === undefined){
            showForm = {display: 'block' }
        }else{
            showForm = {display: 'none' }
        }

        let showCatalogue = "";
        if(this.state.filteredList === undefined){
            showCatalogue = {display: 'none' }
        }else{
            showCatalogue = {display: 'block' }
        }



        return (

        <div>
            <div style={showForm}>

                <div className="ui filterContainer" >

                    <h3>Question 1</h3>
                    <Form>

                        <h3>Is the participant looking for services in the LA area or San Fernando Valley?</h3>

                        <Form.Field>
                            <Radio
                                label='Los Angeles'
                                name='radioGroup'
                                value='Los Angeles'
                                checked={this.state.location === 'Los Angeles'}
                                onChange={this.handleLocation}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='San Fernando Valley'
                                name='radioGroup'
                                value='San Fernando Valley'
                                checked={this.state.location === 'San Fernando Valley'}
                                onChange={this.handleLocation}
                            />
                        </Form.Field>

                    </Form>






                    <h3>Question 2</h3>
                    <Form>

                        <h3>What is the participants age?</h3>

                        <Form.Field>
                            <Radio
                                label='0-4'
                                name='radioGroup'
                                value='0-4'
                                checked={this.state.clientAge === '0-4'}
                                onChange={this.handleClientAgeChange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='5-10'
                                name='radioGroup'
                                value='5-10'
                                checked={this.state.clientAge === '5-10'}
                                onChange={this.handleClientAgeChange}
                            />
                        </Form.Field>


                        <Form.Field>
                            <Radio
                                label='11-13'
                                name='radioGroup'
                                value='11-13'
                                checked={this.state.clientAge === '11-13'}
                                onChange={this.handleClientAgeChange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='14-18 (Highschool Age)'
                                name='radioGroup'
                                value='14-18'
                                checked={this.state.clientAge === '14-18'}
                                onChange={this.handleClientAgeChange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='18-24 (College/Working Age)'
                                name='radioGroup'
                                value='18-24'
                                checked={this.state.clientAge === '18-24'}
                                onChange={this.handleClientAgeChange}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='25-65'
                                name='radioGroup'
                                value='25-65'
                                checked={this.state.clientAge === '25-65'}
                                onChange={this.handleClientAgeChange}
                            />
                        </Form.Field>

                    </Form>

                    <h3>Question 3</h3>

                    <h3>Is the participant interested in employment support or vocational training</h3>
                    <Form>

                        <Form.Field>
                            <Radio
                                label='Yes'
                                name='radioGroup'
                                value='true'
                                checked={this.state.interestedInTraining === 'true'}
                                onChange={this.handleInterestedInTraining}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='No'
                                name='radioGroup'
                                value='false'
                                checked={this.state.interestedInTraining === 'false'}
                                onChange={this.handleInterestedInTraining}
                            />
                        </Form.Field>

                    </Form>

                    <h3>Question 2</h3>
                    <Form>
                        <Form.Field>
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
                    </Form>


                    <h3>Question 3</h3>
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




                    <h3>What is your highest level of Education</h3>

                    <Form>

                        <Form.Field>
                            <Radio
                                label='No Highschool'
                                name='radioGroup'
                                value='No Highschool'
                                checked={this.state.levelOfEducation === 'No Highschool'}
                                onChange={this.handleLevelOfEducation}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='Highschool/GED'
                                name='radioGroup'
                                value='Highschool/GED'
                                checked={this.state.levelOfEducation === 'Highschool/GED'}
                                onChange={this.handleLevelOfEducation}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='Some College'
                                name='radioGroup'
                                value='Some College'
                                checked={this.state.levelOfEducation === 'Some College'}
                                onChange={this.handleLevelOfEducation}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='AA'
                                name='radioGroup'
                                value='AA'
                                checked={this.state.levelOfEducation === 'AA'}
                                onChange={this.handleLevelOfEducation}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='BA or Higher'
                                name='radioGroup'
                                value='BA or Higher'
                                checked={this.state.levelOfEducation === 'BA or Higher'}
                                onChange={this.handleLevelOfEducation}
                            />
                        </Form.Field>
                    </Form>


                    <h3>Are you and/or someone in your family a veteran</h3>
                    <Form>

                        <Form.Field>
                            <Radio
                                label='Yes'
                                name='radioGroup'
                                value='true'
                                checked={this.state.veteran === 'true'}
                                onChange={this.handleVeteran}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='No'
                                name='radioGroup'
                                value='false'
                                checked={this.state.veteran === 'false'}
                                onChange={this.handleVeteran}
                            />
                        </Form.Field>

                    </Form>



                    <br/>

                    <Input label='  Zip  ' placeholder='please enter a 5 digit zip code' onChange={this.handleZipChange} />

                    <br/>
                    <br/>

                    <Button basic color='black' onClick={this.handleSubmit}> Submit </Button>




                </div>


            </div>


        </div>

        );
    }
}


export default FilterForm;


//CATALOGUE COMPONENT

//<div style={showCatalogue}>
//    <Catalogue
//        truthyArray={truthyArray}
//        filteredList = {filteredList}
//        clientAge={clientAge}
//        zip={zip}
//    />
//</div>


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