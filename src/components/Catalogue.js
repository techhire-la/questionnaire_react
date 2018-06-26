import React from 'react';
import ReactDOM from 'react-dom';
import Program from './Program';
import { Image, Item, Responsive, Segment , Form, Button, } from 'semantic-ui-react'

import catalogueData from "../api/contacts.json";
import $ from 'jquery';

class Catalogue extends React.Component {

    state = {
        programs: [],
        emails: [],
        willReceive: this.props.truthyArray || []
    };

    componentWillMount = () => {

        // console.log(catalogueData.length)

        this.setState({ programs: catalogueData.contacts});
        console.log("willReceive state in Will Mount " + this.state.willReceive);

    }


    componentWillReceiveProps = (newProps) => {

        this.setState({programs: newProps.filteredList});

    }


    handleEmailList = (e, {value}) => {

        var matchIndex = undefined

        for(var i = 0 ; i <= this.state.emails.length ; i++) {

            var array = this.state.emails

            if (value === array[i]) {
                console.log("value " + value + " is being compared to array element " + array[i] );
                matchIndex = array.indexOf(value);
                console.log("Index value saved as " + matchIndex )
            }

        }

        if ((matchIndex != undefined ) && (matchIndex > -1)) {
            array.splice(matchIndex, 1);
            this.setState({ emails: array });
            console.log("State after splice: " + this.state.emails);


        } else {
            array.push( value );
            console.log("Array with new pushed value: " + array);
            this.setState({ emails: array });
            console.log("State after push: " + this.state.emails);
        }

    };




    handleEmail = (event) => {

        event.preventDefault(); // prevent reload
        console.log("handleEmail");

        // debugger

        var searchIDs = $("input[type='checkbox']:checked").map(function () {
            return $(this).val();
        }).get(); // <----
        console.log("SEARCH ID's: " + searchIDs);
        console.log("EmailList Value " + document.getElementById("emaillist").value)
        document.getElementById("emaillist").value = searchIDs;

        var that = document.getElementById('email')
        console.log("that: " + that)

        // var formData = new FormData(this);
        var formData = new FormData(that);

        formData.append('service_id', 'default_service');
        formData.append('template_id', 'email_blast');
        formData.append('user_id', 'user_NT8KduLVWnsRhOfMwJEB8');
        // formData.append('user_id', EMAIL_JS_USER_ID);

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var senderemail = document.getElementById("senderemail").value;
        var emaillist = document.getElementById("emaillist").value;

        formData = {
            "service_id": "default_service",
            "template_id": "email_blast",
            "user_id": "user_NT8KduLVWnsRhOfMwJEB8"//,
            // 'firstname': firstname,
            // 'lastname': lastname,
            // 'phonenumber': phonenumber,
            // 'senderemail': senderemail,
            // 'emaillist': emaillist
        };

        // emailjs.sendForm('contact_service', 'contact_form', this);



        var dataForm = {
            "firstname": firstname,
            "lastname": lastname,
            "phonenumber": phonenumber,
            "senderemail": senderemail,
            "emailto": emaillist
        }

        console.log("formData: " + formData);

        console.log("dataForm: " + dataForm)

        // data: {
        //     'service_id': 'default_service',
        //     'template_id': 'email_blast',
        //     'user_id': 'user_NT8KduLVWnsRhOfMwJEB8'
        // },


        //simple way /////////////////////////////////////////////////////////////
        emailjs.send("default_service", "email_blast", dataForm)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your email has been sent")
            }, function(error) {
                console.log('FAILED...', error);
                alert("There was an error processing your emails")
            });

        //slightly less simple way /////////////////////////////////////////////////////////////
        // emailjs.sendForm("default_service", "email_blast", "#email").then(function(response) {
        //     console.log('SUCCESS!', response.status, response.text);
        // }, function(error) {
        //     console.log('FAILED...', error);
        // });

        // API way /////////////////////////////////////////////////////////////
        // $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        //     type: 'POST',
        //     data: formData,
        //
        //     contentType: false, // auto-detection
        //     processData: false // no need to parse formData to string
        // }).done(function() {
        //     alert('Your mail is sent!');
        //
        // }).fail(function(error) {
        //     console.log('Oops... ' + JSON.stringify(error.responseText));
        //     alert('Oops... ' + JSON.stringify(error));
        // });


    }



    render() {

        var programs = this.state.programs;

        return (

                <div className="ui filterContainer catalogue_items">

                    <Segment.Group>

                        <Item.Group>
                            {
                                programs.map((program, index) => (
                                    <Program
                                        key={index}
                                        programName={program.name}
                                        programEmail={program.email}
                                        programPhone={program.phonenumber}
                                        updateEmailList = {this.handleEmailList}
                                        count={index + 1}
                                    />
                                ))
                            }
                        </Item.Group>

                    </Segment.Group>


                    <Form>

                        <Form.Group widths='equal'>

                            <Form.Input fluid label='First Name' id="firstname" type="text" className="form-control" placeholder="First name" name="firstname"/>

                            <Form.Input fluid label='Last Name' id="lastname" type="text" className="form-control" placeholder="Last name" name="lastname"/>


                        </Form.Group>

                        <Form.Group widths='equal'>


                            <Form.Input fluid label='Your Email'  id="senderemail" type="email" className="form-control" placeholder="Email" name="senderemail"/>

                            <Form.Input fluid label='Phone Number' id="phonenumber" type="text" className="form-control" placeholder="Phone Number" name="phonenumber"/>


                        </Form.Group>

                        <Form.Group widths='equal'>

                            <Form.Input fluid label='Email List' id="emaillist" type="email" className="form-control" placeholder="Email to 'CC'" name="emailto" value={this.state.emails}/>

                        </Form.Group>

                        <Button basic color='black' onClick={this.handleEmail}> Submit </Button>

                    </Form>

                </div>



            );
        }
}


export default Catalogue;


