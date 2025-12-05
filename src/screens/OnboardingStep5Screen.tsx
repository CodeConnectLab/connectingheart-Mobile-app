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
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { Dropdown } from '../common/components/Dropdown';
import { DropdownOption } from '../constants/searchOptions';

type OnboardingStep5ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingStep5'>;

// Mock data
const familyStatusOptions: DropdownOption[] = [
  { label: 'Middle Class', value: 'middle-class' },
  { label: 'Upper Middle Class', value: 'upper-middle-class' },
  { label: 'Rich', value: 'rich' },
  { label: 'Affluent', value: 'affluent' },
];

const familyTypeOptions: DropdownOption[] = [
  { label: 'Nuclear Family', value: 'nuclear' },
  { label: 'Joint Family', value: 'joint' },
];

const familyValuesOptions: DropdownOption[] = [
  { label: 'Traditional', value: 'traditional' },
  { label: 'Moderate', value: 'moderate' },
  { label: 'Liberal', value: 'liberal' },
];

const familyIncomeOptions: DropdownOption[] = [
  { label: 'Below ₹5 Lakhs', value: 'below-5' },
  { label: '₹5-10 Lakhs', value: '5-10' },
  { label: '₹10-20 Lakhs', value: '10-20' },
  { label: '₹20-50 Lakhs', value: '20-50' },
  { label: 'Above ₹50 Lakhs', value: 'above-50' },
];

const occupationOptions: DropdownOption[] = [
  { label: 'Business', value: 'business' },
  { label: 'Service', value: 'service' },
  { label: 'Retired', value: 'retired' },
  { label: 'Not Working', value: 'not-working' },
];

const livingWithParentsOptions: DropdownOption[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

export const OnboardingStep5Screen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingStep5ScreenNavigationProp>();
  
  const [familyStatus, setFamilyStatus] = useState('');
  const [familyType, setFamilyType] = useState('');
  const [familyValues, setFamilyValues] = useState('');
  const [familyIncome, setFamilyIncome] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [brothers, setBrothers] = useState<number | null>(null);
  const [sisters, setSisters] = useState<number | null>(null);
  const [livingWithParents, setLivingWithParents] = useState('yes');
  const [gothra, setGothra] = useState('');
  const [familyBasedOutOf, setFamilyBasedOutOf] = useState('');

  const currentStep = 5;
  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    // TODO: Validate and save data
    navigation.navigate('OnboardingStep6');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const siblingOptions = [
    { label: 'None', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
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
              Family details
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Provide additional information about your family.
            </Text>
          </View>

          {/* Family Background Section */}
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
              FAMILY BACKGROUND
            </Text>

            <View style={styles.formContent}>
              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Family Status</Text>
                  <Dropdown
                    label=""
                    placeholder="Select family status"
                    options={familyStatusOptions}
                    value={familyStatus}
                    onSelect={setFamilyStatus}
                  />
                </View>

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Family Type</Text>
                  <Dropdown
                    label=""
                    placeholder="Select family type"
                    options={familyTypeOptions}
                    value={familyType}
                    onSelect={setFamilyType}
                  />
                </View>
              </View>

              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Family Values</Text>
                  <Dropdown
                    label=""
                    placeholder="Select family values"
                    options={familyValuesOptions}
                    value={familyValues}
                    onSelect={setFamilyValues}
                  />
                </View>

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Family Income</Text>
                  <Dropdown
                    label=""
                    placeholder="Select family income"
                    options={familyIncomeOptions}
                    value={familyIncome}
                    onSelect={setFamilyIncome}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Family Members Section */}
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
              FAMILY MEMBERS
            </Text>

            <View style={styles.formContent}>
              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Father's Occupation</Text>
                  <Dropdown
                    label=""
                    placeholder="Select father's occupation"
                    options={occupationOptions}
                    value={fatherOccupation}
                    onSelect={setFatherOccupation}
                  />
                </View>

                <View style={[styles.inputContainer, { flex: 1 }]}>
                  <Text style={[styles.label, { color: theme.colors.text }]}>Mother's Occupation</Text>
                  <Dropdown
                    label=""
                    placeholder="Select mother's occupation"
                    options={occupationOptions}
                    value={motherOccupation}
                    onSelect={setMotherOccupation}
                  />
                </View>
              </View>

              {/* Brothers */}
              <View style={styles.selectionContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Brothers</Text>
                <View style={styles.selectionButtons}>
                  {siblingOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.siblingButton,
                        {
                          borderColor:
                            brothers === option.value
                              ? 'transparent'
                              : theme.colors.border,
                          backgroundColor:
                            brothers === option.value
                              ? theme.colors.primary
                              : 'transparent',
                        },
                      ]}
                      onPress={() => setBrothers(option.value)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.siblingButtonText,
                          {
                            color:
                              brothers === option.value
                                ? 'white'
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

              {/* Sisters */}
              <View style={styles.selectionContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Sisters</Text>
                <View style={styles.selectionButtons}>
                  {siblingOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.siblingButton,
                        {
                          borderColor:
                            sisters === option.value
                              ? 'transparent'
                              : theme.colors.border,
                          backgroundColor:
                            sisters === option.value
                              ? theme.colors.primary
                              : 'transparent',
                        },
                      ]}
                      onPress={() => setSisters(option.value)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.siblingButtonText,
                          {
                            color:
                              sisters === option.value
                                ? 'white'
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

              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Living with parents</Text>
                <Dropdown
                  label=""
                  placeholder="Select"
                  options={livingWithParentsOptions}
                  value={livingWithParents}
                  onSelect={setLivingWithParents}
                />
              </View>
            </View>
          </View>

          {/* Additional Details Section */}
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
              ADDITIONAL DETAILS
            </Text>

            <View style={styles.formContent}>
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>Gothra</Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.9)',
                      borderColor: theme.colors.border,
                      color: theme.colors.text,
                    },
                  ]}
                  placeholder="Enter gothra"
                  placeholderTextColor={theme.colors.textSecondary}
                  value={gothra}
                  onChangeText={setGothra}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>My family based out of</Text>
                <Dropdown
                  label=""
                  placeholder="Select country"
                  options={[
                    { label: 'India', value: 'india' },
                    { label: 'United States', value: 'us' },
                    { label: 'United Kingdom', value: 'uk' },
                  ]}
                  value={familyBasedOutOf}
                  onSelect={setFamilyBasedOutOf}
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
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  formContent: {
    gap: 16,
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
  input: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  selectionContainer: {
    gap: 12,
  },
  selectionButtons: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  siblingButton: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  siblingButtonText: {
    fontSize: 14,
    fontWeight: '600',
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

