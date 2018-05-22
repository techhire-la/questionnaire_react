import React from 'react';
import ReactDOM from 'react-dom';



class FilterForm extends React.Component {




    render() {

        let showNew = ""
        let showAll = ""
        if(this.props.toggle){
            showNew = {display: 'none' }
            showAll = {display: 'block' }
        }else{
            showNew = {display: 'block' }
            showAll = {display: 'none' }
        }

        return (

            <div className="container">


                <h3>Your FilterForm is here</h3>
                <p>Red Text</p>




            </div>

    );
    }
}


export default FilterForm;