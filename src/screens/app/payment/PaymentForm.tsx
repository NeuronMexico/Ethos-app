import {
  Alert,
  Button,
  Container, Header, Input, OptionButton, Picker, SafeArea, Text,
} from 'components';
import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { formatQuantity } from 'utils';
import Theme from 'theme';
import { useAlert } from 'context';
import { CheckMarkCircleIcon, ExportIcon } from 'assets/svg';
import i18n from 'i18n';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PaymentGlobalStackParams } from '../../../utils/types';

const PaymentForm = () => {
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
    replace('PaymentStack', { screen: 'qr', params: { title, showQR: title.includes('efectivo') } });
  };

  const handleCobro = () => {
    alert.show({
      reference: '11231',
      invoice: '242234',
      date: new Date(),
      extraInfo: (
        <Container>
          <Text
            text={formatQuantity(Number(amount))}
            textAlign="center"
            fontWeight="Bold"
            typography="header"
            fontSize={34}
          />
          <Container row>
            <Container width="50%" style={{ marginRight: 12 }}>
              <Text text="Cuenta donde quiero recibir el pago" textAlign="right" />
              <Text text="TDC ***334" textAlign="right" typography="title" fontSize={17} marginVertical={8} />
            </Container>
            <Container width="50%" style={{ marginLeft: 12 }}>
              <Text text="Cuenta destino" textAlign="left" />
              <Text text="CLABE ***531" typography="title" fontSize={17} marginVertical={8} />
              <Text text="Banco" textAlign="left" />
              <Text text="STP" typography="title" fontSize={17} marginVertical={8} />
              <Text text="Nombre" textAlign="left" />
              <Text text="Andrés Lara" typography="title" fontSize={17} marginVertical={8} />
              <Text text="Concepto" textAlign="left" />
              <Text text="Pago Viaje" typography="title" fontSize={17} marginVertical={8} />
            </Container>
          </Container>
        </Container>
      ),
      title: 'Confirmar cobro',
      actions: [
        {
          label: 'Confirmar',
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
        <Header title={title} />
        <PagerView ref={pagerViewRef} style={{ flex: 1, marginTop: 32 }}>
          <Container style={{ paddingHorizontal: 16 }}>
            <Picker
              label="Cuenta donde quiero recibir el pago"
              options={[
                { value: '334', label: '***334', caption: 'text' },
              ]}
              placeholder=""
              value={account}
              onValueChange={setAccount}
            />
            <Input
              ref={referenceRef}
              label="Referencia"
              value={reference}
              onChangeText={setReference}
            />
            <Input
              ref={conceptRef}
              label="Concepto"
              value={concept}
              onChangeText={setConcept}
            />
            <Button
              label="Continuar"
              onPress={() => {}}
              marginTop={16}
            />
          </Container>
          <Container center style={{ paddingHorizontal: 16 }}>
            <Input
              ref={amountRef}
              keyboardType="number-pad"
              borderless
              backgroundColor={Theme.Colors.White}
              fontSize={34}
              fontWeight="Bold"
              label=""
              value={amount}
              onChangeText={setAmount}
              width={250}
            />
            <Text text="Importe" />
            <Container flex style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 16 }}>
              <Button
                label="Continuar"
                onPress={handleCobro}
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
                title: 'Cobro exitoso',
                extraInfo: (
                  <Container flex>
                    <Container center>
                      <CheckMarkCircleIcon />
                    </Container>
                    <Container>
                      <Text
                        text={formatQuantity(Number(amount))}
                        marginTop={2}
                        marginBottom={8}
                        fontSize={34}
                        typography="header"
                        textAlign="center"
                        fontWeight="Bold"
                      />
                    </Container>
                    <Container row>
                      <Container width="50%" style={{ marginRight: 12 }}>
                        <Text text="Cuenta donde quiero recibir el pago" textAlign="right" />
                        <Text text="TDC ***334" textAlign="right" typography="title" fontSize={17} marginVertical={8} />
                      </Container>
                      <Container width="50%" style={{ marginLeft: 12 }}>
                        <Text text="Cuenta destino" textAlign="left" />
                        <Text text="CLABE ***531" typography="title" fontSize={17} marginVertical={8} />
                        <Text text="Banco" textAlign="left" />
                        <Text text="STP" typography="title" fontSize={17} marginVertical={8} />
                        <Text text="Nombre" textAlign="left" />
                        <Text text="Andrés Lara" typography="title" fontSize={17} marginVertical={8} />
                        <Text text="Concepto" textAlign="left" />
                        <Text text="Pago Viaje" typography="title" fontSize={17} marginVertical={8} />
                      </Container>
                    </Container>
                    <Container />
                    <Container style={{ margin: 16 }}>
                      <Button
                        label="Regresar"
                        onPress={() => {
                          setVisible(false);
                          goBack();
                        }}
                        backgroundColor={Theme.Colors.WhiteSmoke}
                        textColor={Theme.Colors.DarkSoul}
                        marginVertical={16}
                      />
                      <OptionButton
                        onPress={() => setVisible(false)}
                        width={55}
                        height={55}
                        borderRadius={15}
                        backgroundColor={Theme.Colors.PlaceboBlue}
                        marginHorizontal={5}
                        label={i18n.t('global:share')}
                        icon={<ExportIcon width={30} />}
                      />
                    </Container>
                  </Container>
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
