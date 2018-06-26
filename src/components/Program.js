import React from 'react';
import ReactDOM from 'react-dom';
import { Image, Item, Responsive, Segment, Form, Radio, Checkbox } from 'semantic-ui-react'



const Program = (props) => (

    <div className="row">
        <Responsive as={Segment}>
            <Item.Content>
                <h2><Item.Header as='a'>{props.programName}</Item.Header></h2>
                <Form>
                    <Form.Field>
                        <Checkbox label={{ children: props.programEmail }} value={props.programEmail} onChange={props.updateEmailList} className="check-box-spacing"/>
                    </Form.Field>
                </Form>
                <Item.Description> {props.programEmail} </Item.Description>
                <Item.Extra> {props.programPhone} </Item.Extra>
            </Item.Content>
        </Responsive>
        <hr/>
    </div>


);



export default Program;
