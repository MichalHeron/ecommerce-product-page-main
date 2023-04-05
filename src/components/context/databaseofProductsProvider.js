import React, { useState } from 'react'

import product1Thumb from '../../images/image-product-1-thumbnail.jpg'
import product1 from '../../images/image-product-1.jpg'
import product2Thumb from '../../images/image-product-2-thumbnail.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3Thumb from '../../images/image-product-3-thumbnail.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4Thumb from '../../images/image-product-4-thumbnail.jpg'
import product4 from '../../images/image-product-4.jpg'

export const ProductsContext = React.createContext()

const ProductsProvider = ({ children }) => {
	const [cart, setCart] = useState(0)
	const [itemsInBasket, setItemsInBasket] = useState(0)
	const [cartShow, setCartShow] = useState(false)
	const value = {
		itemsInBasket: itemsInBasket,
		setItemsInBasket: itemsInBasket => setItemsInBasket(itemsInBasket),
		cart: cart,
		setCart: cart => setCart(cart),
		cartShow: cartShow,
		setCartShow: cartShow => setCartShow(cartShow),
		products: {
			product1: {
				name: 'Fall Limited Edition Sneakers',
				description:
					"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
				image: {
					image1Thumb: product1Thumb,
					image1: product1,
					image2Thumb: product2Thumb,
					image2: product2,
					image3Thumb: product3Thumb,
					image3: product3,
					image4Thumb: product4Thumb,
					image4: product4,
				},
				price: 125.0,
				discount: '50%',
				oldPrice: '$250.00',
			},
		},
	}
	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export default ProductsProvider
