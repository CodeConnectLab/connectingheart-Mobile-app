import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';
import { Profile } from '../types';
import { EmptyState } from '../common/components';

// Mock data - Replace with actual API call
const mockProfiles: Profile[] = [
  {
    id: '1664607',
    name: 'HEARTS-1664607',
    age: 34,
    height: "5'10\" (1.78 mts)",
    salary: 'Rs. 7.5 – 10 Lakh',
    religion: 'Hindu',
    location: 'Mumbai, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/684ad39ec70ef941112c4268/1749825675812',
  },
];

const TOTAL_PROFILES = 1;

export const IDeclinedScreen: React.FC = () => {
  const { theme } = useTheme();
  const [profiles] = useState<Profile[]>(mockProfiles);

  const handleSendInterest = useCallback((profileId: string) => {
    console.log('Send interest:', profileId);
    // Implement API call
  }, []);

  const handleShortlist = useCallback((profileId: string) => {
    console.log('Shortlist:', profileId);
    // Implement API call
  }, []);

  const handleIgnore = useCallback((profileId: string) => {
    console.log('Ignore:', profileId);
    // Implement API call
  }, []);

  const formatProfileDetails = (profile: Profile) => {
    const age = profile.age || 'N/A';
    const height = profile.height || 'N/A';
    const salary = profile.salary || 'N/A';
    return `${age} yrs | ${height} | ${salary}`;
  };

  const renderProfileCard = ({ item }: { item: Profile }) => (
    <View
      style={[
        styles.profileCard,
        {
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={[styles.imageContainer, { backgroundColor: theme.colors.surface }]}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={[styles.placeholderContainer, { backgroundColor: theme.colors.border }]}>
            <View style={styles.placeholderIcon} />
          </View>
        )}

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradientOverlay}
        >
          <View style={styles.overlayContent}>
            <Text style={styles.profileId}>{item.name || `HEARTS-${item.id}`}</Text>
            <Text style={styles.profileDetails}>{formatProfileDetails(item)}</Text>
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
          onPress={() => handleSendInterest(item.id)}
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
          onPress={() => handleShortlist(item.id)}
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
          onPress={() => handleIgnore(item.id)}
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
          I Declined
        </Text>
        <Text style={[styles.headerDescription, { color: theme.colors.textSecondary }]}>
          Profiles whose interest you have declined.
        </Text>
        <Text style={[styles.headerCount, { color: theme.colors.textSecondary }]}>
          Showing {profiles.length} of {TOTAL_PROFILES} profiles
        </Text>
      </View>

      {/* Profiles List */}
      {profiles.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={profiles}
            renderItem={renderProfileCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={styles.listSpacing} />}
          />
        </View>
      ) : (
        <EmptyState message="No profiles found." />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 24,
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
    marginBottom: 8,
    lineHeight: 20,
  },
  headerCount: {
    fontSize: 12,
  },
  listContainer: {
    width: '100%',
  },
  listContent: {
    gap: 24,
  },
  listSpacing: {
    height: 24,
  },
  profileCard: {
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

