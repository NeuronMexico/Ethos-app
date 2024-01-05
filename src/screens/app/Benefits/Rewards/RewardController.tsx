import React from 'react';
import {
  Button, Container, SafeArea, Text,
} from 'components';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useAlert } from 'context';
import { BenefitsStackParams, formatQuantity } from 'utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VisaIcon } from 'assets/svg';
import Theme from 'theme';
import RewardScreen from './RewardScreen';

interface Props extends NativeStackScreenProps<BenefitsStackParams, 'Rewards'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const RewardController: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const alert = useAlert();

  const onPressContinue = async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      alert.show({
        title: 'Depósito realizado correctamente',
        invoice: '58432',
        date: new Date(),
        checkmark: true,
        extraInfo: (
          <>
            <Text
              text={formatQuantity(Number('00'))}
              textAlign="center"
              fontWeight="Bold"
              typography="header"
              fontSize={34}
              marginBottom={16}
            />
            <Text text="Tarjeta donde recibirás el dinero:" textAlign="center" />
            <Button
              label="**** **** **** 531"
              onPress={() => {}}
              backgroundColor={Theme.Colors.PlaceboBlue}
              icon={<VisaIcon />}
              colorless
              paddingVertical={10}
              paddingHorizontal={80}
              marginTop={27}
              marginBottom={16}
            />
            <Container
              style={{
                width: 'auto',
                height: 0,
                borderBottomWidth: 1,
                borderBottomColor: Theme.Colors.PlaceboBlue,
              }}
            />
            <Container row style={{ marginTop: 16 }}>
              <Container flex>
                <Text text="Saldo anterior" textAlign="center" />
                <Text text={formatQuantity(1500)} textAlign="center" fontWeight="Bold" />
              </Container>
              <Container flex>
                <Text text="Saldo actual" textAlign="center" />
                <Text text={formatQuantity(1320)} textAlign="center" fontWeight="Bold" />
              </Container>
            </Container>
          </>
        ),
        actions: [
          {
            label: t('global:accept'),
            type: 'primary',
            onPress: () => {
              alert.hide();
              navigation.goBack();
            },
          },
        ],
      });
    }
  };

  return (
    <SafeArea>
      <RewardScreen onPressContinue={onPressContinue} />
    </SafeArea>
  );
};

export default RewardController;
