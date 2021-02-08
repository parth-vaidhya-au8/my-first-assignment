import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
           <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
             <Container>
             <a className="navbar-brand" href="/">
                <div className="logo-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHGolI6BOrdaa0Tw9z1HGah-5thHFLH3h-w&usqp=CAU" className="img-fluid" alt='' />
                </div>
            </a>
                <LinkContainer to='/'>
                <Navbar.Brand className='name'>Agventure</Navbar.Brand>
                </LinkContainer> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Route render={({ history }) => <SearchBox history={history} />} />  
                <Nav className="ml-auto">
                <LinkContainer to='/about'>   
                <Nav.Link><i className='aboutus'></i>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/cart'>   
                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                    <NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                ) : (<LinkContainer to='/login'>   
                <Nav.Link>
                    <i className='fas fa-user'></i> Login/SignUp
                </Nav.Link>
                </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                    <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                        <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                )}         
                </Nav> 
            </Navbar.Collapse>
             </Container>
            </Navbar> 
        </header>
    )
}

export default Header;
