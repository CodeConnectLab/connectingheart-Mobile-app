import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { ProfileGridCard, Pagination } from '../components';
import { Profile } from '../types';

// Mock data - Replace with actual API call
const mockProfiles: Profile[] = [
  {
    id: '2900584',
    name: 'HEARTS-2900584',
    age: 26,
    height: "5'3\" (1.60 mts)",
    salary: 'Rs. 15 - 20 Lakh',
    religion: 'Hindu',
    location: 'Mumbai, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/684ad39ec70ef941112c4268/1749825675812',
  },
  {
    id: '7094221',
    name: 'HEARTS-7094221',
    age: 30,
    height: "5'4\" (1.63 mts)",
    salary: 'Rs. 20 - 25 Lakh',
    religion: 'Hindu',
    location: 'Delhi, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/67ebde53c70ef941116c3fcd/1752215265150',
  },
  {
    id: '8051311',
    name: 'HEARTS-8051311',
    age: 25,
    height: "5'0\" (1.52 mts)",
    salary: 'Rs. 5 - 6 Lakh',
    religion: 'Hindu',
    location: 'Bangalore, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/6525a0d6f43a24b54f7ada6f/1752563901962',
  },
  {
    id: '8611254',
    name: 'HEARTS-8611254',
    age: 22,
    height: "5'4\" (1.63 mts)",
    salary: 'Rs. 5 - 6 Lakh',
    religion: 'Hindu',
    location: 'Pune, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/687641f0c70ef941118365b6/1761137601821',
  },
  {
    id: '12866967',
    name: 'HEARTS-12866967',
    age: 27,
    height: "5'6\" (1.68 mts)",
    salary: 'Rs. 0 - 1 Lakh',
    religion: 'Hindu',
    location: 'Chennai, India',
  },
  {
    id: '13712984',
    name: 'HEARTS-13712984',
    age: 29,
    height: "5'6\" (1.68 mts)",
    salary: 'Rs. 7.5 - 10 Lakh',
    religion: 'Hindu',
    location: 'Hyderabad, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/681c21cfc70ef94111d13e58/1747243405107',
  },
  {
    id: '9286500',
    name: 'HEARTS-9286500',
    age: 29,
    height: "5'0\" (1.52 mts)",
    salary: 'Rs. 6 - 7 Lakh',
    religion: 'Hindu',
    location: 'Kolkata, India',
  },
  {
    id: '16543479',
    name: 'HEARTS-16543479',
    age: 30,
    height: "5'4\" (1.63 mts)",
    salary: 'Rs. 10 - 15 Lakh',
    religion: 'Hindu',
    location: 'Ahmedabad, India',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/6746974dc70ef94111fc6ef7/1764093210325',
  },
  {
    id: '3484425',
    name: 'HEARTS-3484425',
    age: 27,
    height: "5'2\" (1.57 mts)",
    salary: 'Rs. 7.5 - 10 Lakh',
    religion: 'Hindu',
    location: 'Jaipur, India',
  },
];

const PROFILES_PER_PAGE = 9;
const TOTAL_PROFILES = 503; // Mock total count

export const ProfilesScreen: React.FC = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(TOTAL_PROFILES / PROFILES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROFILES_PER_PAGE;
  const endIndex = startIndex + PROFILES_PER_PAGE;
  const currentProfiles = mockProfiles.slice(0, PROFILES_PER_PAGE); // In real app, fetch based on page

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // In real app, fetch profiles for the new page
  }, []);

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
          All Profiles
        </Text>
        <Text style={[styles.headerDescription, { color: theme.colors.textSecondary }]}>
          Browse every compatible profile curated for you.
        </Text>
        <Text style={[styles.headerCount, { color: theme.colors.textSecondary }]}>
          Showing {currentProfiles.length} of {TOTAL_PROFILES} profiles
        </Text>
      </View>

      {/* Profiles Grid */}
      <View style={styles.gridContainer}>
        <FlatList
          data={currentProfiles}
          renderItem={renderProfileCard}
          keyExtractor={(item) => item.id}
          numColumns={1}
          scrollEnabled={false}
          contentContainerStyle={styles.gridContent}
          ItemSeparatorComponent={() => <View style={styles.gridSpacing} />}
        />
      </View>

      {/* Pagination */}
      <View style={styles.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
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
  gridContainer: {
    width: '100%',
  },
  gridContent: {
    gap: 24,
  },
  gridSpacing: {
    height: 24,
  },
  paginationContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
});
