import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  CheckBoxField,
  Container, Header, Input, RadioButtonGroup, RadioButtonGroupOption, Text,
} from 'components';
import Theme from 'theme';
import { DomiciliaryPaymentFlowType } from 'utils';

interface Props {
  onSubmit: () => void;
  edition: boolean;
  flow: DomiciliaryPaymentFlowType;
}

const DomiciliaryPaymentScreen: React.FC<Props> = ({ onSubmit, edition, flow }) => {
  const { t } = useTranslation();

  const [paymentType, setPaymentType] = useState<string>('minimum-payment');
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const options: Array<RadioButtonGroupOption> = [
    { label: t('cards:minimumPayment'), value: 'minimum-payment' },
    { label: t('cards:paymentNoInterest'), value: 'payment-not-interest' },
  ];

  return (
    <Container flex>
      <Header title={t(`cards:${edition ? 'editDirectDebitPayment' : 'directDebitPayment'}`)} />
      <Container flex style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text={t('cards:accountWhereChargesWillBeMade')} fontWeight="Medium" />

        <Input
          value="4324 34242 4324 553343"
          onChangeText={() => {}}
          editable={false}
        />
        <Input
          label={t('cards:bank')}
          value="Santander"
          onChangeText={() => {}}
          editable={false}
        />

        {flow === 'card' && (
        <>
          <Text text={t('cards:choosePaymentType')} typography="title" fontWeight="Semibold" marginTop={16} />
          <RadioButtonGroup options={options} value={paymentType} onChange={setPaymentType} marginVertical={16} />
        </>
        )}

        <Container flex alignment="end">
          <CheckBoxField
            label=""
            selected={acceptTerms}
            onChange={setAcceptTerms}
            centerCheckbox={false}
            customLabel={(
              <Text marginLeft={12}>
                <Text text={t('cards:accept')} typography="subtitle" fontWeight="Medium" />
                {' '}
                <Text text={t('cards:termsAndConditions')} typography="subtitle" fontWeight="ExtraBold" />
                {' '}
                <Text text={t('cards:ofCreditCardPaymentDirectDebit')} typography="subtitle" fontWeight="Medium" />
              </Text>
            )}
          />

          <Button
            label={t('global:continue')}
            marginTop={32}
            marginBottom={16}
            onPress={onSubmit}
            disabled={!acceptTerms}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default DomiciliaryPaymentScreen;
