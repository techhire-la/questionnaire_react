import React from 'react';
import ReactDOM from 'react-dom';
import { Image, Item, Responsive, Segment } from 'semantic-ui-react'



const Program = (props) => (

    <div className="">
        <Responsive as={Segment}>
            <Item.Content>
                <Item.Header as='a'>{props.programName}</Item.Header>
                <Item.Description> {props.programEmail} </Item.Description>
                <Item.Extra> {props.programPhone} </Item.Extra>
            </Item.Content>
        </Responsive>
        <hr/>
    </div>


);



export default Program;
