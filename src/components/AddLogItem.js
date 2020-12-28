// rafce = snippet shortcut for this code structure
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddLogItem = () => {
  /*******************************************************
  Private Data
  *******************************************************/
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState("");
  /*******************************************************
  Output
  *******************************************************/
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="log"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLogItem;
