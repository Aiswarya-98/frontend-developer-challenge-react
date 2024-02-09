import React from "react"
import { MDBContainer } from "mdb-react-ui-kit"
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit"
import { MDBCard, MDBCardBody, MDBCardTitle,  MDBCardImage, MDBBtn } from "mdb-react-ui-kit"
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"

function Main2() {
  return (
    <>
      <MDBContainer mt-5>
        <h2 style={{ textAlign: "center" }}>Unlock Premium New Features</h2>
        <hr style={{ width: "50px", height: "30px", marginLeft: "47%" }} />

        {/* carousel */}

        <MDBCarousel showIndicators showControls fade className="mt-5">
          <MDBCarouselItem itemId={1}>
            <Row>
              <Col>
                <MDBCard style={{ width: "250px", height: "300px" }}>
                  <MDBCardImage src={img1} position="top" alt="card1" height={200} width={170} />
                  <MDBCardBody>
                    <MDBCardTitle className="align-text-center">Lower Interest Rate</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </Col>

              <Col>
                <MDBCard style={{ width: "250px", height: "300px" }}>
                  <MDBCardImage src={img2} position="top" alt="card1" height={200} width={170} />
                  <MDBCardBody>
                    <MDBCardTitle className="align-text-center">Interest Free Payments</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </Col>

              <Col>
                <MDBCard style={{ width: "250px", height: "300px" }}>
                  <MDBCardImage src={img3} position="top" alt="card1" height={200} width={170} />
                  <MDBCardBody>
                    <MDBCardTitle className="align-text-center">Discount on Materials</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </MDBCarouselItem>
        </MDBCarousel>

        <MDBBtn outline rounded className=" col-7 mx-auto  mt-3" color="dark">
          UNLOCK NOW
        </MDBBtn>
        <MDBBtn outline rounded className=" col-4 mx-4  mt-3 " color="dark">
          DETAILS
        </MDBBtn>
      </MDBContainer>
    </>
  )
}

export default Main2
