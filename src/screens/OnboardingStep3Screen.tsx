import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
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

type OnboardingStep3ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingStep3'>;

// Mock data for dropdowns
const motherTongueOptions: DropdownOption[] = [
  { label: 'Hindi', value: 'hindi' },
  { label: 'English', value: 'english' },
  { label: 'Marathi', value: 'marathi' },
  { label: 'Tamil', value: 'tamil' },
  { label: 'Telugu', value: 'telugu' },
  { label: 'Bengali', value: 'bengali' },
  { label: 'Gujarati', value: 'gujarati' },
  { label: 'Kannada', value: 'kannada' },
];

const casteOptions: DropdownOption[] = [
  { label: 'General', value: 'general' },
  { label: 'OBC', value: 'obc' },
  { label: 'SC', value: 'sc' },
  { label: 'ST', value: 'st' },
  { label: 'Other', value: 'other' },
];

const horoscopeOptions: DropdownOption[] = [
  { label: 'Aries', value: 'aries' },
  { label: 'Taurus', value: 'taurus' },
  { label: 'Gemini', value: 'gemini' },
  { label: 'Cancer', value: 'cancer' },
  { label: 'Leo', value: 'leo' },
  { label: 'Virgo', value: 'virgo' },
  { label: 'Libra', value: 'libra' },
  { label: 'Scorpio', value: 'scorpio' },
  { label: 'Sagittarius', value: 'sagittarius' },
  { label: 'Capricorn', value: 'capricorn' },
  { label: 'Aquarius', value: 'aquarius' },
  { label: 'Pisces', value: 'pisces' },
];

const manglikOptions: DropdownOption[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
  { label: 'Don\'t Know', value: 'dont-know' },
];

type MaritalStatus = 'annulled' | 'never-married' | 'widowed' | 'divorced' | 'pending-divorce' | '';
type Religion = 'buddhist' | 'christian' | 'hindu' | 'jain' | 'others' | 'muslim' | 'parsi' | 'sikh' | '';

export const OnboardingStep3Screen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingStep3ScreenNavigationProp>();
  
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>('');
  const [motherTongue, setMotherTongue] = useState('');
  const [religion, setReligion] = useState<Religion>('');
  const [openToAnyCaste, setOpenToAnyCaste] = useState(false);
  const [caste, setCaste] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [manglik, setManglik] = useState('');

  const currentStep = 3;
  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    // TODO: Validate form and save data
    navigation.navigate('OnboardingStep4');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const maritalStatusOptions = [
    { label: 'Annulled', value: 'annulled' as MaritalStatus },
    { label: 'Never married', value: 'never-married' as MaritalStatus },
    { label: 'Widowed', value: 'widowed' as MaritalStatus },
    { label: 'Divorced', value: 'divorced' as MaritalStatus },
    { label: 'Pending divorce', value: 'pending-divorce' as MaritalStatus },
  ];

  const religionOptions = [
    { label: 'Buddhist', value: 'buddhist' as Religion },
    { label: 'Christian', value: 'christian' as Religion },
    { label: 'Hindu', value: 'hindu' as Religion },
    { label: 'Jain', value: 'jain' as Religion },
    { label: 'Others', value: 'others' as Religion },
    { label: 'Muslim', value: 'muslim' as Religion },
    { label: 'Parsi', value: 'parsi' as Religion },
    { label: 'Sikh', value: 'sikh' as Religion },
  ];

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

          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={[styles.stepIndicator, { color: theme.colors.primary }]}>
              STEP {currentStep} OF {totalSteps}
            </Text>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Fill in your Social Details
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Provide additional information like your marital status, religion, mother tongue and more.
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
            <View style={styles.formContent}>
              {/* Marital Status */}
              <View style={styles.selectionContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Marital Status</Text>
                <View style={styles.selectionButtons}>
                  {maritalStatusOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.selectionButton,
                        {
                          borderColor:
                            maritalStatus === option.value
                              ? theme.colors.primary
                              : theme.colors.border,
                          backgroundColor:
                            maritalStatus === option.value
                              ? theme.isDark
                                ? 'rgba(236, 72, 153, 0.2)'
                                : 'rgba(236, 72, 153, 0.1)'
                              : 'transparent',
                        },
                      ]}
                      onPress={() => setMaritalStatus(option.value)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.selectionButtonText,
                          {
                            color:
                              maritalStatus === option.value
                                ? theme.colors.primary
                                : theme.colors.textSecondary,
                          },
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Mother Tongue */}
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Mother Tongue</Text>
                <Dropdown
                  label=""
                  placeholder="Select mother tongue"
                  options={motherTongueOptions}
                  value={motherTongue}
                  onSelect={setMotherTongue}
                />
              </View>

              {/* Religion */}
              <View style={styles.selectionContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Religion</Text>
                <View style={styles.selectionButtons}>
                  {religionOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.selectionButton,
                        {
                          borderColor:
                            religion === option.value
                              ? theme.colors.primary
                              : theme.colors.border,
                          backgroundColor:
                            religion === option.value
                              ? theme.isDark
                                ? 'rgba(236, 72, 153, 0.2)'
                                : 'rgba(236, 72, 153, 0.1)'
                              : 'transparent',
                        },
                      ]}
                      onPress={() => setReligion(option.value)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.selectionButtonText,
                          {
                            color:
                              religion === option.value
                                ? theme.colors.primary
                                : theme.colors.textSecondary,
                          },
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Open to Any Caste Checkbox */}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setOpenToAnyCaste(!openToAnyCaste)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.checkbox,
                    {
                      borderColor: openToAnyCaste ? theme.colors.primary : theme.colors.border,
                      backgroundColor: openToAnyCaste ? theme.colors.primary : 'transparent',
                    },
                  ]}
                >
                  {openToAnyCaste && (
                    <Ionicons name="checkmark" size={16} color="white" />
                  )}
                </View>
                <Text style={[styles.checkboxText, { color: theme.colors.textSecondary }]}>
                  I am open to marry people of any caste
                </Text>
              </TouchableOpacity>

              {/* Caste */}
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Caste</Text>
                <Dropdown
                  label=""
                  placeholder="Select caste"
                  options={casteOptions}
                  value={caste}
                  onSelect={setCaste}
                />
              </View>

              {/* Horoscope */}
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Horoscope</Text>
                <Dropdown
                  label=""
                  placeholder="Select horoscope"
                  options={horoscopeOptions}
                  value={horoscope}
                  onSelect={setHoroscope}
                />
              </View>

              {/* Manglik */}
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Manglik</Text>
                <Dropdown
                  label=""
                  placeholder="Select manglik"
                  options={manglikOptions}
                  value={manglik}
                  onSelect={setManglik}
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
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    gap: 20,
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
    gap: 20,
  },
  formContent: {
    gap: 16,
  },
  selectionContainer: {
    gap: 12,
  },
  selectionButtons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  selectionButton: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  selectionButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    fontSize: 14,
    flex: 1,
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

