/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import PagerView from 'react-native-pager-view';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  Alert,
  Button,
  Container, Header, InputCode, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { useAlert } from 'context';
import { CheckMarkCircleIcon } from 'assets/svg';
import { formatQuantity } from 'utils';
import { ScrollView } from 'react-native-gesture-handler';
import { PaymentGlobalStackParams } from '../../../utils/types';
import { AmountPrimaryForm, AmountSecondaryForm, ComponentInfo } from './components';
import { ComponentEnum, ComponentTypes } from './PaymentsForms';

const PaymentForm: React.FC = () => {
  const { t } = useTranslation();
  const alert = useAlert();
  const {
    params: {
      title,
      formComponent,
      initialPage,
      destinationAccount,
    },
  } = useRoute<RouteProp<PaymentGlobalStackParams, 'form'>>();
  const { goBack, replace } = useNavigation<NativeStackNavigationProp<any>>();

  const pagerViewRef = useRef<PagerView>(null);

  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const [amount, setAmount] = useState<string>('');

  const [formComponentType, setFormComponentType] = useState<ReactNode>();
  const [amountComponentType, setAmountComponentType] = useState<ReactNode>();

  const showQR = () => {
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
  };

  const handleCharge = () => {
    alert.show({
      reference: '11231',
      invoice: '242234',
      date: new Date(),
      extraInfo: (
        <ComponentInfo amount={Number(amount)} />
      ),
      title: t('charges:confirmCharge'),
      actions: [
        {
          label: t('global:confirm'),
          type: 'primary',
          onPress: () => {
            alert.hide();
            if (title.includes('QR') || title.includes('efectivo')) showQR();
            else setVisible(true);
          },
        },
      ],
    });
  };

  useEffect(() => {
    let form: ReactNode;
    setAmountComponentType(<AmountPrimaryForm onChange={setAmount} onSubmit={handleCharge} />);
    console.log(formComponent);
    switch (formComponent) {
      case 'PaymentCollectQR':
        form = ComponentEnum[ComponentTypes.PaymentCollectQR](() => {});
        setAmountComponentType(<AmountPrimaryForm onChange={setAmount} onSubmit={showQR} />);
        setFormComponentType(form);
        break;
      case 'PaymentCollectToContact':
        form = ComponentEnum[ComponentTypes.PaymentCollectToContact](() => {});
        setFormComponentType(form);
        break;
      case 'PaymentCollectCash':
        form = ComponentEnum[ComponentTypes.PaymentCollectCash](() => {});
        setAmountComponentType(<AmountPrimaryForm onChange={setAmount} onSubmit={showQR} />);
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
        form = ComponentEnum[ComponentTypes.PaymentPayToContact](() => {}, destinationAccount);
        setFormComponentType(form);
        break;
      case 'none':
        setAmountComponentType(<AmountSecondaryForm onChange={setAmount} onSubmit={handleCharge} />);
        break;
      default:
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formComponent, destinationAccount]);

  function getTitle(): string {
    const arrLength = title?.length;

    if (arrLength === 1) {
      return title[0];
    }

    if (index === 0) {
      return title[0];
    }

    if (arrLength === 3) {
      switch (index) {
        case 0:
          return title[0];
        case 1:
          return title[1];
        case 2:
          return title[2];
        default:
          return title[arrLength - 1];
      }
    }

    if (index >= arrLength) {
      return title[arrLength - 1];
    }

    return title[index];
  }

  return (
    <SafeArea>
      <Container useKeyboard flex>
        <Header title={getTitle() ?? ''} />
        <PagerView
          ref={pagerViewRef}
          initialPage={initialPage ?? 0}
          style={{ flex: 1, marginTop: 32 }}
          onPageSelected={({ nativeEvent: { position } }) => {
            setIndex(position);
          }}
        >
          <Container flex style={{ marginHorizontal: Theme.Sizes.Padding }}>
            <ScrollView>
              {formComponentType}
            </ScrollView>
          </Container>
          <Container flex style={{ marginHorizontal: Theme.Sizes.Padding }}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {amountComponentType}
            </ScrollView>
          </Container>
          <Container style={{ paddingHorizontal: 16 }}>
            <Container flex center>
              <Text text={t('payment:enterCode')} textAlign="center" marginTop={24} />
              <InputCode length={4} />
              <Text
                text={t('payment:totalAmountToDispose', { amount: formatQuantity(Number(amount)) })}
                textAlign="center"
                marginTop={8}
              />
            </Container>
            <Container flex style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 16 }}>
              <Button
                label={t('global:continue')}
                onPress={showQR}
              />
            </Container>
          </Container>
        </PagerView>
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
