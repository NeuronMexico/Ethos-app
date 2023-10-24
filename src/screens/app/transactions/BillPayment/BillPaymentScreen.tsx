import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, Input,
} from 'components';
import Theme from 'theme';
import {
  BankIcon, BookOpenIcon, CarIcon, CellphoneIcon,
  GamepadIcon, LampIcon, LensIcon, PhoneIcon, WaterIcon,
} from 'assets/svg';
import { PaymentButton } from '../Transactions/components';

interface Props {
  prop?: string
}

const BillPaymentScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  const [query, setQuery] = useState<string>('');

  return (
    <Container flex useKeyboard>
      <Header title={t('transactions:billPayment')} showVirtualAssistantAction />

      <ScrollView
        style={{ flex: 1, marginTop: 4 }}
        contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: 28, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <Input
          placeholder={t('global:search')}
          value={query}
          onChangeText={setQuery}
          marginTop={0}
          prefixIcon={<LensIcon width={20} height={20} />}
          returnKeyType="search"
        />

        <Container row style={{ marginTop: 16 }}>
          <Container flex style={{ marginRight: 8 }}>
            <PaymentButton label={t('transactions:electricityAndGas')} icon={<LampIcon />} onPress={() => {}} />
          </Container>
          <Container flex style={{ marginLeft: 8 }}>
            <PaymentButton label={t('transactions:mobileRecharge')} icon={<CellphoneIcon />} onPress={() => {}} />
          </Container>
        </Container>
        <Container row style={{ marginTop: 16 }}>
          <Container flex style={{ marginRight: 8 }}>
            <PaymentButton label={t('transactions:entertainment')} icon={<GamepadIcon />} onPress={() => {}} />
          </Container>
          <Container flex style={{ marginLeft: 8 }}>
            <PaymentButton label={t('transactions:tollsAndParkingMeters')} icon={<CarIcon />} onPress={() => {}} />
          </Container>
        </Container>
        <Container row style={{ marginTop: 16 }}>
          <Container flex style={{ marginRight: 8 }}>
            <PaymentButton label={t('transactions:water')} icon={<WaterIcon />} onPress={() => {}} />
          </Container>
          <Container flex style={{ marginLeft: 8 }}>
            <PaymentButton label={t('transactions:landlineAndInternet')} icon={<PhoneIcon />} onPress={() => {}} />
          </Container>
        </Container>
        <Container row style={{ marginTop: 16 }}>
          <Container flex style={{ marginRight: 8 }}>
            <PaymentButton label={t('transactions:stateAndMunicipalPayments')} icon={<BankIcon />} onPress={() => {}} />
          </Container>
          <Container flex style={{ marginLeft: 8 }}>
            <PaymentButton label={t('transactions:catalogSales')} icon={<BookOpenIcon />} onPress={() => {}} />
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default BillPaymentScreen;
