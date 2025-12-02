import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import { navigationRef } from '../navigation';

export interface MenuItem {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route?: {
    name: string;
    params?: any;
  };
  action?: () => void;
  badge?: string;
  isActive?: boolean;
  isDanger?: boolean;
  isExternal?: boolean;
  externalUrl?: string;
}

export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    route: { name: 'MainTabs', params: { screen: 'Dashboard' } },
    isActive: true,
  },
  {
    id: 'edit-profile',
    label: 'Edit Profile',
    icon: 'person',
    route: { name: 'EditProfile' },
  },
  {
    id: 'search',
    label: 'Search',
    icon: 'search',
    route: { name: 'MainTabs', params: { screen: 'Search' } },
  },
  {
    id: 'all-profiles',
    label: 'All Profiles',
    icon: 'people',
    route: { name: 'MainTabs', params: { screen: 'Profiles' } },
  },
  {
    id: 'daily-recommendations',
    label: 'Daily Recommendations',
    icon: 'sparkles',
    route: { name: 'MainTabs', params: { screen: 'DailyPicks' } },
  },
  {
    id: 'profile-visitors',
    label: 'Profile Visitors',
    icon: 'eye',
    route: { name: 'MainTabs', params: { screen: 'Dashboard' } }, // Update with actual route
  },
  {
    id: 'membership',
    label: 'Membership',
    icon: 'card',
    route: { name: 'MainTabs', params: { screen: 'Membership' } },
    badge: 'Upgrade',
  },
  {
    id: 'change-password',
    label: 'Change Password',
    icon: 'lock-closed',
    route: { name: 'ChangePassword' },
  },
  {
    id: 'delete-profile',
    label: 'Delete Profile',
    icon: 'trash',
    route: { name: 'DeleteProfile' },
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: 'chatbubble',
    route: { name: 'Feedback' },
  },
  {
    id: 'help-center',
    label: 'Help Center',
    icon: 'help-circle',
    route: { name: 'HelpCenter' },
  },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    icon: 'document-text',
    route: { name: 'Terms' },
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    icon: 'shield-checkmark',
    route: { name: 'PrivacyPolicy' },
  },
  {
    id: 'donate',
    label: 'Donate Now',
    icon: 'heart',
    isExternal: true,
    externalUrl: 'https://contributions.heartfulness.org/in-en/donation-general-fund',
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: 'log-out',
    isDanger: true,
    action: () => {
      // Navigate to login screen
      if (navigationRef.current?.isReady()) {
        navigationRef.current.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' as never }],
          })
        );
      }
    },
  },
];

