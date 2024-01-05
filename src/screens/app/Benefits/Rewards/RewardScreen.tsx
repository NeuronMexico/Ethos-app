import React, { useRef, useState } from 'react';
import {
  Button,
  Card, Container, Header, Input, Picker, ProfilePhoto, Text,
} from 'components';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';
import PagerView from 'react-native-pager-view';
import Theme from 'theme';
import { formatQuantity } from 'utils';
import { VisaIcon } from 'assets/svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

interface Props {
  onPressContinue: () => void;
}

const RewardScreen: React.FC<Props> = ({
  onPressContinue = () => {},
}: Props) => {
  const { bottom } = styles;

  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const pagerViewRef = useRef<PagerView>(null);
  const amountRef = useRef<any>(null);

  const [amount, setAmount] = useState<string>('0.00');

  const contactElement = (
    <Container row middle style={{ padding: Theme.Sizes.Padding }}>
      <Container>
        <ProfilePhoto size={36} style={{ paddingTop: 8 }} />
      </Container>
      <Container flex style={{ paddingLeft: Theme.Sizes.Padding }}>
        <Text text="Nombre del contacto" typography="body" />
      </Container>
      <Text text={`+${formatQuantity(500)}`} typography="body" fontWeight="Bold" />
    </Container>
  );

  return (
    <Container flex>
      <Header title={t('benefits:rewards')} showVirtualAssistantAction />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => {
          console.log(`page selected: ${e.nativeEvent.position}`);
        }}
      >
        <Container style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
          <Text text="Contactos referidos exitosamente en el mes" typography="header" />
          <Card style={{ marginTop: Theme.Sizes.Padding }} padding={0}>
            <FlatList
              data={[1, 2, 3]}
              renderItem={() => contactElement}
              keyExtractor={(item) => item.toString()}
            />
          </Card>
          <Container style={{ marginTop: Theme.Sizes.Padding }}>
            <Container row space="between">
              <Text text="Saldo anterior" />
              <Text text={formatQuantity(0)} fontWeight="Bold" />
            </Container>
            <Container row space="between" style={{ marginTop: Theme.Sizes.Padding }}>
              <Text text="Saldo actual" />
              <Text text={formatQuantity(1500)} fontWeight="Bold" />
            </Container>
            <Container row space="between" style={{ marginTop: Theme.Sizes.Padding }}>
              <Text text="Monto redimido" />
              <Text text={formatQuantity(0)} fontWeight="Bold" />
            </Container>
            <Container row space="between" style={{ marginTop: Theme.Sizes.Padding }}>
              <Text text="Válido hasta el" />
              <Text text="09/09/2023" fontWeight="Bold" />
            </Container>
          </Container>
          <Container style={{ marginTop: Theme.Sizes.Padding }}>
            <Button label="Canjear" onPress={() => pagerViewRef.current?.setPage(1)} />
          </Container>
        </Container>
        <Container flex style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
          <Text text="Deposita tus recompensas en tu tarjeta" typography="header" />
          <Text text="Ingresa el monto que quieres redimir" marginTop={Theme.Sizes.Padding} />
          <Picker
            title="TDC ethoscrédito"
            label={t('transactions:myCreditCard')}
            options={[{ label: '**** **** **** 4531', value: '1', caption: 'hey' }]}
            placeholder=""
            borderRadius={24}
            backgroundColor={Theme.Colors.DrWhite}
            prefixIcon={<VisaIcon />}
            useActionSheet
            actionSheetTitle={t('transactions:myCreditCard')}
            caption="**** **** **** 4531"
            value="$16,801.08"
            onValueChange={() => {}}
          />
          <Input
            ref={amountRef}
            label="¿Cuánto quieres depositar?"
            value={amount}
            onChangeText={setAmount}
            placeholder="$0.00 (MXN)"
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
            keyboardType="decimal-pad"
            blurOnSubmit={false}
          />
          <Container style={{
            ...bottom,
            paddingBottom: insets.bottom + 64,
          }}
          >
            <Button label={t('global:continue')} onPress={onPressContinue} />
          </Container>
        </Container>
      </PagerView>
    </Container>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});

export default RewardScreen;
