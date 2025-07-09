import React, { useEffect, useState } from "react";
import { WebView, WebViewProps } from "react-native-webview";

export type UiSettings = {
  color?: string;
  anchor_color?: string;
  background_color?: string;
  form_background_color?: string;
  form_border_radius?: number;
  form_border_color?: string;
  form_border_size?: number;
  form_no_margin?: boolean;
  remove_header?: boolean;
  remove_footer?: boolean;
  show_card_payment?: boolean;
  show_online_payment?: boolean;
  show_bank_payment?: boolean;
  button_color?: string;
  button_background_color?: string;
  button_border_size?: number;
  button_border_color?: string;
  button_border_radius?: number;
  button_hover_background_color?: string;
  button_hover_border_color?: string;
  button_hover_color?: string;
  submit_button_color?: string;
  submit_button_background_color?: string;
  submit_button_border_color?: string;
  input_color?: string;
  input_background_color?: string;
  input_border_radius?: number;
  input_border_color?: string;
  input_border_size?: number;
};

type Props = {
  checkoutUrl: string;
  onClose?: () => void;
  uiSettings?: UiSettings;
  props?: WebViewProps;
};

const processUiSettings = (uiSettings: UiSettings = {}): string => {
  const entries = Object.entries(uiSettings).filter(
    ([, value]) => value !== undefined && value !== null
  );
  if (entries.length === 0) return "";
  const params = new URLSearchParams(
    entries.map(([key, value]) => [key, String(value)])
  );
  return `?${params.toString()}`;
};

export const PayoutPayment = ({
  checkoutUrl,
  uiSettings,
  props,
}: Props) => {
  const [uri, setUri] = useState(
    () => checkoutUrl + processUiSettings(uiSettings)
  );

  useEffect(() => {
    setUri(checkoutUrl + processUiSettings(uiSettings));
  }, [checkoutUrl, uiSettings]);

  return <WebView source={{ uri }} {...props} />;
};
