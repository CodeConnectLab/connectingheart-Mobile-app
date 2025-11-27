import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { RootStackParamList } from '../navigation/RootNavigator';

type ProfileDetailRouteProp = RouteProp<RootStackParamList, 'ProfileDetail'>;
type ProfileDetailNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileDetail'>;

const { width } = Dimensions.get('window');

export const ProfileDetailScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<ProfileDetailNavigationProp>();
  const route = useRoute<ProfileDetailRouteProp>();
  const { profile } = route.params;
  
  const [activeTab, setActiveTab] = useState<'Basic Details' | 'Family' | 'Kundali' | 'Match'>('Basic Details');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock multiple images - in real app, fetch from profile.images array
  const profileImages = profile.image 
    ? [profile.image, profile.image, profile.image, profile.image, profile.image, profile.image] // Replace with actual images array
    : [];

  const tabs = ['Basic Details', 'Family', 'Kundali', 'Match'] as const;

  const handlePreviousImage = () => {
    if (profileImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? profileImages.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (profileImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === profileImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleImageDotPress = (index: number) => {
    setCurrentImageIndex(index);
  };

  const renderBasicDetails = () => (
    <View style={styles.tabContent}>
      <View style={styles.detailRow}>
        <Text style={[styles.detailLabel, { color: theme.colors.textSecondary }]}>
          Profile ID:
        </Text>
        <Text style={[styles.detailValue, { color: theme.colors.text }]}>
          {profile.name || `HEARTS-${profile.id}`}
        </Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={[styles.detailLabel, { color: theme.colors.textSecondary }]}>
          Height:
        </Text>
        <Text style={[styles.detailValue, { color: theme.colors.text }]}>
          {profile.height || 'N/A'}
        </Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={[styles.detailLabel, { color: theme.colors.textSecondary }]}>
          Location:
        </Text>
        <Text style={[styles.detailValue, { color: theme.colors.text }]}>
          {profile.location || 'N/A'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          CRITICAL FIELDS
        </Text>
        <View style={[styles.criticalField, { backgroundColor: '#fff9e6' }]}>
          <Text style={[styles.criticalLabel, { color: theme.colors.textSecondary }]}>
            Date of Birth:
          </Text>
          <Text style={[styles.criticalValue, { color: theme.colors.text }]}>
            2007-10-20
          </Text>
        </View>
      </View>
    </View>
  );

  const renderFamilyDetails = () => (
    <View style={styles.tabContent}>
      <Text style={[styles.familyTitle, { color: theme.colors.primary }]}>
        Family Details
      </Text>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Family Status:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Middle Class
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Family Type:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Nuclear Family
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Family Values:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Con
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Family Income:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Rs. 5 - 6 Lakh
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Father Occupation:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Ret
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Mother Occupation:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Hous
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Brothers:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          1
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Sisters:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          5
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Married Sisters:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          2
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          My family based out of:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Ind_101
        </Text>
      </View>
      
      <View style={styles.familyRow}>
        <Text style={[styles.familyLabel, { color: theme.colors.text }]}>
          Gothra:
        </Text>
        <Text style={[styles.familyValue, { color: theme.colors.textSecondary }]}>
          Chandwaria
        </Text>
      </View>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Basic Details':
        return renderBasicDetails();
      case 'Family':
        return renderFamilyDetails();
      case 'Kundali':
        return (
          <View style={styles.tabContent}>
            <Text style={[styles.tabText, { color: theme.colors.text }]}>
              Kundali details will be displayed here
            </Text>
          </View>
        );
      case 'Match':
        return (
          <View style={styles.tabContent}>
            <Text style={[styles.tabText, { color: theme.colors.text }]}>
              Match compatibility details will be displayed here
            </Text>
          </View>
        );
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Gradient Header */}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Image Carousel */}
        <View style={styles.imageCarousel}>
          {profileImages.length > 0 && profileImages[currentImageIndex] ? (
            <Image
              source={{ uri: profileImages[currentImageIndex] }}
              style={styles.carouselImage}
              resizeMode="cover"
            />
          ) : (
            <View style={[styles.placeholderImage, { backgroundColor: theme.colors.border }]}>
              <Ionicons name="person" size={64} color={theme.colors.textSecondary} />
            </View>
          )}

          {/* Navigation Arrows */}
          {profileImages.length > 1 && (
            <>
              <TouchableOpacity
                style={styles.carouselArrowLeft}
                onPress={handlePreviousImage}
                activeOpacity={0.7}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.carouselArrowRight}
                onPress={handleNextImage}
                activeOpacity={0.7}
              >
                <Ionicons name="chevron-forward" size={24} color="white" />
              </TouchableOpacity>
            </>
          )}

          {/* Dot Indicators */}
          {profileImages.length > 1 && (
            <View style={styles.dotsContainer}>
              {profileImages.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleImageDotPress(index)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.dot,
                      index === currentImageIndex ? styles.dotActive : styles.dotInactive,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Secondary Tab Navigation */}
        <View style={[styles.secondaryTabs, { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border }]}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.secondaryTab}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.secondaryTabText,
                  {
                    color:
                      activeTab === tab
                        ? theme.colors.primary
                        : theme.colors.textSecondary,
                    fontWeight: activeTab === tab ? '600' : '400',
                  },
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && (
                <View style={[styles.tabUnderline, { backgroundColor: theme.colors.primary }]} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <View style={[styles.contentCard, { backgroundColor: theme.colors.cardBackground, borderColor: theme.colors.border }]}>
          {renderTabContent()}
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View
        style={[
          styles.bottomActionBar,
          {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
          },
        ]}
      >
        <TouchableOpacity
          style={[styles.actionButton, styles.sendInterestButton, { backgroundColor: theme.colors.primary }]}
          activeOpacity={0.8}
        >
          <Ionicons name="paper-plane" size={20} color="white" />
          <Text style={styles.sendInterestText}>Send Interest</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
        >
          <Ionicons name="call" size={20} color="white" />
          <Text style={styles.secondaryActionText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
        >
          <Ionicons name="person-add" size={20} color="white" />
          <Text style={styles.secondaryActionText}>Shortlist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
        >
          <Ionicons name="ban" size={20} color="white" />
          <Text style={styles.secondaryActionText}>Ignore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
        >
          <Ionicons name="chatbubble" size={20} color="white" />
          <Text style={styles.secondaryActionText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  header: {
    paddingTop: 0,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 16,
    // paddingVertical: 16,
  },
  menuButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#10b981',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageCarousel: {
    width: '100%',
    height: 400,
    position: 'relative',
    marginBottom: 0,
    borderRadius: 24,
    overflow: 'hidden',
    // marginHorizontal: 16,
    marginTop: 16,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselArrowLeft: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  carouselArrowRight: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: 'white',
  },
  dotInactive: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  secondaryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 4,
  },
  secondaryTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    position: 'relative',
  },
  secondaryTabText: {
    fontSize: 14,
    marginBottom: 4,
  },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    height: 2,
    borderRadius: 1,
  },
  contentCard: {
    margin: 16,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tabContent: {
    gap: 24,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8,
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 100,
  },
  detailValue: {
    fontSize: 14,
    flex: 1,
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  criticalField: {
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
  },
  criticalLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  criticalValue: {
    fontSize: 14,
    flex: 1,
  },
  familyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
  },
  familyRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    gap: 16,
  },
  familyLabel: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 140,
  },
  familyValue: {
    fontSize: 14,
    flex: 1,
  },
  tabText: {
    fontSize: 16,
    lineHeight: 24,
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    gap: 4,
  },
  sendInterestButton: {
    flex: 1.5,
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  sendInterestText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  secondaryActionButton: {
    backgroundColor: '#1e293b',
  },
  secondaryActionText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

