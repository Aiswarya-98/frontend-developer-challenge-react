import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Main1 from "./Main1"
import Main2 from "./Main2"

function Main() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4} style={{ marginTop: "30px" }}>
            <Main1 />
          </Col>

          <Col sm={8} style={{ marginTop: "30px" }}>
            <Main2 />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
