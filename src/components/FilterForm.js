import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from './Catalogue';
import { Input, Button, Grid, Header, Form, Radio, Checkbox, Responsive, Segment } from 'semantic-ui-react'

import catalogueData from "../api/contacts.json";


class FilterForm extends React.Component {

    state = {
        location: undefined,
        clientAge: undefined,
        inSchool: undefined,
        levelOfEducation: undefined, 
        veteran: undefined,
        interestedInTraining: undefined,
        interestedAfterSchoolPrograms: undefined,
        interestedInCriminalServices: undefined,
        interestedInCompletingDiploma: undefined,


        questionNumber: 1,
        toggleFive: undefined,
        locationArray: [],

        truthyArray: [],
        filteredList: undefined
    }

    // constructor(props){
    //     super(props)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    //// Handle Buttons /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////


    handleNext = (e, { id }) => {
        // debugger
        // var stringId = e.target.parentNode.id;
        var nextQuestion = parseInt(e.target.parentNode.id)
        // e.target.parentNode.getAttribute('id'); ||
        var addOne = (nextQuestion + 1).toString();

        this.setState({ questionNumber: addOne })
        console.log(this.state.questionNumber)

    }

    handleBack = (e, { id }) => {
        var lastQuestion = parseInt(e.target.parentNode.id)
        var subtractOne = (lastQuestion - 1).toString();

        this.setState({ questionNumber: subtractOne })
        console.log(this.state.questionNumber)
    }

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////// Handle Question State ////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////


    // parseLocation = () => {
    //     // console.log("Parse Location")
    //
    //     var locationArray = []
    //     var catalogueLength = catalogueData.contacts.length - 1
    //     console.log(catalogueLength)
    //     debugger
    //     for(var i = 0 ; i <= catalogueLength ; i++){
    //
    //         console.log(catalogueData.contacts[i].name)
    //         console.log(catalogueData.contacts[i].location)
    //
    //         if (catalogueData.contacts[i].hasOwnProperty("location") && Array.isArray(catalogueData.contacts[i].location)){
    //             console.log("Pushed IN!")
    //             locationArray.push(catalogueData.contacts[i])
    //             console.log(locationArray)
    //         }else if(catalogueData.contacts[i].hasOwnProperty("location") && catalogueData.contacts[i].location === this.state.location ){
    //             console.log("BOTH Pushed IN!")
    //             // console.log("ELSE IF")
    //             console.log(catalogueData.contacts[i].name)
    //             locationArray.push(catalogueData.contacts[i])
    //             console.log(locationArray)
    //
    //         }else{
    //             console.log("<<<<<<<NOT PUSHED>>>>>>>>")
    //             // console.log("Else")
    //         }
    //
    //     }
    //     // parsedArray = locationArray
    //     // debugger
    //     this.setState({ locationArray: locationArray })
    //
    // }

    //-------------------------- * * * * * --------------------------

    handleChange(e) {
        this.setState({ value: e.target.value})
        console.log(e, value)
    }

    //-------------------------- * * * * * --------------------------

    //Question 1
    // handleLocation = (e, { value }) => this.setState({ location: value });

    handleLocation = (e, { value }) => {
    
    
        this.setState({ location: value });
    
        // debugger
        console.log(value)
        console.log(this.state.location)
    
        // this.parseLocation()
    
    }



    // Question 2
    handleClientAge = (e, { value }) => {
        this.setState({ clientAge: value })
        console.log(value)
    }


    //Question 2
    // handleWorkingChange = (e, { value }) => {(value === "false") ? this.setState({ working: value }) : this.setState({ working: value, levelOfEducation: undefined, veteran: undefined, interestedInTraining: undefined, othersJobless: undefined })};


    //Question 3
    handleLevelOfEducation = (e, { value }) => {
        this.setState({ levelOfEducation: value })
        console.log(value)
    }

    //Question 4
    handleInSchool = (e, { value }) => {
        this.setState({ inSchool: value })
        console.log(value)
    }


    //Question 5
    handleAfterSchool = (e, { value }) => this.setState({ interestedAfterSchoolPrograms: value, interestedInTraining: undefined, interestedInCompletingDiploma: undefined })

    handleInterestedInTraining = (e, { value }) => this.setState({ interestedInTraining: value, interestedInCompletingDiploma: undefined, interestedAfterSchoolPrograms: undefined })

    handleInterestedInCompletingDiploma = (e, { value }) => this.setState({ interestedInCompletingDiploma: value, interestedAfterSchoolPrograms: undefined, interestedInTraining: undefined })

