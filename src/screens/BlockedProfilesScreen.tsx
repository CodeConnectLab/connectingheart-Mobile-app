import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { EmptyState } from '../common/components';

export const BlockedProfilesScreen: React.FC = () => {
  const { theme } = useTheme();

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
          Blocked Profiles
        </Text>
        <Text style={[styles.headerDescription, { color: theme.colors.textSecondary }]}>
          Profiles you have blocked.
        </Text>
      </View>

      {/* Empty State */}
      <EmptyState message="No profiles found." />
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
    lineHeight: 20,
  },
});

