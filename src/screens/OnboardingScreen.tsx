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
    // TODO: Navigate to next step or complete onboarding
    console.log('Form data:', {
      gender,
      dateOfBirth,
      height,
      country,
      state,
      city,
      residentialStatus,
    });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
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

          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={[styles.stepIndicator, { color: theme.colors.primary }]}>
              STEP {currentStep} OF {totalSteps}
            </Text>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Fill in your Personal Details
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Provide additional information like your Date of Birth, Height and Location.
            </Text>
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
              BASICS
            </Text>

            <View style={styles.formContent}>
              {/* Gender Selection */}
              <View style={styles.genderContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Gender</Text>
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
              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>
                    Date of Birth
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

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Height</Text>
                  <Dropdown
                    label=""
                    placeholder="Select height"
                    options={heightOptions}
                    value={height}
                    onSelect={setHeight}
                  />
                </View>
              </View>

              {/* Location Fields */}
              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Country</Text>
                  <Dropdown
                    label=""
                    placeholder="Select country"
                    options={countryOptions}
                    value={country}
                    onSelect={setCountry}
                  />
                </View>

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>State</Text>
                  <Dropdown
                    label=""
                    placeholder="Select state"
                    options={stateOptions}
                    value={state}
                    onSelect={setState}
                    disabled={!country}
                  />
                </View>
              </View>

              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>City</Text>
                  <Dropdown
                    label=""
                    placeholder="Select city"
                    options={cityOptions}
                    value={city}
                    onSelect={setCity}
                    disabled={!state}
                  />
                </View>

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>
                    Residential Status
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
          </View>

          {/* Navigation Buttons */}
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              onPress={handleBack}
              activeOpacity={0.7}
              style={styles.backButton}
            >
              <Text style={[styles.backButtonText, { color: theme.colors.textSecondary }]}>
                ← Back
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
                <Text style={styles.nextButtonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  content: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    gap: 24,
  },
  progressBarContainer: {
    height: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 999,
  },
  headerSection: {
    gap: 8,
    alignItems: 'center',
  },
  stepIndicator: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  formCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    gap: 16,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  formContent: {
    gap: 16,
  },
  genderContainer: {
    gap: 12,
  },
  genderButtons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  genderButton: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  genderButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  dateInputWrapper: {
    position: 'relative',
  },
  dateIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  nextButton: {
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  nextButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

