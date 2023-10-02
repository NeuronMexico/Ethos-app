export type CallbackType<T = any> = (success: boolean, args?: T) => void;
export type LoginCallbackType<T = any, S = any> = (success: boolean, args?: T, param?: S) => void;

export type ErrorType = 'invalid-format' | 'required' | 'not-match' | undefined;
export type SocialMediaTypes = 'facebook' | 'instagram' | 'tikTok' | 'x' | 'linkedIn';

// Navigation types
export type AuthStackParams = {
  Login: undefined;
};

export type AppStackParams = {
  TabNavigator: undefined;
  GlobalStack: undefined;
};

export type TabParams = {
  EthosCreditStack: undefined;
  CardsStack: undefined;
  TransactionsStack: undefined;
  ExpensesStack: undefined;
  BenefitsStack: undefined;
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
  MultipleTextButton: undefined;
  Picker: undefined;
  BottomSheet: undefined;
  DateTimePicker: undefined;
  ButtonGroup: undefined;
  OptionButton: undefined;
  ProfilePhoto: undefined;
  BankAccountCard: undefined;
  BackButton: undefined;
  Header: undefined;
  DirectAccess: undefined;
  Slider: undefined;
  SwipeableSwitch: undefined;
};
