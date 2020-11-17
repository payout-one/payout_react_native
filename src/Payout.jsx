import React from 'react'
import { WebView } from 'react-native-webview'

const PayoutPayment = ({ checkoutUrl = '', baseUrl = 'https://payout.one', uiSettings = {} }) => {

	const [paymentForm, setPaymentForm] = React.useState(null)

	React.useEffect(() => {
		fetch(
			checkoutUrl,
			{
				method: 'POST',
				headers: {
					Accept: '*/*'
				},
				body: JSON.stringify(uiSettings)
			}
		)
			.then((response) => setPaymentForm(response))
			.catch((error) => console.error(error))
	}, [])

	return (
		<WebView source={ { html: paymentForm, baseUrl: baseUrl } } />
	)
}
export default PayoutPayment