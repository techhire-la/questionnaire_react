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

        inSchool: undefined,
        levelofEducation: undefined,
        veteran: undefined,
        interestedInTraining: undefined,
        interestedAfterSchoolPrograms: undefined,
        interestedInCriminalServices: undefined,
        interestedInCompletingDiploma: undefined,

        showOne: true,
        showTwo: false,
        showThree: false,
        showFour: false,
        showFive: false,
        showSix: false,
        showSeven: false



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
    handleClientAge = (e, { value }) => this.setState({ clientAge: value });


    //Question 2
    // handleWorkingChange = (e, { value }) => {(value === "false") ? this.setState({ working: value }) : this.setState({ working: value, levelOfEducation: undefined, veteran: undefined, interestedInTraining: undefined, othersJobless: undefined })};
    handleInterestedInTraining = (e, { value }) => this.setState({ interestedInTraining: value })

    //Question 3
    handleInSchool = (e, { value }) => this.setState({ inSchool: value })

    //Question 4
    handleLevelOfEducation  = (e, { value }) => this.setState({ levelOfEducation: value });

    //Question 5
    handleVeteran = (e, { value }) => this.setState({ veteran: value });

    //Question 6
    handleAfterSchool = (e, { value }) => this.setState({ interestedAfterSchoolPrograms: value })

    handleInterestedInCriminalServices = (e, { value }) => this.setState({ interestedInCriminalServices: value })

    handleInterestedInCompletingDiploma = (e, { value }) => this.setState({ interestedInCompletingDiploma: value })





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


        var zip = this.state.zip;

        var location = this.state.location;
        var clientAge = this.state.clientAge;
        var kids = this.state.kids;
        var veteran = this.state.veteran;
        var inSchool = this.state.inSchool;
        var levelOfEducation = this.state.levelOfEducation
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

        //Question 1
        let showLocation = "";
        if (this.state.showOne === 'true') {
            showLocation = {display: 'block'};
        } else {
            showLocation = {display: 'none'};
        }


        //Question 2
        let showAge = ""
        if (this.state.showTwo === 'true') {
            showAge = {display: 'block'};
        } else {
            showAge = {display: 'none'};
        }

        //Question 3
        let showEducation = "";
        if (this.state.showThree === 'true') {
            showEducation = {display: 'block'};
        } else {
            showEducation = {display: 'none'};
        }

        //Question 4
        let showInSchool = "";
        if (this.state.showFour === 'true') {
            showInSchool = {display: 'block'};
        } else {
            showInSchool = {display: 'none'};
        }

        //Question 5
        let showAfterSchool = "";
        let showTraining = "";
        let showDiploma = "";

        // if (inSchool === 'true' && (levelOfEducation === 'No Highschool / Some Highschool' || levelOfEducation === 'Some College') ){
        //     if (this.state.showFive === 'true') {
        //         showAfterSchool = {display: 'block'};
        //
        //     } else {
        //         showAfterSchool = {display: 'none'};
        //     }
        // }
        //
        // if (inSchool === 'false' && (levelOfEducation !== 'No Highschool / Some Highschool' || levelOfEducation !== 'Some College')  ){
        //     if (this.state.showFive === 'true') {
        //         showTraining = {display: 'block'};
        //
        //     } else {
        //         showTraining = {display: 'none'};
        //     }
        // }
        //
        // if (inSchool === 'false' && (levelOfEducation !== 'Some Highschool')  ){
        //     if (this.state.showFive === 'true') {
        //         showDiploma= {display: 'block'};
        //
        //     } else {
        //         showDiploma = {display: 'none'};
        //     }
        // }


        if(this.state.showFive === 'true') {

            if (inSchool === 'true' && (levelOfEducation === 'No Highschool / Some Highschool' || levelOfEducation === 'Some College') ) {
                showAfterSchool = {display: 'block'};
            }

            if (inSchool === 'false' && (levelOfEducation !== 'No Highschool / Some Highschool' || levelOfEducation !== 'Some College')  ) {
                showTraining = {display: 'block'};
            }

            if (inSchool === 'false' && (levelOfEducation !== 'Some Highschool')  ){
                showDiploma= {display: 'block'};
            }

        }else{
            showAfterSchool = {display: 'none'};
            showTraining = {display: 'none'};
            showDiploma = {display: 'none'};
        }


        //Question 6
        let showCriminalServices = "";
        if (this.state.showSix === 'true') {
            showCriminalServices = {display: 'block'};
        } else {
            showCriminalServices = {display: 'none'};
        }


        //Question 7
        let showVeteran = "";

        if (this.state.showSeven === 'true') {

            if(clientAge === '18-24' || clientAge ==='25-65' ){
                showVeteran = {display: 'block'};
            }

        } else {
            showVeteran = {display: 'none'};
        }





        // Show Questions vs Show Catalogue
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

                    <div className="showLocation">
                        <h3>Question 1</h3>
                        <Form>

                            <h3>Is the participant looking for services in the LA area or San Fernando Valley?</h3>

                            <Form.Field>
                                <Radio
                                    label='Los Angeles'
                                    name='radioGroup'
                                    value='Los Angeles'
                                    checked={location === 'Los Angeles'}
                                    onChange={this.handleLocation}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='San Fernando Valley'
                                    name='radioGroup'
                                    value='San Fernando Valley'
                                    checked={location === 'San Fernando Valley'}
                                    onChange={this.handleLocation}
                                />
                            </Form.Field>

                        </Form>
                    </div>






                    <div className="showAge">
                        <h3>Question 2</h3>
                        <Form>

                            <h3>What is the participants age?</h3>

                            <Form.Field>
                                <Radio
                                    label='0-4'
                                    name='radioGroup'
                                    value='0-4'
                                    checked={clientAge === '0-4'}
                                    onChange={this.handleClientAge}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='5-10'
                                    name='radioGroup'
                                    value='5-10'
                                    checked={clientAge === '5-10'}
                                    onChange={this.handleClientAge}
                                />
                            </Form.Field>


                            <Form.Field>
                                <Radio
                                    label='11-13'
                                    name='radioGroup'
                                    value='11-13'
                                    checked={clientAge === '11-13'}
                                    onChange={this.handleClientAge}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='14-18 (Highschool Age)'
                                    name='radioGroup'
                                    value='14-18'
                                    checked={clientAge === '14-18'}
                                    onChange={this.handleClientAge}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='18-24 (College/Working Age)'
                                    name='radioGroup'
                                    value='18-24'
                                    checked={clientAge === '18-24'}
                                    onChange={this.handleClientAge}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='25-65'
                                    name='radioGroup'
                                    value='25-65'
                                    checked={clientAge === '25-65'}
                                    onChange={this.handleClientAge}
                                />
                            </Form.Field>

                        </Form>
                    </div>



                    <div className ="showEducation">
                        <h3>Question 3</h3>

                        <h3>What is the participant's highest level of completed education </h3>

                        <Form>

                            <Form.Field>
                                <Radio
                                    label='No Highschool / Some Highschool'
                                    name='radioGroup'
                                    value='No Highschool / Some Highschool'
                                    checked={this.state.levelOfEducation === 'No Highschool / Some Highschool'}
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

                    </div>


                    <div className="showInSchool">
                        <h3>Question 4</h3>

                        <h3>Is the participant in school? </h3>

                        <Form>

                            <Form.Field>
                                <Radio
                                    label='Yes'
                                    name='radioGroup'
                                    value='true'
                                    checked={this.state.inSchool === 'true'}
                                    onChange={this.handleInSchool}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='No'
                                    name='radioGroup'
                                    value='false'
                                    checked={this.state.inSchool === 'false'}
                                    onChange={this.handleInSchool}
                                />
                            </Form.Field>
                        </Form>

                    </div>



                    <div className="showAfterSchool">
                        <h3> Question 5 </h3>
                        <h3> Is the participant looking for after-school program? </h3>

                        <Form>

                            <Form.Field>
                                <Radio
                                    label='Yes'
                                    name='radioGroup'
                                    value='true'
                                    checked={interestedAfterSchoolPrograms === 'true'}
                                    onChange={this.handleAfterSchool}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='No'
                                    name='radioGroup'
                                    value='false'
                                    checked={interestedAfterSchoolPrograms === 'false'}
                                    onChange={this.handleAfterSchool}
                                />
                            </Form.Field>

                        </Form>

                    </div>



                    <div className="showTraining">
                        <h3>Question 5</h3>

                        <h3>Is the participant interested in employment support or vocational training</h3>
                        <Form>

                            <Form.Field>
                                <Radio
                                    label='Yes'
                                    name='radioGroup'
                                    value='true'
                                    checked={interestedInTraining === 'true'}
                                    onChange={this.handleInterestedInTraining}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='No'
                                    name='radioGroup'
                                    value='false'
                                    checked={interestedInTraining === 'false'}
                                    onChange={this.handleInterestedInTraining}
                                />
                            </Form.Field>

                        </Form>

                    </div>



                    <div className="showDiploma">
                        <h3>Question 5</h3>
                        <h3>Is the participant interested in completing their high school diploma or equivalent (GED, HiSet)</h3>

                        <Form>

                            <Form.Field>
                                <Radio
                                    label='Yes'
                                    name='radioGroup'
                                    value='true'
                                    checked={this.state.interestedInCompletingDiploma === 'true'}
                                    onChange={this.handleInterestedInCompletingDiploma}
                                />
                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='No'
                                    name='radioGroup'
                                    value='false'
                                    checked={this.state.interestedInCompletingDiploma === 'false'}
                                    onChange={this.handleInterestedInCompletingDiploma}
                                />
                            </Form.Field>

                        </Form>

                    </div>







                    <div className="showVeteran"> </div>


                    <h3>Question 5</h3>

                    <h3>Is the participant a veteran?</h3>
                    <Form>

                        <Form.Field>
                            <Radio
                                label='Yes'
                                name='radioGroup'
                                value='true'
                                checked={veteran === 'true'}
                                onChange={this.handleVeteran}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='No'
                                name='radioGroup'
                                value='false'
                                checked={veteran === 'false'}
                                onChange={this.handleVeteran}
                            />
                        </Form.Field>

                    </Form>













                    <h3>Question 7</h3>
                    <h3>Is the participant interested in services aimed at individuals with a past juvenile or adult criminal record? </h3>

                    <Form>

                        <Form.Field>
                            <Radio
                                label='Yes'
                                name='radioGroup'
                                value='true'
                                checked={this.state.interestedInCriminalServices === 'true'}
                                onChange={this.handleInterestedInCriminalServices}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='No'
                                name='radioGroup'
                                value='false'
                                checked={this.state.interestedInCriminalServices === 'false'}
                                onChange={this.handleInterestedInCriminalServices}
                            />
                        </Form.Field>

                    </Form>






                    <Button basic color='black' onClick={this.handleSubmit}> Submit </Button>




                </div>


            </div>


        </div>

        );
    }
}


export default FilterForm;




// Zip Button
// <br/>
//
// <Input label='  Zip  ' placeholder='please enter a 5 digit zip code' onChange={this.handleZipChange} />
//
// <br/>
// <br/>


//CATALOGUE COMPONENT

//<div style={showCatalogue}>
//    <Catalogue
//        truthyArray={truthyArray}
//        filteredList = {filteredList}
//        clientAge={clientAge}
//        interestedInTraining={interestedInTraining}
        //veteran = {veteran}
        //interestedInTraining: {interestedInTraining}
        //interestedAfterSchoolPrograms: {interestedAfterSchoolPrograms}
        //interestedInCriminalServices: {interestedInCriminalServices}
        //interestedInCompletingDiploma: {interestedInCompletingDiploma}
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