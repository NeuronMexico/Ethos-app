import React from 'react';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import HireBenefitFlowScreen from './HireBenefitFlowScreen';
import { RouteProp, useRoute } from '@react-navigation/native';

interface RouteParams {
  benefit: any
}

const HireBenefitFlowController: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<Record<string, RouteParams>>>();
  const { benefit } = route.params;

  return (
    <SafeArea>
      <HireBenefitFlowScreen benefit={benefit} />
    </SafeArea>
  );
};

export default HireBenefitFlowController;
