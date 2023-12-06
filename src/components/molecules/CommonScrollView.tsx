import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';

interface Props {
  children: ReactNode;
}

const CommonScrollView: React.FC<Props> = ({ children }) => (
  <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    bounces={false}
  >
    {children}
  </ScrollView>
);

export { CommonScrollView };
