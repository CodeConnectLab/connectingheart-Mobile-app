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

type OnboardingStep6ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingStep6'>;

// Generate age options
const generateAgeOptions = (): DropdownOption[] => {
  const options: DropdownOption[] = [];
  for (let i = 18; i <= 80; i++) {
    options.push({ label: i.toString(), value: i.toString() });
  }
  return options;
};

// Generate height options
const generateHeightOptions = (): DropdownOption[] => {
  return [
    { label: "4'0\"", value: '4.0' },
    { label: "4'6\"", value: '4.6' },
    { label: "5'0\"", value: '5.0' },
    { label: "5'6\"", value: '5.6' },
    { label: "6'0\"", value: '6.0' },
    { label: "6'6\"", value: '6.6' },
  ];
};

const incomeOptions: DropdownOption[] = [
  { label: 'No Income', value: '0' },
  { label: 'Rs. 0 - 1 Lakh', value: '1' },
  { label: 'Rs. 1 - 2 Lakh', value: '2' },
  { label: 'Rs. 5 - 10 Lakh', value: '5' },
  { label: 'Rs. 10 - 20 Lakh', value: '10' },
  { label: 'Rs. 1 Crore & above', value: '100' },
];

type Religion = 'buddhist' | 'christian' | 'hindu' | 'jain' | 'others' | 'muslim' | 'parsi' | 'sikh';
type MaritalStatus = 'annulled' | 'never-married' | 'widowed' | 'divorced' | 'pending-divorce';

export const OnboardingStep6Screen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingStep6ScreenNavigationProp>();
  
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [minIncome, setMinIncome] = useState('');
  const [maxIncome, setMaxIncome] = useState('');
  const [selectedReligions, setSelectedReligions] = useState<Religion[]>([]);
  const [selectedMaritalStatuses, setSelectedMaritalStatuses] = useState<MaritalStatus[]>([]);

  const currentStep = 6;
  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    // TODO: Validate and save data
    navigation.navigate('OnboardingStep7');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const toggleReligion = (religion: Religion) => {
    if (selectedReligions.includes(religion)) {
      setSelectedReligions(selectedReligions.filter(r => r !== religion));
    } else {
      setSelectedReligions([...selectedReligions, religion]);
    }
  };

  const toggleMaritalStatus = (status: MaritalStatus) => {
    if (selectedMaritalStatuses.includes(status)) {
      setSelectedMaritalStatuses(selectedMaritalStatuses.filter(s => s !== status));
    } else {
      setSelectedMaritalStatuses([...selectedMaritalStatuses, status]);
    }
  };

  const religionOptions: { label: string; value: Religion }[] = [
    { label: 'Buddhist', value: 'buddhist' },
    { label: 'Christian', value: 'christian' },
    { label: 'Hindu', value: 'hindu' },
    { label: 'Jain', value: 'jain' },
    { label: 'Others', value: 'others' },
    { label: 'Muslim', value: 'muslim' },
    { label: 'Parsi', value: 'parsi' },
    { label: 'Sikh', value: 'sikh' },
  ];

  const maritalStatusOptions: { label: string; value: MaritalStatus }[] = [
    { label: 'Annulled', value: 'annulled' },
    { label: 'Never married', value: 'never-married' },
    { label: 'Widowed', value: 'widowed' },
    { label: 'Divorced', value: 'divorced' },
    { label: 'Pending divorce', value: 'pending-divorce' },
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
              Partner Preferences
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Update your ideal partner criteria.
            </Text>
          </View>

          {/* Age Section */}
          <View
            style={[
              styles.preferenceCard,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.preferenceLabel, { color: theme.colors.text }]}>Age</Text>
            <View style={styles.row}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Min Age</Text>
                <Dropdown
                  label=""
                  placeholder="Select min age"
                  options={generateAgeOptions()}
                  value={minAge}
                  onSelect={setMinAge}
                />
              </View>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Max Age</Text>
                <Dropdown
                  label=""
                  placeholder="Select max age"
                  options={generateAgeOptions()}
                  value={maxAge}
                  onSelect={setMaxAge}
                />
              </View>
            </View>
          </View>

          {/* Height Section */}
          <View
            style={[
              styles.preferenceCard,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.preferenceLabel, { color: theme.colors.text }]}>Height</Text>
            <View style={styles.row}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Min Height</Text>
                <Dropdown
                  label=""
                  placeholder="Select min height"
                  options={generateHeightOptions()}
                  value={minHeight}
                  onSelect={setMinHeight}
                />
              </View>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Max Height</Text>
                <Dropdown
                  label=""
                  placeholder="Select max height"
                  options={generateHeightOptions()}
                  value={maxHeight}
                  onSelect={setMaxHeight}
                />
              </View>
            </View>
          </View>

          {/* Income Section */}
          <View
            style={[
              styles.preferenceCard,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.5)',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.preferenceLabel, { color: theme.colors.text }]}>Income</Text>
            <View style={styles.row}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Min Income</Text>
                <Dropdown
                  label=""
                  placeholder="Select min income"
                  options={incomeOptions}
                  value={minIncome}
                  onSelect={setMinIncome}
                />
              </View>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Max Income</Text>
                <Dropdown
                  label=""
                  placeholder="Select max income"
                  options={incomeOptions}
                  value={maxIncome}
                  onSelect={setMaxIncome}
                />
              </View>
            </View>
          </View>

          {/* Religion Section */}
          <View style={styles.checkboxSection}>
            <Text style={[styles.checkboxSectionLabel, { color: theme.colors.textSecondary }]}>
              Religion
            </Text>
            <View style={styles.checkboxGrid}>
              {religionOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.checkboxItem}
                  onPress={() => toggleReligion(option.value)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.checkbox,
                      {
                        borderColor: selectedReligions.includes(option.value)
                          ? theme.colors.primary
                          : theme.colors.border,
                        backgroundColor: selectedReligions.includes(option.value)
                          ? theme.colors.primary
                          : 'transparent',
                      },
                    ]}
                  >
                    {selectedReligions.includes(option.value) && (
                      <Ionicons name="checkmark" size={14} color="white" />
                    )}
                  </View>
                  <Text style={[styles.checkboxLabel, { color: theme.colors.textSecondary }]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Marital Status Section */}
          <View style={styles.checkboxSection}>
            <Text style={[styles.checkboxSectionLabel, { color: theme.colors.textSecondary }]}>
              Marital Status
            </Text>
            <View style={styles.checkboxGrid}>
              {maritalStatusOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.checkboxItem}
                  onPress={() => toggleMaritalStatus(option.value)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.checkbox,
                      {
                        borderColor: selectedMaritalStatuses.includes(option.value)
                          ? theme.colors.primary
                          : theme.colors.border,
                        backgroundColor: selectedMaritalStatuses.includes(option.value)
                          ? theme.colors.primary
                          : 'transparent',
                      },
                    ]}
                  >
                    {selectedMaritalStatuses.includes(option.value) && (
                      <Ionicons name="checkmark" size={14} color="white" />
                    )}
                  </View>
                  <Text style={[styles.checkboxLabel, { color: theme.colors.textSecondary }]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
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
  preferenceCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
    gap: 12,
  },
  preferenceLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  inputContainer: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  checkboxSection: {
    gap: 16,
  },
  checkboxSectionLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  checkboxGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxLabel: {
    fontSize: 14,
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

