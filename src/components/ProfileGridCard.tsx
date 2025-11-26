import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';
import { Profile } from '../types';

interface ProfileGridCardProps {
  profile: Profile;
  onSendInterest?: () => void;
  onShortlist?: () => void;
  onIgnore?: () => void;
}

export const ProfileGridCard: React.FC<ProfileGridCardProps> = ({
  profile,
  onSendInterest,
  onShortlist,
  onIgnore,
}) => {
  const { theme } = useTheme();

  const formatProfileDetails = () => {
    const age = profile.age || 'N/A';
    const height = profile.height || 'N/A';
    const salary = profile.salary || 'N/A';
    return `${age} yrs | ${height} | ${salary}`;
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={[styles.imageContainer, { backgroundColor: theme.colors.surface }]}>
        {profile.image ? (
          <Image
            source={{ uri: profile.image }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.placeholderContainer, { backgroundColor: theme.colors.border }]}>
            <View style={styles.placeholderIcon} />
          </View>
        )}
        
        {/* Gradient Overlay with Profile Info */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradientOverlay}
        >
          <View style={styles.overlayContent}>
            <Text style={styles.profileId}>{profile.name || `HEARTS-${profile.id}`}</Text>
            <Text style={styles.profileDetails}>{formatProfileDetails()}</Text>
          </View>
        </LinearGradient>
      </View>

      {/* Action Buttons */}
      <View
        style={[
          styles.actionsContainer,
          {
            backgroundColor: theme.colors.cardBackground,
            borderTopColor: theme.colors.border,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.actionButton}
          onPress={onSendInterest}
          activeOpacity={0.7}
        >
          <Text style={[styles.actionIcon, { color: theme.colors.textSecondary }]}>➤</Text>
          <Text style={[styles.actionText, { color: theme.colors.textSecondary }]}>
            Send interest
          </Text>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

        <TouchableOpacity
          style={styles.actionButton}
          onPress={onShortlist}
          activeOpacity={0.7}
        >
          <Text style={[styles.actionIcon, { color: theme.colors.textSecondary }]}>★</Text>
          <Text style={[styles.actionText, { color: theme.colors.textSecondary }]}>
            Shortlist
          </Text>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

        <TouchableOpacity
          style={styles.actionButton}
          onPress={onIgnore}
          activeOpacity={0.7}
        >
          <Text style={[styles.actionIcon, { color: theme.colors.textSecondary }]}>✕</Text>
          <Text style={[styles.actionText, { color: theme.colors.textSecondary }]}>
            Ignore
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 256,
    position: 'relative',
    overflow: 'hidden',
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
  placeholderIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  overlayContent: {
    marginTop: 8,
  },
  profileId: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  profileDetails: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  actionsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 4,
  },
  divider: {
    width: 1,
  },
  actionIcon: {
    fontSize: 16,
  },
  actionText: {
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});

