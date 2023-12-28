import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useDispatch } from 'reactRedux';
import { PayCardBottomSheetContent, SafeArea, Text } from 'components';
import { formatQuantity, sleep } from 'utils';
import { useAlert, useBottomSheet } from 'context';
import CardScreen from './CardScreen';
import {
  CreditLineIncreaseBottomSheetContent,
  DigitalCardBottomSheetContent,
  PinBottomSheetContent,
  SeeMoreBottomSheetContent,
  TransactionBottomSheetContent,
  TurnOffCardBottomSheetContent,
} from './components';

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const CardController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const { t } = useTranslation();

  const bottomSheet = useBottomSheet();
  const alert = useAlert();

  const [cardOn, setCardOn] = useState<boolean>(true);

  const onPressTurnOff = useCallback(async () => {
    bottomSheet.show(
      <TurnOffCardBottomSheetContent cardOn={cardOn} onChange={setCardOn} />,
      { title: `${t('cards:card')} *334`, titleAlign: 'left' },
    );
  }, [bottomSheet, cardOn, t]);

  const onPressPayCard = useCallback(async () => {
    bottomSheet.show(
      <PayCardBottomSheetContent
        onPressCashPayment={() => {
          bottomSheet.hide();
          navigate('PaymentFlow', { flow: 'cash-payment' });
        }}
        onPressDirectDebitPayment={() => {
          bottomSheet.hide();
          navigate('DomiciliaryPayment', { flow: 'card' });
        }}
      />,
      { title: t('cards:payViaSpei'), titleAlign: 'left' },
    );
  }, [bottomSheet, navigate, t]);

  const onPressDigitalCard = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      bottomSheet.show(<DigitalCardBottomSheetContent />, { title: t('cards:digitalCard'), titleAlign: 'left' });
    }
  }, [bottomSheet, t]);

  const onPressPin = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
    if (result.success) {
      bottomSheet.show(
        <PinBottomSheetContent onPressChangePin={() => {
          bottomSheet.hide();
          navigate('ChangePin');
        }}
        />,
      );
    }
  }, [bottomSheet, navigate, t]);

  const onPressSeeMore = useCallback(async () => {
    bottomSheet.show(
      <SeeMoreBottomSheetContent
        onPressCreditDetail={() => {
          bottomSheet.hide();
          navigate('CreditDetail');
        }}
        onPressCreditLineIncrease={async () => {
          bottomSheet.hide();
          await sleep(500);
          bottomSheet.show(
            <CreditLineIncreaseBottomSheetContent
              onSubmit={(newLimit) => {
                bottomSheet.hide();
                alert.show({
                  title: t('cards:creditLineIncreasedCongratulations'),
                  invoice: '58432',
                  date: new Date(),
                  checkmark: true,
                  extraInfo: <Text text={formatQuantity(newLimit)} fontSize={24} fontWeight="Bold" textAlign="center" />,
                });
              }}
            />,
          );
        }}
        onPressAccountStatement={async () => {
          bottomSheet.hide();
          const result = await rnBiometrics.simplePrompt({ promptMessage: t('global:confirmYourIdentity') });
          if (result.success) {
            navigate('AccountStatement');
          }
        }}
      />,
    );
  }, [alert, bottomSheet, navigate, t]);

  const onPressTransaction = useCallback(async () => {
    bottomSheet.show(<TransactionBottomSheetContent />);
  }, [bottomSheet]);

  return (
    <SafeArea>
      <CardScreen
        onPressRequestCard={() => navigate('CardSelection')}
        onPressActivateCard={() => navigate('CardActivation')}
        onPressTurnOff={onPressTurnOff}
        onPressPayCard={onPressPayCard}
        onPressDigitalCard={onPressDigitalCard}
        onPressPin={onPressPin}
        onPressSeeMore={onPressSeeMore}
        onPressTransaction={onPressTransaction}
        onPressReportCard={() => navigate('CardReport')}
      />
    </SafeArea>
  );
};

export default CardController;
