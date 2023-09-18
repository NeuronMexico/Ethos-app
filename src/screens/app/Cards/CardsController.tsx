import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import CardsScreen from './CardsScreen';

const CardsController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <CardsScreen />
    </SafeArea>
  );
};

export default CardsController;
