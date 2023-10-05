import React, {
  ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useDispatch } from 'reactRedux';
import { BottomSheet, SafeArea } from 'components';
import { CardsGlobalStackParams, calculateSnapPoints } from 'utils';
import CardScreen from './CardScreen';
import {
  DigitalCardBottomSheetContent,
  PayCardBottomSheetContent,
  PinBottomSheetContent,
  SeeMoreBottomSheetContent,
  TurnOffCardBottomSheetContent,
} from './components';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'Card'> {}

const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

const CardController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const containerRef = useRef<View>(null);

  // BottomSheet states
  const [bottomSheetState, setBottomSheetState] = useState<number>(-1);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>(['25%']);
  const [bottomSheetTitle, setBottomSheetTitle] = useState<string>('');
  const [bottomSheetContent, setBottomSheetContent] = useState<ReactElement | null>(null);

  const [cardOn, setCardOn] = useState<boolean>(true);

  useEffect(() => {
    if (bottomSheetState === -1) {
      setBottomSheetTitle('');
      setBottomSheetContent(null);
    }
  }, [bottomSheetState]);

  const showBottomSheet = useCallback(async () => {
    const calculatedSnapPoints = await calculateSnapPoints(containerRef);
    setSnapPoints(calculatedSnapPoints);
    setBottomSheetState(0);
  }, []);

  const onPressTurnOff = useCallback(async () => {
    setBottomSheetTitle(`${t('cards:card')} *334`);
    setBottomSheetContent(<TurnOffCardBottomSheetContent ref={containerRef} cardOn={cardOn} onChange={setCardOn} />);
    showBottomSheet();
  }, [cardOn, showBottomSheet, t]);

  const onPressPayCard = useCallback(async () => {
    setBottomSheetTitle(t('cards:payViaSpei'));
    setBottomSheetContent(<PayCardBottomSheetContent ref={containerRef} />);
    showBottomSheet();
  }, [showBottomSheet, t]);

  const onPressDigitalCard = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('cards:confirmYourIdentity') });
    if (result.success) {
      setBottomSheetTitle(t('cards:digitalCard'));
      setBottomSheetContent(<DigitalCardBottomSheetContent ref={containerRef} />);
      showBottomSheet();
    }
  }, [showBottomSheet, t]);

  const onPressPin = useCallback(async () => {
    const result = await rnBiometrics.simplePrompt({ promptMessage: t('cards:confirmYourIdentity') });
    if (result.success) {
      setBottomSheetTitle('');
      setBottomSheetContent(<PinBottomSheetContent ref={containerRef} />);
      showBottomSheet();
    }
  }, [showBottomSheet, t]);

  const onPressSeeMore = useCallback(async () => {
    setBottomSheetTitle('');
    setBottomSheetContent(<SeeMoreBottomSheetContent ref={containerRef} />);
    showBottomSheet();
  }, [showBottomSheet]);

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
      />
      <BottomSheet
        title={bottomSheetTitle}
        state={bottomSheetState}
        handleSheetChanges={setBottomSheetState}
        snapPoints={snapPoints}
        blurBackground
        titleAlign="left"
      >
        {bottomSheetContent}
      </BottomSheet>
    </SafeArea>
  );
};

export default CardController;
