import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import CompanyCodeLabelScreen from './CompanyCodeLabelScreen';

const CompanyCodeLabelController: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeArea>
      <CompanyCodeLabelScreen
        onPressContinue={() => navigate('CreateAlias')}
        onPressNoCode={() => navigate('UserValidation')}
      />
    </SafeArea>
  );
};

export default CompanyCodeLabelController;
