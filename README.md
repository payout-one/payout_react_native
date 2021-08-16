# Payout React Native SDK
  
Payout SDK for React native

## Installation

Use the package manager to install.

```bash
npm i --save payout-react-native-sdk
npm i --save @markodzurik/react-native-webview
```

```bash
cd ios && pod install
```

## Usage

Package exports React Native component 

```javascript
import { PayoutPayment } from 'payout-react-native-sdk';

...

<PayoutPayment checkoutUrl={'your_checkout_url'} uiSettings={'your_ui_settings'} />

...

```

## Props

| Prop  | Type | Note |
| ------------- | ------------- | ---------|
| checkoutUrl | string | provide checkout url from checkout request  |
| uiSettings  | { } | object of UI settings  |
| props  | { } | props of WebView  |

## UI Settings

#### Example UI settings object

```javascript
{
    remove_header: true,
    show_card_payment: false,
    background_color: "#8DA5CC",
    button_border_radius: 12
}
```
#### General

| Attribute  | Type | Description | Example |
| ------------- | ------------- | ---------| ----|
|color|string|Default font color for screen.|#000000|
|anchor_color|string|Color of anchors|#FFFFFF|
|background_color|string|Background color of screen|#FFFFFF|
|form_background_color|string|Background color of payment form|transparent|
|form_border_radius|number|Payment form border radius|8|
|form_border_color|string|Payment form border color|#000000|
|form_border_size|number|Payment form border size|1|
|form_no_margin|bool|Disable payment form margin|false|
|remove_header|bool|Remove payment form header|false|
|remove_footer|bool|Remove payment form footer|false|
|show_card_payment|bool|Show card payment method|false|
|show_bank_payment|bool|Show bank transfer payment method|false|
|show_online_payment|bool|Show online payment method|false|


####Buttons

| Attribute  | Type | Description | Example |
| ------------- | ------------- | ---------| ----|
|button_color|string|Button font color|#FFFFFF|
|button_background_color|string|Button background color|#FFFFFF|
|button_border_size|number|Button border size|1|
|button_border_color|string|Button border color|#FFFFFF|
|button_border_radius|number|Button border radius|8|
|button_hover_background_color|string|Button background color on hover|#FFFFFF|
|button_hover_border_color|string|Button border color on hover|#FFFFFF|
|button_hover_color|string|Button font color on hover|#FFFFFF|
|submit_button_background_color|string|Button background color on click|#FFFFFF|
|submit_button_border_color|string|Button border color on click|#FFFFFF|
|submit_button_color|string|Button font color on click|#FFFFFF|


####Card input, Expiration input, CVV input

| Attribute  | Type | Description | Example |
| ------------- | ------------- | ---------| ----|
|input_color|string|Font color of input field|#000000|
|input_background_color|string|Background color of input field|transparent|
|input_border_radius|number|Border radius of input field|8|
|input_border_color|string|Border color of input field|#000000|
|input_border_size|number|Border size of input field|1|

##Demo

[Demo app](https://snack.expo.io/@dyarzik/demo-app)
