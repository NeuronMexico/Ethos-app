import React from 'react';
import {
  SafeArea,
} from 'components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TransactionType } from 'utils';
import AssignTagsScreen from './AssignTagsScreen';

interface RouteParams {
  item: TransactionType
}
const AssignTagsController: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>>>();
  const { item } = route.params;

  return (
    <SafeArea>
      <AssignTagsScreen item={item} />
    </SafeArea>
  );
};

export default AssignTagsController;
