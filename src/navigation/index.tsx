import React, { useEffect } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { RootStackParamList } from './RootNavigator';
import { useNavigationRoute } from '../contexts/NavigationContext';

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export const Navigation: React.FC = () => {
  const { setCurrentRoute } = useNavigationRoute();

  useEffect(() => {
    // Set initial route when navigation is ready
    if (navigationRef.current?.isReady()) {
      const state = navigationRef.current.getState();
      if (state) {
        const route = state.routes[state.index];
        setCurrentRoute(route.name);
      }
    }
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        if (navigationRef.current?.isReady()) {
          const state = navigationRef.current.getState();
          if (state) {
            const route = state.routes[state.index];
            setCurrentRoute(route.name);
          }
        }
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

