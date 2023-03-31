import React, { useContext, useState } from 'react'
import { Image } from 'react-bootstrap'
import { ImageContext } from './context/imgProvider'
import '../css/productPreview.css'
import Button from 'react-bootstrap/Button'
import { ProductsContext } from './context/databaseofProductsProvider'

export default function ProductPreview() {
	const { products } = useContext(ProductsContext)
	const { prevNext} = useContext(ImageContext)
	const [preview, setPreview] = useState(products.product1.image.image1)

	function handleClickPrev() {
		const i = preview.substring(28, 29)
		if (i == 2) setPreview(products.product1.image.image1)
		if (i == 1) setPreview(products.product1.image.image4)
		if (i == 3) setPreview(products.product1.image.image2)
		if (i == 4) setPreview(products.product1.image.image3)
	}
	function handleClickNext() {
		const i = preview.substring(28, 29)
        if (i == 1) setPreview(products.product1.image.image2)
		if (i == 2) setPreview(products.product1.image.image3)
		if (i == 3) setPreview(products.product1.image.image4)
		if (i == 4) setPreview(products.product1.image.image1)
	}

	return (
		<div className='position-relative'>
			<Button className='prevNextBtn prevNextBtn--prev d-md-none' variant='light' size='lg' onClick={() => handleClickPrev()}>
				<Image src={prevNext.previousIcon}></Image>
			</Button>
			<Button className='prevNextBtn prevNextBtn--next d-md-none' variant='light' size='lg' onClick={() => handleClickNext()}>
				<Image src={prevNext.nextIcon}></Image>
			</Button>
			<Image className='productPreview' src={preview}></Image>

		</div>
	)
}
