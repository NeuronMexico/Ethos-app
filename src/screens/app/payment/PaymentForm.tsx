/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import {
  Alert,
  Button,
  Container, Header, Input, InputCode, Picker, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { useAlert } from 'context';
import { CheckMarkCircleIcon } from 'assets/svg';
import { formatQuantity } from 'utils';
import { PaymentGlobalStackParams } from '../../../utils/types';
import { ComponentInfo } from './components';

interface Props {
  titles?: string[];
  formSection?: ReactNode;
  inputSection?: ReactNode;
}

const PaymentForm: React.FC<Props> = ({
  titles,
  formSection,
  inputSection,
}: Props) => {
  const { t } = useTranslation();
  const alert = useAlert();
  const { params: { title } } = useRoute<RouteProp<PaymentGlobalStackParams, 'form'>>();
  const { goBack, replace } = useNavigation<NativeStackNavigationProp<any>>();

  const referenceRef = useRef<TextInput>(null);
  const conceptRef = useRef<TextInput>(null);
  const pagerViewRef = useRef<PagerView>(null);

  const amountRef = useRef<TextInput>(null);

  const [account, setAccount] = useState<string>('');
  const [reference, setReference] = useState<string>();
  const [concept, setConcept] = useState<string>();

  const [amount, setAmount] = useState<string>('');

  const [visible, setVisible] = useState<boolean>(false);

  const showQR = () => {
    replace('PaymentStack', { screen: 'qr', params: { title, showHeader: title.includes('efectivo') } });
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

  return (
    <SafeArea>
      <Container useKeyboard flex>
        <Header title={titles?.length ? titles[0] : title} />
        <PagerView ref={pagerViewRef} style={{ flex: 1, marginTop: 32 }}>
          <Container style={{ paddingHorizontal: 16 }}>
            <Picker
              label={t('form:accountWhereChargesWillBeMade')}
              options={[
                { value: '334', label: '***334', caption: 'text' },
              ]}
              placeholder=""
              value={account}
              onValueChange={setAccount}
            />
            <Input
              ref={referenceRef}
              label={t('form:reference')}
              value={reference}
              onChangeText={setReference}
            />
            <Input
              ref={conceptRef}
              label={t('form:concept')}
              value={concept}
              onChangeText={setConcept}
            />
            <Button
              label={t('global:continue')}
              onPress={() => {}}
              marginTop={16}
            />
          </Container>
          <Container center style={{ paddingHorizontal: 16 }}>
            <Container flex style={{ alignSelf: 'center' }}>
              <Input
                ref={amountRef}
                value={amount}
                onChangeText={setAmount}
                placeholder="$0.00"
                width="auto"
                material
                fontSize={34}
                fontWeight="Bold"
                paddingVertical={0}
                marginTop={24}
                mask="money"
                options={{
                  precision: 2,
                  separator: '.',
                  delimiter: ',',
                  unit: '$',
                  suffixUnit: '',
                }}
                autoFocus
                keyboardType="numeric"
                minWidth={100}
              />
              <Text text={t('form:amount')} textAlign="center" marginTop={8} />
            </Container>
            <Container flex style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 16 }}>
              <Button
                label={t('global:continue')}
                onPress={handleCharge}
              />
            </Container>
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
