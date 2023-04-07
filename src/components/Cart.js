import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { ImageContext } from './context/imgProvider'
import '../css/cart.css'
import { ProductsContext } from './context/databaseofProductsProvider'

function ItemBasket() {
	const { deleteIcon, image } = useContext(ImageContext)
	const { products, itemsInBasket, setItemsInBasket } = useContext(ProductsContext)
	function HandleDeleteitems() {
		setItemsInBasket(0)
	}
	return (
		<div className='d-flex'>
			<Image className=' imageProductCart rounded me-3' src={products.product1.image.image1Thumb}></Image>
			<div className='itemNamePriceContainer d-inline-block flex-grow-1'>
				<p>{products.product1.name}</p>
				<p>
					${products.product1.price} x {itemsInBasket} $
					<span className='priceRatio'>{products.product1.price * itemsInBasket}</span>
				</p>
			</div>
			<Image className='trash' src={deleteIcon} onClick={() => HandleDeleteitems()}></Image>
		</div>
	)
}

export default function CartPreview() {
	const { itemsInBasket } = useContext(ProductsContext)
	return (
		<div
			className='m-2 rounded position-absolute cart
    '>
			<p className='cartTitle container pt-3'>Cart</p>
			<div className='border-top border-2 horiLine'></div>
			{itemsInBasket == 0 ? (
				<p className='cartEmpty m-2'>Your cart is empty.</p>
			) : (
				<div className='cartNotEmpty container mt-3'>
					<ItemBasket />
					<Button className='checkoutBtn mb-3 mt-3'>Checkout</Button>
				</div>
			)}
		</div>
	)
}