    // Question 6
    handleInterestedInCriminalServices = (e, { value }) => this.setState({ interestedInCriminalServices: value})

    //Question 7
    handleVeteran = (e, { value }) => this.setState({ veteran: value });

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////// Handle Submit ////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    // handleFormData = (arr) => {
    //
    //     var filterCatalogue = [];
    //     var clonedHash = catalogueData.contacts.slice(0);
    //
    //     console.log("arr: " + arr);
    //
    //
    //     /////////// HANDLE TRUTHY ARRAY ///////////////////////////////////////////////
    //     for( var i = 0 ; i <= arr.length ; i++ ) {
    //
    //         //sort through contacts
    //         for( var x = 0 ; x < clonedHash.length ; x++) {
    //
    //             var checkMatch = this.handleMatch(clonedHash[x][arr[i]], this.state[arr[i]])
    //             console.log("arr[i]: " + arr[i])
    //
    //             if(clonedHash[x].hasOwnProperty(arr[i]) === true  && checkMatch != null && checkMatch[0] == this.state[arr[i]]){
    //
    //                 var zipCheck = this.inTheRightZip(clonedHash[x].zip, this.state.zip);
    //
    //                 if( zipCheck === 'string') {
    //
    //                     filterCatalogue.push(clonedHash[x]);
    //                     clonedHash.splice(x, 1);
    //                     console.log("popped " + clonedHash[x]);
    //
    //                 }
    //
    //                 if(zipCheck != null && zipCheck[0] === this.state.zip) {
    //
    //                     filterCatalogue.push(clonedHash[x]);
    //                     clonedHash.splice(x, 1);
    //                     console.log("popped " + clonedHash[x]);
    //                 }
    //
    //             }
    //         }
    //     }
    //     console.log("filterCatalogue.length: " + filterCatalogue.length);
    //     console.log("filterCatalogue: " + filterCatalogue);
    //     return filterCatalogue
    // };


    // parseLocation = () => {
    //     console.log("Parse Location")
    //
    //     var locationArray = []
    //     var catalogueLength = catalogueData.contacts.length - 1
    //     console.log(catalogueLength)
    //     for(var i = 0 ; i <= catalogueLength ; i++){
    //
    //         if (catalogueData.contacts[i].hasOwnProperty("location") && Array.isArray(catalogueData.contacts[i].location)){
    //             // console.log("IF")
    //             locationArray.push(catalogueData.contacts[i])
    //             console.log(locationArray)
    //         }else if(catalogueData.contacts[i].hasOwnProperty("location") && catalogueData.contacts[i].location === this.state.location ){
    //
    //             // console.log("ELSE IF")
    //             locationArray.push(catalogueData.contacts[i])
    //             console.log(locationArray)
    //
    //         }else{
    //             // console.log("Else")
    //         }
    //
    //     }
    //     debugger
    //     this.setState({ locationArray: locationArray })
    //
    // }





    handleMatch = (catalogueAttribute, stateData) => {



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

    };


    // handleTruthyArray = () => {
    //     // truthyArray
    //     // var arrayOfTruth = [];
    //     var arrayOfTruth = ['clientAge', 'kidsAge'];
    //
    //     var formState = this.state;
    //
    //     // does not uptake "kids"
    //     for (var key in formState) {
    //         if (formState.hasOwnProperty(key) && formState[key] === "true" && key != "kids") {
    //             // console.log("formState value: " + formState[key]);
    //             arrayOfTruth.push(key)
    //             // console.log("ARRAY OF TRUTH: " + arrayOfTruth);
    //         }
    //     }
    //
    //
    //     return arrayOfTruth
    //
    //
    // };


