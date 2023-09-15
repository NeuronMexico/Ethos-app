export type CallbackType<T = any> = (success: boolean, args?: T) => void;
export type LoginCallbackType<T = any, S = any> = (success: boolean, args?: T, param?: S) => void;

export type ErrorType = 'invalid-format' | 'required' | 'not-match' | undefined;

// Navigation types
export type AuthStackParams = {
  Login: undefined;
};

export type PreviewStackParams = {
  Preview: undefined;
  Container: undefined;
  Card: undefined;
  SafeArea: undefined;
  Text: undefined;
  Touchable: undefined;
  FadeInImage: undefined;
  CheckBox: undefined;
  RadioButton: undefined;
  CheckBoxField: undefined;
  RadioButtonField: undefined;
  Switch: undefined;
  SwitchField: undefined;
  CheckBoxGroup: undefined;
  SwitchGroup: undefined;
  Tab: undefined;
  Button: undefined;
  Input: undefined;
  Picker: undefined;
  DateTimePicker: undefined;
  ButtonGroup: undefined;
};
