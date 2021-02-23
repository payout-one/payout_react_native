import React, { useEffect, useState } from 'react'
import { WebView, WebViewProps } from 'react-native-webview'

export type UiSettings = {
	color?: string,
	anchor_color?: string,
	background_color?: string,
	form_background_color?: string,
	form_border_radius?: number,
	form_border_color?: string,
	form_border_size?: number,
	form_no_margin?: boolean
	remove_header?: boolean,
	remove_footer?: boolean,
	show_card_payment?: boolean
	show_online_payment?: boolean,
	show_bank_payment?: boolean,
	button_color?: string,
	button_background_color?: string,
	button_border_size?: number,
	button_border_color?: string,
	button_border_radius?: number,
	button_hover_background_color?: string,
	button_hover_border_color?: string,
	button_hover_color?: string,
	input_color?: string,
	input_background_color?: string,
	input_border_radius?: number,
	input_border_color?: string,
	input_border_size?: number
}

type Props = {
	checkoutUrl: string,
	uiSettings?: UiSettings,
	props?: WebViewProps,
}

export const PayoutPayment: React.FC<Props> = ({checkoutUrl, uiSettings, props}) => {

	const [uri, setUri] = useState(checkoutUrl)

	useEffect(()=>{
		const enhancedUri = processUiSettings(uiSettings)
		setUri(checkoutUrl + enhancedUri)
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
		<WebView source={ { uri } } {...props} />
	)
}
