import React from 'react';
import ReactDOM from 'react-dom';
import Program from './Program';
import { Image, Item, Responsive, Segment , Button} from 'semantic-ui-react'

import catalogueData from "../api/contacts.json";
import $ from 'jquery';

class Catalogue extends React.Component {


    state = {
        programs: [],
        emails: []
    }

    componentWillMount = () => {

        this.setState({ programs: catalogueData})
        console.log(this.state.programs)

    // for(var i = 0; i < catalogueData.length; i++) {
    //
    //     var obj = catalogueData[i];
    //
    //     console.log("Name: " + obj.name + ", " + obj.zip);
    // }

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

        var formData = new FormData(this);
        formData.append('service_id', 'default_service');
        formData.append('template_id', 'email_blast');
        formData.append('user_id', EMAIL_JS_USER_ID);

        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
        }).done(function() {
            alert('Your mail is sent!');

        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });




    }



    render() {

        // console.log(this.state.programs);
        var programs = this.state.programs.contacts;
        // console.log("programs: " + programs);
        // debugger


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


                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="First name" name="firstname"/>
                        </div>

                        <div className="form-group col-md-6" name="lastname">
                            <input type="text" className="form-control" placeholder="Last name" name="lastname"/>
                        </div>

                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="senderemail"/>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" placeholder="Phone Number" name="phonenumber"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <input id="emaillist" type="email" className="form-control" placeholder="Email to 'CC'" name="emailto" value={this.state.emails}/>
                    </div>


                    <Button basic color='black' onClick={this.handleEmail}> Submit </Button>


                </div>

            );
        }
}


export default Catalogue;