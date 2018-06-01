import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Grid, Header, Form, Radio, Checkbox } from 'semantic-ui-react'



class FilterForm extends React.Component {

    state = {
        clientAge: undefined,
        kids: undefined,
        kidsAge: [],
        childrenOfWorkingAge: undefined,
        childrenOfCollegeAge: undefined,
        childrenInJusticeSystem: undefined,
        childrenInFosterCare: undefined,
        childrenWithDisabilties: undefined,

        working: undefined,
        levelOfEducation: undefined,
        veteran: undefined,
        interestedInTraining: undefined,
        othersJobless: undefined,

        housingHardships: undefined,
        financialHardships: undefined,

        adultWithDisability: undefined,
        seniorCitizen: undefined,
        teacher: undefined,
        LGBTQIA: undefined,
        zip: undefined
    }

    // Question 0
    handleClientAgeChange = (e, { value }) => this.setState({ clientAge: value })


    // Question 1
    handleChildrenChange = (e, { value }) => {(value === "true") ? this.setState({ kids: value }) : this.setState({ kids: value, kidsAge: [], childrenOfWorkingAge: undefined, childrenOfCollegeAge: undefined, childrenInJusticeSystem: undefined })}

    //Question 1.1
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

    //Question 1.2
    handleChildrenOfWorkingAge = (e, { value }) => this.setState({ childrenOfWorkingAge: value })

    //Question 1.3
    handleChildrenOfCollegeAge = (e, { value }) => this.setState({ childrenOfCollegeAge: value })

    //Question 1.4
    handleChildrenInJusticeSystem = (e, { value }) => this.setState({ childrenInJusticeSystem: value })


    //Question 2
    // handleWorkingChange = (e, { value }) => this.setState({ working: value })
    handleWorkingChange = (e, { value }) => {(value === "false") ? this.setState({ working: value }) : this.setState({ working: value, levelOfEducation: undefined, veteran: undefined, interestedInTraining: undefined, othersJobless: undefined })}

    //Question 2.1
    handleLevelOfEducation = (e, { value }) => this.setState({ levelOfEducation: value })

    //Question 2.2
    handleVeteran = (e, { value }) => this.setState({ veteran: value })

    //Question 2.3
    handleInterestedInTraining = (e, { value }) => this.setState({ interestedInTraining: value })

    //Question 2.4
    handleOthersJobless = (e, { value }) => this.setState({ othersJobless: value })

    //Question 2.5
    handleChildrenInFosterCare = (e, { value }) => this.setState({ childrenInFosterCare: value })

    //Question 2.6
    handleChildrenWithDisabilties = (e, { value }) => this.setState({ childrenWithDisabilties: value })


    //Question 3
    handleHousingHardshipsChange = (e, { value }) => this.setState({ housingHardships: value })


    //Question 4
    handleFinancialHardshipsChange = (e, { value }) => this.setState({ financialHardships: value })

    //Question 5
    // handleAdultDisabilityChange = (e, { value }) => {(value === 'Prefer not to disclose') ? this.setState({ adultWithDisability: undefined }) : this.setState({ adultWithDisability: value})}
    handleAdultDisabilityChange = (e, { value }) => this.setState({ adultWithDisability: value })

    //Question 6
    handleSeniorCitizenChange = (e, { value }) => this.setState({ seniorCitizen: value })


    //Question 7
    handleTeacherChange = (e, { value }) => this.setState({ teacher: value })

    //Question 8
    handleLGBTQIAChange = (e, { value }) => this.setState({ LGBTQIA: value })


    //Zip Code and Submit

    handleZipChange = (e, { value }) => this.setState({ zip: parseInt(value) })

    handleZipValidation = (zip) => {

        if(zip.toString().length !== 5) {
            alert('Zip Code must be 5 digits')
        }

        if( !(Number.isInteger(zip)) ){
            alert('Zip Code must be numbers only')
        }

        if (zip.toString().length === 5 && Number.isInteger(zip)) {
            console.log("Zip Validated!")
        }

    }


    handleSubmit = () => {

        console.log("in handle submit");

        this.handleZipValidation(this.state.zip);

        console.log("After Zip Validation");


    }


    // handleSubmit

    // handleSubmit = ()


