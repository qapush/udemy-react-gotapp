import React from 'react';
import {Row, Col} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return(
            <Row className="mb-5">
                <Col md='6'>
                   {left}
                </Col>
                <Col md='6'>
                    {right}
                </Col>
            </Row>
    )
}

export default RowBlock;