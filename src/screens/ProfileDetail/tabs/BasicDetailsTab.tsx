import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { BasicDetailsData, DetailField } from './types';

interface BasicDetailsTabProps {
  data: BasicDetailsData;
}

const renderFields = (
  fields: DetailField[],
  labelColor: string,
  valueColor: string
) =>
  fields.map((field) => (
    <View key={field.label} style={styles.fieldRow}>
      <Text style={[styles.fieldLabel, { color: labelColor }]}>{field.label}</Text>
      <Text style={[styles.fieldValue, { color: valueColor }]}>{field.value}</Text>
    </View>
  ));

export const BasicDetailsTab: React.FC<BasicDetailsTabProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <View style={styles.section}>{renderFields(data.summaryFields, theme.colors.text, theme.colors.textSecondary)}</View>

      <View style={styles.section}>
        <Text style={[styles.sectionHeading, { color: theme.colors.textSecondary }]}>
          Critical Fields
        </Text>
        {data.criticalFields.map((field) => (
          <View
            key={field.label}
            style={[
              styles.highlightCard,
              {
                backgroundColor: '#fff9e6',
                borderColor: theme.colors.border,
              },
            ]}
          >
            <Text style={[styles.fieldLabel, { color: theme.colors.text }]}>{field.label}</Text>
            <Text style={[styles.fieldValue, { color: theme.colors.textSecondary }]}>{field.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionHeading, { color: theme.colors.textSecondary }]}>
          About Me
        </Text>
        <View
          style={[
            styles.aboutCard,
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.surface,
            },
          ]}
        >
          <Text style={[styles.aboutText, { color: theme.colors.textSecondary }]}>
            {data.about || 'Profile information will be shared soon.'}
          </Text>
        </View>
        {renderFields(data.aboutFields, theme.colors.text, theme.colors.textSecondary)}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionHeading, { color: theme.colors.textSecondary }]}>
          Educational Details
        </Text>
        {renderFields(data.educationFields, theme.colors.text, theme.colors.textSecondary)}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionHeading, { color: theme.colors.textSecondary }]}>
          Career Details
        </Text>

        <View
          style={[
            styles.aboutCard,
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.surface,
            },
          ]}
        >
          <Text style={[styles.aboutText, { color: theme.colors.textSecondary }]}>
            {data.careerSummary || 'Career details will be updated soon.'}
          </Text>
        </View>

        {renderFields(data.careerFields, theme.colors.text, theme.colors.textSecondary)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionHeading: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  fieldRow: {
    flexDirection: 'row',
    gap: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 120,
  },
  fieldValue: {
    fontSize: 14,
    flex: 1,
  },
  highlightCard: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 4,
  },
  aboutCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

