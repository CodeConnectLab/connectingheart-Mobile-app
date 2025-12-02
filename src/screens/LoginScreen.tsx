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
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!mobileNumber.trim() || !password.trim()) {
      // TODO: Show error toast
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement API call once backend routes are live
      // const response = await loginAPI(mobileNumber, password);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to main tabs after successful login
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (error) {
      // TODO: Handle error and show toast
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          {/* Secure & Private Badge */}
          <View style={styles.badgeContainer}>
            <View
              style={[
                styles.badge,
                {
                  backgroundColor: theme.isDark
                    ? 'rgba(236, 72, 153, 0.15)'
                    : 'rgba(236, 72, 153, 0.1)',
                },
              ]}
            >
              <Text style={[styles.badgeText, { color: theme.colors.primary }]}>
                Secure & private
              </Text>
            </View>
          </View>

          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Log in to your dashboard
            </Text>
            <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
              Continue where you left off. APIs will plug into this form once backend routes go live.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Mobile Number Input */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                Mobile number
              </Text>
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
                placeholder="+91 90000 00000"
                placeholderTextColor={theme.colors.textSecondary}
                value={mobileNumber}
                onChangeText={setMobileNumber}
                keyboardType="phone-pad"
                autoComplete="tel"
                textContentType="telephoneNumber"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                Password
              </Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={[
                    styles.input,
                    styles.passwordInput,
                    {
                      backgroundColor: theme.isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.9)',
                      borderColor: theme.colors.border,
                      color: theme.colors.text,
                    },
                  ]}
                  placeholder="••••••••"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoComplete="password"
                  textContentType="password"
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={theme.colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleLogin}
              disabled={isLoading}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={styles.signInButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.signInButtonText}>
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Register Link */}
          <View style={styles.registerSection}>
            <Text style={[styles.registerText, { color: theme.colors.textSecondary }]}>
              New here?{' '}
              <Text
                style={[styles.registerLink, { color: theme.colors.primary }]}
                onPress={handleNavigateToRegister}
              >
                Create an account
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    gap: 32,
  },
  badgeContainer: {
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  headerSection: {
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 16,
  },
  formSection: {
    gap: 16,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  passwordWrapper: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 48,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 12,
    padding: 4,
  },
  signInButton: {
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 8,
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signInButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  registerSection: {
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    textAlign: 'center',
  },
  registerLink: {
    fontWeight: '600',
  },
});

