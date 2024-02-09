import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import celeb from "../../Assets/celeb.png"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import { MDBBtn } from "mdb-react-ui-kit"

function Design2() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row style={{ marginTop: "30px" }}>
          <Col sm={1}></Col>
          <Col sm={6}>
            <Container>
              <h1>Unlock Exclusive Benefits</h1>
              {/* form */}

              {/* phone number */}
              <FloatingLabel controlId="floatingInput" label="PHONE NUMBER" className="mb-3 mt-5 ">
                <Form.Control type="text" placeholder="9874563210" />
              </FloatingLabel>

              {/* name */}

              <FloatingLabel controlId="floatingInput" label="NAME" className="mb-3">
                <Form.Control type="text" placeholder="9874563210" />
              </FloatingLabel>

              {/* email address */}

              <FloatingLabel controlId="floatingInput" label="EMAIL ADDRESS" className="mb-3">
                <Form.Control type="email" placeholder="9874563210" />
              </FloatingLabel>

              <MDBBtn outline rounded className=" col-12 mx-auto  mt-3" color="dark">
                CONTINUE
              </MDBBtn>

              <h6>Get ready to receive a secret code [OTP] on your phone</h6>
            </Container>
          </Col>

          <Col sm={5}>
            <img src={celeb} alt="celeb" height={400} width={500} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Design2
