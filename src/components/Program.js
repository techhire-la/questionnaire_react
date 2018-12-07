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
                        <Form.Checkbox label={{ children: props.programEmail }} value={props.programEmail} onChange={props.updateEmailList} className="check-box-spacing"/>
                    </Form.Field>
                </Form>

                <Item.Extra> <strong>Phone Number :</strong> {props.programPhone} </Item.Extra>
                <Item.Extra> <strong>Accepts Referrals? : </strong>{props.programAcceptReferrals} </Item.Extra>
                <Item.Extra> <strong>Description : </strong>{props.programDescription} </Item.Extra>
                <Item.Extra> <strong>Services Offered : </strong>{props.programServices} </Item.Extra>
                <Item.Extra> <strong>Population Served : </strong>{props.programPopulationServed} </Item.Extra>
                <Item.Extra> <strong>Eligibility Requirements : </strong>{props.programEligibility} </Item.Extra>
                <Item.Extra> <strong>Only Offered At Program Site : </strong>{props.programOnSite} </Item.Extra>
                <Item.Extra> <strong>Location:</strong> {props.programLocation} </Item.Extra>


            </Item.Content>
        </Responsive>
        <hr/>
    </div>


);



export default Program;
