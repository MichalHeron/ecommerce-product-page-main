import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import React from 'react'
import Navigation from './components/Navigation'
import ProductPreview from './components/ProductPreview'
import ImageProvider from './components/context/imgProvider'
import ProductDescription from './components/ProductDescription'
import ProductsProvider from './components/context/databaseofProductsProvider'

function App() {
	return (
		<div className='App position-relative'>
			<ImageProvider>
				<ProductsProvider>
					<Navigation />					
					<ProductPreview />
					<ProductDescription />
				</ProductsProvider>
			</ImageProvider>
		</div>
	)
}

export default App
