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
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type OnboardingStep4ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingStep4'>;

export const OnboardingStep4Screen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<OnboardingStep4ScreenNavigationProp>();
  
  const [srcmIdProof, setSrcmIdProof] = useState<string | null>(null);
  const [srcmIdNumber, setSrcmIdNumber] = useState('');
  const [satsangCenter, setSatsangCenter] = useState('');
  const [preceptorName, setPreceptorName] = useState('');
  const [preceptorMobile, setPreceptorMobile] = useState('');
  const [preceptorEmail, setPreceptorEmail] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const currentStep = 4;
  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleUploadDocument = async () => {
    // TODO: Implement document picker
    // For now, just simulate upload
    setSrcmIdProof('document.pdf');
  };

  const handleNext = () => {
    // TODO: Validate form
    setShowConfirmationModal(true);
  };

  const handleConfirm = () => {
    // TODO: Save data
    setShowConfirmationModal(false);
    navigation.navigate('OnboardingStep5');
  };

  const handleBackToEdit = () => {
    setShowConfirmationModal(false);
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

          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={[styles.stepIndicator, { color: theme.colors.primary }]}>
              STEP {currentStep} OF {totalSteps}
            </Text>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Fill in your SRCM / Heartfulness details
            </Text>
            <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
              Provide additional information about your SRCM journey.
            </Text>
          </View>

          {/* Upload Section */}
          <TouchableOpacity
            style={[
              styles.uploadCard,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(248, 250, 252, 0.7)',
                borderColor: theme.colors.border,
              },
            ]}
            onPress={handleUploadDocument}
            activeOpacity={0.7}
          >
            <Text style={[styles.uploadLabel, { color: theme.colors.textSecondary }]}>
              SRCM ID Proof
            </Text>
            <View style={styles.uploadContent}>
              <View style={[styles.uploadIcon, { backgroundColor: theme.colors.primary }]}>
                <Text style={styles.uploadIconText}>+</Text>
              </View>
              <Text style={[styles.uploadText, { color: theme.colors.textSecondary }]}>
                {srcmIdProof ? srcmIdProof : 'Upload'}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Form Fields */}
          <View style={styles.formSection}>
            {/* SRCM ID Number */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                SRCM / Heartfulness ID Number
              </Text>
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
                placeholder="Enter your SRCM or Heartfulness ID number"
                placeholderTextColor={theme.colors.textSecondary}
                value={srcmIdNumber}
                onChangeText={setSrcmIdNumber}
              />
            </View>

            {/* Satsang Center */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                Satsang center name / city
              </Text>
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
                placeholder="Enter Satsang center name or city"
                placeholderTextColor={theme.colors.textSecondary}
                value={satsangCenter}
                onChangeText={setSatsangCenter}
              />
            </View>

            {/* Preceptor's Name */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                Preceptor's Name (frequently visited)
              </Text>
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
                placeholder="Enter preceptor's name"
                placeholderTextColor={theme.colors.textSecondary}
                value={preceptorName}
                onChangeText={setPreceptorName}
                autoCapitalize="words"
              />
            </View>

            {/* Preceptor's Mobile Number */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                Preceptor's Mobile Number
              </Text>
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
                placeholder="Enter preceptor's mobile number"
                placeholderTextColor={theme.colors.textSecondary}
                value={preceptorMobile}
                onChangeText={setPreceptorMobile}
                keyboardType="phone-pad"
              />
            </View>

            {/* Preceptor's Email */}
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: theme.colors.text }]}>
                Preceptor's Email
              </Text>
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
                placeholder="Enter preceptor's email"
                placeholderTextColor={theme.colors.textSecondary}
                value={preceptorEmail}
                onChangeText={setPreceptorEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
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

        {/* Confirmation Modal */}
        <Modal
          visible={showConfirmationModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowConfirmationModal(false)}
        >
          <View style={styles.confirmationModalOverlay}>
            <View
              style={[
                styles.confirmationModalContent,
                { backgroundColor: theme.colors.cardBackground },
              ]}
            >
              <Text style={[styles.confirmationModalTitle, { color: theme.colors.text }]}>
                Confirmation
              </Text>
              <Text style={[styles.confirmationModalSubtitle, { color: theme.colors.textSecondary }]}>
                Data submitted cannot be changed. Please ensure the information is correct before proceeding.
              </Text>
              <View style={styles.confirmationModalActions}>
                <TouchableOpacity
                  style={[
                    styles.confirmationBackButton,
                    { borderColor: theme.colors.border },
                  ]}
                  onPress={handleBackToEdit}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.confirmationBackButtonText, { color: theme.colors.textSecondary }]}>
                    Back to edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.confirmationConfirmButton}
                  onPress={handleConfirm}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={[theme.colors.primary, theme.colors.secondary]}
                    style={styles.confirmationConfirmButtonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.confirmationConfirmButtonText}>Confirm</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  uploadCard: {
    borderRadius: 24,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  uploadLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  uploadContent: {
    alignItems: 'center',
    gap: 8,
  },
  uploadIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIconText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '300',
  },
  uploadText: {
    fontSize: 14,
  },
  formSection: {
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
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    paddingTop: 8,
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
  confirmationModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  confirmationModalContent: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  confirmationModalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  confirmationModalSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  confirmationModalActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  confirmationBackButton: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmationBackButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  confirmationConfirmButton: {
    flex: 1,
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  confirmationConfirmButtonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmationConfirmButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

