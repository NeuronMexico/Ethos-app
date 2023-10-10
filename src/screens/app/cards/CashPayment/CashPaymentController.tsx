import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { CardsGlobalStackParams } from 'utils';
import CashPaymentScreen from './CashPaymentScreen';
import { QRModal } from './components';

interface Props extends NativeStackScreenProps<CardsGlobalStackParams, 'CashPayment'> {}

const CashPaymentController: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [showQRModal, setShowQRModal] = useState<boolean>(false);

  return (
    <SafeArea>
      <CashPaymentScreen onPressConfirm={() => setShowQRModal(true)} />
      <QRModal
        visible={showQRModal}
        onPressCheckEstablishment={() => {
          setShowQRModal(false);
          navigation.navigate('Establishments');
        }}
        onPressBack={() => setShowQRModal(false)}
      />
    </SafeArea>
  );
};

export default CashPaymentController;
