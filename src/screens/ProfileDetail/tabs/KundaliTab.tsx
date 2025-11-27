import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import { DetailField, KundaliDetailsData } from './types';

interface KundaliTabProps {
  data: KundaliDetailsData;
}

const Section: React.FC<{
  title: string;
  fields: DetailField[];
  labelColor: string;
  valueColor: string;
}> = ({ title, fields, labelColor, valueColor }) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, { color: labelColor }]}>{title}</Text>
    {fields.map((field) => (
      <View key={field.label} style={styles.row}>
        <Text style={[styles.label, { color: labelColor }]}>{field.label}</Text>
        <Text style={[styles.value, { color: valueColor }]}>{field.value}</Text>
      </View>
    ))}
  </View>
);

export const KundaliTab: React.FC<KundaliTabProps> = ({ data }) => {
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
      <Section
        title="Kundali & Astro"
        fields={data.astroFields}
        labelColor={theme.colors.text}
        valueColor={theme.colors.textSecondary}
      />

      <Section
        title="Life Style"
        fields={data.lifestyleFields}
        labelColor={theme.colors.text}
        valueColor={theme.colors.textSecondary}
      />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
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

