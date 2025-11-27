import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../../hooks/useTheme';
import { MatchDetailsData } from './types';

interface MatchTabProps {
  data: MatchDetailsData;
}

export const MatchTab: React.FC<MatchTabProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.colors.cardBackground, borderColor: theme.colors.border },
      ]}
    >
      <LinearGradient
        colors={[theme.colors.gradient.start, theme.colors.gradient.end]}
        style={styles.matchBadge}
      >
        <Text style={styles.matchLabel}>Match Percentage</Text>
        <Text style={styles.matchValue}>{data.percentage}%</Text>
      </LinearGradient>

      <View style={styles.factors}>
        {data.factors.map((factor) => (
          <View
            key={factor.label}
            style={[
              styles.factorCard,
              {
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.cardBackground,
              },
            ]}
          >
            <View style={styles.factorTextWrapper}>
              <Text style={[styles.factorLabel, { color: theme.colors.text }]}>{factor.label}</Text>
              <Text style={[styles.factorValue, { color: theme.colors.textSecondary }]}>
                {factor.value}
              </Text>
            </View>
            <Ionicons name="checkmark-circle" size={24} color="#10b981" />
          </View>
        ))}
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
  matchBadge: {
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  matchLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  matchValue: {
    color: 'white',
    fontSize: 48,
    fontWeight: '700',
    marginTop: 8,
  },
  factors: {
    gap: 12,
  },
  factorCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  factorTextWrapper: {
    flex: 1,
    marginRight: 12,
  },
  factorLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  factorValue: {
    fontSize: 13,
    marginTop: 4,
  },
});

