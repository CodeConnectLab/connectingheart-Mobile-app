import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
  onPress?: () => void;
  buttonText?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  profile, 
  onPress,
  buttonText = 'View Profile'
}) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        { 
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.imageContainer, { backgroundColor: theme.colors.surface }]}>
        {profile.image ? (
          <Image 
            source={{ uri: profile.image }} 
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <View style={[styles.placeholderContainer, { backgroundColor: theme.colors.border }]}>
            <Ionicons 
              name="person" 
              size={48} 
              color={theme.colors.textSecondary} 
            />
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: theme.colors.text }]}>
          {profile.name}
        </Text>
        <Text style={[styles.details, { color: theme.colors.textSecondary }]}>
          {profile.age} yrs • {profile.height}
        </Text>
        <Text style={[styles.salary, { color: theme.colors.text }]}>
          {profile.salary}
        </Text>
        <Text style={[styles.details, { color: theme.colors.text }]}>
          {profile.religion}
        </Text>
        <Text style={[styles.location, { color: theme.colors.textSecondary }]}>
          {profile.location}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Ionicons name="eye-outline" size={16} color="white" />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 224,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
  },
  salary: {
    fontSize: 14,
    fontWeight: '600',
  },
  location: {
    fontSize: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ec4899',
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

