import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface PlanFeature {
  text: string;
}

interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  heartCoins: number;
  validity: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

const membershipPlans: MembershipPlan[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: '₹3,000',
    duration: '6 months',
    heartCoins: 50,
    validity: '6 months validity',
    features: [
      { text: '6 months validity' },
      { text: 'View 50 contacts of member you like' },
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '₹4,500',
    duration: '9 months',
    heartCoins: 100,
    validity: '9 months validity',
    features: [
      { text: '3X faster matches' },
      { text: '9 months validity' },
      { text: 'View 100 contacts of member you like' },
      { text: 'Profile boost top spot in search' },
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '₹5,500',
    duration: '12 months',
    heartCoins: 150,
    validity: '12 months validity',
    features: [
      { text: '3X faster matches' },
      { text: '12 months validity' },
      { text: 'View 150 contacts of member you like' },
      { text: 'Profile boost top spot in search' },
    ],
    isPopular: true,
  },
];

export const MembershipScreen: React.FC = () => {
  const { theme } = useTheme();

  const handleChoosePlan = (planId: string) => {
    // TODO: Implement plan selection logic
    console.log('Selected plan:', planId);
  };

  const renderPlanCard = (plan: MembershipPlan) => {
    const isPlatinum = plan.id === 'platinum';
    
    return (
      <View
        key={plan.id}
        style={[
          styles.planCard,
          {
            backgroundColor: isPlatinum 
              ? '#fdf2f8' 
              : theme.colors.cardBackground,
            borderColor: isPlatinum 
              ? '#fbcfe8' 
              : theme.colors.border,
            shadowColor: isPlatinum ? '#fbcfe8' : 'rgba(0, 0, 0, 0.05)',
          },
        ]}
      >
        {/* Plan Header */}
        <View style={styles.planHeader}>
          <View>
            <Text style={[styles.planLabel, { color: theme.colors.textSecondary }]}>
              PLAN
            </Text>
            <Text style={[styles.planName, { color: theme.colors.text }]}>
              {plan.name}
            </Text>
          </View>
          <Text style={styles.planPrice}>
            {plan.price} / {plan.duration}
          </Text>
        </View>

        {/* Plan Summary */}
        <Text style={[styles.planSummary, { color: theme.colors.textSecondary }]}>
          {plan.heartCoins} Heart Coins • {plan.validity}
        </Text>

        {/* Features List */}
        <View style={styles.featuresList}>
          {plan.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.bulletPoint} />
              <Text style={[styles.featureText, { color: theme.colors.textSecondary }]}>
                {feature.text}
              </Text>
            </View>
          ))}
        </View>

        {/* Choose Plan Button */}
        <TouchableOpacity
          style={[
            styles.chooseButton,
            isPlatinum && styles.chooseButtonPlatinum,
            {
              backgroundColor: isPlatinum ? '#9333ea' : theme.colors.cardBackground,
              borderColor: isPlatinum ? 'transparent' : theme.colors.border,
            },
          ]}
          onPress={() => handleChoosePlan(plan.id)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.chooseButtonText,
              { color: isPlatinum ? '#ffffff' : theme.colors.text },
            ]}
          >
            Choose plan
          </Text>
        </TouchableOpacity>
      </View>
    );
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
        <View style={styles.headerContent}>
          <Text style={[styles.headerLabel, { color: theme.colors.textSecondary }]}>
            MEMBERSHIP
          </Text>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
            Activate your plan
          </Text>
          <Text style={[styles.headerDescription, { color: theme.colors.textSecondary }]}>
            Choose a plan that matches your family's expectations. Upgrade anytime — your preferences stay intact.
          </Text>
        </View>

        {/* Active Plan Status */}
        <View
          style={[
            styles.activePlanBox,
            {
              backgroundColor: theme.isDark ? '#064e3b' : '#d1fae5',
            },
          ]}
        >
          <Text
            style={[
              styles.activePlanLabel,
              { color: theme.isDark ? '#6ee7b7' : '#065f46' },
            ]}
          >
            Active plan:{' '}
          </Text>
          <Text
            style={[
              styles.activePlanText,
              { color: theme.isDark ? '#6ee7b7' : '#065f46' },
            ]}
          >
            Renew or upgrade anytime.
          </Text>
          <Text
            style={[
              styles.activePlanText,
              { color: theme.isDark ? '#6ee7b7' : '#065f46' },
            ]}
          >
            0 Heart Coins remaining
          </Text>
        </View>
      </View>

      {/* Plans Grid */}
      <View style={styles.plansContainer}>
        {membershipPlans.map(renderPlanCard)}
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
    paddingBottom: 32,
  },
  headerCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  headerContent: {
    marginBottom: 16,
  },
  headerLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  activePlanBox: {
    borderRadius: 16,
    padding: 16,
  },
  activePlanLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  activePlanText: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
  plansContainer: {
    gap: 24,
  },
  planCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  planLabel: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  planName: {
    fontSize: 24,
    fontWeight: '600',
  },
  planPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ec4899',
  },
  planSummary: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 16,
  },
  featuresList: {
    marginTop: 16,
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ec4899',
    marginTop: 6,
  },
  featureText: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  chooseButton: {
    borderRadius: 9999,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  chooseButtonPlatinum: {
    shadowColor: '#9333ea',
    shadowOpacity: 0.15,
    elevation: 1,
  },
  chooseButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

