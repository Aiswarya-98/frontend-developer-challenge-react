import React, { useState } from "react"
import icon from "../../Assets/pro-icon.png"
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse } from "mdb-react-ui-kit"
import Main from "../Main/Main"

function Section() {
  const [openNavCentred, setOpenNavCentred] = useState(false)

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light" style={{ height: "70px" }}>
        <MDBContainer fluid>
          <MDBNavbarToggler type="button" data-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setOpenNavCentred(!openNavCentred)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openNavCentred} center id="navbarCenteredExample" className="justify-content-center">
            <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0  justify-content-center ">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="#">
                  Dash board
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="#">
                  Products
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="#">
                  Transaction
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active href="#">
                  Journal
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>

          <div className="icon">
            <img src={icon} alt="icon" height={50} width={50} style={{ padding: "10px" }} />
          </div>
        </MDBContainer>
      </MDBNavbar>

      <Main />
    </>
  )
}

export default Section
