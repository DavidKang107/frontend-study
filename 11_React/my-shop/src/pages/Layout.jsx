import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home" onClick={() => navigate('/')}>정모네 샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/')}>홈</Nav.Link>
              <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Outlet />
      {/* 자식 텀포넌트가 렌더링 될 위치 */}
      <footer>
        <p className="py-5 bg-dark text-white">
          &copy; David Kang. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;