import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { FamilyDetailsData } from './types';

interface FamilyDetailsTabProps {
  data: FamilyDetailsData;
}

export const FamilyDetailsTab: React.FC<FamilyDetailsTabProps> = ({ data }) => {
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
      <Text style={[styles.title, { color: theme.colors.primary }]}>Family Details</Text>

      {data.fields.map((field) => (
        <View key={field.label} style={styles.row}>
          <Text style={[styles.label, { color: theme.colors.text }]}>{field.label}</Text>
          <Text style={[styles.value, { color: theme.colors.textSecondary }]}>{field.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 140,
  },
  value: {
    fontSize: 14,
    flex: 1,
  },
});

