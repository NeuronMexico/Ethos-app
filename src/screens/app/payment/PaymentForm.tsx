/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactNode, useEffect, useState,
} from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import {
  Container, Header, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAlert } from 'context';
import { useTranslation } from 'react-i18next';
import { formatQuantity } from 'utils';
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

  const onSubmit = () => {
    alert.show({
      title: 'Alerta de Confirmación',
      checkmark: false,
      extraInfo: (<ContentModalResponse
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
      />),
      actions: [
        {
          label: t('global:continue'),
          type: 'primary',
          onPress: () => {
            alert.hide();
            showConfirmAlert();
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
  };

  const showConfirmAlert = () => {
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
        { label: 'Primary', onPress: alert.hide, type: 'primary' },
        { label: 'Secondary', onPress: alert.hide, type: 'secondary' },
        { label: 'Destructive Primary', onPress: alert.hide, type: 'destructive-primary' },
        { label: 'Destructive Secondary', onPress: alert.hide, type: 'destructive-secondary' },
      ],
    });
  };

  useEffect(() => {
    switch (formComponent) {
      case 'PaymentCollectCash':
        setFormComponentType(<PaymentCollectCashForm
          onPressEstablishments={() => navigate('CardsGlobalStack', { screen: 'Establishments' })}
          onSubmit={() => {}}
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
  }, [formComponent, destinationAccount]);

  return (
    <SafeArea>
      <Container useKeyboard flex>
        <Header title={title} />
        <Container flex style={{ marginHorizontal: Theme.Sizes.Padding }}>
          <ScrollView>
            {formComponentType}
          </ScrollView>
        </Container>
      </Container>
    </SafeArea>
  );
};

export default PaymentForm;
