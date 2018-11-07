import React from "react";
import{ Button } from "react-bootstrap";

const FaveButt =(props)=>(
        <Button onClick={props.onClick} bsStyle="warning" bsSize="xsmall" active>
          Favorite
         </Button>
)
export default FaveButt;

