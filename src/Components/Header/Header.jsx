import React from "react"
import logo from "../../Assets/real-estate-house.png"
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <MDBNavbar light bgColor="secondary" style={{ marginTop: "5px", height: "80px" }}>
        <MDBContainer fluid>
          <Link to={"/"}>
            <MDBNavbarBrand href="#">
              <img src={logo} height="80" alt="" loading="lazy" />
              XYZ SOLUTION LLP.
            </MDBNavbarBrand>
          </Link>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
