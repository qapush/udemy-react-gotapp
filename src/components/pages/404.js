import React from "react";
import { Col, Row, Alert, Button } from "reactstrap";
import { Link } from "react-router-dom";

const LostPage = () => {
  return (
    <Row>
      <Col className="text-center" xs="12">
        <Alert color="warning">Page doesn't exist</Alert>
      </Col>
      <Col className="text-center" xs="12">
        <Link to="/">
          <Button color="success">Back to homepage</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default LostPage;
