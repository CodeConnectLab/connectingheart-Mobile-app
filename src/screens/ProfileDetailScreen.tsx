import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { RootStackParamList } from '../navigation/RootNavigator';
import { BasicDetailsTab } from './ProfileDetail/tabs/BasicDetailsTab';
import { FamilyDetailsTab } from './ProfileDetail/tabs/FamilyDetailsTab';
import { KundaliTab } from './ProfileDetail/tabs/KundaliTab';
import { MatchTab } from './ProfileDetail/tabs/MatchTab';
import { ProfileDetailTabsData } from './ProfileDetail/tabs/types';
import { Toast } from '../common/components';

type ProfileDetailRouteProp = RouteProp<RootStackParamList, 'ProfileDetail'>;
const tabs = ['Basic Details', 'Family', 'Kundali', 'Match'] as const;
type ProfileDetailTabKey = (typeof tabs)[number];

export const ProfileDetailScreen: React.FC = () => {
  const { theme } = useTheme();
  const route = useRoute<ProfileDetailRouteProp>();
  const { profile } = route.params;
  const [activeTab, setActiveTab] = useState<ProfileDetailTabKey>('Basic Details');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isContactModalVisible, setContactModalVisible] = useState(false);
  const [isIgnored, setIsIgnored] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [toastState, setToastState] = useState({
    visible: false,
    message: '',
    id: 0,
  });

  const profileImages = profile.image 
    ? [profile.image, profile.image, profile.image, profile.image, profile.image, profile.image] // Replace with actual images array
    : [];

  const profileId = profile.name || `HEARTS-${profile.id}`;

  const detailData = useMemo<ProfileDetailTabsData>(
    () => ({
      basic: {
        summaryFields: [
          { label: 'Profile ID:', value: profileId },
          { label: 'Height:', value: profile.height || `5'3" (1.60 mts)` },
          { label: 'Location:', value: profile.location || 'Vid_101, Madhya Pradesh, Ind_101' },
        ],
        criticalFields: [
          { label: 'Date of Birth:', value: '1996-06-19' },
          { label: 'Marital Status:', value: 'Never married' },
          { label: 'Caste:', value: 'Meena' },
        ],
        about:
          'A cheerful and ambitious professional who values family traditions and modern aspirations equally.',
        aboutFields: [
          { label: 'Profile Managed by:', value: 'Self' },
          { label: 'Body Type:', value: 'Average' },
          { label: 'Thalassemia:', value: 'No' },
          { label: 'HIV Positive:', value: 'No' },
        ],
        educationFields: [{ label: 'Qualification:', value: 'BSC' }],
        careerSummary:
          'Working as a teacher in the private sector with a passion for enabling young minds.',
        careerFields: [
          { label: 'Employed In:', value: 'Private Sector' },
          { label: 'Occupation:', value: 'Teacher' },
          { label: 'Interested In Settling Abroad:', value: 'Yes' },
          { label: 'Income:', value: 'Rs. 3 - 4 Lakh' },
        ],
      },
      family: {
        fields: [
          { label: 'Family Status:', value: 'Middle Class' },
          { label: 'Family Type:', value: 'Nuclear Family' },
          { label: 'Family Values:', value: 'Moderate' },
          { label: 'Family Income:', value: 'Rs. 5 - 7.5 Lakh' },
          { label: 'Father Occupation:', value: 'Sergeant' },
          { label: 'Mother Occupation:', value: 'Homemaker' },
          { label: 'Brothers:', value: '1' },
          { label: 'Sisters:', value: '2' },
          { label: 'Married Sisters:', value: '2' },
          { label: 'My family based out of:', value: 'Ind_101' },
          { label: 'Gothra:', value: 'Jatwa' },
        ],
      },
      kundali: {
        astroFields: [
          { label: 'Rashi:', value: 'Meena' },
          { label: 'Time of birth:', value: '12:35 pm' },
          { label: 'Manglik:', value: 'Non-Manglik' },
          { label: 'Horoscopes:', value: 'SC' },
        ],
        lifestyleFields: [
          { label: 'Dietary Habits:', value: 'Non-vegetarian' },
          { label: 'Drinking Habits:', value: 'No' },
          { label: 'Smoking Habits:', value: 'No' },
          { label: 'Language:', value: 'English, Hindi' },
          { label: 'Hobbies:', value: 'Art/Handicraft, Cooking' },
          { label: 'Interest:', value: 'Movies' },
        ],
      },
      match: {
        percentage: 100,
        factors: [
          { label: 'Age', value: '(06/07/1994)' },
          { label: 'Marital status', value: '(Never married)' },
          { label: 'Religion', value: '(Hindu)' },
          { label: 'Mother tongue', value: '(Hindi)' },
          { label: 'Manglik', value: '(Non-Manglik)' },
          { label: 'Height', value: `(${profile.height || `5'5" (1.65 mts)`})` },
          { label: 'Income', value: '(Rs. 4 - 5 Lakh)' },
        ],
      },
    }),
    [profile.height, profile.location, profileId]
  );

  const tabComponents = useMemo<Record<ProfileDetailTabKey, React.ReactNode>>(
    () => ({
      'Basic Details': <BasicDetailsTab data={detailData.basic} />,
      Family: <FamilyDetailsTab data={detailData.family} />,
      Kundali: <KundaliTab data={detailData.kundali} />,
      Match: <MatchTab data={detailData.match} />,
    }),
    [detailData]
  );

  const handlePreviousImage = useCallback(() => {
    if (profileImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? profileImages.length - 1 : prev - 1
      );
    }
  }, [profileImages.length]);

  const handleNextImage = useCallback(() => {
    if (profileImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === profileImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [profileImages.length]);

  const handleImageDotPress = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const hideToast = useCallback(() => {
    setToastState((prev) => ({ ...prev, visible: false }));
  }, []);

  const showToast = useCallback((message: string) => {
    setToastState({
      visible: true,
      message,
      id: Date.now(),
    });
  }, []);

  const handleContactPress = useCallback(() => {
    setContactModalVisible(true);
  }, []);

  const handleContactCancel = useCallback(() => {
    setContactModalVisible(false);
  }, []);

  const handleContactConfirm = useCallback(() => {
    setContactModalVisible(false);
    showToast('Profile unlocked successfully.');
  }, [showToast]);

  const handleIgnoreToggle = useCallback(() => {
    setIsIgnored((prev) => {
      const next = !prev;
      showToast(
        next ? 'User ignored successfully.' : 'User restored successfully.'
      );
      return next;
    });
  }, [showToast]);

  const handleShortlistToggle = useCallback(() => {
    setIsShortlisted((prev) => {
      const next = !prev;
      showToast(
        next
          ? 'Profile shortlisted successfully.'
          : 'Profile unshortlisted successfully.'
      );
      return next;
    });
  }, [showToast]);

  const handleChatPress = useCallback(() => {
    showToast('Chat coming soon.');
  }, [showToast]);

  const handleSendInterest = useCallback(() => {
    showToast('Interest sent successfully.');
  }, [showToast]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
        <View style={styles.tabContainer}>{tabComponents[activeTab]}</View>
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
          onPress={handleSendInterest}
        >
          <Ionicons name="paper-plane" size={20} color="white" />
          <Text style={styles.sendInterestText}>Send Interest</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
          onPress={handleContactPress}
        >
          <Ionicons name="call" size={20} color="white" />
          <Text style={styles.secondaryActionText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
          onPress={handleShortlistToggle}
        >
          <Ionicons name="person-add" size={20} color="white" />
          <Text style={styles.secondaryActionText}>
            {isShortlisted ? 'Unshortlist' : 'Shortlist'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
          onPress={handleIgnoreToggle}
        >
          <Ionicons name="ban" size={20} color="white" />
          <Text style={styles.secondaryActionText}>
            {isIgnored ? 'Undo Ignore' : 'Ignore'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryActionButton]}
          activeOpacity={0.7}
          onPress={handleChatPress}
        >
          <Ionicons name="chatbubble" size={20} color="white" />
          <Text style={styles.secondaryActionText}>Chat</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isContactModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleContactCancel}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalCard,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
              Do you want to unlock this profile?
            </Text>
            <Text
              style={[
                styles.modalSubtitle,
                { color: theme.colors.textSecondary },
              ]}
            >
              This will cost you 1 heart coin!
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  styles.modalSecondaryButton,
                  { borderColor: theme.colors.border },
                ]}
                onPress={handleContactCancel}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.modalSecondaryText,
                    { color: theme.colors.text },
                  ]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  styles.modalPrimaryButton,
                  { backgroundColor: theme.colors.primary },
                ]}
                onPress={handleContactConfirm}
                activeOpacity={0.8}
              >
                <Text style={styles.modalPrimaryText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Toast
        visible={toastState.visible}
        message={toastState.message}
        onHide={hideToast}
        resetKey={toastState.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  imageCarousel: {
    width: '100%',
    height: 400,
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 8,
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
  tabContainer: {
    marginTop: 24,
    marginHorizontal: 4,
    marginBottom: 32,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: {
    width: '100%',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalSecondaryButton: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  modalPrimaryButton: {},
  modalPrimaryText: {
    color: 'white',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  modalSecondaryText: {
    fontWeight: '600',
  },
});

