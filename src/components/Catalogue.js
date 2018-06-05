import React from 'react';
import ReactDOM from 'react-dom';
import Program from './Program';
import { Image, Item, Responsive, Segment } from 'semantic-ui-react'

import catalogueData from "../api/contacts.json";


class Catalogue extends React.Component {


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



    render() {

        console.log(this.state.programs);
        var programs = this.state.programs.contacts;
        console.log("programs: " + programs);
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
                                        count={index + 1}
                                    />
                                ))
                            }
                        </Item.Group>

                    </Segment.Group>



                </div>

            );
        }
}


export default Catalogue;