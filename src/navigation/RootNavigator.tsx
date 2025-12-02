import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './BottomTabNavigator';
import { ProfileDetailScreen } from '../screens/ProfileDetailScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { InterestsReceivedScreen } from '../screens/InterestsReceivedScreen';
import { InterestsSentScreen } from '../screens/InterestsSentScreen';
import { UnlockedProfilesScreen } from '../screens/UnlockedProfilesScreen';
import { IDeclinedScreen } from '../screens/IDeclinedScreen';
import { TheyDeclinedScreen } from '../screens/TheyDeclinedScreen';
import { ShortlistedProfilesScreen } from '../screens/ShortlistedProfilesScreen';
import { IgnoredProfilesScreen } from '../screens/IgnoredProfilesScreen';
import { BlockedProfilesScreen } from '../screens/BlockedProfilesScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import { ChangePasswordScreen } from '../screens/ChangePasswordScreen';
import { DeleteProfileScreen } from '../screens/DeleteProfileScreen';
import { FeedbackScreen } from '../screens/FeedbackScreen';
import { HelpCenterScreen } from '../screens/HelpCenterScreen';
import { TermsScreen } from '../screens/TermsScreen';
import { PrivacyPolicyScreen } from '../screens/PrivacyPolicyScreen';
import { Profile } from '../types';

export type RootStackParamList = {
  MainTabs: undefined;
  ProfileDetail: { profile: Profile };
  Notifications: undefined;
  InterestsReceived: undefined;
  InterestsSent: undefined;
  UnlockedProfiles: undefined;
  IDeclined: undefined;
  TheyDeclined: undefined;
  ShortlistedProfiles: undefined;
  IgnoredProfiles: undefined;
  BlockedProfiles: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  DeleteProfile: undefined;
  Feedback: undefined;
  HelpCenter: undefined;
  Terms: undefined;
  PrivacyPolicy: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'card',
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="InterestsReceived" component={InterestsReceivedScreen} />
      <Stack.Screen name="InterestsSent" component={InterestsSentScreen} />
      <Stack.Screen name="UnlockedProfiles" component={UnlockedProfilesScreen} />
      <Stack.Screen name="IDeclined" component={IDeclinedScreen} />
      <Stack.Screen name="TheyDeclined" component={TheyDeclinedScreen} />
      <Stack.Screen name="ShortlistedProfiles" component={ShortlistedProfilesScreen} />
      <Stack.Screen name="IgnoredProfiles" component={IgnoredProfilesScreen} />
      <Stack.Screen name="BlockedProfiles" component={BlockedProfilesScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="DeleteProfile" component={DeleteProfileScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
};

