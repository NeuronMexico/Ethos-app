/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import {
  Container, Header, QRModal, SafeArea,
} from 'components';
import Theme from 'theme';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { PaymentGlobalStackParams } from '../../../utils/types';
import {
  AmountSecondaryForm,
  ContentModalResponse,
  PaymentCollectCashForm,
  PaymentCollectQRForm,
  PaymentCollectScheduledForm,
  PaymentCollectToContactForm,
  PaymentEditForm,
  PaymentFastCollectForm,
  PaymentQRForm,
  PaymentTransferAccountForm,
  WithdrawalNoCardForm,
} from './components';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const PaymentForm: React.FC = () => {
  const alert = useAlert();
  const { t } = useTranslation();
  const { navigate, goBack } = useNavigation<NativeStackNavigationProp<any>>();
  const {
    params: {
      title,
      formComponent,
      destinationAccount,
    },
  } = useRoute<RouteProp<PaymentGlobalStackParams, 'form'>>();

  const [formComponentType, setFormComponentType] = useState<ReactNode>();
  const [showQRPaymentModal, setShowQRPaymentModal] = useState(false);

  const showConfirmAlert = useCallback(() => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          date={new Date()}
          references={[
            { label: 'form:costPerDisposal', value: '$50' },
            { label: 'form:SPEICost', value: '$7.50' },
            { label: 'form:reference', value: 'ABC123' },
          ]}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:destinationAccount', value: 'CLABE ***531' },
            { label: 'form:concept', value: 'Pago Viaje' },
            { label: 'form:bank', value: 'STP' },
          ]}
        />
      ),
      title: t('charges:confirmCharge'),
      fullscreen: true,
      checkmark: true,
      logo: true,
      reference: '123',
      invoice: '1234',
      actions: [
        {
          label: 'Primary',
          onPress: () => {
            alert.hide();
            goBack();
          },
          type: 'primary',
        },
        { label: 'Secondary', onPress: alert.hide, type: 'secondary' },
        { label: 'Destructive Primary', onPress: alert.hide, type: 'destructive-primary' },
        { label: 'Destructive Secondary', onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  }, [alert, goBack, t]);

  const onSubmit = useCallback(() => {
    switch (formComponent) {
      case 'PaymentCollectCash':
        // TODO: Add alert
        break;
      case 'PaymentCollectQR':
        // TODO: Add alert
        break;
      case 'PaymentCollectScheduled':
        // TODO: Add alert
        break;
      case 'PaymentCollectToContact':
        // TODO: Add alert
        break;
      case 'PaymentEdit':
        // TODO: Add alert
        break;
      case 'PaymentFastCollect':
        // TODO: Add alert
        break;
      case 'PaymentQR':
        alert.show({
          title: t('form:confirmQrPayment'),
          checkmark: false,
          extraInfo: (<ContentModalResponse
            amount={Number('2500')}
            references={[
              { label: 'form:costPerDisposal', value: '$50' },
              { label: 'form:SPEICost', value: '$7.50' },
            ]}
            label={t('form:cardToSendMoney')}
            cardButton
          />),
          actions: [
            {
              label: t('global:confirm'),
              type: 'primary',
              onPress: async () => {
                alert.hide();
                const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
                if (result.success) {
                  setShowQRPaymentModal(true);
                }
              },
            },
            {
              label: t('global:cancel'),
              type: 'secondary',
              onPress: () => {
                alert.hide();
                goBack();
              },
            },
          ],
        });
        break;
      case 'PaymentTransferAccountForm':
        // TODO: Add alert
        break;
      case 'WithdrawalNoCard':
        // TODO: Add alert
        break;
      case 'none':
        // TODO: Add alert
        break;
      default:
        break;
    }
  }, [alert, formComponent, goBack, showConfirmAlert, t]);

  useEffect(() => {
    console.log({ formComponent });
    switch (formComponent) {
      case 'PaymentCollectCash':
        setFormComponentType(<PaymentCollectCashForm
          onPressEstablishments={() => navigate('Establishments')}
          onSubmit={onSubmit}
        />);
        break;
      case 'PaymentCollectQR':
        setFormComponentType(<PaymentCollectQRForm onSubmit={onSubmit} />);
        break;
      case 'PaymentCollectScheduled':
        setFormComponentType(<PaymentCollectScheduledForm onSubmit={onSubmit} />);
        break;
      case 'PaymentCollectToContact':
        setFormComponentType(<PaymentCollectToContactForm onSubmit={onSubmit} />);
        break;
      case 'PaymentEdit':
        setFormComponentType(<PaymentEditForm onSubmit={onSubmit} />);
        break;
      case 'PaymentFastCollect':
        setFormComponentType(<PaymentFastCollectForm onSubmit={onSubmit} />);

        break;
      case 'PaymentQR':
        setFormComponentType(<PaymentQRForm onSubmit={onSubmit} />);
        break;
      case 'PaymentTransferAccountForm':
        setFormComponentType(<PaymentTransferAccountForm onSubmit={onSubmit} />);
        break;
      case 'WithdrawalNoCard':
        setFormComponentType(<WithdrawalNoCardForm onSubmit={onSubmit} />);
        break;
      case 'none':
        setFormComponentType(<AmountSecondaryForm onChange={() => {}} onSubmit={onSubmit} />);
        break;
      default:
        break;
    }
  }, [formComponent, destinationAccount, onSubmit, navigate]);

  return (
    <SafeArea>
      <Container useKeyboard flex>
        <Header title={title} />
        <Container flex style={{ marginHorizontal: Theme.Sizes.Padding }}>
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            {formComponentType}
          </ScrollView>
        </Container>
      </Container>
      <QRModal
        visible={showQRPaymentModal}
        title={t('form:generatedQRCode')}
        message=""
        amount="$2,500.00"
        flow="code-payment"
        onPressCheckEstablishment={() => {

        }}
        onPressBack={() => { setShowQRPaymentModal(false); goBack(); }}
      />
    </SafeArea>
  );
};

export default PaymentForm;
