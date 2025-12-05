import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type OnboardingStep7ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingStep7'>;

export const OnboardingStep7Screen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingStep7ScreenNavigationProp>();
  
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [bio, setBio] = useState('');

  const currentStep = 7;
  const totalSteps = 7;
  const progressPercentage = 100;
  const maxBioLength = 125;

  const handleUploadPhoto = async () => {
    // TODO: Implement image picker
    setProfilePicture('photo.jpg');
  };

  const handleCreateProfile = () => {
    // TODO: Validate and save data
    navigation.navigate('VerificationPending');
  };

  const handleFillLater = () => {
    navigation.navigate('VerificationPending');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Progress Bar */}
          <View style={[styles.progressBarContainer, { backgroundColor: theme.colors.surface }]}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${progressPercentage}%`,
                  backgroundColor: theme.colors.primary,
                },
              ]}
            />
          </View>

          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={[styles.stepIndicator, { color: theme.colors.primary }]}>
              STEP {currentStep} OF {totalSteps}
            </Text>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              About you
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Complete your profile by adding a photo and a short bio.
            </Text>
          </View>

          {/* Upload Photo Section */}
          <TouchableOpacity
            style={[
              styles.uploadCard,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.7)',
                borderColor: theme.colors.border,
              },
            ]}
            onPress={handleUploadPhoto}
            activeOpacity={0.7}
          >
            <Text style={[styles.uploadLabel, { color: theme.colors.textSecondary }]}>
              Profile picture
            </Text>
            <View style={styles.uploadContent}>
              <View style={[styles.uploadIcon, { backgroundColor: theme.colors.primary }]}>
                <Text style={styles.uploadIconText}>+</Text>
              </View>
              <Text style={[styles.uploadText, { color: theme.colors.textSecondary }]}>
                {profilePicture ? profilePicture : 'Upload'}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Bio Section */}
          <View style={styles.bioSection}>
            <Text style={[styles.bioLabel, { color: theme.colors.text }]}>
              Tell us about yourself
            </Text>
            <TextInput
              style={[
                styles.bioInput,
                {
                  backgroundColor: theme.isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Tell us about yourself"
              placeholderTextColor={theme.colors.textSecondary}
              value={bio}
              onChangeText={(text) => setBio(text.slice(0, maxBioLength))}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              maxLength={maxBioLength}
            />
            <Text style={[styles.charCount, { color: theme.colors.textSecondary }]}>
              {bio.length} / {maxBioLength}
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreateProfile}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={styles.createButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.createButtonText}>Create my profile</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleFillLater}
              activeOpacity={0.7}
            >
              <Text style={[styles.fillLaterText, { color: theme.colors.primary }]}>
                I will fill this later
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleBack}
              activeOpacity={0.7}
              style={styles.backButton}
            >
              <Text style={[styles.backButtonText, { color: theme.colors.textSecondary }]}>
                ← Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    gap: 24,
  },
  progressBarContainer: {
    height: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 999,
  },
  headerSection: {
    gap: 8,
    alignItems: 'center',
  },
  stepIndicator: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  uploadCard: {
    borderRadius: 24,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  uploadLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  uploadContent: {
    alignItems: 'center',
    gap: 8,
  },
  uploadIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIconText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '300',
  },
  uploadText: {
    fontSize: 14,
  },
  bioSection: {
    gap: 8,
  },
  bioLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  bioInput: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    minHeight: 120,
  },
  charCount: {
    fontSize: 12,
    textAlign: 'right',
  },
  actionButtons: {
    gap: 12,
    alignItems: 'center',
  },
  createButton: {
    width: '100%',
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  createButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  fillLaterText: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

