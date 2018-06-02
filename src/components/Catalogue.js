import React from 'react';
import ReactDOM from 'react-dom';

// import catalogueData from "./contacts2.json";
import catalogueData from "../api/contacts2.json";

var $ = require ('jquery')

// const services = "./api/contacts"
class Catalogue extends React.Component {

    state = {
        color: 'blue',
        services: []
    }

    componentDidMount = () => {
        // $.getJSON('/api/contacts.json', (response) => {this.setState({services: response})})
        // // $.getJSON('./contacts2.json', (response) => {this.setState({services: response})})

        this.setState({ services: catalogueData})
        console.log(this.state.services)
        // for(var i = 0; i < catalogueData.length; i++) {
        //
        //     var obj = catalogueData[i];
        //
        //     console.log("Name: " + obj.name + ", " + obj.zip);
        // }
    }



    render() {

        console.log(this.state.services)
        console.log(this.state.color)

        return (

            <div>


            <h3>I am your Catalogue</h3>


            </div>

        );
    }
}


export default Catalogue;