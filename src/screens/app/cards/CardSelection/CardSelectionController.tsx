import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import Theme from 'theme';
import { CardsGlobalStackParams } from 'utils';
import CardSelectionScreen from './CardSelectionScreen';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'CardSelection'> {}

const CardSelectionController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeArea backgroundColor={Theme.Colors.PlaceboBlue} safeBGColor={Theme.Colors.PlaceboBlue}>
      <CardSelectionScreen onPressContinue={() => navigation.navigate('CardShipping')} />
    </SafeArea>
  );
};

export default CardSelectionController;
