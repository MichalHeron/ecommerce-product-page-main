import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Image } from 'react-bootstrap'
import '../css/navigation.css'
import { ImageContext } from './context/imgProvider'
import { ProductsContext } from './context/databaseofProductsProvider'
import CartPreview from './Cart'

export default function Navigation() {
	const { avatarIcon, cartIcon } = useContext(ImageContext)
	const { cartShow, setCartShow, itemsInBasket } = useContext(ProductsContext)

	function HandleShowCart() {
		setCartShow(!cartShow)
	}
	return (
		<Container>
			<Navbar bg='white' expand={'md'}>
				<Navbar.Toggle toggle='true' aria-controls={`offcanvasNavbar-expand-md`} />
				<Navbar.Brand href='#' className='me-auto'>
					sneakers
				</Navbar.Brand>
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-md`}
					aria-labelledby={`offcanvasNavbarLabel-expand-md`}
					placement='start'
					className='menuMobile'>
					<Offcanvas.Header closeButton className='mt-2'></Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className='justify-content-start me-auto'>
							<Nav.Link href='#action1'>Collection</Nav.Link>
							<Nav.Link href='#action2'>Men</Nav.Link>
							<Nav.Link href='#action3'>Women</Nav.Link>
							<Nav.Link href='#action4'>About</Nav.Link>
							<Nav.Link href='#action5'>Contact</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Nav className='justify-content-end flex-row'>
					<Nav.Link href='#actionCart' className='me-3  position-relative' onClick={() => HandleShowCart()}>
						<Image className='cart' src={cartIcon}></Image>
						{itemsInBasket == 0 ? '' : <div className='itemsAmountCart position-absolute'>1</div>}
					</Nav.Link>
					<Nav.Link href='#actionAvatar'>
						<Image className='avatar' src={avatarIcon}></Image>
					</Nav.Link>
				</Nav>
			</Navbar>
			<hr
				className='d-md-block d-none m-0'
				style={{
					color: 'gray',
					backgroundColor: 'gray',
					height: 1,
					width: '100%',
				}}
			/>
			{cartShow ? <CartPreview /> : ''}
		</Container>
	)
}
