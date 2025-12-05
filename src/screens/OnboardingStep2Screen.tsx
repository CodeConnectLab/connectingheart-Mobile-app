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
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { Dropdown } from '../common/components/Dropdown';
import { DropdownOption } from '../constants/searchOptions';

type OnboardingStep2ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingStep2'>;

// Mock data for dropdowns
const educationOptions: DropdownOption[] = [
  { label: 'High School', value: 'high-school' },
  { label: 'Associate Degree', value: 'associate' },
  { label: 'Bachelor\'s Degree', value: 'bachelors' },
  { label: 'Master\'s Degree', value: 'masters' },
  { label: 'Doctorate', value: 'doctorate' },
  { label: 'Diploma', value: 'diploma' },
  { label: 'Professional Degree', value: 'professional' },
];

const occupationOptions: DropdownOption[] = [
  { label: 'Software Engineer', value: 'software-engineer' },
  { label: 'Doctor', value: 'doctor' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Business Owner', value: 'business-owner' },
  { label: 'Accountant', value: 'accountant' },
  { label: 'Lawyer', value: 'lawyer' },
  { label: 'Other', value: 'other' },
];

const incomeOptions: DropdownOption[] = [
  { label: 'Below ₹2 Lakhs', value: 'below-2' },
  { label: '₹2-5 Lakhs', value: '2-5' },
  { label: '₹5-10 Lakhs', value: '5-10' },
  { label: '₹10-20 Lakhs', value: '10-20' },
  { label: '₹20-50 Lakhs', value: '20-50' },
  { label: 'Above ₹50 Lakhs', value: 'above-50' },
];

type EmploymentType = 'private' | 'government' | 'business' | 'not-working' | '';

export const OnboardingStep2Screen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingStep2ScreenNavigationProp>();
  
  const [education, setEducation] = useState('');
  const [employmentType, setEmploymentType] = useState<EmploymentType>('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');

  const currentStep = 2;
  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    // TODO: Validate form and save data
    navigation.navigate('OnboardingStep3');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const employmentOptions = [
    { label: 'Private Sector', value: 'private' as EmploymentType },
    { label: 'Government', value: 'government' as EmploymentType },
    { label: 'Business', value: 'business' as EmploymentType },
    { label: 'Not Working', value: 'not-working' as EmploymentType },
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
              Fill in your Career Details
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Provide additional information like your education, profession and income.
            </Text>
          </View>

          {/* Education Section */}
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
              EDUCATION
            </Text>

            <View style={styles.formContent}>
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>
                  Highest Qualification
                </Text>
                <Dropdown
                  label=""
                  placeholder="Select education"
                  options={educationOptions}
                  value={education}
                  onSelect={setEducation}
                />
              </View>
            </View>
          </View>

          {/* Work Experience Section */}
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
              WORK EXPERIENCE
            </Text>

            <View style={styles.formContent}>
              {/* Employment Type */}
              <View style={styles.employmentContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Employed In</Text>
                <View style={styles.employmentButtons}>
                  {employmentOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.employmentButton,
                        {
                          borderColor:
                            employmentType === option.value
                              ? theme.colors.primary
                              : theme.colors.border,
                          backgroundColor:
                            employmentType === option.value
                              ? theme.isDark
                                ? 'rgba(236, 72, 153, 0.2)'
                                : 'rgba(236, 72, 153, 0.1)'
                              : 'transparent',
                        },
                      ]}
                      onPress={() => setEmploymentType(option.value)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.employmentButtonText,
                          {
                            color:
                              employmentType === option.value
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

              {/* Occupation and Income */}
              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Occupation</Text>
                  <Dropdown
                    label=""
                    placeholder="Select occupation"
                    options={occupationOptions}
                    value={occupation}
                    onSelect={setOccupation}
                  />
                </View>

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Income</Text>
                  <Dropdown
                    label=""
                    placeholder="Select income"
                    options={incomeOptions}
                    value={income}
                    onSelect={setIncome}
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
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  formContent: {
    gap: 16,
  },
  employmentContainer: {
    gap: 12,
  },
  employmentButtons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  employmentButton: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  employmentButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
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

