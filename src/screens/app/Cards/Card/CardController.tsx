import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import {
  BottomSheet, Container, SafeArea, SwipeableSwitch,
} from 'components';
import { CardsGlobalStackParams, calculateSnapPoints } from 'utils';
import CardScreen from './CardScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'Card'> {}

const CardController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const containerRef = useRef<View>(null);

  const [bottomSheetState, setBottomSheetState] = useState<number>(-1);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>(['25%']);
  const [cardOn, setCardOn] = useState<boolean>(true);

  useEffect(() => {
    calculateSnapPoints(containerRef).then(setSnapPoints);
  }, []);

  return (
    <SafeArea>
      <CardScreen
        onPressRequestCard={() => navigation.navigate('CardSelection')}
        onPressActivateCard={() => navigation.navigate('CardActivation')}
        onPressTurnOff={() => setBottomSheetState(0)}
      />
      <BottomSheet
        title={`${t('cards:card')} *334`}
        state={bottomSheetState}
        handleSheetChanges={setBottomSheetState}
        snapPoints={snapPoints}
        blurBackground
        titleAlign="left"
      >
        <Container ref={containerRef}>
          <SwipeableSwitch
            config={{ label: { active: t('cards:turnOffCard'), inactive: t('cards:turnOnCard') } }}
            defaultValue={cardOn}
            onChange={setCardOn}
          />
        </Container>
      </BottomSheet>
    </SafeArea>
  );
};

export default CardController;
