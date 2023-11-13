import { ReactElement } from 'react';

export type CallbackType<T = any> = (success: boolean, args?: T) => void;
export type LoginCallbackType<T = any, S = any> = (success: boolean, args?: T, param?: S) => void;

export type ErrorType = 'invalid-format' | 'required' | 'not-match' | undefined;

export type SocialMediaTypes = 'facebook' | 'instagram' | 'tikTok' | 'x' | 'linkedIn';

export type PaymentFlowType = 'cash-payment' | 'contact-payment' | 'code-payment';

export type ShortcutType = {
  id: string;
  label: string;
  icon: ReactElement;
  action?: () => void;
};
export interface MarginPropsInterface {
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
}

// Navigation types
export type AuthStackParams = {
  Login: undefined;
};

export type CardsGlobalStackParams = {
  Card: undefined;
  CardSelection: undefined;
  CardShipping: undefined;
  CardActivation: undefined;
  ChangePin: undefined;
  CreditDetail: undefined;
  CardReport: undefined;
  DomiciliaryPayment: { edition?: boolean } | undefined;
  AccountStatement: undefined;
  PDFViewer: undefined;
};

export type AppStackParams = {
  TabNavigator: undefined;
  CardsGlobalStack: undefined;
  HomeGlobalStack: undefined;
  ProfileStack: undefined;
  NotificationStack: undefined;
  ContactsGlobalStack: undefined;
  VirtualAssistant: undefined;
  TransactionsGlobalStack: undefined;
  PaymentFlow: { flow: PaymentFlowType };
  Establishments: undefined;
  ChargesGlobalStack: undefined;
  PaymentStack: undefined;
};

export type HomeGlobalStackParams = {
  Shortcuts: undefined;
  ProfileStack: undefined;
};

export type TransactionsGlobalStackParams = {
  ScheduledPayments: undefined;
  Payment: { edition?: boolean; scheduled?: boolean } | undefined;
  BillPayment: undefined;
  CashPayment: undefined;
};

export type ChargesGlobalStackParams = {
  ChargesCash: undefined;
  ChargesContacts: undefined;
  ChargesScheduled: undefined;
};

export type PaymentGlobalStackParams = {
  form: { title: string };
  qr: { title: string, showHeader: boolean };
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
  Icons: undefined;
  RadioButtonGroup: undefined;
};

export type ConfirmationCodeScreenParams = {
  type: string;
  value: string;
};

export type ProfileStackParams = {
  Profile: undefined;
  ProfileEdit: undefined;
  EditProfileField: {
    label: string,
    value: string,
    type: string,
  };
  EditAddress: undefined;
  ConfirmationCode: {
    type: string;
    value: string
  };
  Security: undefined;
  ChangePassword: undefined;
  Bills: undefined;
};

export type TransactionType = {
  amount: string;
  bank: string;
  cardLastDigits: string;
  color: string;
  concept: string;
  description: string;
  name: string;
  status: string;
  title: string;
};

export type ExpensesStackParams = {
  Expenses: undefined;
  ExpensesSummary: undefined;
  AssignTags: { item: TransactionType };
  TicketsAndInvoices: { item: TransactionType };
  AddMovement: undefined;
};

export type NotificationStackParams = {
  Notifications: undefined;
  NotificationSettings: undefined;
};

export type ContactsStackParams = {
  List: undefined;
  Form: { contact?: any };
  NewAccount: undefined;
};

export type FileType = {
  file: string;
  fileName: string;
  fileType: string;
};
