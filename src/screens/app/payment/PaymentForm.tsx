import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Container, ContentModalResponse, Header, QRModal, SafeArea,
} from 'components';
import Theme from 'theme';
import { useAlert } from 'context';
import { formatQuantity } from 'utils';
import { PaymentGlobalStackParams } from '../../../utils/types';
import {
  AmountSecondaryForm,
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

  const biometricsAuth = useCallback(async (callback: () => void) => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      callback();
    }
  }, [t]);

  const showCollectSuccessAlert = useCallback((successTitle: string) => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={2500}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:concept', value: 'Pago Cena' },
          ]}
          cardButton
          label={t('form:receiveMoneyCard')}
        />
      ),
      title: successTitle,
      fullscreen: true,
      checkmark: true,
      logo: true,
      invoice: '437437',
      date: new Date(),
      actions: [
        {
          label: t('form:goToTransactions'),
          onPress: () => {
            alert.hide();
            navigate('TransactionsStack');
          },
          type: 'secondary',
        },
        { label: t('global:share'), onPress: alert.hide, type: 'primary' },
      ],
    });
  }, [alert, navigate, t]);

  const showSuccessPaymentEditAlert = useCallback(() => {
    alert.show({
      extraInfo: (
        <ContentModalResponse
          amount={Number('1234')}
          paymentDetails={[
            { label: 'form:name', value: 'Andrés Lara' },
            { label: 'form:destinationAccount', value: 'CLABE ***531' },
            { label: 'form:concept', value: 'Pago Viaje' },
            { label: 'form:bank', value: 'STP' },
          ]}
          cardButton
        />
      ),
      title: t('form:editedScheduledPayment'),
      fullscreen: false,
      checkmark: true,
      logo: true,
      invoice: '1234',
      date: new Date(),
      actions: [
        {
          label: t('form:goToTransactions'),
          onPress: async () => {
            alert.hide();
            goBack();
          },
          type: 'secondary',
        },
        { label: t('global:share'), onPress: alert.hide, type: 'primary' },
      ],
    });
  }, [alert, goBack, t]);

  const onSubmit = useCallback(() => {
    console.log({ formComponent });
    switch (formComponent) {
      case 'PaymentCollectCash':
        // TODO: Add alert
        break;
      case 'PaymentCollectQR':
        alert.show({
          extraInfo: (
            <ContentModalResponse
              amount={2500}
              references={[
                { label: 'form:commission', value: formatQuantity(7.5) },
              ]}
              label={t('form:receiveMoneyCard')}
              cardButton
            />
          ),
          title: t('form:confirmEthoscreditQRPayment'),
          fullscreen: false,
          actions: [
            {
              label: t('global:confirm'),
              onPress: () => {
                alert.hide();
                biometricsAuth(() => setShowQRPaymentModal(true));
              },
              type: 'primary',
            },
            { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
          ],
        });
        break;
      case 'PaymentCollectScheduled':
        alert.show({
          extraInfo: (
            <ContentModalResponse
              amount={2500}
              paymentDetails={[
                { label: 'form:name', value: 'Andrés Lara' },
                { label: 'form:concept', value: 'Pago Cena' },
              ]}
              references={[
                { label: 'form:costPerTransfer', value: '$50' },
                { label: 'form:costPerDisposal', value: '$7.50' },
              ]}
              label={t('form:receiveMoneyCard')}
              cardButton
            />
          ),
          title: t('form:confirmEdition'),
          fullscreen: false,
          actions: [
            {
              label: t('global:confirm'),
              onPress: () => {
                alert.hide();
                biometricsAuth(() => showCollectSuccessAlert(t('form:editedCharge')));
              },
              type: 'primary',
            },
            { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
          ],
        });
        break;
      case 'PaymentCollectToContact':
        alert.show({
          extraInfo: (
            <ContentModalResponse
              amount={2500}
              paymentDetails={[
                { label: 'form:name', value: 'Andrés Lara' },
                { label: 'form:concept', value: 'Pago Cena' },
              ]}
              references={[
                { label: 'form:chargeCommission', value: '$50' },
              ]}
              label={t('form:receiveMoneyCard')}
              cardButton
            />
          ),
          title: t('form:confirmCharge'),
          fullscreen: false,
          actions: [
            {
              label: t('global:confirm'),
              onPress: () => {
                alert.hide();
                biometricsAuth(() => showCollectSuccessAlert(t('form:chargeSent')));
              },
              type: 'primary',
            },
            { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
          ],
        });
        break;
      case 'PaymentEdit':
        alert.show({
          extraInfo: (
            <ContentModalResponse
              amount={Number('1234')}
              paymentDetails={[
                { label: 'form:name', value: 'Andrés Lara' },
                { label: 'form:destinationAccount', value: 'CLABE ***531' },
              ]}
              references={[
                { label: 'form:costPerTransfer', value: '$50' },
                { label: 'form:costPerDisposal', value: '$7.50' },
              ]}
              label={t('form:cardLabel')}
              cardButton
            />
          ),
          title: t('form:confirmEdition'),
          fullscreen: false,
          logo: true,
          actions: [
            {
              label: t('global:confirm'),
              onPress: async () => {
                alert.hide();
                const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
                if (result.success) {
                  alert.hide();
                  showSuccessPaymentEditAlert();
                }
              },
              type: 'primary',
            },
            { label: t('global:cancel'), onPress: alert.hide, type: 'secondary' },
          ],
        });
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
                  goBack();
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
  }, [alert, biometricsAuth, formComponent, goBack, showCollectSuccessAlert, showSuccessPaymentEditAlert, t]);

  useEffect(() => {
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
        invoice="437437"
        amount={formatQuantity(2500)}
        validity={t('cards:hours', { hours: 24 })}
        cardNumber="**** **** **** 4531"
        cardLabel={t('form:receiveMoneyCard')}
        buttonsCaption={t('form:shareQRCode')}
        actions={[
          {
            label: t('form:goToTransactions'),
            type: 'secondary',
            onPress: () => {
              setShowQRPaymentModal(false);
              navigate('TransactionsStack');
            },
          },
          {
            label: t('global:share'),
            type: 'primary',
            onPress: () => setShowQRPaymentModal(false),
          },
        ]}
      />
    </SafeArea>
  );
};

export default PaymentForm;
