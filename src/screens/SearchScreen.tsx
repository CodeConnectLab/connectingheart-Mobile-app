import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../hooks/useTheme';
import { SearchFormData } from '../types';
import {
  countryOptions,
  religionOptions,
  motherTongueOptions,
  maritalStatusOptions,
} from '../constants/searchOptions';
import {
  generateAgeOptions,
  generateHeightOptions,
  generateIncomeOptions,
} from '../utils/searchFormUtils';
import { Dropdown } from '../common/components';

export const SearchScreen: React.FC = () => {
  const { theme } = useTheme();

  // Single state object for all form fields
  const [searchForm, setSearchForm] = useState<SearchFormData>({
    profileId: '',
    country: '',
    religion: '',
    motherTongue: '',
    maritalStatus: '',
    minAge: '',
    maxAge: '',
    minHeight: '',
    maxHeight: '',
    minIncome: '',
    maxIncome: '',
  });

  // Helper function to update any field
  const updateField = (field: keyof SearchFormData, value: string) => {
    setSearchForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfileIdSearch = () => {
    console.log('Searching for profile ID:', searchForm.profileId);
    // TODO: Implement profile ID search
  };

  const handleAdvancedSearch = () => {
    console.log('Advanced search with filters:', searchForm);
    // TODO: Implement advanced search
  };

  const handleClearAll = () => {
    setSearchForm({
      profileId: '',
      country: '',
      religion: '',
      motherTongue: '',
      maritalStatus: '',
      minAge: '',
      maxAge: '',
      minHeight: '',
      maxHeight: '',
      minIncome: '',
      maxIncome: '',
    });
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
          styles.card,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          Search Profiles
        </Text>
        <Text
          style={[styles.headerDescription, { color: theme.colors.textSecondary }]}
        >
          Search by Hearts ID or use advanced filters to find the right match.
        </Text>
      </View>

      {/* Search By Profile ID Section */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Search By Profile ID
        </Text>
        <Text
          style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}
        >
          Enter a HEARTS ID to jump directly to a profile.
        </Text>

        <View style={styles.profileIdContainer}>
          <View style={styles.profileIdInputContainer}>
            <Text style={[styles.profileIdLabel, { color: theme.colors.text }]}>
              Profile ID
            </Text>
            <View style={styles.profileIdInputWrapper}>
              <View
                style={[
                  styles.profileIdPrefix,
                  { backgroundColor: theme.colors.surface },
                ]}
              >
                <Text
                  style={[
                    styles.profileIdPrefixText,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  HEARTS-
                </Text>
              </View>
              <TextInput
                style={[
                  styles.profileIdInput,
                  {
                    color: theme.colors.text,
                    backgroundColor: theme.colors.cardBackground,
                  },
                ]}
                placeholder="123456"
                placeholderTextColor={theme.colors.textSecondary}
                value={searchForm.profileId}
                onChangeText={(value) => updateField('profileId', value)}
                keyboardType="numeric"
                autoComplete="off"
              />
            </View>
          </View>
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleProfileIdSearch}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={theme.colors.gradient.start ? [
                  theme.colors.gradient.start,
                  theme.colors.gradient.middle,
                  theme.colors.gradient.end,
                ] : ['#ec4899', '#db2777', '#f43f5e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.searchButtonGradient}
              >
                <Text style={styles.searchButtonText}>Search</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Advanced Search Section */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.cardBackground,
            borderColor: theme.colors.border,
          },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Advanced Search
        </Text>
        <Text
          style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}
        >
          Combine multiple filters to narrow down your results.
        </Text>

        <View style={styles.filtersGrid}>
          <Dropdown
            label="Country"
            placeholder="Select country"
            options={countryOptions}
            value={searchForm.country}
            onSelect={(value) => updateField('country', value)}
          />

          <Dropdown
            label="Religion"
            placeholder="Select religion"
            options={religionOptions}
            value={searchForm.religion}
            onSelect={(value) => updateField('religion', value)}
          />

          <Dropdown
            label="Mother Tongue"
            placeholder="Select mother tongue"
            options={motherTongueOptions}
            value={searchForm.motherTongue}
            onSelect={(value) => updateField('motherTongue', value)}
          />

          <Dropdown
            label="Marital Status"
            placeholder="Select marital status"
            options={maritalStatusOptions}
            value={searchForm.maritalStatus}
            onSelect={(value) => updateField('maritalStatus', value)}
          />

          <Dropdown
            label="Min Age"
            placeholder="Min age"
            options={generateAgeOptions()}
            value={searchForm.minAge}
            onSelect={(value) => updateField('minAge', value)}
          />

          <Dropdown
            label="Max Age"
            placeholder="Max age"
            options={generateAgeOptions()}
            value={searchForm.maxAge}
            onSelect={(value) => updateField('maxAge', value)}
          />

          <Dropdown
            label="Min Height"
            placeholder="Min height"
            options={generateHeightOptions()}
            value={searchForm.minHeight}
            onSelect={(value) => updateField('minHeight', value)}
          />

          <Dropdown
            label="Max Height"
            placeholder="Max height"
            options={generateHeightOptions()}
            value={searchForm.maxHeight}
            onSelect={(value) => updateField('maxHeight', value)}
          />

          <Dropdown
            label="Min Income"
            placeholder="Min income"
            options={generateIncomeOptions()}
            value={searchForm.minIncome}
            onSelect={(value) => updateField('minIncome', value)}
          />

          <Dropdown
            label="Max Income"
            placeholder="Max income"
            options={generateIncomeOptions()}
            value={searchForm.maxIncome}
            onSelect={(value) => updateField('maxIncome', value)}
          />
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearAll}
            activeOpacity={0.7}
          >
            <Text
              style={[styles.clearButtonText, { color: theme.colors.textSecondary }]}
            >
              Clear All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchProfilesButton}
            onPress={handleAdvancedSearch}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={theme.colors.gradient.start ? [
                theme.colors.gradient.start,
                theme.colors.gradient.middle,
                theme.colors.gradient.end,
              ] : ['#ec4899', '#db2777', '#f43f5e']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.searchProfilesButtonGradient}
            >
              <Text style={styles.searchProfilesButtonText}>
                Search Profiles
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 24,
  },
  profileIdContainer: {
    gap: 16,
  },
  profileIdInputContainer: {
    gap: 8,
  },
  profileIdLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  profileIdInputWrapper: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  profileIdPrefix: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  profileIdPrefixText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  profileIdInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  searchButtonContainer: {
    justifyContent: 'flex-end',
  },
  searchButton: {
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  searchButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  filtersGrid: {
    gap: 16,
  },
  actionButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    marginTop: 24,
  },
  clearButton: {
    paddingVertical: 8,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  searchProfilesButton: {
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  searchProfilesButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchProfilesButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
