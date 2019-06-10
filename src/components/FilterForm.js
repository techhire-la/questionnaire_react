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
        filteredList: undefined,

        // answered: false,
        submitted: false,
        questionObject: {}
    }


    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    //// Handle Buttons /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    showBackBtn = () => {
        return (this.state.questionNumber > 1);
    }

    showNextBtn = () => {
        return (this.state.questionNumber < 6 || 
                this.state.questionNumber === 6 && this.askVeterenQuestion());
    }

    showSubmitBtn = () => {
        return (this.state.questionNumber === 6 && !this.askVeterenQuestion() || 
                this.state.questionNumber === 7 && this.askVeterenQuestion());
    }

    handleNext = (e, { id }) => {   
        let currentQuestion = this.state.questionNumber;
        let questionObject = this.state.questionObject;
        if (questionObject[currentQuestion] == undefined) {
            alert ("Please answer before moving to the next question.")
        } else {
            this.setState({ questionNumber: currentQuestion + 1 }) 
        }
    }

    handleBack = (e, { id }) => {
        this.setState({ questionNumber: this.state.questionNumber - 1 })
    }

    handleSubmit = () => {
        let currentQuestion = this.state.questionNumber;
        let questionObject = this.state.questionObject;
        if (questionObject[currentQuestion] == undefined) {
            alert ("Please answer before moving to the next question.")
        } else {
            this.submitData();
        }
    }

    ///// Conditional Question Rendering /////
    showForm = () => this.state.submitted === false
    showCatalogue = () => this.state.submitted === true

    showLocation = () => this.state.questionNumber === 1
    showAge = () => this.state.questionNumber === 2
    showEducation = () => this.state.questionNumber === 3
    showInSchool = () => this.state.questionNumber === 4
    showFive = () => this.state.questionNumber === 5
    showCriminalServices = () => this.state.questionNumber === 6
    showVeteran = () => this.state.questionNumber === 7 && this.askVeterenQuestion()
    askVeterenQuestion = () => (this.state.clientAge == "18-24" || this.state.clientAge == "25-65");
    
    showA = () => {
        return (this.state.levelOfEducation === 'No Highschool / Some Highschool' || this.state.levelOfEducation === 'Some College') && 
        (this.state.inSchool === 'true' || this.state.inSchool === true)
        ? { display: 'block' } : { display: 'none' }
    }
    showB = () => {
        if(this.state.levelOfEducation === 'Highschool/GED' || 
           this.state.levelOfEducation === 'AA' || 
           this.state.levelOfEducation === 'BA or Higher') {
            return { display: 'block' }
        } 
        if(this.state.levelOfEducation === 'Some College' && this.state.inSchool === 'false') {
            return { display: 'block' }
        }
        return {display: 'none' }
    }
    showC = () => {
        return (this.state.levelOfEducation === 'No Highschool / Some Highschool') && 
               (this.state.inSchool === 'false' || this.state.inSchool === false)
                ? { display: 'block' } : { display: 'none' }
    }

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////// Handle Question State ////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    handleChange = input => (e, { value }) => {
        //latest
        let currentQuestion = this.state.questionNumber;
        let questionObject = this.state.questionObject;
        const checked = true;
        questionObject[currentQuestion] = checked;
       
        // debugger
        this.setState({
            [input]: value,
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    ////////// Handle Submit ////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////


    handleMatch = (catalogueAttribute, stateData) => {
        var returnVal = undefined
        if (typeof (catalogueAttribute) === 'object') {
            for (var y = 0; y < catalogueAttribute.length; y++) {
                var stringyElement = String(catalogueAttribute[y]);
                var match = stringyElement.match(stateData);
                if (match != null) {
                    return match;
                }
            }
        }
        if (typeof (catalogueAttribute) === 'string') {
            var stringyElement = String(catalogueAttribute);
            var match = stringyElement.match(stateData);
            return match
        }
    };

    submitData = () => {

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////// Parse Location ////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        var locationArray = []
        var catalogueLength = catalogueData.contacts.length - 1
        console.log(catalogueLength)
        for (var i = 0; i <= catalogueLength; i++) {
            if (catalogueData.contacts[i].hasOwnProperty("location") && Array.isArray(catalogueData.contacts[i].location)) {
                // console.log("IF")
                locationArray.push(catalogueData.contacts[i])
                console.log(locationArray)
            } else if (catalogueData.contacts[i].hasOwnProperty("location") && catalogueData.contacts[i].location === this.state.location) {
                // console.log("ELSE IF")
                locationArray.push(catalogueData.contacts[i])
                console.log(locationArray)
            } else {
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
                } else if (key === "clientAge" && parsedArray[i].hasOwnProperty(key) && formState[key].includes(parsedArray[i][key])) {
                    // debugger
                    filteredArray.push(parsedArray[i])
                } else if (key === "inSchool" && (Array.isArray(parsedArray[i][key]) || parsedArray[i][key] == "true")) {
                    filteredArray.push(parsedArray[i])
                }
            }
        }
        this.setState({ filteredList: filteredArray, submitted: true })
    }

    render() {

        let filteredList = this.state.filteredList;
        let truthyArray = this.state.truthyArray;
        let zip = this.state.zip;
        let questionNumber = this.state.questionNumber;
        let location = this.state.location;
        let clientAge = this.state.clientAge;
        let levelOfEducation = this.state.levelOfEducation
        let inSchool = this.state.inSchool
        let interestedAfterSchoolPrograms = this.state.interestedAfterSchoolPrograms;
        let interestedInTraining = this.state.interestedInTraining;
        let interestedInCompletingDiploma = this.state.interestedInCompletingDiploma;
        let interestedInCriminalServices = this.state.interestedInCriminalServices;
        let veteran = this.state.veteran;
        let state = this.state

        return (
            <div>
                {/* {console.log(this.state.questionObject)} */}
                { this.showForm() && 
                <div id="questionnaire-form">
                    <div className="ui filterContainer" id="questionHeight">
                        { this.showLocation() && 
                        <div id="q1">
                            <h3>Question 1</h3>
                            <h2>Is the participant looking for services in the LA area or San Fernando Valley?</h2>
                            <Form id="location">
                                <Form.Field>
                                    <Radio
                                        className="fonts"
                                        label='Los Angeles'
                                        name='radioGroup'
                                        value='Los Angeles'
                                        checked={location === 'Los Angeles'}
                                        onChange={this.handleChange("location")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='San Fernando Valley'
                                        name='radioGroup'
                                        value='San Fernando Valley'
                                        checked={location === 'San Fernando Valley'}
                                        onChange={this.handleChange("location")}
                                    />
                                </Form.Field>
                            </Form>
                        </div>}

                        { this.showAge() && 
                        <div id="q2">
                            <h3>Question 2</h3>
                            <h2>What is the participants age?</h2>
                            <Form id="clientAge">
                                <Form.Field>
                                    <Radio
                                        label='0-4'
                                        name='radioGroup'
                                        value='0-4'
                                        checked={clientAge === '0-4'}
                                        onChange={this.handleChange("clientAge")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='5-10'
                                        name='radioGroup'
                                        value='5-10'
                                        checked={clientAge === '5-10'}
                                        onChange={this.handleChange("clientAge")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='11-13'
                                        name='radioGroup'
                                        value='11-13'
                                        checked={clientAge === '11-13'}
                                        onChange={this.handleChange("clientAge")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='14-18 (Highschool Age)'
                                        name='radioGroup'
                                        value='14-18'
                                        checked={clientAge === '14-18'}
                                        onChange={this.handleChange("clientAge")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='18-24 (College/Working Age)'
                                        name='radioGroup'
                                        value='18-24'
                                        checked={clientAge === '18-24'}
                                        onChange={this.handleChange("clientAge")}

                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='25-65'
                                        name='radioGroup'
                                        value='25-65'
                                        checked={clientAge === '25-65'}
                                        onChange={this.handleChange("clientAge")}
                                    />
                                </Form.Field>
                            </Form>
                        </div>}

                        { this.showEducation() && 
                        <div id="q3">
                            <h3>Question 3</h3>
                            <h2>What is the participant's highest level of completed education </h2>
                            <Form id="levelOfEducation">
                                <Form.Field>
                                    <Radio
                                        label='No Highschool / Some Highschool'
                                        name='radioGroup'
                                        value='No Highschool / Some Highschool'
                                        checked={this.state.levelOfEducation === 'No Highschool / Some Highschool'}
                                        onChange={this.handleLevelOfEducation}
                                        onChange={this.handleChange("levelOfEducation")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Highschool/GED'
                                        name='radioGroup'
                                        value='Highschool/GED'
                                        checked={this.state.levelOfEducation === 'Highschool/GED'}
                                        onChange={this.handleChange("levelOfEducation")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Some College'
                                        name='radioGroup'
                                        value='Some College'
                                        checked={this.state.levelOfEducation === 'Some College'}
                                        onChange={this.handleChange("levelOfEducation")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='AA'
                                        name='radioGroup'
                                        value='AA'
                                        checked={this.state.levelOfEducation === 'AA'}
                                        onChange={this.handleChange("levelOfEducation")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='BA or Higher'
                                        name='radioGroup'
                                        value='BA or Higher'
                                        checked={this.state.levelOfEducation === 'BA or Higher'}
                                        onChange={this.handleChange("levelOfEducation")}
                                    />
                                </Form.Field>
                            </Form>
                        </div>}

                        { this.showInSchool() && 
                        <div id="q4">
                            <h3>Question 4</h3>
                            <h2>Is the participant in school? </h2>
                            <Form>
                                <Form.Field>
                                    <Radio
                                        label='Yes'
                                        name='radioGroup'
                                        value='true'
                                        checked={this.state.inSchool === 'true'}
                                        onChange={this.handleChange("inSchool")}

                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='No'
                                        name='radioGroup'
                                        value='false'
                                        checked={this.state.inSchool === 'false'}
                                        onChange={this.handleChange("inSchool")}
                                    />
                                </Form.Field>
                            </Form>
                        </div>}

                        { this.showFive() && 
                        <div id="q5" >
                            <div style={ this.showA() } >
                                <h3>Question 5</h3>
                                <h2> Is the participant looking for after-school program? </h2>
                                <Form>
                                    <Form.Field>
                                        <Radio
                                            label='Yes'
                                            name='radioGroup'
                                            value='true'
                                            checked={interestedAfterSchoolPrograms === 'true'}
                                            onChange={this.handleChange('interestedAfterSchoolPrograms')}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            label='No'
                                            name='radioGroup'
                                            value='false'
                                            checked={interestedAfterSchoolPrograms === 'false'}
                                            onChange={this.handleChange('interestedAfterSchoolPrograms')}
                                        />
                                    </Form.Field>
                                </Form>
                            </div>

                            <div style={ this.showB() } id="5">
                                <h3>Question 5</h3>
                                <h2> Is the participant interested in employment support or vocational training </h2>
                                <Form>
                                    <Form.Field>
                                        <Radio
                                            label='Yes'
                                            name='radioGroup'
                                            value='true'
                                            checked={interestedInTraining === 'true'}
                                            onChange={this.handleChange('interestedInTraining')}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            label='No'
                                            name='radioGroup'
                                            value='false'
                                            checked={interestedInTraining === 'false'}
                                            onChange={this.handleChange('interestedInTraining')}
                                        />
                                    </Form.Field>
                                </Form>
                            </div>


                            <div style={ this.showC() } className='showDiploma'>
                                <h3>Question 5</h3>
                                <h2>Is the participant interested in completing their high school diploma or equivalent (GED, HiSet)</h2>
                                <Form>
                                    <Form.Field>
                                        <Radio
                                            label='Yes'
                                            name='radioGroup'
                                            value='true'
                                            checked={this.state.interestedInCompletingDiploma === 'true'}
                                            onChange={this.handleChange('interestedInCompletingDiploma')}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            label='No'
                                            name='radioGroup'
                                            value='false'
                                            checked={this.state.interestedInCompletingDiploma === 'false'}
                                            onChange={this.handleChange('interestedInCompletingDiploma')}
                                        />
                                    </Form.Field>
                                </Form>
                            </div>
                        </div>}

                        { this.showCriminalServices()  && 
                        <div id="q6">
                            <h3>Question 6</h3>
                            <h2>Is the participant interested in services aimed at individuals with a past juvenile or adult criminal record? </h2>
                            <Form>
                                <Form.Field>
                                    <Radio
                                        label='Yes'
                                        name='radioGroup'
                                        value='true'
                                        checked={this.state.interestedInCriminalServices === 'true'}
                                        onChange={this.handleChange('interestedInCriminalServices')}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='No'
                                        name='radioGroup'
                                        value='false'
                                        checked={this.state.interestedInCriminalServices === 'false'}
                                        onChange={this.handleChange('interestedInCriminalServices')}
                                    />
                                </Form.Field>
                            </Form>
                        </div>}

                        { this.showVeteran() && 
                        <div id="q7">
                            <h3>Question 7</h3>
                            <h2>Is the participant a veteran?</h2>
                            <Form>
                                <Form.Field>
                                    <Radio
                                        label='Yes'
                                        name='radioGroup'
                                        value='true'
                                        checked={veteran === 'true'}
                                        onChange={this.handleChange("veteran")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='No'
                                        name='radioGroup'
                                        value='false'
                                        checked={veteran === 'false'}
                                        onChange={this.handleChange("veteran")}
                                    />
                                </Form.Field>
                            </Form>
                        </div>}

                        <div>
                            { this.showBackBtn() && 
                            <Button id="back-btn" className="button-header" basic color='black' onClick={this.handleBack}> 
                                Back 
                            </Button>}
                            { this.showNextBtn() && 
                            <Button id="next-btn" className="button-header" basic color='black' onClick={this.handleNext}> 
                                Next 
                            </Button>}
                            { this.showSubmitBtn() && 
                            <Button id="submit-btn" className="button-header" basic color='black' onClick={this.handleSubmit}> 
                                Submit 
                            </Button>}
                        </div>
                    </div>
                </div>}

                { this.showCatalogue() && 
                <div id="filtered-catalogue">
                    <Catalogue
                        filteredList={filteredList}
                        clientAge={clientAge}
                        levelOfEducation={levelOfEducation}
                        zip={zip}
                    />
                </div>}
            </div>
        );
    }
}

export default FilterForm;