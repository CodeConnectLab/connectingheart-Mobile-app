import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { ProfileGridCard } from '../components';
import { EmptyState } from '../common/components';
import { Profile } from '../types';

// Mock data - Replace with actual API call
const mockDailyProfiles: Profile[] = [
  // Add mock profiles here when needed
  // For now, leaving empty to show "No profiles found" state
];

export const DailyPicksScreen: React.FC = () => {
  const { theme } = useTheme();
  const [profiles] = useState<Profile[]>(mockDailyProfiles);

  const handleSendInterest = (profileId: string) => {
    // TODO: Implement send interest logic
    console.log('Send interest to:', profileId);
  };

  const handleShortlist = (profileId: string) => {
    // TODO: Implement shortlist logic
    console.log('Shortlist:', profileId);
  };

  const handleIgnore = (profileId: string) => {
    // TODO: Implement ignore logic
    console.log('Ignore:', profileId);
  };

  const renderProfileCard = ({ item }: { item: Profile }) => (
    <ProfileGridCard
      profile={item}
      onSendInterest={() => handleSendInterest(item.id)}
      onShortlist={() => handleShortlist(item.id)}
      onIgnore={() => handleIgnore(item.id)}
    />
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
          styles.headerCard,
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
          Daily Recommendations
        </Text>
        <Text style={[styles.headerDescription, { color: theme.colors.textSecondary }]}>
          Fresh suggestions based on your preferences and activity.
        </Text>
        <Text style={styles.updateText}>Updated every 24 hours</Text>
      </View>

      {/* Profiles List or Empty State */}
      {profiles.length > 0 ? (
        <View style={styles.profilesContainer}>
          <FlatList
            data={profiles}
            renderItem={renderProfileCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.profilesContent}
            ItemSeparatorComponent={() => <View style={styles.profileSpacing} />}
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
    paddingBottom: 32,
  },
  headerCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  headerLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  updateText: {
    fontSize: 12,
    color: '#ec4899',
    marginTop: 8,
  },
  profilesContainer: {
    gap: 24,
  },
  profilesContent: {
    gap: 24,
  },
  profileSpacing: {
    height: 24,
  },
});

