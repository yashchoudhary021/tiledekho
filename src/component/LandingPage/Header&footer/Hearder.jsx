import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">TileDekho</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href='/login'>Login/Sign Up</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;