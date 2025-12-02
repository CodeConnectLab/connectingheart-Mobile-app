import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Sidebar } from '../components';

export const PrivacyPolicyScreen: React.FC = () => {
  const { theme } = useTheme();

  const backgroundColor = theme.colors.background;
  const cardBackground = theme.colors.cardBackground;
  const textPrimary = theme.colors.text;
  const textSecondary = theme.colors.textSecondary;
  const borderColor = theme.colors.border;

  const sectionContainerStyle = {
    borderRadius: 16,
    borderWidth: 1,
    borderColor,
    backgroundColor: cardBackground,
    padding: 16,
    marginTop: 16,
  } as const;

  const sectionTitleStyle = {
    fontSize: 18,
    fontWeight: '600',
    color: textPrimary,
  } as const;

  const paragraphStyle = {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: textSecondary,
  } as const;

  const listItemStyle = {
    fontSize: 14,
    lineHeight: 20,
    color: textSecondary,
    marginBottom: 6,
  } as const;

  const boldTextStyle = {
    fontSize: 14,
    fontWeight: '600',
    color: textPrimary,
    marginTop: 8,
  } as const;

  const handleEmailPress = () => {
    Linking.openURL('mailto:connectinghearts.helpdesk@gmail.com');
  };

  return (
    <View style={{ flex: 1, backgroundColor }}>
      {/* <Header title="Privacy Policy" /> */}
      <Sidebar />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View
          style={{
            borderRadius: 24,
            borderWidth: 1,
            borderColor,
            backgroundColor: cardBackground,
            padding: 20,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: textPrimary,
            }}
          >
            Privacy Policy
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 14,
              color: textSecondary,
            }}
          >
            Your privacy matters to us. This policy explains what we collect, how we use it, and the
            controls you have while using Connecting Hearts.
          </Text>
        </View>

        {/* What information does Connecting Hearts collect? */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>
            What information does Connecting Hearts collect?
          </Text>
          <Text style={paragraphStyle}>
            Connecting Hearts, an advertising-led matchmaking platform, requests personal details so
            we can publish your profile and deliver tailored recommendations. By using the service
            you consent to the collection, processing, and sharing of this information in line with
            this policy.
          </Text>
          <Text style={boldTextStyle}>Information you submit</Text>
          <Text style={paragraphStyle}>
            Profile data, preferences, photos, and communications you voluntarily provide.
          </Text>
          <Text style={boldTextStyle}>Information not directly submitted by you</Text>
          <Text style={paragraphStyle}>
            App activity, device diagnostics, and technical identifiers captured automatically.
          </Text>
          <Text style={boldTextStyle}>Information we receive from others</Text>
          <Text style={paragraphStyle}>
            Details shared by other members or third parties to keep our platform safe and
            compliant.
          </Text>
        </View>

        {/* Information you provide to avail the service */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>
            Information you provide to avail the service
          </Text>
          <View style={{ marginTop: 8, paddingLeft: 12 }}>
            <Text style={listItemStyle}>
              • Personal details such as name, gender, date of birth, education, occupation, photos,
              marital status, and interests shared during registration.
            </Text>
            <Text style={listItemStyle}>
              • Payment information (debit/credit card or UPI) submitted directly or through our
              payment gateway while purchasing paid services.
            </Text>
            <Text style={listItemStyle}>
              • Testimonials, success stories, and photos voluntarily submitted for publication.
            </Text>
            <Text style={listItemStyle}>
              • Responses provided during surveys, contests, promotions, or community events.
            </Text>
            <Text style={listItemStyle}>
              • Details and recordings shared with our customer care team for quality assurance and
              support.
            </Text>
            <Text style={listItemStyle}>
              • Chats, messages, and user-generated content exchanged with other members on the
              platform.
            </Text>
            <Text style={listItemStyle}>
              • Reports of suspicious IDs; immediate legal action is taken if violations are
              confirmed.
            </Text>
          </View>
        </View>

        {/* Information not directly submitted by you */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Information not directly submitted by you</Text>
          <Text style={boldTextStyle}>User activity</Text>
          <Text style={paragraphStyle}>
            Timestamps, feature usage, searches, clicks, visited pages, and interactions with other
            users (including exchanged messages).
          </Text>
          <Text style={boldTextStyle}>Device information</Text>
          <Text style={paragraphStyle}>
            IP address, device IDs, device specifications, app/browser settings, crash logs,
            operating system details, and identifiers associated with cookies or similar
            technologies.
          </Text>
          <Text style={boldTextStyle}>SMS permission</Text>
          <Text style={paragraphStyle}>
            Required solely to authenticate transactions via OTP issued by payment gateways.
          </Text>
          <Text style={paragraphStyle}>
            In addition, we may receive supporting details about you from external sources to comply
            with security, compliance, and fraud-prevention requirements.
          </Text>
        </View>

        {/* How we use collected information */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>How we use collected information</Text>
          <View style={{ marginTop: 8, paddingLeft: 12 }}>
            <Text style={listItemStyle}>
              • Provide, personalize, and improve the core matchmaking services.
            </Text>
            <Text style={listItemStyle}>
              • Manage your account lifecycle and preferences.
            </Text>
            <Text style={listItemStyle}>
              • Deliver responsive customer support.
            </Text>
            <Text style={listItemStyle}>
              • Conduct research, reporting, and service quality analysis.
            </Text>
            <Text style={listItemStyle}>
              • Communicate about product updates, promotions, and relevant offers.
            </Text>
            <Text style={listItemStyle}>
              • Recommend compatible profiles and showcase your profile to other members.
            </Text>
          </View>
        </View>

        {/* With whom we share your information */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>With whom we share your information</Text>
          <Text style={boldTextStyle}>With other users</Text>
          <Text style={paragraphStyle}>
            Your published profile information is visible to fellow members. Always review and limit
            what you share publicly.
          </Text>
          <Text style={boldTextStyle}>With service providers and partners</Text>
          <Text style={paragraphStyle}>
            Trusted third parties assist with development, hosting, storage, analytics, and payments.
            They operate under strict contractual and confidentiality obligations.
          </Text>
          <Text style={boldTextStyle}>With law enforcement</Text>
          <Text style={paragraphStyle}>
            Personal data may be disclosed to comply with applicable laws, court orders, or to
            protect the rights and safety of our members and platform.
          </Text>
          <Text style={paragraphStyle}>
            We do not sell or trade your personal data. Sharing occurs only as described above or
            when you are expressly informed and provide consent.
          </Text>
        </View>

        {/* How to access or control your information */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>How to access or control your information</Text>
          <Text style={paragraphStyle}>
            Manage your information directly from your account dashboard. EU members and other
            applicable jurisdictions may exercise the following rights:
          </Text>
          <Text style={boldTextStyle}>Reviewing your information</Text>
          <Text style={paragraphStyle}>
            Depending on your jurisdiction, you may have the right to access or port the personal
            data we hold.
          </Text>
          <Text style={boldTextStyle}>Deletion</Text>
          <Text style={paragraphStyle}>
            You can delete your profile if you believe we no longer need your information. Certain
            records may be retained for legal or transactional reasons.
          </Text>
          <Text style={boldTextStyle}>Information from other users</Text>
          <Text style={paragraphStyle}>
            Requests for another member's communications require that member's written consent
            before release.
          </Text>
          <Text style={boldTextStyle}>Withdraw consent</Text>
          <Text style={paragraphStyle}>
            You may withdraw consent at any time. Doing so deletes your profile and limits our
            ability to provide further services.
          </Text>
          <Text style={paragraphStyle}>
            To protect all members, we may request proof of identity before honoring privacy
            requests.
          </Text>
        </View>

        {/* How we secure your information */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>How we secure your information</Text>
          <View style={{ marginTop: 8, paddingLeft: 12 }}>
            <Text style={listItemStyle}>
              • Sensitive inputs, including payment card details, are encrypted during transmission
              and handled by PCI-compliant providers.
            </Text>
            <Text style={listItemStyle}>
              • Access to personal data is restricted to employees who need it to perform their
              duties.
            </Text>
            <Text style={listItemStyle}>
              • Industry-standard safeguards mitigate unauthorized access; however, no system is
              completely impenetrable given the nature of the internet.
            </Text>
          </View>
          <Text style={paragraphStyle}>
            Have questions about security? Reach us at{' '}
            <Text
              style={{ color: theme.colors.primary || '#ec4899', textDecorationLine: 'underline' }}
              onPress={handleEmailPress}
            >
              connectinghearts.helpdesk@gmail.com
            </Text>
            .
          </Text>
        </View>

        {/* How long we keep your information */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>How long we keep your information</Text>
          <Text style={paragraphStyle}>
            We retain personal information only for as long as you maintain an account and as
            required by applicable laws. When you delete your profile, we delete or anonymize
            associated data unless retention is necessary to comply with legal obligations, prevent
            fraud, resolve disputes, enforce agreements, or support business operations.
          </Text>
          <Text style={paragraphStyle}>
            Aggregated insights may be used to improve our services, but they no longer identify you
            personally.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

