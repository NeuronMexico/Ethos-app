import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import EthosCreditScreen from './EthosCreditScreen';

const EthosCreditController: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <EthosCreditScreen />
    </SafeArea>
  );
};

export default EthosCreditController;
