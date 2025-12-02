import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Sidebar } from '../components';

export const HelpCenterScreen: React.FC = () => {
  const { theme } = useTheme();

  const backgroundColor = theme.colors.background;
  const cardBackground = theme.colors.cardBackground;
  const textPrimary = theme.colors.textPrimary;
  const textSecondary = theme.colors.textSecondary;
  const borderColor = theme.colors.border;

  const handleCall = () => {
    Linking.openURL('tel:+919452613159').catch((err) =>
      console.error('Error opening phone dialer', err)
    );
  };

  const handleEmail = () => {
    Linking.openURL('mailto:connectinghearts.helpdesk@gmail.com').catch((err) =>
      console.error('Error opening email client', err)
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor }}>
      {/* <Header title="Help Center" /> */}
      <Sidebar />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 40,
        }}
      >
        <View
          style={{
            borderRadius: 24,
            borderWidth: 1,
            borderColor,
            backgroundColor: cardBackground,
            padding: 24,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowRadius: 12,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {/* Text section */}
            <View style={{ flex: 1, gap: 16 }}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: 1.2,
                    color: '#ec4899',
                  }}
                >
                  Need help?
                </Text>
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 26,
                    fontWeight: '700',
                    color: textPrimary,
                  }}
                >
                  Dedicated support for every member
                </Text>
                <Text
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    lineHeight: 20,
                    color: textSecondary,
                  }}
                >
                  Reach out anytime for profile assistance, safety concerns, or billing queries. Our
                  support desk is available 7 days a week.
                </Text>
              </View>

              {/* Contact card */}
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor,
                  backgroundColor: theme.isDark ? '#020617' : '#f9fafb',
                  padding: 16,
                  gap: 16,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: '#6b7280',
                    }}
                  >
                    Phone
                  </Text>
                  <TouchableOpacity onPress={handleCall} activeOpacity={0.8}>
                    <Text
                      style={{
                        marginTop: 6,
                        fontSize: 18,
                        fontWeight: '600',
                        color: textPrimary,
                      }}
                    >
                      +91-9452613159
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: '#6b7280',
                    }}
                  >
                    Email
                  </Text>
                  <TouchableOpacity onPress={handleEmail} activeOpacity={0.8}>
                    <Text
                      style={{
                        marginTop: 6,
                        fontSize: 18,
                        fontWeight: '600',
                        color: textPrimary,
                      }}
                    >
                      connectinghearts.helpdesk@gmail.com
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Illustration section */}
            <View
              style={{
                flex: 1,
                marginTop: 8,
              }}
            >
              <View
                style={{
                  overflow: 'hidden',
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor,
                  backgroundColor: theme.isDark ? '#020617' : '#e5e7eb',
                  padding: 12,
                }}
              >
                <Image
                  source={require('../../assets/splash-icon.png')}
                  style={{
                    width: '100%',
                    height: 220,
                    borderRadius: 16,
                    resizeMode: 'cover',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


