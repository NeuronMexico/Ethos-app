import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import EstablishmentsScreen from './EstablishmentsScreen';

const EstablishmentsController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <EstablishmentsScreen />
    </SafeArea>
  );
};

export default EstablishmentsController;