    render() {

        //Question 1
        let showKids = ""
        let checkStatus = false
        if(this.state.kids === 'true'){
            showKids = {display: 'block' }
            checkStatus = undefined
        }else{
            showKids = {display: 'none' }
            let checkStatus = false
        }

        //Question 2
        let showWorking = ""
        if(this.state.working === 'false'){
            showWorking = {display: 'block' }
        }else{
            showWorking = {display: 'none' }
        }

        return (

            <div className="ui filterContainer">

                <h3>Question 0</h3>
                <Form>

                    <h3>What is your age?</h3>

                    <Form.Field>
                        <Radio
                            label='10-14 (Middle School)'
                            name='radioGroup'
                            value='10-14'
                            checked={this.state.clientAge === '10-14'}
                            onChange={this.handleClientAgeChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='14-18 (High School)'
                            name='radioGroup'
                            value='14-18'
                            checked={this.state.clientAge === '14-18'}
                            onChange={this.handleClientAgeChange}
                        />
                    </Form.Field>


                    <Form.Field>
                        <Radio
                            label='18-65 (Adult)'
                            name='radioGroup'
                            value='18-65'
                            checked={this.state.clientAge === '18-65'}
                            onChange={this.handleClientAgeChange}
                        />
                    </Form.Field>

                </Form>

                <h3>Question 1</h3>
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

                        <div style={showKids} className="push-right">


                            <h3>Do you have children in the ages of:</h3>
                            <Form>
                                <Form.Field>
                                    <Checkbox label={{ children: '1-3 (Infants + Toddlers)' }} value='1-3' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing pull-left"/>
                                    <Checkbox label={{ children: '3-5 (Preschool + Kindergarten)' }} value='3-5' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                    <Checkbox label={{ children: '5-10 (Elementary School)' }} value='5-10' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                </Form.Field>

                                <Form.Field>
                                    <Checkbox label={{ children: '10-14 (Middle School)' }} value='10-14' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing pull-left"/>
                                    <Checkbox label={{ children: '14-18 (Highschool)' }} value='14-18' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing"/>
                                    <Checkbox label={{ children: '18-25 (Adults)' }} value='18-25' onChange={this.handleAgeChange} checked={checkStatus} className="check-box-spacing pull-right"/>
                                </Form.Field>
                            </Form>

                            <h3>Do you have children that are of working age, That are not currently working?</h3>
                            <Form>
                                <Form.Field>
                                    <Radio
                                        label='Yes'
                                        name='radioGroup'
                                        value='true'
                                        checked={this.state.childrenOfWorkingAge === 'true'}
                                        onChange={this.handleChildrenOfWorkingAge}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <Radio
                                        label='No'
                                        name='radioGroup'
                                        value='false'
                                        checked={this.state.childrenOfWorkingAge === 'false'}
                                        onChange={this.handleChildrenOfWorkingAge}
                                    />
                                </Form.Field>
                            </Form>


                            <h3>Do you have children of college age, planning or going to college?</h3>
                            <Form>
                                <Form.Field>
                                    <Radio
                                        label='Yes'
                                        name='radioGroup'
                                        value='true'
                                        checked={this.state.childrenOfCollegeAge === 'true'}
                                        onChange={this.handleChildrenOfCollegeAge}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <Radio
                                        label='No'
                                        name='radioGroup'
                                        value='false'
                                        checked={this.state.childrenOfCollegeAge === 'false'}
                                        onChange={this.handleChildrenOfCollegeAge}
                                    />
                                </Form.Field>
                            </Form>



                            <h3>Do you have any children involved in the Juvenile Justice System?</h3>
                            <Form>
                                    <Form.Field>
                                        <Radio
                                            label='Yes'
                                            name='radioGroup'
                                            value='true'
                                            checked={this.state.childrenInJusticeSystem === 'true'}
                                            onChange={this.handleChildrenInJusticeSystem}
                                        />
                                    </Form.Field>

                                    <Form.Field>
                                        <Radio
                                            label='No'
                                            name='radioGroup'
                                            value='false'
                                            checked={this.state.childrenInJusticeSystem === 'false'}
                                            onChange={this.handleChildrenInJusticeSystem}
                                        />
                                </Form.Field>
                            </Form>


                        <h3>Do you have any children involved in the Foster Care System?</h3>
                        <Form>
                            <Form.Field>
                                <Radio
                                    label='Yes'
                                    name='radioGroup'
                                    value='true'
                                    checked={this.state.childrenInFosterCare === 'true'}
                                    onChange={this.handleChildrenInFosterCare}
                                />

                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='No'
                                    name='radioGroup'
                                    value='false'
                                    checked={this.state.childrenInFosterCare === 'false'}
                                    onChange={this.handleChildrenInFosterCare}
                                />
                            </Form.Field>
                        </Form>


                        <h3>Do you have any children with disabilities?</h3>
                        <Form>
                            <Form.Field>
                                <Radio
                                    label='Yes'
                                    name='radioGroup'
                                    value='true'
                                    checked={this.state.childrenWithDisabilties === 'true'}
                                    onChange={this.handleChildrenWithDisabilties}
                                />

                            </Form.Field>

                            <Form.Field>
                                <Radio
                                    label='No'
                                    name='radioGroup'
                                    value='false'
                                    checked={this.state.childrenWithDisabilties === 'false'}
                                    onChange={this.handleChildrenWithDisabilties}
                                />
                            </Form.Field>


                            <Form.Field>
                                <Radio
                                    label='Prefer not to disclose'
                                    name='radioGroup'
                                    value='Prefer not to disclose'
                                    checked={this.state.childrenWithDisabilties === 'Prefer not to disclose'}
                                    onChange={this.handleChildrenWithDisabilties}
                                />
                            </Form.Field>
                        </Form>

                    </div>


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

                    <div style={showWorking} className="push-right">


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


                    <h3>Are you interested in receiving Training?</h3>
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


                    <h3> Is there anyone else in the household jobless? </h3>
                    <Form>
                        <Form.Field>
                            <Radio
                                label='Yes'
                                name='radioGroup'
                                value='true'
                                checked={this.state.othersJobless === 'true'}
                                onChange={this.handleOthersJobless}
                            />
                        </Form.Field>

                        <Form.Field>
                            <Radio
                                label='No'
                                name='radioGroup'
                                value='false'
                                checked={this.state.othersJobless === 'false'}
                                onChange={this.handleOthersJobless}
                            />
                        </Form.Field>

                    </Form>

                </div>

                <h3>Question 3</h3>
                <Form>
                    <Form.Field className="">
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


                <h3>Question 5</h3>
                <Form>
                    <Form.Field>
                        <h3>Do you or any of the adults in your immediate family have a disability</h3>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.adultWithDisability === 'true'}
                            onChange={this.handleAdultDisabilityChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.adultWithDisability === 'false'}
                            onChange={this.handleAdultDisabilityChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Prefer not to disclose'
                            name='radioGroup'
                            value='Prefer not to disclose'
                            checked={this.state.adultWithDisability === 'Prefer not to disclose'}
                            onChange={this.handleAdultDisabilityChange}
                        />
                    </Form.Field>

                </Form>


                <h3>Question 6</h3>
                <Form>

                    <Form.Field>
                        <h3>Are you or someone in your immediate family a senior citizen?</h3>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.seniorCitizen === 'true'}
                            onChange={this.handleSeniorCitizenChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.seniorCitizen === 'false'}
                            onChange={this.handleSeniorCitizenChange}
                        />
                    </Form.Field>

                </Form>


                <h3>Question 7</h3>
                <Form>

                    <Form.Field>
                    <h3>Are you or someone in your immediate family a teacher?</h3>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.teacher === 'true'}
                            onChange={this.handleTeacherChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.teacher === 'false'}
                            onChange={this.handleTeacherChange}
                        />
                    </Form.Field>

                </Form>


                <h3>Question 8</h3>
                <Form>
                    <Form.Field>
                        <h3>Would you like to include organizations that offer services to the LGBTQIA community</h3>
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='true'
                            checked={this.state.LGBTQIA === 'true'}
                            onChange={this.handleLGBTQIAChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='false'
                            checked={this.state.LGBTQIA === 'false'}
                            onChange={this.handleLGBTQIAChange}
                        />
                    </Form.Field>

                </Form>

                <br/>

                <Input label='  Zip  ' placeholder='please enter a 6 digit zip code' onChange={this.handleZipChange} />

                <br/>
                <br/>

                <Button basic color='black' onClick={this.handleSubmit}> Submit </Button>



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