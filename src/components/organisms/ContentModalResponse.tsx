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
  spaceBetweenReferences?: number;
}

const Line = () => (
  <Container
    style={{
      width: '85%',
      height: 0,
      borderBottomWidth: 1,
      borderBottomColor: Theme.Colors.PlaceboBlue,
      marginTop: 16,
      alignSelf: 'center',
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
  spaceBetweenReferences,
}: Props) => (
  <Container width="100%">
    {amount && (
    <Text
      text={formatQuantity(Number(amount))}
      textAlign="center"
      fontWeight="Bold"
      typography="header"
      fontSize={34}
    />
    )}
    {references && (
    <Container style={{ marginTop: 16 }}>
      {references.map((item: AlertDataItem, index: number) => (
        <Container key={index} row center crossCenter style={{ marginTop: spaceBetweenReferences }}>
          <Text text={i18n.t(item.label)} textAlign="center" fontSize={13} />
          <Text text={item.value} textAlign="center" typography="title" fontSize={13} marginLeft={4} />
        </Container>
      ))}
    </Container>
    )}
    {checkmark && date && (<Text text={formatDate(date)} textAlign="center" />)}
    {label && (<Text text={label} textAlign="center" />)}
    <Container width="85%" style={{ alignSelf: 'center' }}>
      {cardButton && (
      <Button
        label="**** **** **** 531"
        onPress={() => {}}
        backgroundColor={Theme.Colors.PlaceboBlue}
        icon={<VisaIcon />}
        marginHorizontal="auto"
        paddingVertical={10}
        paddingHorizontal={16}
        marginTop={16}
        textColor={Theme.Colors.DarkSoul}
        disabled
        disabledUI={false}
      />
      )}
      {pickerCard && (
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
    </Container>
    <Line />
    {paymentDetails && (
    <Container
      row
      center
      style={{
        display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: 16,
      }}
    >
      {paymentDetails.map((item: AlertDataItem, index) => (
        <Container center width="50%" key={index}>
          <Container style={{ marginRight: 12 }}>
            <Text text={i18n.t(item.label)} textAlign="left" />
            <Text text={item.value} typography="title" fontSize={17} marginVertical={8} />
          </Container>
        </Container>
      ))}
    </Container>
    )}
    {date && <Text text={i18n.t('form:singlePayment')} typography="title" textAlign="center" fontSize={17} />}
    {date && <Text text={formatDate(date, 'MMMM d, yyyy')} textAlign="center" />}

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
