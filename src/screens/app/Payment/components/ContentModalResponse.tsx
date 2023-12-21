import React from 'react';
import {
  Button, Container, OptionButton, Picker, Text,
} from 'components';
import { formatDate, formatQuantity } from 'utils';
import i18n from 'i18n';
import Theme from 'theme';
import { ExportIcon, VisaIcon } from 'assets/svg';

interface AlertDataItem {
  label: string;
  value: string;
}
interface Props {
  amount?: number;
  date?: Date;
  showButtons?: boolean;
  onPressBack?: () => void;
  onPressOptionButton?: () => void;
  checkmark?: boolean;
  references?: AlertDataItem[];
  paymentDetails?: AlertDataItem[];
  cardButton?: boolean;
  pickerCard?: boolean;
  label?: string;
}

const Line = () => (
  <Container
    style={{
      width: 'auto',
      height: 0,
      borderBottomWidth: 1,
      borderBottomColor: Theme.Colors.PlaceboBlue,
      marginTop: 16,
    }}
  />
);

const ContentModalResponse: React.FC<Props> = ({
  amount,
  showButtons = false,
  references,
  date,
  checkmark = true,
  paymentDetails,
  onPressBack = () => {},
  onPressOptionButton = () => {},
  cardButton,
  pickerCard,
  label,
}: Props) => (
  <Container>
    {amount && (
    <Text
      text={formatQuantity(Number(amount))}
      textAlign="center"
      fontWeight="Bold"
      typography="header"
      fontSize={34}
      marginBottom={16}
    />
    )}
    {references && references.map((item: AlertDataItem, index: number) => (
      <Container key={index} row center crossCenter>
        <Text text={i18n.t(item.label)} textAlign="center" fontSize={13} />
        <Text text={item.value} textAlign="center" typography="title" fontSize={13} marginLeft={4} />
      </Container>
    ))}
    {checkmark && (<Text text={date && formatDate(date)} textAlign="center" />)}
    {label && (<Text text={label} textAlign="center" />)}
    { cardButton && (
    <Button
      label="**** **** **** 531"
      onPress={() => {}}
      backgroundColor={Theme.Colors.PlaceboBlue}
      icon={<VisaIcon />}
      marginHorizontal="auto"
      paddingVertical={10}
      paddingHorizontal={16}
      marginTop={27}
      textColor={Theme.Colors.DarkSoul}
      disabled
      disabledUI={false}
    />
    )}
    { pickerCard && (
    <Picker
      title="TDC ethoscrédito"
      label={i18n.t('transactions:myCreditCard')}
      options={[{ label: '**** **** **** 4531', value: '1', caption: 'hey' }]}
      placeholder=""
      borderRadius={24}
      backgroundColor={Theme.Colors.DrWhite}
      prefixIcon={<VisaIcon />}
      useActionSheet
      actionSheetTitle={i18n.t('transactions:myCreditCard')}
      caption="**** **** **** 4531"
      value="$16,801.08"
      onValueChange={() => {}}
    />
    )}
    <Line />
    <Container
      row
      center
      style={{
        display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: 16,
      }}
    >
      {paymentDetails && paymentDetails.map((item: AlertDataItem, index) => (
        <Container center width="50%" key={index}>
          <Container style={{ marginRight: 12 }}>
            <Text text={i18n.t(item.label)} textAlign="left" />
            <Text text={item.value} typography="title" fontSize={17} marginVertical={8} />
          </Container>
        </Container>
      ))}
    </Container>
    <Text text={date && i18n.t('form:singlePayment')} typography="title" textAlign="center" fontSize={17} />
    <Text text={date && formatDate(date, 'MMMM d, yyyy')} textAlign="center" />

    {
      showButtons && (
        <Container style={{ marginTop: 8 }}>
          <Button
            label={i18n.t('global:goBack')}
            onPress={onPressBack}
            backgroundColor={Theme.Colors.WhiteSmoke}
            textColor={Theme.Colors.DarkSoul}
            marginVertical={16}
          />
          <OptionButton
            onPress={onPressOptionButton}
            width={55}
            height={55}
            borderRadius={15}
            backgroundColor={Theme.Colors.PlaceboBlue}
            marginHorizontal={5}
            label={i18n.t('global:share')}
            icon={<ExportIcon width={30} />}
          />
        </Container>
      )
    }
  </Container>
);

export { ContentModalResponse };
