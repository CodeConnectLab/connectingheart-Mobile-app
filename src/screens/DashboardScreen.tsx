import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StyleSheet,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { ProfileCard, StatCard, ImageCarousel } from '../components';
import { Profile } from '../types';

// Mock data
const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'HEARTS-91995083',
    age: 37,
    height: "5'2\" (1.57 mts)",
    salary: 'Rs. 6 - 7 Lakh',
    religion: 'Hind0361',
    location: 'Pun, Mah, Ind',
  },
  {
    id: '2',
    name: 'HEARTS-13962026',
    age: 25,
    height: "5'2\" (1.57 mts)",
    salary: 'Rs. 0 - 1 Lakh',
    religion: 'Hind026',
    location: 'Pra, Utt, Ind',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/67af5348c70ef94111d50b2a/1753377883393',
  },
  {
    id: '3',
    name: 'HEARTS-31905959',
    age: 31,
    height: "5'5\" (1.65 mts)",
    salary: 'Rs. 3 - 4 Lakh',
    religion: 'Hind0320',
    location: 'Ind, Mad, Ind',
  },
];

const mockVisitors: Profile[] = [
  {
    id: '4',
    name: 'HEARTS-8049510',
    age: 33,
    height: "5'4\" (1.63 mts)",
    salary: 'Rs. 7.5 - 10 Lakh',
    religion: 'Hind046',
    location: 'Hyd, Tel, Ind',
  },
  {
    id: '5',
    name: 'HEARTS-68651916',
    age: 34,
    height: "5'11\" (1.80 mts)",
    salary: 'Rs. 10 - 15 Lakh',
    religion: 'Hind046',
    location: 'Hyd, Tel, Ind',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/6525a0b5f43a24b54f7ad536/1760264601979',
  },
];

const mockAllProfiles: Profile[] = [
  {
    id: '6',
    name: 'HEARTS-4134031',
    age: 32,
    height: "5'2\" (1.57 mts)",
    salary: 'Rs. 6 - 7 Lakh',
    religion: 'Hind0275',
    location: 'Hyd, Tel, Ind',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/66ed5972c70ef941113f148f/1728015850056',
  },
];

export const DashboardScreen: React.FC = () => {
  const { theme } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  // Mock carousel images - replace with actual images
  const carouselImages = [
    'https://backend.prod.connectingheart.co/api/profile/file/65eaccb3c70ef94111173de2/1756985740464',
    'https://backend.prod.connectingheart.co/api/profile/file/67af5348c70ef94111d50b2a/1753377883393',
    'https://backend.prod.connectingheart.co/api/profile/file/66ed5972c70ef941113f148f/1728015850056',
  ];

  const handleProfilePress = (profile: Profile) => {
    console.log('Profile pressed:', profile.id);
  };

  const renderSection = (
    title: string,
    subtitle: string,
    data: Profile[],
    buttonText: string = 'View Profile'
  ) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={[styles.sectionSubtitle, { color: theme.colors.textSecondary }]}>
            {subtitle}
          </Text>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            {title}
          </Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={16} color="#ec4899" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {data.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onPress={() => handleProfilePress(profile)}
            buttonText={buttonText}
          />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <ScrollView 
      ref={scrollRef}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header Card */}
      <LinearGradient
        colors={['#ec4899', '#db2777', '#f43f5e']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.profileCard}
      >
        {/* YOUR PROFILE Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://backend.prod.connectingheart.co/api/profile/file/65eaccb3c70ef94111173de2/1756985740464' }}
              style={styles.profileImage}
            />
            <View style={styles.onlineIndicator} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileLabel}>YOUR PROFILE</Text>
            <Text style={styles.profileName}>Aman Chitrey</Text>
            <Text style={styles.profileCompletion}>Profile completion 100%</Text>
          </View>
        </View>

        {/* ACTIVATE YOUR PLAN Section */}
        <View style={styles.activateSection}>
          <Text style={styles.profileLabel}>ACTIVATE YOUR PLAN</Text>
          <TouchableOpacity style={styles.upgradeBox} activeOpacity={0.8}>
            <Text style={styles.upgradeText}>Upgrade for premium features</Text>
          </TouchableOpacity>
        </View>

        {/* LOOKING FOR Section */}
        <View style={styles.lookingForSection}>
          <View style={styles.lookingForInfo}>
            <Text style={styles.profileLabel}>LOOKING FOR</Text>
            <Text style={styles.profileName}>Life Partner</Text>
            <Text style={styles.profileCompletion}>Preferences saved</Text>
          </View>
          <View style={styles.profileIconContainer}>
            <View style={styles.profileIconCircle}>
              <Ionicons name="person-outline" size={40} color="rgba(255,255,255,0.7)" />
            </View>
            <View style={[styles.onlineIndicator, { backgroundColor: '#3b82f6' }]} />
          </View>
        </View>
      </LinearGradient>

      {/* Image Carousel Section */}
      <ImageCarousel
        images={carouselImages}
        label=""
        heading=""
        height={220}
      />

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatCard
          value={0}
          title="Acceptance"
          subtitle="Matches accepted this week"
        />
        <StatCard
          value={0}
          title="Just Joined"
          subtitle="New prospects today"
          onPress={() => console.log('Just Joined pressed')}
        />
      </View>

      {/* Daily Recommendations */}
      {renderSection(
        'Daily Recommendation',
        '508 RESULTS',
        mockProfiles
      )}

      {/* Profile Visitors */}
      {renderSection(
        'Profile Visitors',
        '27 RESULTS',
        mockVisitors,
        'View Visitor'
      )}

      {/* All Profiles */}
      {renderSection(
        'All Profiles',
        '508 RESULTS',
        mockAllProfiles
      )}

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileCard: {
    margin: 16,
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#10b981',
    borderWidth: 3,
    borderColor: 'white',
  },
  profileInfo: {
    flex: 1,
  },
  profileLabel: {
    fontSize: 10,
    letterSpacing: 2,
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 6,
    fontWeight: '500',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  profileCompletion: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
  },
  activateSection: {
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 20,
  },
  upgradeBox: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  upgradeText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  lookingForSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lookingForInfo: {
    flex: 1,
    marginRight: 16,
  },
  profileIconContainer: {
    position: 'relative',
  },
  profileIconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  section: {
    marginBottom: 48,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionSubtitle: {
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ec4899',
  },
  horizontalList: {
    paddingHorizontal: 16,
    gap: 20,
  },
});

