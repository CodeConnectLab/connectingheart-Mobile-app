import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { RootStackParamList } from './RootNavigator';

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

