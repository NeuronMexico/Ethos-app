import React from 'react';
import { SafeArea } from 'components';
import Theme from 'theme';
import BenefitsScreen from './BenefitsScreen';

const BenefitsController: React.FC = () => (
  <SafeArea topBGColor={Theme.Colors.PlaceboBlue}>
    <BenefitsScreen />
  </SafeArea>
);

export default BenefitsController;
