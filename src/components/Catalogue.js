import React from 'react';
import ReactDOM from 'react-dom';
import Program from './Program';
import { Image, Item } from 'semantic-ui-react'

import catalogueData from "../api/contacts.json";


class Catalogue extends React.Component {

// > programs.contacts[i].name
//     'YouthWorks'
// > programs.contacts[i].email
//     'mhernandez@ypiusa.org'
// > programs.contacts[i].phone

    state = {
        programs: []
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

    // setInitialState = () => {
    //
    //     this.setState({ programs: catalogueData})
    //     console.log(this.state.programs)
    //
    // }



    render() {

        console.log(this.state.programs);
        var programs = this.state.programs.contacts;
        console.log("programs: " + programs);
        // debugger


        return (

                <div className="ui filterContainer">

                    <Item.Group>
                        {
                            programs.map((program, index) => (
                                <Program
                                    key={index}
                                    programName={program.name}
                                    programEmail={program.email}
                                    programPhone={program.phonenumber}
                                    count={index + 1}
                                />
                            ))
                        }
                    </Item.Group>


                </div>

            );
        }
}


export default Catalogue;