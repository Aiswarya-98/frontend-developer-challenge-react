import React from "react"
import { MDBContainer } from "mdb-react-ui-kit"
import { MDBRipple } from "mdb-react-ui-kit"
import membership from "../../Assets/membership.jpg"
import { MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"

function Main1() {
  return (
    <>
      <MDBContainer mt-5>
        <h2>New Arrival</h2>
        <h5>Join Today</h5>
        <hr style={{ width: "50px", height: "30px" }} />
        <MDBRipple rippleTag="a">
          <img src={membership} className="img-fluid rounded-2 " alt="example" style={{ height: "300px", border: "none" }} />
        </MDBRipple>
        <br />

        <Link to={"/design2"}>
          {" "}
          <MDBBtn outline rounded className=" col-7 mx-auto  mt-3 " color="dark">
            JOIN NOW{" "}
          </MDBBtn>
        </Link>
      </MDBContainer>
    </>
  )
}

export default Main1
