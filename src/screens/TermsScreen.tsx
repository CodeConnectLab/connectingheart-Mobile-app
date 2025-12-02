import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Sidebar } from '../components';

export const TermsScreen: React.FC = () => {
  const { theme } = useTheme();

  const backgroundColor = theme.colors.background;
  const cardBackground = theme.colors.cardBackground;
  const textPrimary = theme.colors.textPrimary;
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

  return (
    <View style={{ flex: 1, backgroundColor }}>
      {/* <Header title="Terms & Conditions" /> */}
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
            Terms &amp; Conditions
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 14,
              color: textSecondary,
            }}
          >
            Review the legally binding terms that govern your use of Connecting Hearts.
          </Text>
        </View>

        {/* Acceptance of Terms */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Acceptance of Terms</Text>
          <Text style={paragraphStyle}>
            This document is an electronic record pursuant to the Information Technology Act, 2000
            and related rules. It is generated electronically and does not require physical
            signatures.
          </Text>
          <Text style={paragraphStyle}>
            Published in accordance with Rule 3(1) of the Information Technology (Intermediaries
            Guidelines) Rules, 2011, these Terms govern access and use of Connecting Hearts.
          </Text>
          <Text style={paragraphStyle}>
            By accessing, browsing, or using the application you agree to be bound by this
            agreement, including referenced policies as updated from time to time. If you disagree,
            please discontinue using Connecting Hearts immediately.
          </Text>
          <Text style={paragraphStyle}>
            “Connecting Hearts member”, “You”, or “User” refers to anyone accessing the service for
            themselves or on behalf of a registrant (such as a friend or family member). Connecting
            Hearts (CIN: U93090UP2020PTC133241) operates from Plot No. CN-21 IIM Road, Allu Nagar
            Diguria, Lucknow 226020.
          </Text>
        </View>

        {/* Scope */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Scope</Text>
          <Text style={paragraphStyle}>
            Connecting Hearts operates as an intermediary under Section 2(1)(w) of the Information
            Technology Act, 2000.
          </Text>
          <Text style={paragraphStyle}>
            We provide an online platform where users with valid mobile numbers and email IDs can
            register, manage profiles, and seek lawful matrimonial matches based on language,
            region, and stated partner preferences.
          </Text>
          <Text style={paragraphStyle}>
            Members receive free or paid access to search, shortlist, and communicate with prospects
            aligned to their chosen criteria.
          </Text>
        </View>

        {/* Eligibility */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Eligibility</Text>
          <View style={{ marginTop: 8, paddingLeft: 12 }}>
            <Text style={listItemStyle}>
              • Women must be at least 18 years old and men at least 21 years old.
            </Text>
            <Text style={listItemStyle}>
              • Applicants awaiting divorce may register by disclosing “Awaiting Divorce”.
            </Text>
            <Text style={listItemStyle}>
              • International users must be legally permitted to marry in their jurisdiction and
              comply with applicable Indian laws.
            </Text>
            <Text style={listItemStyle}>
              • Registrants creating profiles for others confirm they have obtained the necessary
              consent.
            </Text>
            <Text style={listItemStyle}>
              • Membership is reserved for genuine individuals seeking marriage; businesses or
              competitors may not enroll or harvest data.
            </Text>
          </View>
        </View>

        {/* Registration */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Registration</Text>
          <Text style={paragraphStyle}>
            Provide accurate, current, and complete information, including recent photographs,
            during registration. Fill only the appropriate fields and avoid duplicating data.
          </Text>
          <Text style={paragraphStyle}>
            Connecting Hearts may request additional documentation to serve you better; please
            cooperate promptly.
          </Text>
          <Text style={paragraphStyle}>
            If any information is found to be untrue, inaccurate, or incomplete, we may suspend or
            terminate your membership without notice, forfeit payments, and block duplicate or
            non-compliant profiles.
          </Text>
          <Text style={paragraphStyle}>
            Use of the platform signifies a bona fide intent for marriage. Unauthorized commercial
            use, data scraping, or profile replication is prohibited.
          </Text>
        </View>

        {/* Account Security */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Account Security</Text>
          <Text style={paragraphStyle}>
            You are responsible for safeguarding your login credentials, OTPs, and device access.
            We will never request your password.
          </Text>
          <Text style={paragraphStyle}>
            You are liable for all activities conducted through your account and must notify us of
            any unauthorized access.
          </Text>
        </View>

        {/* Role & Responsibility of Connecting Hearts */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Role &amp; Responsibility of Connecting Hearts</Text>
          <Text style={paragraphStyle}>
            Our obligations focus on platform facilitation, data security practices, and transparent
            communication with members.
          </Text>
          <View style={{ marginTop: 8, paddingLeft: 12 }}>
            <Text style={listItemStyle}>
              • Display member profiles “as-is” for discovery by other registered users.
            </Text>
            <Text style={listItemStyle}>
              • Provide an interface for self-service searching without personal matchmaking
              assistance.
            </Text>
            <Text style={listItemStyle}>
              • Generate automated matches based on the partner preferences you set; changes to
              preferences will update recommendations accordingly.
            </Text>
            <Text style={listItemStyle}>
              • Protect sensitive information via industry security standards, acknowledging that no
              transmission is entirely risk-free.
            </Text>
            <Text style={listItemStyle}>
              • Refrain from authenticating every profile; members must independently verify details
              before proceeding.
            </Text>
          </View>
        </View>

        {/* Role & Responsibility of Members */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Role &amp; Responsibility of Connecting Hearts Members</Text>
          <Text style={paragraphStyle}>
            Members must uphold safe usage practices and comply fully with these Terms.
          </Text>
          <View style={{ marginTop: 8, paddingLeft: 12 }}>
            <Text style={listItemStyle}>
              • Create strong passwords, keep contact details current, and provide recent
              photographs and relevant health disclosures.
            </Text>
            <Text style={listItemStyle}>
              • Verify the credentials, intentions, and backgrounds of prospects before sharing
              personal data or progressing conversations.
            </Text>
            <Text style={listItemStyle}>
              • Avoid financial transactions, abusive language, discrimination, or sharing
              confidential details (banking, IDs, etc.) with other members.
            </Text>
            <Text style={listItemStyle}>
              • Do not enter into physical relationships prior to marriage or violate applicable
              laws.
            </Text>
            <Text style={listItemStyle}>
              • Stay vigilant against suspicious behaviour (multiple numbers, refusal to meet, etc.)
              and report concerns to connectinghearts.helpdesk@gmail.com.
            </Text>
            <Text style={listItemStyle}>
              • Regularly log in, manage interests, and delete your profile once a match is
              finalized.
            </Text>
            <Text style={listItemStyle}>
              • Use secure devices and networks, and never deploy bots, scripts, or vulnerability
              scans on the application.
            </Text>
            <Text style={listItemStyle}>
              • Make payments only to official Connecting Hearts accounts; staff will never request
              direct transfers.
            </Text>
            <Text style={listItemStyle}>
              • We do not promote horoscope or kundali matching services.
            </Text>
          </View>
        </View>

        {/* Communication & Notifications */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Communication &amp; Notifications</Text>
          <Text style={paragraphStyle}>
            By registering, you consent to receive communications via email, calls, SMS, or
            WhatsApp, including promotional updates.
          </Text>
          <Text style={paragraphStyle}>
            Automated systems may send you prospective profiles. Provide contact numbers not
            registered under Do Not Disturb, or acknowledge that Connecting Hearts calls/messages
            will not be considered promotional.
          </Text>
        </View>

        {/* Confidentiality */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Confidentiality</Text>
          <Text style={paragraphStyle}>
            Feedback submitted to Connecting Hearts is deemed non-confidential, and we may use it
            without restriction. By providing feedback, you confirm you own the content and
            understand no compensation is due.
          </Text>
        </View>

        {/* Privacy of Membership */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Privacy of Membership</Text>
          <Text style={paragraphStyle}>
            Your use of the platform is governed by our Privacy Policy. Personal data shared with us
            is treated in accordance with that policy and applicable laws. If you object to data
            handling practices described there, do not use the application.
          </Text>
        </View>

        {/* Disputes Between Members */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Disputes Between Members</Text>
          <Text style={paragraphStyle}>
            Members are solely responsible for communications and transactions with prospects.
            Connecting Hearts is not liable for disputes, financial exchanges, or misrepresentations
            between users.
          </Text>
          <Text style={paragraphStyle}>
            We are not brokers or agents and do not mediate conversations or guarantee outcomes.
          </Text>
        </View>

        {/* Limitation of Liability */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Limitation of Liability</Text>
          <Text style={paragraphStyle}>
            Connecting Hearts, SRCM/Heartfulness, and their representatives are not liable for
            direct or indirect damages arising from use of the app, third-party services, or user
            interactions.
          </Text>
          <Text style={paragraphStyle}>
            Exchange of profiles does not constitute a matrimonial offer or guarantee. Liability, if
            any, is limited to the amount paid for the specific service package.
          </Text>
          <Text style={paragraphStyle}>
            We are not responsible for financial transactions between members, lack of responses,
            improper matches, or technical issues.
          </Text>
          <Text style={paragraphStyle}>
            Members agree not to initiate or participate in class actions or class arbitration
            against Connecting Hearts or SRCM/Heartfulness.
          </Text>
        </View>

        {/* General */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>General</Text>
          <Text style={paragraphStyle}>
            Submitting false complaints that impact other users may result in legal action,
            suspension, and forfeiture of fees.
          </Text>
          <Text style={paragraphStyle}>
            We may delete or suspend content that violates consent, accuracy, or prevailing laws,
            including obscene, defamatory, or discriminatory material.
          </Text>
          <Text style={paragraphStyle}>
            Offensive behaviour toward staff or members may lead to account suspension.
          </Text>
          <Text style={paragraphStyle}>
            Unutilized call/SMS quotas expire with membership unless renewed within 30 days, after
            which remaining balances resume.
          </Text>
          <Text style={paragraphStyle}>
            In case of conflict between these Terms and other site policies, these Terms prevail for
            in-app services.
          </Text>
        </View>

        {/* Disclaimer */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Disclaimer</Text>
          <Text style={paragraphStyle}>
            Services are provided on an “as-is” and “as-available” basis without warranties of
            merchantability, fitness, or non-infringement.
          </Text>
          <Text style={paragraphStyle}>
            We do not guarantee virus-free servers or uninterrupted availability, nor do we promise
            marriage outcomes.
          </Text>
          <Text style={paragraphStyle}>
            We are not responsible for actions of payment gateways, inaccurate user information,
            decisions based on shared data, unauthorized third-party acts, cybercrimes, force
            majeure events, or technical malfunctions.
          </Text>
          <Text style={paragraphStyle}>
            Use of the app is at your own risk. We are not liable for any damage to your devices
            arising from installation or use.
          </Text>
          <Text style={paragraphStyle}>
            Register with a mobile number not tied to critical financial services to mitigate risk;
            we are not liable for misuse of shared devices or accounts.
          </Text>
        </View>

        {/* Indemnity */}
        <View style={sectionContainerStyle}>
          <Text style={sectionTitleStyle}>Indemnity</Text>
          <Text style={paragraphStyle}>
            By using Connecting Hearts you agree to indemnify and hold harmless the company, its
            affiliates, officers, employees, and partners from losses or claims arising from misuse
            of the service. This obligation survives termination of membership.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};


