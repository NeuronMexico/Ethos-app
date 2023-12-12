import React from 'react';
import { SafeArea, SheetContentProfilePhoto } from 'components';
import { useBottomSheet } from 'context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentTypes } from 'screens/app/Payment/PaymentsForms';
import PersonalProjectScreen from './PersonalProjectScreen';

const PersonalProjectController: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheet = useBottomSheet();

  const onSubmit = () => {
    navigate('PaymentStack', {
      screen: 'form',
      params: {
        title: 'Retiro sin tarjeta',
        formComponent: ComponentTypes.WithdrawalNoCard,
      },
    });
  };

  const onPressEditPhoto = () => {
    bottomSheet.show(<SheetContentProfilePhoto onPress={() => bottomSheet.hide()} />);
  };

  return (
    <SafeArea>
      <PersonalProjectScreen
        onSubmit={onSubmit}
        onPressEditPhoto={onPressEditPhoto}
      />
    </SafeArea>
  );
};

export default PersonalProjectController;
