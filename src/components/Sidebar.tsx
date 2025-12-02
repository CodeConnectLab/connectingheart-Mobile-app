import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Image,
  Animated,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSidebar } from '../contexts/SidebarContext';
import { useTheme } from '../hooks/useTheme';
import { CommonActions } from '@react-navigation/native';
import { navigationRef } from '../navigation';
import { SIDEBAR_MENU_ITEMS, MenuItem } from '../constants/sidebarMenuItems';

const SIDEBAR_WIDTH = 288; // 72 * 4 (w-72 in Tailwind)

export const Sidebar: React.FC = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const { theme } = useTheme();
  const slideAnim = React.useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  React.useEffect(() => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen, slideAnim]);

  const handleNavigation = async (item: MenuItem) => {
    if (item.isExternal && item.externalUrl) {
      try {
        const canOpen = await Linking.canOpenURL(item.externalUrl);
        if (canOpen) {
          await Linking.openURL(item.externalUrl);
        }
      } catch (error) {
        console.error('Error opening external URL:', error);
      }
      closeSidebar();
      return;
    }

    if (item.action) {
      item.action();
    } else if (item.route && navigationRef.current?.isReady()) {
      navigationRef.current.dispatch(
        CommonActions.navigate(item.route.name as never, item.route.params as never)
      );
    }
    closeSidebar();
  };

  // Mock user data - replace with actual user data from your store/context
  const userProfile = {
    name: 'Aman Chitrey',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/65eaccb3c70ef94111173de2/1756985740464',
  };

  const menuItems = SIDEBAR_MENU_ITEMS;

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="none"
      onRequestClose={closeSidebar}
    >
      <View style={styles.modalContainer}>
        {/* Backdrop */}
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={closeSidebar}
        />

        {/* Sidebar */}
        <Animated.View
          style={[
            styles.sidebar,
            {
              backgroundColor: '#0f172a', // slate-900
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <View style={styles.sidebarContent}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              {/* User Profile Section */}
              <View style={styles.profileSection}>
                {/* Close Button */}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeSidebar}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons name="close" size={18} color="white" />
                </TouchableOpacity>
              <Image
                source={{ uri: userProfile.image }}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{userProfile.name}</Text>
                <TouchableOpacity
                  style={styles.editProfileLink}
                  onPress={() => {
                    const editProfileItem = menuItems.find((item) => item.id === 'edit-profile');
                    if (editProfileItem) {
                      handleNavigation(editProfileItem);
                    }
                  }}
                >
                  <Ionicons name="pencil" size={14} color="rgba(255, 255, 255, 0.7)" />
                  <Text style={styles.editProfileText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Menu Label */}
            <View style={styles.menuLabelContainer}>
              <Text style={styles.menuLabel}>MENU</Text>
            </View>

            {/* Menu Items */}
            <View style={styles.menuItemsContainer}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.menuItem,
                    item.isActive && styles.menuItemActive,
                    item.isDanger && styles.menuItemDanger,
                    index === menuItems.length - 1 && styles.menuItemLast,
                  ]}
                  onPress={() => handleNavigation(item)}
                  activeOpacity={0.7}
                >
                  <View style={styles.menuItemContent}>
                    <Ionicons
                      name={item.icon}
                      size={20}
                      color={
                        item.isActive
                          ? 'white'
                          : item.isDanger
                          ? '#fca5a5' // red-300
                          : 'rgba(203, 213, 225, 1)' // slate-300
                      }
                    />
                    <Text
                      style={[
                        styles.menuItemText,
                        item.isActive && styles.menuItemTextActive,
                        item.isDanger && styles.menuItemTextDanger,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </View>
                  {item.badge && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.badge}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
            </ScrollView>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  sidebarContent: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 10,
    backgroundColor: 'rgba(51, 65, 85, 0.95)', // slate-700 with opacity
    borderRadius: 16,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    marginTop: 0,
    position: 'relative',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  profileInfo: {
    flex: 1,
    minWidth: 0,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  editProfileLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  editProfileText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  menuLabelContainer: {
    paddingBottom: 24,
    paddingTop: 16,
  },
  menuLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#64748b', // slate-500
    textTransform: 'uppercase',
  },
  menuItemsContainer: {
    gap: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  menuItemActive: {
    backgroundColor: 'rgba(236, 72, 153, 0.2)', // pink-500/20
  },
  menuItemDanger: {
    // Will be handled by text color
  },
  menuItemLast: {
    marginBottom: 0,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(203, 213, 225, 1)', // slate-300
  },
  menuItemTextActive: {
    color: 'white',
  },
  menuItemTextDanger: {
    color: '#fca5a5', // red-300
  },
  badge: {
    backgroundColor: 'rgba(236, 72, 153, 0.3)', // pink-500/30
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fce7f3', // pink-100
  },
});

