import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import Theme from 'theme';
import CardSelectionScreen from './CardSelectionScreen';

const CardSelectionController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea backgroundColor={Theme.Colors.PlaceboBlue} safeBGColor={Theme.Colors.PlaceboBlue}>
      <CardSelectionScreen />
    </SafeArea>
  );
};

export default CardSelectionController;
