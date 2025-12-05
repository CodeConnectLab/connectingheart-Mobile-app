import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type VerificationPendingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VerificationPending'>;

export const VerificationPendingScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<VerificationPendingScreenNavigationProp>();

  const handleBackToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        {/* Illustration Placeholder */}
        <View style={[styles.illustrationContainer, { backgroundColor: theme.colors.surface }]}>
          <View style={[styles.iconCircle, { backgroundColor: theme.colors.primary }]}>
            <Text style={styles.iconText}>✓</Text>
          </View>
          <View style={[styles.iconCircle, { backgroundColor: theme.colors.secondary, marginTop: -20, marginLeft: 40 }]}>
            <Text style={styles.iconText}>🔒</Text>
          </View>
        </View>

        {/* Title and Description */}
        <View style={styles.textContent}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Verification Pending
          </Text>
          <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
            Your ID is under verification. It might take 15 to 20 days for verification. You can use the services once it is verified.
          </Text>
        </View>

        {/* Back to Login Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackToLogin}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            style={styles.backButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.backButtonText}>Back to Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
    gap: 32,
  },
  illustrationContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 32,
    color: 'white',
  },
  textContent: {
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 500,
  },
  backButton: {
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 16,
  },
  backButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

