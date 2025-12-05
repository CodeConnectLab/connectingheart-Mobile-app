import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { Dropdown } from '../common/components/Dropdown';
import { DropdownOption } from '../constants/searchOptions';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

// Mock data for dropdowns - replace with actual data from API/constants
const heightOptions: DropdownOption[] = [
  { label: "4'0\"", value: '4.0' },
  { label: "4'1\"", value: '4.1' },
  { label: "4'2\"", value: '4.2' },
  { label: "4'3\"", value: '4.3' },
  { label: "4'4\"", value: '4.4' },
  { label: "4'5\"", value: '4.5' },
  { label: "4'6\"", value: '4.6' },
  { label: "4'7\"", value: '4.7' },
  { label: "4'8\"", value: '4.8' },
  { label: "4'9\"", value: '4.9' },
  { label: "4'10\"", value: '4.10' },
  { label: "4'11\"", value: '4.11' },
  { label: "5'0\"", value: '5.0' },
  { label: "5'1\"", value: '5.1' },
  { label: "5'2\"", value: '5.2' },
  { label: "5'3\"", value: '5.3' },
  { label: "5'4\"", value: '5.4' },
  { label: "5'5\"", value: '5.5' },
  { label: "5'6\"", value: '5.6' },
  { label: "5'7\"", value: '5.7' },
  { label: "5'8\"", value: '5.8' },
  { label: "5'9\"", value: '5.9' },
  { label: "5'10\"", value: '5.10' },
  { label: "5'11\"", value: '5.11' },
  { label: "6'0\"", value: '6.0' },
  { label: "6'1\"", value: '6.1' },
  { label: "6'2\"", value: '6.2' },
  { label: "6'3\"", value: '6.3' },
  { label: "6'4\"", value: '6.4' },
  { label: "6'5\"", value: '6.5' },
  { label: "6'6\"", value: '6.6' },
];

const countryOptions: DropdownOption[] = [
  { label: 'India', value: 'india' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'canada' },
  { label: 'Australia', value: 'australia' },
];

const stateOptions: DropdownOption[] = [
  { label: 'Maharashtra', value: 'maharashtra' },
  { label: 'Karnataka', value: 'karnataka' },
  { label: 'Tamil Nadu', value: 'tamil-nadu' },
  { label: 'Delhi', value: 'delhi' },
  { label: 'Gujarat', value: 'gujarat' },
];

const cityOptions: DropdownOption[] = [
  { label: 'Mumbai', value: 'mumbai' },
  { label: 'Pune', value: 'pune' },
  { label: 'Nagpur', value: 'nagpur' },
  { label: 'Nashik', value: 'nashik' },
];

const residentialStatusOptions: DropdownOption[] = [
  { label: 'Citizen', value: 'citizen' },
  { label: 'Permanent Resident', value: 'permanent-resident' },
  { label: 'Temporary Resident', value: 'temporary-resident' },
  { label: 'Student Visa', value: 'student-visa' },
  { label: 'Work Visa', value: 'work-visa' },
];

