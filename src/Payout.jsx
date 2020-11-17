import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

export default class PayoutPayment extends Component {

	constructor(props) {
		super(props)
		this.state = {
			paymentForm: null
		}
	}

	componentDidMount() {
		fetch(
			this.props.checkoutUrl,
			{
				method: 'POST',
				headers: {
					Accept: '*/*'
				},
				body: JSON.stringify(this.props.uiSettings)
			}
		)
			.then((response) => {
				this.setState(() => ({
					paymentForm: response
				}))
			})
			.catch((error) => console.error(error))
	}

	render() {
		return (
			<WebView source={ { html: this.state.paymentForm, baseUrl: this.props.baseUrl } } { ...this.props } />
		)
	}

}