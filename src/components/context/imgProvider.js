import React from 'react'

import cart from '../../images/icon-cart.svg'
import deleteIcon from '../../images/icon-delete.svg'
import minus from '../../images/icon-minus.svg'
import plus from '../../images/icon-plus.svg'
import next from '../../images/icon-next.svg'
import previous from '../../images/icon-previous.svg'
import avatar from '../../images/image-avatar.png'

export const ImageContext = React.createContext()

const ImageProvider = ({ children }) => {
	const value = {
		cartIcon: cart,
		deleteIcon: deleteIcon,
		minusIcon: minus,
		plusIcon: plus,
		avatarIcon: avatar,
		prevNext: {
			nextIcon: next,
			previousIcon: previous,
		},

	}
	return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}

export default ImageProvider