    submitData = () => {

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////// Parse Location ////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var locationArray = []
        var catalogueLength = catalogueData.contacts.length - 1
        console.log(catalogueLength)
        for(var i = 0 ; i <= catalogueLength ; i++){

            if (catalogueData.contacts[i].hasOwnProperty("location") && Array.isArray(catalogueData.contacts[i].location)){
                // console.log("IF")
                locationArray.push(catalogueData.contacts[i])
                console.log(locationArray)
            }else if(catalogueData.contacts[i].hasOwnProperty("location") && catalogueData.contacts[i].location === this.state.location ){

                // console.log("ELSE IF")
                locationArray.push(catalogueData.contacts[i])
                console.log(locationArray)

            }else{
                // console.log("Else")
            }

        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////// iterate over catalogue ////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        var formState = this.state
        // var parsedArray = this.state.locationArray
        var parsedArray = locationArray
        var filteredArray = []

        console.log(formState)


        for (var key in formState) {
            // if (formState.hasOwnProperty(key) && formState[key] === "true" && formState[key] != undefined) {

            for (var i = 0; i < parsedArray.length; i++) {

                if (formState.hasOwnProperty(key) && formState[key] == "true" && parsedArray[i].hasOwnProperty(key) && parsedArray[i][key] == formState[key] && parsedArray[i].acceptReferrals == "Yes") {
                    filteredArray.push(parsedArray[i])
                }else if (key === "clientAge" && parsedArray[i].hasOwnProperty(key) && formState[key].includes(parsedArray[i][key])) {
                    // debugger
                    filteredArray.push(parsedArray[i])
                }else if (key === "inSchool" && (Array.isArray(parsedArray[i][key]) || parsedArray[i][key] == "true")) {
                    filteredArray.push(parsedArray[i])
                }

            }

        }

        this.setState({ filteredList: filteredArray})
    }




    render() {

        // var filteredList = this.state.filteredList;
        // var truthyArray = this.state.truthyArray;

        // // console.log("Here's Filter Form's truthyArray: " + truthyArray)


        // var zip = this.state.zip;
        // var questionNumber = this.state.questionNumber;

        // var location = this.state.location;
        // var clientAge = this.state.clientAge;
        // var levelOfEducation = this.state.levelOfEducation
        // var inSchool = this.state.inSchool;
        // var interestedAfterSchoolPrograms = this.state.interestedAfterSchoolPrograms;
        // var interestedInTraining = this.state.interestedInTraining;
        // var interestedInCompletingDiploma = this.state.interestedInCompletingDiploma;
        // var interestedInCriminalServices = this.state.interestedInCriminalServices;
        // var veteran = this.state.veteran;
        // var kids = this.state.kids;
        
        // var showDiv = {display: 'block'};
        // var hidden = {display: 'none' };

        //-------------------------- * * * * * --------------------------
        let filteredList = this.state.filteredList;
        let truthyArray = this.state.truthyArray;
        let zip = this.state.zip;
        let questionNumber = this.state.questionNumber;
        let location = this.state.location;
        let clientAge = this.state.clientAge;
        let levelOfEducation = this.state.levelOfEducation
        let inSchool = this.state.inSchool;
        let interestedAfterSchoolPrograms = this.state.interestedAfterSchoolPrograms;
        let interestedInTraining = this.state.interestedInTraining;
        let interestedInCompletingDiploma = this.state.interestedInCompletingDiploma;
        let interestedInCriminalServices = this.state.interestedInCriminalServices;
        let veteran = this.state.veteran;
        let kids = this.state.kids;

        let showDiv = { display: 'block' };
        let hidden = { display: 'none' };
        //-------------------------- * * * * * --------------------------



        // //Question 1
        // let showLocation = "";
        // if (this.state.questionNumber == '1') {
        //     showLocation = {display: 'block'};
        // } else {
        //     showLocation = {display: 'none'};
        // }


        // //Question 2
        // let showAge = ""
        // if (this.state.questionNumber == '2') {
        //     showAge = {display: 'block'};
        // } else {
        //     showAge = {display: 'none'};
        // }

        // //Question 3
        // let showEducation = "";
        // if (this.state.questionNumber == '3') {
        //     showEducation = {display: 'block'};
        // } else {
        //     showEducation = {display: 'none'};
        // }

        // //Question 4
        // let showInSchool = "";
        // if (this.state.questionNumber == '4') {
        //     showInSchool = {display: 'block'};
        // } else {
        //     showInSchool = {display: 'none'};
        // }

        //-------------------------- * * * * * --------------------------
        let showLocation = this.state.questionNumber == '1' ? showDiv : hidden
        let showAge = this.state.questionNumber == '2' ? showDiv : hidden
        let showEducation = this.state.questionNumber == '3' ? showDiv : hidden
        let showInSchool = this.state.questionNumber == '4' ? showDiv : hidden
        

        let showFive = this.state.questionNumber == '5' ? showDiv : hidden


        //-------------------------- * * * * * --------------------------




        // Question 5
        // var showFive = "";
        // var showAfterSchool = "";
        // var showTraining = "";
        // var showDiploma = "";

        // if (this.state.questionNumber == '5' && (inSchool === 'true' && (levelOfEducation === 'No Highschool / Some Highschool' || levelOfEducation === 'Some College') ) ) {
        //     showFive = {display: 'block'};
        //     showAfterSchool = {display: 'block !important'};
        // }
        //
        // if (this.state.questionNumber == '5' && (inSchool === 'false' && (levelOfEducation === 'No Highschool / Some Highschool') ) ){
        //     showFive = {display: 'block'};
        //     showTraining = {display: 'block !important'};
        //
        // }
        //
        //     // (inSchool === 'false' && (levelOfEducation !== 'No Highschool / Some Highschool' || levelOfEducation !== 'Some College') )
        //
        //  if(inSchool === 'false' && (levelOfEducation !== 'No Highschool / Some Highschool' || levelOfEducation !== 'Some College') ){
        //     showFive = {display: 'block'};
        //     showDiploma= {display: 'block !important'};
        //
        //  }





        // } else {
        //     showFive = {display: 'none'};
        //     showAfterSchool = {display: 'none !important'};
        //     showTraining = {display: 'none !important'};
        //     showDiploma = {display: 'none !important'};
        // }


        // *****************************************************************************
        
        // if (this.state.questionNumber == '5') {
        //     debugger
        //     showFive = {display: 'block'};
        //     var showAfterSchool = {display: 'none !important'};
        //     var showTraining = {display: 'none !important'};
        //     var showDiploma = {display: 'none !important'};
        //     // var showAfterSchool = "";
        //     // var showTraining = "";
        //     // var showDiploma = "";
        //     //showInSchool


        //     if (this.state.inSchool === 'true' && (levelOfEducation === 'No Highschool / Some Highschool' || levelOfEducation === 'Some College') ) {

        //         showAfterSchool = {display: 'block !important'};

        //     }

        //     else if (this.state.inSchool === 'false' && (levelOfEducation === 'No Highschool / Some Highschool') ) {
        //         showDiploma= {display: 'block !important'};

        //     }

        //     // (inSchool === 'false' && (levelOfEducation !== 'No Highschool / Some Highschool' || levelOfEducation !== 'Some College') )

        //     else {

        //         showTraining = {display: 'block !important'};

        //     }


        // } else {
        //     showFive = {display: 'none'};
        //     showAfterSchool = {display: 'none !important'};
        //     showTraining = {display: 'none !important'};
        //     showDiploma = {display: 'none !important'};
        // }

        // *****************************************************************************

        //////////////////  ISSUE  ///////////////////////////////////////////////

        // var showAfterSchool = {display: 'none !important'};
        // var showTraining = {display: 'none !important'};
        // var showDiploma = {display: 'none !important'};

        // if(this.state.questionNumber == '5') {
        //
        //     showFive = {display: 'block !important'};
        //
        //     debugger
        //
        //     if (inSchool === 'true' && (levelOfEducation === 'No Highschool / Some Highschool' || levelOfEducation === 'Some College') ) {
        //
        //         showAfterSchool = {display: 'block !important'};
        //         //
        //         // showTraining = {display: 'none !important'};
        //         // showDiploma = {display: 'none !important'};
        //     }
        //
        //     else if (inSchool === 'false' && (levelOfEducation === 'No Highschool / Some Highschool') ) {
        //         showTraining = {display: 'block !important'};
        //         //
        //         // showAfterSchool = {display: 'none !important'};
        //         // showDiploma = {display: 'none !important'};
        //     }
        //
        //     // (inSchool === 'false' && (levelOfEducation !== 'No Highschool / Some Highschool' || levelOfEducation !== 'Some College') )
        //
        //     else {
        //         showDiploma= {display: 'block !important'};
        //         //
        //         // showAfterSchool = {display: 'none !important'};
        //         // showTraining = {display: 'none !important'};
        //
        //     }
        //
        // }else{
        //     showFive = {display: 'none !important'};
        //     showAfterSchool = {display: 'none !important'};
        //     showTraining = {display: 'none !important'};
        //     showDiploma = {display: 'none !important'};
        // }




        //Question 6
        let showCriminalServices = "";
        if (this.state.questionNumber == '6') {
            showCriminalServices = {display: 'block'};
        } else {
            showCriminalServices = {display: 'none'};
        }


        let showVeteran = "";
        if (this.state.questionNumber == '7' && (clientAge == "18-24" || clientAge == "25-65")) {
            // debugger
            showVeteran = {display: 'block'};
        } else {
            // debugger
            showVeteran = {display: 'none'};
        }



        //Question 7
        // let showVeteran = {display: 'none'};
        // if (this.state.questionNumber == '7' && (clientAge === '18-24' || clientAge ==='25-65' )) {
        //
        //     showVeteran = {display: 'block'};
        //
        // } else {
        //
        //     showVeteran = {display: 'none'};
        //
        // }





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
            {console.log(this.state)}
            <div style={showForm}>

                <div className="ui filterContainer" id="questionHeight">

                    <div style={showLocation} id="1" data-id="thing">

                        <h3>Question 1</h3>
                        <h2>Is the participant looking for services in the LA area or San Fernando Valley?</h2>

                        <Form>



                            <Form.Field>
                                <Radio
                                    className="fonts"
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

                        <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>

                    </div>






                    <div style={showAge} id="2">
                        <h3>Question 2</h3>
                        <h2>What is the participants age?</h2>
                        <Form>



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


                        <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>

                        <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>
                    </div>



                    <div style={ showEducation } id="3">
                        <h3>Question 3</h3>

                        <h2>What is the participant's highest level of completed education </h2>

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

                        <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>

                        <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>



                    </div>


                    <div style={ showInSchool } id="4">
                        <h3>Question 4</h3>

                        <h2>Is the participant in school? </h2>

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

                        <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>

                        <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>

                    </div>


                    {/* <div style={showFive} id="5" >

                        <div style={ (inSchool === 'true' && (levelOfEducation === 'No Highschool / Some Highschool' || levelOfEducation === 'Some College') ) ? {display: 'block'} : {display: 'none'} } >

                            <h3>Question 5</h3>
                            <h2> Is the participant looking for after-school program? </h2> 

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



                        <div style={ ((inSchool === 'false' && (levelOfEducation === 'Highschool/GED' || levelOfEducation == 'Some College' || levelOfEducation === 'AA' || levelOfEducation === 'BA or Higher')) || (inSchool === 'true' && (levelOfEducation === 'Highschool/GED' || levelOfEducation === 'AA' || levelOfEducation === 'BA or Higher') )) ? {display: 'block'} : {display: 'none'}} id="5">

                            <h3>Question 5</h3>
                            <h2> Is the participant interested in employment support or vocational training </h2>

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


                        <div style={(inSchool === 'false' && (levelOfEducation === 'No Highschool / Some Highschool') ) ? {display: 'block'} : {display: 'none'}} className='showDiploma'>
                            <h3>Question 5</h3>
                            <h2>Is the participant interested in completing their high school diploma or equivalent (GED, HiSet)</h2>

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


                        <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>

                        <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>


                    </div> */}

                        <div style={showFive} >
                            <h2>this.state.questionNumber == '5' conditon</h2>
                            <div style={showFive} >
                                <div>nested div inside q5</div>
                            </div>

                            <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>

                            <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>
                        </div>






                    <div style={ this.state.questionNumber == "6" ? {display: 'block'} : {display: 'none'} } id="6">
                        <h3>Question 6</h3>
                        <h2>Is the participant interested in services aimed at individuals with a past juvenile or adult criminal record? </h2>

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

                        <div style={ (this.state.clientAge == "18-24" || this.state.clientAge == "25-65") ?  {display: 'block'} : {display: 'none'} } id="6">
                            <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>
                            <Button className="button-header" basic color='black' onClick={this.handleNext}> Next </Button>
                        </div>

                        <div style={ (this.state.clientAge === "0-4" || this.state.clientAge === "5-10" || this.state.clientAge === "11-13" || this.state.clientAge === "14-18") ?  {display: 'block'} : {display: 'none'} } id="6">
                            <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>
                            <Button className="button-header" basic color='black' onClick={this.submitData}> Submit </Button>
                        </div>



                    </div>




                    <div style={ showVeteran } id="7">

                        <h3>Question 7</h3>

                        <h2>Is the participant a veteran?</h2>
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




                        <Button className="button-header" basic color='black' onClick={this.handleBack}> Back </Button>

                        <Button className="button-header" basic color='black' onClick={this.submitData}> Submit </Button>

                    </div>


                </div>



            </div>



            <div style={showCatalogue}>
                <Catalogue
                    filteredList = {filteredList}
                    clientAge={clientAge}
                    levelOfEducation = {levelOfEducation}
                    zip={zip}
                />
            </div>
        </div>

        );
    }
}


export default FilterForm;