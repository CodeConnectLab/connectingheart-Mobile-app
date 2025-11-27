import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';

const DELETE_REASONS = [
  { id: '1', label: 'I found my match on Connecting Hearts' },
  { id: '2', label: 'I found my match elsewhere' },
  { id: '3', label: 'I am unhappy with services' },
  { id: '4', label: 'Marry later / create profile later' },
  { id: '5', label: 'I have to do some changes in my profile' },
  { id: '6', label: 'Privacy issues' },
  { id: '7', label: 'Other reasons' },
];

export const DeleteProfileScreen: React.FC = () => {
  const { theme } = useTheme();
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [additionalComments, setAdditionalComments] = useState('');

  const handleSubmit = () => {
    // Handle delete profile logic
    console.log('Delete profile submitted', { selectedReason, additionalComments });
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View
        style={[
          styles.headerCard,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Delete Profile
        </Text>
        <Text style={[styles.description, { color: theme.colors.textSecondary }]}>
          This will permanently remove your account at Connecting Hearts. Let us know
          why before you proceed.
        </Text>
      </View>

      {/* Form Section */}
      <View
        style={[
          styles.formCard,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        {/* Reason Selection */}
        <View style={styles.reasonSection}>
          <Text style={[styles.reasonTitle, { color: theme.colors.text }]}>
            Why are you deleting your profile?
          </Text>
          <View style={styles.reasonsList}>
            {DELETE_REASONS.map((reason) => (
              <TouchableOpacity
                key={reason.id}
                style={[
                  styles.reasonOption,
                  {
                    borderColor:
                      selectedReason === reason.id
                        ? theme.colors.primary
                        : theme.colors.border,
                    backgroundColor:
                      selectedReason === reason.id
                        ? theme.isDark
                          ? 'rgba(236, 72, 153, 0.1)'
                          : 'rgba(236, 72, 153, 0.05)'
                        : 'transparent',
                  },
                ]}
                onPress={() => setSelectedReason(reason.id)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.radioButton,
                    {
                      borderColor:
                        selectedReason === reason.id
                          ? theme.colors.primary
                          : theme.colors.border,
                    },
                  ]}
                >
                  {selectedReason === reason.id && (
                    <View
                      style={[
                        styles.radioButtonInner,
                        { backgroundColor: theme.colors.primary },
                      ]}
                    />
                  )}
                </View>
                <Text style={[styles.reasonText, { color: theme.colors.text }]}>
                  {reason.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Additional Comments */}
        <View style={styles.commentsSection}>
          <Text style={[styles.commentsLabel, { color: theme.colors.text }]}>
            Additional comments (optional)
          </Text>
          <TextInput
            style={[
              styles.textArea,
              {
                backgroundColor: theme.isDark
                  ? 'rgba(30, 41, 59, 0.8)'
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: theme.colors.border,
                color: theme.colors.text,
              },
            ]}
            placeholder="Share any feedback that could help us improve."
            placeholderTextColor={theme.colors.textSecondary}
            value={additionalComments}
            onChangeText={setAdditionalComments}
            multiline
            numberOfLines={3}
            maxLength={300}
            textAlignVertical="top"
          />
        </View>

        {/* Warning Message */}
        <View
          style={[
            styles.warningBox,
            {
              backgroundColor: theme.isDark
                ? 'rgba(244, 63, 94, 0.1)'
                : 'rgba(254, 242, 242, 1)',
            },
          ]}
        >
          <Text
            style={[
              styles.warningText,
              { color: theme.isDark ? '#fca5a5' : '#b91c1c' },
            ]}
          >
            Deleting your profile clears matches, chat history, and access to premium
            benefits. This action cannot be undone.
          </Text>
        </View>

        {/* Delete Button */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleSubmit}
          activeOpacity={0.8}
          disabled={!selectedReason}
        >
          <LinearGradient
            colors={['#ef4444', '#dc2626']}
            style={styles.deleteButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.deleteButtonText}>Delete profile permanently</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    gap: 32,
    paddingBottom: 32,
  },
  headerCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  formCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    gap: 24,
  },
  reasonSection: {
    gap: 12,
  },
  reasonTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  reasonsList: {
    gap: 12,
  },
  reasonOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  reasonText: {
    fontSize: 14,
    flex: 1,
  },
  commentsSection: {
    gap: 8,
  },
  commentsLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  textArea: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    minHeight: 80,
  },
  warningBox: {
    borderRadius: 16,
    padding: 12,
  },
  warningText: {
    fontSize: 12,
    lineHeight: 18,
  },
  deleteButton: {
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  deleteButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

