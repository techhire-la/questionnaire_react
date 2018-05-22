import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Header } from 'semantic-ui-react'



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

                <Grid>
                    <Grid.Column only='computer' computer={5}>
                        <Header>Articles</Header>
                    </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                        <p> Thing 2 </p>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <p>thing 1</p>
                     </Grid.Column>

                    <Grid.Column only='mobile tablet' mobile={16} tablet={16}>
                        <Header>Articles</Header>
                    </Grid.Column>
                </Grid>


            </div>

    );
    }
}


export default FilterForm;