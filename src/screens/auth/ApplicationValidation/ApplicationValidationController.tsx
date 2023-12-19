import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { AuthStackParams } from 'utils';
import { CongratulationsModal } from 'components/organisms/CongratulationsModal';
import ApplicationValidationScreen from './ApplicationValidationScreen';

interface Props extends NativeStackScreenProps<AuthStackParams, 'ApplicationValidation'> {}

const ApplicationValidationController: React.FC<Props> = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [showCongratulationsModal, setCongratulationsModal] = useState(false);

  const onSubmit = () => {
    setCongratulationsModal(false);
    navigation.navigate('ContractDetails');
  };

  return (
    <SafeArea>
      <ApplicationValidationScreen onContinue={() => setCongratulationsModal(true)} />
      <CongratulationsModal
        visible={showCongratulationsModal}
        title="¡Felicidades Imanol!"
        message="Hemos aprobado tu tarjeta ethoscrédito *334"
        amount="$2,500.00"
        onPressBack={() => onSubmit()}
      />
    </SafeArea>
  );
};

export default ApplicationValidationController;
