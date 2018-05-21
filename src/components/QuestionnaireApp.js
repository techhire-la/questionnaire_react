import React from 'react';
import ReactDOM from 'react-dom';



class QuestionnaireApp extends React.Component {




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

        <div>
            <h1>Your QuestionnaireApp is here</h1>
            <button>Form</button>
            ||
            <button>Catalogue</button>

        </div>

        );
    }
}


export default QuestionnaireApp;