import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';

export const ChangePasswordScreen: React.FC = () => {
  const { theme } = useTheme();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    // Handle password change logic
    console.log('Change password submitted');
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
          styles.headerCard,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>
              SECURITY
            </Text>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Change Password
            </Text>
            <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
              Keep your account protected. Use a strong password that includes a
              combination of letters, numbers, and special characters.
            </Text>
          </View>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(236, 72, 153, 0.2)'
                  : 'rgba(254, 205, 211, 1)',
              },
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={64}
              color={theme.isDark ? '#f9a8d4' : '#ec4899'}
            />
          </View>
        </View>
      </View>

      {/* Form Section */}
      <View
        style={[
          styles.formCard,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        {/* Current Password */}
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: theme.colors.text }]}>
            Current Password
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Enter current password"
              placeholderTextColor={theme.colors.textSecondary}
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry={!showCurrentPassword}
              autoComplete="password"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              <Ionicons
                name={showCurrentPassword ? 'eye-off' : 'eye'}
                size={20}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* New Password */}
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: theme.colors.text }]}>
            New Password
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Enter new password"
              placeholderTextColor={theme.colors.textSecondary}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
              autoComplete="password-new"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Ionicons
                name={showNewPassword ? 'eye-off' : 'eye'}
                size={20}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.hint, { color: theme.colors.textSecondary }]}>
            Use at least 8 characters with letters, numbers, and symbols.
          </Text>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: theme.colors.text }]}>
            Confirm Password
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                },
              ]}
              placeholder="Confirm new password"
              placeholderTextColor={theme.colors.textSecondary}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              autoComplete="password-new"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye-off' : 'eye'}
                size={20}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            style={styles.submitButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.submitButtonText}>Update password</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    paddingBottom: 32,
  },
  headerCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerContent: {
    flexDirection: 'column',
    gap: 24,
  },
  headerText: {
    flex: 1,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  iconContainer: {
    width: '100%',
    height: 128,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    paddingRight: 48,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 12,
    padding: 4,
  },
  hint: {
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 8,
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

