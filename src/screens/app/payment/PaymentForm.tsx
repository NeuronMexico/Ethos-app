/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactNode, useCallback, useEffect, useState,
} from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  Alert,
  Container, Header, SafeArea,
} from 'components';
import Theme from 'theme';
import { useAlert } from 'context';
import { CheckMarkCircleIcon } from 'assets/svg';
import { ScrollView } from 'react-native-gesture-handler';
import ReactNativeBiometrics from 'react-native-biometrics';
import { PaymentGlobalStackParams } from '../../../utils/types';
import { AmountSecondaryForm, ComponentInfo } from './components';
import { ComponentEnum, ComponentTypes } from './PaymentsForms';
import { ContentModalResponse } from './components/ContentModalResponse';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
const PaymentForm: React.FC = () => {
  const { t } = useTranslation();
  const alert = useAlert();
  const {
    params: {
      title,
      formComponent,
      destinationAccount,
    },
  } = useRoute<RouteProp<PaymentGlobalStackParams, 'form'>>();
  const { goBack, replace } = useNavigation<NativeStackNavigationProp<any>>();
  const [visible, setVisible] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('');
  const [formComponentType, setFormComponentType] = useState<ReactNode>();

  const showQR = useCallback(() => {
    let codeTitleHeader = '';
    let variant: 'qr' | 'cash' | 'withdrawal' = 'cash';
    switch (formComponent) {
      case 'PaymentCollectQR':
        codeTitleHeader = t('payment:collectViaCODI');
        variant = 'qr';
        break;
      case 'PaymentCollectCash':
        codeTitleHeader = t('payment:collectViaCash');
        variant = 'cash';
        break;
      case 'none':
        codeTitleHeader = t('transactions:code');
        variant = 'withdrawal';
        break;
      default:
        break;
    }
    replace('PaymentStack', {
      screen: 'qr',
      params: {
        title: codeTitleHeader,
        variant,
      },
    });
  }, [formComponent, t, replace]);

  const biometricManager = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      alert.show({
        extraInfo: (
          <ContentModalResponse
            amount={Number(amount)}
            reference="11231"
            date={new Date()}
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
            label: t('form:goToTransactions'),
            type: 'secondary',
            onPress: () => {
              alert.hide();
              goBack();
            },
          },
          {
            label: t('global:share'),
            type: 'primary',
            onPress: () => {
              alert.hide();
            },
          },
        ],
      });
    }
  }, [t, amount, alert, goBack]);

  const handleCharge = useCallback(() => {
    alert.show({
      extraInfo: (
        <ComponentInfo
          amount={Number(amount)}
          reference="11231"
          date={new Date()}
        />
      ),
      title: t('charges:confirmCharge'),
      actions: [
        {
          label: t('global:confirm'),
          type: 'primary',
          onPress: () => {
            alert.hide();
            if (title.includes('QR') || title.includes('efectivo')) showQR();
            else alert.hide(); biometricManager();
          },
        },
        {
          label: t('global:cancel'),
          type: 'secondary',
          onPress: () => {
            alert.hide();
          },
        },
      ],
    });
  }, [amount, alert, t, title, biometricManager, showQR]);

  useEffect(() => {
    let form: ReactNode;
    switch (formComponent) {
      case 'PaymentCollectQR':
        form = ComponentEnum[ComponentTypes.PaymentCollectQR](() => {});
        setFormComponentType(form);
        break;
      case 'PaymentCollectToContact':
        form = ComponentEnum[ComponentTypes.PaymentCollectToContact](() => {});
        setFormComponentType(form);
        break;
      case 'PaymentCollectCash':
        form = ComponentEnum[ComponentTypes.PaymentCollectCash](() => {});
        setFormComponentType(form);
        break;
      case 'PaymentTransfer':
        form = ComponentEnum[ComponentTypes.PaymentTransfer](() => {});
        setFormComponentType(form);
        break;
      case 'PaymentPayToNewContact':
        form = ComponentEnum[ComponentTypes.PaymentPayToNewContact](() => {}, false, false, true);
        setFormComponentType(form);
        break;
      case 'PaymentPayToContact':
        form = ComponentEnum[ComponentTypes.PaymentPayToContact](handleCharge, destinationAccount);
        setFormComponentType(form);
        break;
      case 'none':
        setFormComponentType(<AmountSecondaryForm onChange={setAmount} onSubmit={handleCharge} />);
        break;
      default:
        break;
    }
  }, [formComponent, destinationAccount, handleCharge]);

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
      {
        visible && (
          <Container style={{ position: 'absolute', backgroundColor: Theme.Colors.PlaceboBlue }}>
            <Alert
              visible={visible}
              data={{
                customBackgroundColor: Theme.Colors.PlaceboBlue,
                reference: '534332',
                invoice: '12345',
                date: new Date(),
                title: t('charges:successCharge'),
                extraInfo: (
                  <>
                    <Container center style={{ marginVertical: 16 }}>
                      <CheckMarkCircleIcon />
                    </Container>
                    <ComponentInfo
                      showButtons
                      amount={Number(amount)}
                      onPressBack={() => {
                        setVisible(false);
                        goBack();
                      }}
                      onPressOptionButton={() => setVisible(false)}
                    />
                  </>
                ),
              }}
              onDismiss={() => setVisible(false)}
            />
          </Container>
        )
      }
    </SafeArea>
  );
};

export default PaymentForm;
