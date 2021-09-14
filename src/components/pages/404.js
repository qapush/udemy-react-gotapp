import React from "react";
import { Col, Row, Alert, Button } from "reactstrap";
import { Link } from "react-router-dom";

const LostPage = () => {
  return (
    <Row>
      <Col className="text-center" xs="12">
        <Alert color="warning">Такой страницы не существует</Alert>
      </Col>
      <Col className="text-center" xs="12">
        <Link to="/">
          <Button color="success">На главную</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default LostPage;
