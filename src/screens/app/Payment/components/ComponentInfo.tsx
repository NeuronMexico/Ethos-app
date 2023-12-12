import React from 'react';
import {
  Button, Container, OptionButton, Text,
} from 'components';
import { formatDate, formatQuantity } from 'utils';
import i18n from 'i18n';
import Theme from 'theme';
import { ExportIcon, VisaIcon } from 'assets/svg';

interface Props {
  amount?: number;
  reference?: string;
  date?: Date;
  showButtons?: boolean;
  onPressBack?: () => void;
  onPressOptionButton?: () => void;
}

export const Line = () => (
  <Container
    style={{
      width: 'auto',
      height: 0,
      borderBottomWidth: 1,
      borderBottomColor: Theme.Colors.PlaceboBlue,
      marginTop: 16,
      marginBottom: 24,
    }}
  />
);

const ComponentInfo: React.FC<Props> = ({
  amount,
  showButtons = false,
  reference,
  date,
  onPressBack = () => {},
  onPressOptionButton = () => {},
}: Props) => (
  <Container style={{ marginHorizontal: 32 }}>
    <Text
      text={formatQuantity(Number(amount))}
      textAlign="center"
      fontWeight="Bold"
      typography="header"
      fontSize={34}
      marginBottom={16}
    />
    <Text text={i18n.t('form:singlePayment')} typography="title" textAlign="center" fontSize={17} />
    <Text text={date && formatDate(date, 'MMMM d, yyyy')} textAlign="center" />
    <Container row center crossCenter style={{ marginTop: 16 }}>
      <Text text={i18n.t('form:costPerDisposal')} textAlign="center" fontSize={13} />
      <Text text="$50" textAlign="center" typography="title" fontSize={13} marginLeft={4} />
    </Container>
    <Container row center crossCenter>
      <Text text={i18n.t('form:SPEICost')} textAlign="center" fontSize={13} marginVertical={5} />
      <Text text="$7.50" textAlign="center" typography="title" fontSize={13} marginLeft={4} marginVertical={5} />
    </Container>
    <Container row center crossCenter>
      <Text text={i18n.t('form:reference')} textAlign="center" fontSize={13} />
      <Text text={reference} textAlign="center" typography="title" fontSize={13} marginLeft={4} />
    </Container>
    <Button
      label="**** **** **** 531"
      onPress={() => {}}
      marginBottom={16}
      backgroundColor={Theme.Colors.PlaceboBlue}
      icon={<VisaIcon />}
      colorless
      marginHorizontal="auto"
      paddingVertical={10}
      paddingHorizontal={16}
      marginTop={27}
    />
    <Line />
    <Container row>
      <Container width="50%" style={{ marginRight: 12 }}>
        <Text text={i18n.t('form:name')} textAlign="left" />
        <Text text="Andrés Lara" typography="title" fontSize={17} marginVertical={8} />
        <Text text={i18n.t('form:destinationAccount')} textAlign="left" />
        <Text text="CLABE ***531" typography="title" fontSize={17} marginVertical={8} />
      </Container>
      <Container width="50%" style={{ marginLeft: 12 }}>
        <Text text={i18n.t('form:concept')} textAlign="left" />
        <Text text="Pago Viaje" typography="title" fontSize={17} marginVertical={8} />
        <Text text={i18n.t('form:bank')} textAlign="left" />
        <Text text="STP" typography="title" fontSize={17} marginVertical={8} />
      </Container>
    </Container>
    <Line />
    <Text text={i18n.t('form:contactAdded')} textAlign="center" />
    {
      showButtons && (
        <Container style={{ margin: 16 }}>
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

export { ComponentInfo };
