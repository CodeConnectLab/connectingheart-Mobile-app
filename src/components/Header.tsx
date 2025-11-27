import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { CommonActions } from '@react-navigation/native';
import { navigationRef } from '../navigation';
import { useSidebar } from '../contexts/SidebarContext';

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const { openSidebar } = useSidebar();

  const handleSearchPress = () => {
    if (navigationRef.current?.isReady()) {
      navigationRef.current.dispatch(
        CommonActions.navigate({
          name: 'MainTabs',
          params: {
            screen: 'Search',
          },
        })
      );
    }
  };

  const handleNotificationPress = () => {
    if (navigationRef.current?.isReady()) {
      navigationRef.current.dispatch(
        CommonActions.navigate({
          name: 'Notifications',
        })
      );
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.gradient.start }]}>
      <TouchableOpacity style={styles.menuButton} onPress={openSidebar}>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Connecting Hearts</Text>

      <View style={styles.rightIcons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={handleSearchPress}
        >
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={handleNotificationPress}
        >
          <Ionicons name="notifications" size={24} color="white" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>9+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 50,
  },
  menuButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#10b981',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
});

