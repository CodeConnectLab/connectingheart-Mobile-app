import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface StatCardProps {
  value: number;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  title, 
  subtitle,
  onPress 
}) => {
  const { theme } = useTheme();

  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component 
      style={[
        styles.card, 
        { 
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
        }
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <Text style={[styles.value, { color: theme.colors.text }]}>
        {value}
      </Text>
      <Text style={[styles.title, { color: theme.colors.textSecondary }]}>
        {title.toUpperCase()}
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
        {subtitle}
      </Text>
    </Component>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});

