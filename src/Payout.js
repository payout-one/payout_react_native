import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'

const PayoutPayment = ({checkoutUrl, uiSettings}) => {

	const [uri, setUri] = useState(null)

	useEffect(()=>{
		const enhancedUri = processUiSettings(uiSettings)
		setUri(checkoutUrl + enhancedUri)
	},[])

	const processUiSettings = (uiSettings) => {
		if (Object.keys(uiSettings).length === 0) {
			return ''
		}
		let index = 0
		let params = '?'
		for (let key in uiSettings) {
			if (uiSettings.hasOwnProperty(key)) {
				index += 1
				params = params + key + '=' + encodeURIComponent(uiSettings[key])
				if (index !== Object.keys(uiSettings).length) {
					params = params + '&'
				}
			}
		}

		return params
	}

	return (
		<WebView source={ { uri: uri } } />
	)
}

export default PayoutPayment