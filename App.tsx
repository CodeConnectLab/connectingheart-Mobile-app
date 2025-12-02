import './global.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Navigation } from './src/navigation';
import { Header, Sidebar } from './src/components';
import { View, StyleSheet } from 'react-native';
import { useTheme } from './src/hooks/useTheme';
import { SidebarProvider } from './src/contexts/SidebarContext';
import { NavigationProvider, useNavigationRoute } from './src/contexts/NavigationContext';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const { currentRoute } = useNavigationRoute();

  // Hide header on login and register screens
  const shouldShowHeader = currentRoute !== 'Login' && currentRoute !== 'Register';

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      {shouldShowHeader && <Header />}
      <Navigation />
      {shouldShowHeader && <Sidebar />}
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationProvider>
          <SidebarProvider>
            <AppContent />
          </SidebarProvider>
        </NavigationProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
