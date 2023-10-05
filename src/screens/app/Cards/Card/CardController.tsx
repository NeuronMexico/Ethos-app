import React, { useCallback, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { CardsGlobalStackParams } from 'utils';
import { useBottomSheet } from 'context';
import CardScreen from './CardScreen';
import {
  DigitalCardBottomSheetContent,
  PayCardBottomSheetContent,
  PinBottomSheetContent,
  SeeMoreBottomSheetContent,
  TransactionBottomSheetContent,
  TurnOffCardBottomSheetContent,
} from './components';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'Card'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const CardController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const bottomSheet = useBottomSheet();

  const [cardOn, setCardOn] = useState<boolean>(true);

  const onPressTurnOff = useCallback(async () => {
    bottomSheet.show(
      <TurnOffCardBottomSheetContent cardOn={cardOn} onChange={setCardOn} />,
      { title: `${t('cards:card')} *334`, titleAlign: 'left' },
    );
  }, [bottomSheet, cardOn, t]);

  const onPressPayCard = useCallback(async () => {
    bottomSheet.show(<PayCardBottomSheetContent />, { title: t('cards:payViaSpei'), titleAlign: 'left' });
  }, [bottomSheet, t]);

  const onPressDigitalCard = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('cards:confirmYourIdentity') });
    if (result.success) {
      bottomSheet.show(<DigitalCardBottomSheetContent />, { title: t('cards:digitalCard'), titleAlign: 'left' });
    }
  }, [bottomSheet, t]);

  const onPressPin = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('cards:confirmYourIdentity') });
    if (result.success) {
      bottomSheet.show(<PinBottomSheetContent onPressChangePin={() => {
        bottomSheet.hide();
        navigation.navigate('ChangePin');
      }}
      />);
    }
  }, [bottomSheet, navigation, t]);

  const onPressSeeMore = useCallback(async () => {
    bottomSheet.show(<SeeMoreBottomSheetContent onPressCreditDetail={() => navigation.navigate('CreditDetail')} />);
  }, [bottomSheet, navigation]);

  const onPressTransaction = useCallback(async () => {
    bottomSheet.show(<TransactionBottomSheetContent />);
  }, [bottomSheet]);

  return (
    <SafeArea>
      <CardScreen
        onPressRequestCard={() => navigation.navigate('CardSelection')}
        onPressActivateCard={() => navigation.navigate('CardActivation')}
        onPressTurnOff={onPressTurnOff}
        onPressPayCard={onPressPayCard}
        onPressDigitalCard={onPressDigitalCard}
        onPressPin={onPressPin}
        onPressSeeMore={onPressSeeMore}
        onPressTransaction={onPressTransaction}
      />
    </SafeArea>
  );
};

export default CardController;
