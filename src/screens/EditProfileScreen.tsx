import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

export const EditProfileScreen: React.FC = () => {
  const { theme } = useTheme();

  // Mock user data - replace with actual user data from your store/context
  const userProfile = {
    name: 'Aman Chitrey',
    profileId: 'HEARTS-1523170',
    image: 'https://backend.prod.connectingheart.co/api/profile/file/65eaccb3c70ef94111173de2/1756985740464',
    basicDetails: {
      name: 'Aman Chitrey',
      gender: 'M',
      email: 'amanchitrey07@gmail.com',
      phone: '9044312362',
    },
    criticalFields: {
      dateOfBirth: 'Not set',
      maritalStatus: 'Not set',
    },
    aboutMe: 'Not Filled',
  };

  const handleEditPhoto = () => {
    // Handle photo edit
    console.log('Edit photo clicked');
  };

  const handleAddPhotos = () => {
    // Handle add photos
    console.log('Add photos clicked');
  };

  const handleEditSection = (section: string) => {
    // Handle section edit
    console.log(`Edit ${section} clicked`);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Picture Section */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: userProfile.image }}
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.editPhotoButton}
              onPress={handleEditPhoto}
            >
              <Ionicons name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileIdLabel, { color: theme.colors.textSecondary }]}>
              PROFILE ID
            </Text>
            <Text style={[styles.profileId, { color: theme.colors.text }]}>
              {userProfile.profileId}
            </Text>
            <TouchableOpacity
              style={styles.addPhotosButton}
              onPress={handleAddPhotos}
            >
              <Ionicons name="camera" size={16} color="white" />
              <Text style={styles.addPhotosText}>+ Add More Photos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Basic Details Section */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Basic Details
          </Text>
          <TouchableOpacity
            style={[
              styles.editButton,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(236, 72, 153, 0.2)'
                  : 'rgba(236, 72, 153, 0.1)',
              },
            ]}
            onPress={() => handleEditSection('Basic Details')}
          >
            <Ionicons
              name="pencil"
              size={20}
              color={theme.isDark ? '#f9a8d4' : '#ec4899'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: theme.colors.text }]}>
              Name:
            </Text>
            <Text style={[styles.detailValue, { color: theme.colors.textSecondary }]}>
              {userProfile.basicDetails.name}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: theme.colors.text }]}>
              Gender:
            </Text>
            <Text style={[styles.detailValue, { color: theme.colors.textSecondary }]}>
              {userProfile.basicDetails.gender}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: theme.colors.text }]}>
              Email:
            </Text>
            <Text style={[styles.detailValue, { color: theme.colors.textSecondary }]}>
              {userProfile.basicDetails.email}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: theme.colors.text }]}>
              Phone:
            </Text>
            <Text style={[styles.detailValue, { color: theme.colors.textSecondary }]}>
              {userProfile.basicDetails.phone}
            </Text>
          </View>
        </View>
      </View>

      {/* Critical Fields Section */}
      <View
        style={[
          styles.card,
          styles.criticalCard,
          {
            backgroundColor: theme.isDark
              ? 'rgba(250, 204, 21, 0.2)'
              : 'rgba(254, 240, 138, 1)',
            borderColor: theme.isDark ? 'rgba(250, 204, 21, 0.8)' : 'rgba(250, 204, 21, 0.2)',
          },
        ]}
      >
        <View style={styles.sectionHeader}>
          <Text
            style={[
              styles.sectionTitle,
              styles.criticalTitle,
              { color: theme.isDark ? '#fca5a5' : '#dc2626' },
            ]}
          >
            Critical Field
          </Text>
          <TouchableOpacity
            style={[
              styles.editButton,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(250, 204, 21, 0.3)'
                  : 'rgba(254, 240, 138, 1)',
              },
            ]}
            onPress={() => handleEditSection('Critical Fields')}
          >
            <Ionicons
              name="pencil"
              size={20}
              color={theme.isDark ? '#fef08a' : '#ca8a04'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: theme.colors.text }]}>
              Date of Birth:
            </Text>
            <Text style={[styles.detailValue, { color: theme.colors.textSecondary }]}>
              {userProfile.criticalFields.dateOfBirth}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={[styles.detailLabel, { color: theme.colors.text }]}>
              Marital Status:
            </Text>
            <Text style={[styles.detailValue, { color: theme.colors.textSecondary }]}>
              {userProfile.criticalFields.maritalStatus}
            </Text>
          </View>
        </View>
      </View>

      {/* About Me Section */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            About Me
          </Text>
          <TouchableOpacity
            style={[
              styles.editButton,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(236, 72, 153, 0.2)'
                  : 'rgba(236, 72, 153, 0.1)',
              },
            ]}
            onPress={() => handleEditSection('About Me')}
          >
            <Ionicons
              name="pencil"
              size={20}
              color={theme.isDark ? '#f9a8d4' : '#ec4899'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.aboutMeContainer}>
          <View
            style={[
              styles.aboutMePlaceholder,
              {
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.aboutMeText, { color: theme.colors.textSecondary }]}>
              Tell us About Yourself
            </Text>
            <Text style={styles.aboutMeNotFilled}>Not Filled</Text>
          </View>
        </View>
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
    gap: 24,
    paddingBottom: 32,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  criticalCard: {
    borderWidth: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: 'rgba(236, 72, 153, 0.3)',
  },
  editPhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ec4899',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileInfo: {
    flex: 1,
    alignItems: 'center',
  },
  profileIdLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  profileId: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  addPhotosButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ec4899',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  addPhotosText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  criticalTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  editButton: {
    borderRadius: 8,
    padding: 8,
  },
  detailsContainer: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    gap: 16,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    width: 128,
    flexShrink: 0,
  },
  detailValue: {
    fontSize: 14,
    flex: 1,
  },
  aboutMeContainer: {
    marginTop: 16,
  },
  aboutMePlaceholder: {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutMeText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  aboutMeNotFilled: {
    fontSize: 12,
    color: '#ef4444',
    fontWeight: '500',
  },
});

