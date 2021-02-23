import React, { useEffect, useState } from 'react'
import { WebView, WebViewProps } from 'react-native-webview'

type Props = {
	checkoutUrl: string,
	uiSettings: object,
	props: object,
}

export const PayoutPayment: React.FC<Props> = ({checkoutUrl, uiSettings, props}) => {

	const [uri, setUri] = useState(null)

	useEffect(()=>{
		const enhancedUri = processUiSettings(uiSettings)
		setUri((checkoutUrl + enhancedUri) as React.SetStateAction<any>)
	},[])

	const processUiSettings = (uiSettings: any) => {
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
		<WebView source={ { uri: uri } as any } {...props} />
	)
}
