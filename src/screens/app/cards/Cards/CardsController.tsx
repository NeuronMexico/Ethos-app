import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeArea } from 'components';
import Theme from 'theme';
import CardsScreen from './CardsScreen';

const CardsController: React.FC = () => {
  const { navigate } = useNavigation<any>();

  return (
    <SafeArea backgroundColor={Theme.Colors.PlaceboBlue} safeBGColor={Theme.Colors.PlaceboBlue}>
      <CardsScreen onSelectCard={() => navigate('CardsGlobalStack', { screen: 'Card' })} />
    </SafeArea>
  );
};

export default CardsController;
