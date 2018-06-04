import React from 'react';
import ReactDOM from 'react-dom';

import catalogueData from "../api/contacts.json";


class Catalogue extends React.Component {

    state = {
        programs: []
    }

    componentDidMount = () => {

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

        console.log(this.state.services)

        return (

            <div>


            <h3>I am your Catalogue</h3>


            </div>

        );
    }
}


export default Catalogue;