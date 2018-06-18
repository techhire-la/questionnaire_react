import React from 'react';
import ReactDOM from 'react-dom';
import Program from './Program';
import { Image, Item, Responsive, Segment , Button} from 'semantic-ui-react'

import catalogueData from "../api/contacts.json";
import $ from 'jquery';

class Catalogue extends React.Component {


    state = {
        programs: [],
        emails: [],
        willReceive: []
    };

    componentWillMount = () => {

        // console.log(catalogueData.length)

        this.setState({ programs: catalogueData});

    }

    // shouldComponentUpdate(nextProps) {
    //     this.setState({ willReceive: nextProps.truthyArray});
    //     console.log("Should Component Update");
    //     console.log("willReceive State: " + this.state.willReceive);
    //     // return this.state.willReceive !== nextProps.truthyArray;
    // }

    receiveTruthyArray = () => {

        console.log("This is the receive truthy array function " + this.props.truthyArray);

    };

    // componentDidUpdate = (props) => {
    componentWillReceiveProps = (newProps) => {
        // this.setState({ willReceive: this.props.truthyArray})

        // console.log("Will Receive: " + this.state.willReceive)
        debugger
        var filteredProgramArray = [];
        this.setState({ willReceive: newProps.truthyArray});


        // if (props.truthyArray !== this.state.willReceive) {
        //     this.setState({value: props.willReceive})
        // }


        // console.log("propsBoi: " + props.truthyArray)

        // console.log("willReceive State: " + this.state.willReceive)

        // console.log("catalogue data below");
        // console.log(catalogueData)

        // if(this.props.truthyArray === []) {
        if(this.props.truthyArray.length !== 0) {
        // if(this.state.willReceive.length !== 0) {

            // console.log("this.props.truthyArray: " + this.props.truthyArray);

            console.log("Should be hitting the IF here");

            var contacts = catalogueData.contacts ;

            for (var i = 0 ; i <= contacts.length ; i++){


                for (var key in contacts[i]) {
                    ///////////// working may need to be false /////////////////////////
                    if (contacts[i].hasOwnProperty(key)) {

                        // console.log("formState value: " + formState[key]);

                        filteredProgramArray.push(contacts[i])
                        // console.log("ARRAY OF TRUTH: " + arrayOfTruth);
                    }
                }


            }

        }else{

            console.log("hitting an else for some reason")
            // console.log("this.props.truthyArray: " + this.props.truthyArray)





        }


        console.log("FilteredProgramArray: " + filteredProgramArray);




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
            }, function(error) {
                console.log('FAILED...', error);
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
        console.log("truthy array length: " + this.props.truthyArray.length)
        // console.log("truthyArray props: " + this.props.truthyArray);
        if(this.props.truthyArray.length === 0) {
            var sayWhat = "Saaaaaay WHAAAAAAAT"
        }else{
            var sayWhat = "WHOOO DAT BOI"
        }
        // console.log(this.state.programs);
            // console.log("Rendered clientAge in Catalogue: " + this.props.clientAge)
            // console.log("Rendered Truthy Array in Catalogue: " + this.props.truthyArray)
        var programs = this.state.programs.contacts;
        // console.log("programs: " + programs);
        // debugger


        return (

                <div className="ui filterContainer catalogue_items">

                    <h1>{sayWhat}</h1>
                    <h3>{this.state.willReceive}</h3>

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



                    <form id="email" method="POST">
                        <div id="resultstest">
                            <table className="table table-hover table-dark table-responsive" id="#message">
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <input id="firstname" type="text" className="form-control" placeholder="First name" name="firstname"/>
                            </div>

                            <div className="form-group col-md-6" name="lastname">
                                <input id="lastname" type="text" className="form-control" placeholder="Last name" name="lastname"/>
                            </div>

                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <input  id="senderemail" type="email" className="form-control" placeholder="Email" name="senderemail"/>
                            </div>
                            <div className="form-group col-md-4">
                                <input id="phonenumber" type="text" className="form-control" placeholder="Phone Number" name="phonenumber"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <input id="emaillist" type="email" className="form-control" placeholder="Email to 'CC'" name="emailto" value={this.state.emails}/>
                        </div>


                        <Button basic color='black' onClick={this.handleEmail}> Submit </Button>

                    </form>
                </div>



            );
        }
}


export default Catalogue;


