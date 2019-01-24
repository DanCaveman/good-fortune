import React from 'react';
import { Grid, Col, Row, Button, Glyphicon } from 'react-bootstrap';

import "../styles/global.scss";

const createColum = (index) => {
    return <Col sm={3} className="border">This is column {index + 1}</Col>;
};
const createColums = (columnCount) =>{
    var columns = [];
    for(var i=0; i < columnCount; i++){
        columns.push(createColum(i));
    }

    return columns;
};

const CrystalBall = () =>{
    return (

        <div className="border">
            <div className="page-header border"><h3>Crystal Ball Container</h3> </div>
            <Button bsSize="large">
                <Glyphicon glyph="plus-sign" />
            </Button>
            <div className="container-fluid border border-danger">
                <Row className="show-grid border" >
                    {createColums(20)}                 
                </Row>
            </div>
        </div>
    );
};

export default CrystalBall;