export const OnboardingScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [height, setHeight] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [residentialStatus, setResidentialStatus] = useState('');

  const currentStep = 1;
  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    // TODO: Validate form and save data
    navigation.navigate('OnboardingStep2');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Progress Bar */}
          <View style={[styles.progressBarContainer, { backgroundColor: theme.colors.surface }]}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${progressPercentage}%`,
                  backgroundColor: theme.colors.primary,
                },
              ]}
            />
          </View>

          {/* Form Section */}
          <View
            style={[
              styles.formCard,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.9)'
                  : 'rgba(255, 255, 255, 0.95)',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.sectionLabel, { color: theme.colors.textSecondary }]}>
              PERSONAL DETAILS
            </Text>

            <View style={styles.formContent}>
              {/* Gender Selection */}
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: theme.colors.text }]}>
                  Gender <Text style={styles.required}>*</Text>
                </Text>
                <View style={styles.genderButtons}>
                  <TouchableOpacity
                    style={[
                      styles.genderButton,
                      {
                        borderColor: gender === 'male' ? theme.colors.primary : theme.colors.border,
                        backgroundColor:
                          gender === 'male'
                            ? theme.isDark
                              ? 'rgba(236, 72, 153, 0.2)'
                              : 'rgba(236, 72, 153, 0.1)'
                            : 'transparent',
                      },
                    ]}
                    onPress={() => setGender('male')}
                    activeOpacity={0.7}
                  >
                    <Ionicons
                      name="male"
                      size={18}
                      color={gender === 'male' ? theme.colors.primary : theme.colors.textSecondary}
                      style={styles.genderIcon}
                    />
                    <Text
                      style={[
                        styles.genderButtonText,
                        {
                          color:
                            gender === 'male' ? theme.colors.primary : theme.colors.textSecondary,
                        },
                      ]}
                    >
                      Male
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.genderButton,
                      {
                        borderColor: gender === 'female' ? theme.colors.primary : theme.colors.border,
                        backgroundColor:
                          gender === 'female'
                            ? theme.isDark
                              ? 'rgba(236, 72, 153, 0.2)'
                              : 'rgba(236, 72, 153, 0.1)'
                            : 'transparent',
                      },
                    ]}
                    onPress={() => setGender('female')}
                    activeOpacity={0.7}
                  >
                    <Ionicons
                      name="female"
                      size={18}
                      color={gender === 'female' ? theme.colors.primary : theme.colors.textSecondary}
                      style={styles.genderIcon}
                    />
                    <Text
                      style={[
                        styles.genderButtonText,
                        {
                          color:
                            gender === 'female' ? theme.colors.primary : theme.colors.textSecondary,
                        },
                      ]}
                    >
                      Female
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Date of Birth and Height */}
              <View style={styles.rowGroup}>
                <View style={styles.fieldGroup}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>
                    Date of Birth <Text style={styles.required}>*</Text>
                  </Text>
                  <View style={styles.dateInputWrapper}>
                    <TextInput
                      style={[
                        styles.input,
                        {
                          backgroundColor: theme.isDark
                            ? 'rgba(15, 23, 42, 0.5)'
                            : 'rgba(248, 250, 252, 0.9)',
                          borderColor: theme.colors.border,
                          color: theme.colors.text,
                        },
                      ]}
                      placeholder="dd/mm/yyyy"
                      placeholderTextColor={theme.colors.textSecondary}
                      value={dateOfBirth}
                      onChangeText={setDateOfBirth}
                    />
                    <Ionicons
                      name="calendar-outline"
                      size={20}
                      color={theme.colors.textSecondary}
                      style={styles.dateIcon}
                    />
                  </View>
                </View>

                <View style={styles.fieldGroup}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>
                    Height <Text style={styles.required}>*</Text>
                  </Text>
                  <Dropdown
                    label=""
                    placeholder="Select height"
                    options={heightOptions}
                    value={height}
                    onSelect={setHeight}
                  />
                </View>
              </View>

              {/* Divider */}
              <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

              {/* Location Section Header */}
              <Text style={[styles.subsectionLabel, { color: theme.colors.text }]}>
                Location Details
              </Text>

              {/* Country */}
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: theme.colors.text }]}>
                  Country <Text style={styles.required}>*</Text>
                </Text>
                <Dropdown
                  label=""
                  placeholder="Select country"
                  options={countryOptions}
                  value={country}
                  onSelect={setCountry}
                />
              </View>

              {/* State and City */}
              <View style={styles.rowGroup}>
                <View style={styles.fieldGroup}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>
                    State <Text style={styles.required}>*</Text>
                  </Text>
                  <Dropdown
                    label=""
                    placeholder="Select state"
                    options={stateOptions}
                    value={state}
                    onSelect={setState}
                    disabled={!country}
                  />
                </View>

                <View style={styles.fieldGroup}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>
                    City <Text style={styles.required}>*</Text>
                  </Text>
                  <Dropdown
                    label=""
                    placeholder="Select city"
                    options={cityOptions}
                    value={city}
                    onSelect={setCity}
                    disabled={!state}
                  />
                </View>
              </View>

              {/* Residential Status */}
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: theme.colors.text }]}>
                  Residential Status <Text style={styles.required}>*</Text>
                </Text>
                <Dropdown
                  label=""
                  placeholder="Select residential status"
                  options={residentialStatusOptions}
                  value={residentialStatus}
                  onSelect={setResidentialStatus}
                />
              </View>
            </View>
          </View>

          {/* Navigation Buttons */}
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              onPress={handleBack}
              activeOpacity={0.7}
              style={styles.backButton}
            >
              <Ionicons
                name="arrow-back"
                size={20}
                color={theme.colors.textSecondary}
                style={styles.backIcon}
              />
              <Text style={[styles.backButtonText, { color: theme.colors.textSecondary }]}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.secondary]}
                style={styles.nextButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.nextButtonText}>Continue</Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="white"
                  style={styles.nextIcon}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    gap: 24,
  },
  progressBarContainer: {
    height: 6,
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 999,
  },
  formCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    gap: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: -8,
  },
  subsectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: -8,
  },
  formContent: {
    gap: 20,
  },
  fieldGroup: {
    gap: 10,
  },
  rowGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  genderButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  genderButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 8,
  },
  genderIcon: {
    marginRight: 4,
  },
  genderButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  required: {
    color: '#ef4444',
    fontSize: 15,
  },
  input: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
  },
  dateInputWrapper: {
    position: 'relative',
  },
  dateIcon: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  divider: {
    height: 1,
    marginVertical: 4,
    opacity: 0.3,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginTop: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 6,
  },
  backIcon: {
    marginRight: 2,
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  nextButton: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  nextButtonGradient: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  nextIcon: {
    marginLeft: 4,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

