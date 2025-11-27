import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { RootStackParamList } from '../navigation/RootNavigator';

type NotificationScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface NotificationType {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  count?: number | string;
  screenName: keyof RootStackParamList;
  hoverColor: string;
  hasOverlay?: boolean;
  overlayIcon?: keyof typeof Ionicons.glyphMap;
  overlayColor?: string;
}

const notificationTypes: NotificationType[] = [
  {
    id: 'interests-received',
    title: 'Interests Received',
    description: 'Profiles who have shown interest in you',
    icon: 'heart-outline',
    iconColor: '#ec4899',
    screenName: 'InterestsReceived',
    hoverColor: 'rgba(236, 72, 153, 0.1)',
    hasOverlay: true,
    overlayIcon: 'star',
    overlayColor: '#fbbf24',
  },
  {
    id: 'interests-sent',
    title: 'Interests Sent',
    description: 'Profiles you have sent interest to',
    icon: 'heart-outline',
    iconColor: '#ec4899',
    count: '9+',
    screenName: 'InterestsSent',
    hoverColor: 'rgba(236, 72, 153, 0.1)',
  },
  {
    id: 'unlocked-profiles',
    title: 'Unlocked Profiles',
    description: 'Profiles you have unlocked to view contact details',
    icon: 'heart-outline',
    iconColor: '#ec4899',
    screenName: 'UnlockedProfiles',
    hoverColor: 'rgba(236, 72, 153, 0.1)',
    hasOverlay: true,
    overlayIcon: 'lock-closed',
    overlayColor: '#fbbf24',
  },
  {
    id: 'i-declined',
    title: 'I Declined',
    description: 'Profiles whose interest you have declined',
    icon: 'heart-outline',
    iconColor: '#f97316',
    count: 1,
    screenName: 'IDeclined',
    hoverColor: 'rgba(249, 115, 22, 0.1)',
    hasOverlay: true,
    overlayIcon: 'close',
    overlayColor: '#ffffff',
  },
  {
    id: 'they-declined',
    title: 'They Declined',
    description: 'Profiles who have declined your interest',
    icon: 'heart',
    iconColor: '#ec4899',
    screenName: 'TheyDeclined',
    hoverColor: 'rgba(236, 72, 153, 0.1)',
  },
  {
    id: 'shortlisted',
    title: 'Shortlisted Profiles',
    description: 'Profiles you have saved for later review',
    icon: 'flag-outline',
    iconColor: '#ef4444',
    count: 3,
    screenName: 'ShortlistedProfiles',
    hoverColor: 'rgba(239, 68, 68, 0.1)',
    hasOverlay: true,
    overlayIcon: 'heart',
    overlayColor: '#ec4899',
  },
  {
    id: 'ignored',
    title: 'Ignored Profiles',
    description: 'Profiles you have chosen to ignore',
    icon: 'ban-outline',
    iconColor: '#64748b',
    count: 2,
    screenName: 'IgnoredProfiles',
    hoverColor: 'rgba(100, 116, 139, 0.1)',
  },
  {
    id: 'blocked',
    title: 'Blocked Profiles',
    description: 'Profiles you have blocked',
    icon: 'ban-outline',
    iconColor: '#ef4444',
    screenName: 'BlockedProfiles',
    hoverColor: 'rgba(239, 68, 68, 0.1)',
  },
];

export const NotificationsScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<NotificationScreenNavigationProp>();

  const handleNotificationTypePress = (screenName: keyof RootStackParamList) => {
    // All notification screens have undefined params, so this is safe
    navigation.navigate(screenName, undefined as any);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <Text style={[styles.headerLabel, { color: theme.colors.textSecondary }]}>
          CONNECTING HEARTS
        </Text>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          Notifications
        </Text>
        <Text style={[styles.headerDescription, { color: theme.colors.textSecondary }]}>
          Manage your profile interactions and connections
        </Text>
      </View>

      {/* Notification Types Grid */}
      <View style={styles.gridContainer}>
        {notificationTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.notificationCard,
              {
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.border,
              },
            ]}
            onPress={() => handleNotificationTypePress(type.screenName)}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              {/* Icon Container */}
              <View style={styles.iconContainer}>
                {type.hasOverlay ? (
                  <View style={styles.iconWithOverlay}>
                    <Ionicons name={type.icon} size={32} color={type.iconColor} />
                    {type.overlayIcon && (
                      <View
                        style={[
                          styles.overlayIcon,
                          { backgroundColor: type.overlayColor || '#fbbf24' },
                        ]}
                      >
                        <Ionicons
                          name={type.overlayIcon}
                          size={16}
                          color={type.overlayColor === '#ffffff' ? type.iconColor : '#ffffff'}
                        />
                      </View>
                    )}
                  </View>
                ) : (
                  <Ionicons name={type.icon} size={32} color={type.iconColor} />
                )}
              </View>

              {/* Title and Description */}
              <View style={styles.textContainer}>
                <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                  {type.title}
                </Text>
              </View>

              {/* Count Badge */}
              {type.count !== undefined && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{type.count}</Text>
                </View>
              )}

              {/* Arrow Icon */}
              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 32,
  },
  header: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerLabel: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  gridContainer: {
    gap: 16,
  },
  notificationCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    flexShrink: 0,
  },
  iconWithOverlay: {
    position: 'relative',
  },
  overlayIcon: {
    position: 'absolute',
    right: -4,
    top: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  badge: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});

