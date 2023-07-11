import React from 'react'
import { Container, Navbar} from 'react-bootstrap'
import imgFb from '../images/facebook-official.png'
import imgTwit from '../images/twitter.png'

const Footers = () => {
    return (
        <Navbar expand="lg" className="bg-secondary">
            <Container>
                <div className='d-flex flex-column align-items-center mx-auto text-white'>
                    <p>COPYRIGHT 2023.PT Company</p>
                    <div className='d-flex justify-content-center'>
                        <img src={imgFb} style={{ width: "24px" }} alt="Facebook" />
                        <img src={imgTwit} style={{ width: "24px", marginLeft: "10px" }} alt="Twitter" />
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footers;