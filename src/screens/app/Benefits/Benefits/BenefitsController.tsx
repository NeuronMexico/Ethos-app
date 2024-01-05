import React from 'react';
import { SafeArea } from 'components';
import Theme from 'theme';
import { BenefitsStackParams } from 'utils';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BenefitsScreen from './BenefitsScreen';

interface Props extends NativeStackScreenProps<BenefitsStackParams, 'Benefits'> {}

const BenefitsController: React.FC<Props> = ({ navigation }: Props) => (
  <SafeArea topBGColor={Theme.Colors.PlaceboBlue}>
    <BenefitsScreen
      onPressRewards={() => navigation.navigate('Rewards')}
      onPressRefer={() => navigation.navigate('Refer')}
    />
  </SafeArea>
);

export default BenefitsController;
