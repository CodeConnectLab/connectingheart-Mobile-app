import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { Header, Sidebar } from '../components';

export const FeedbackScreen: React.FC = () => {
  const { theme } = useTheme();
  const [rating, setRating] = React.useState<number | null>(null);
  const [comment, setComment] = React.useState('');

  const handleSelectRating = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (!rating) return;
    // TODO: integrate with API via hook/service
    console.log('Feedback submitted', { rating, comment });
  };

  const isSubmitDisabled = !rating;

  const backgroundColor = theme.colors.background;
  const cardBackground = theme.colors.cardBackground;
  const textPrimary = theme.colors.textPrimary;
  const textSecondary = theme.colors.textSecondary;
  const borderColor = theme.colors.border;

  return (
    <View style={{ flex: 1, backgroundColor }}>
      {/* <Header title="Feedback" /> */}
      <Sidebar />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 40,
        }}
      >
        {/* Rating Card */}
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
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: textPrimary,
                marginBottom: 4,
              }}
            >
              Rate Your Experience
            </Text>
            <Text style={{ fontSize: 13, color: textSecondary, marginBottom: 16 }}>
              Your Voice, Our Growth
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
              {[1, 2, 3, 4, 5].map((value) => {
                const isActive = rating !== null && value <= rating;
                return (
                  <TouchableOpacity
                    key={value}
                    activeOpacity={0.8}
                    onPress={() => handleSelectRating(value)}
                    style={{ padding: 4 }}
                  >
                    <Ionicons
                      name={isActive ? 'star' : 'star-outline'}
                      size={40}
                      color={isActive ? '#ec4899' : '#cbd5f5'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* Comment Card */}
        <View
          style={{
            marginTop: 24,
            borderRadius: 24,
            borderWidth: 1,
            borderColor,
            backgroundColor: cardBackground,
            padding: 20,
            shadowColor: '#000',
            shadowOpacity: 0.04,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: textPrimary,
              marginBottom: 8,
            }}
          >
            Comment
          </Text>

          <TextInput
            placeholder="Comment"
            placeholderTextColor={theme.isDark ? '#6b7280' : '#9ca3af'}
            multiline
            value={comment}
            onChangeText={setComment}
            style={{
              minHeight: 140,
              borderRadius: 20,
              borderWidth: 1,
              borderColor,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 14,
              color: textPrimary,
              backgroundColor: theme.isDark ? '#020617' : '#f9fafb',
              textAlignVertical: 'top',
            }}
          />
        </View>

        {/* Submit Button */}
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <TouchableOpacity
            activeOpacity={isSubmitDisabled ? 1 : 0.8}
            onPress={handleSubmit}
            disabled={isSubmitDisabled}
            style={{
              paddingHorizontal: 32,
              paddingVertical: 14,
              borderRadius: 999,
              backgroundColor: isSubmitDisabled ? '#f9a8d4' : '#ec4899',
              shadowColor: '#ec4899',
              shadowOpacity: 0.4,
              shadowRadius: 16,
              shadowOffset: { width: 0, height: 8 },
              opacity: isSubmitDisabled ? 0.6 : 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#ffffff',
              }}
            >
              Submit Your Rating
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};


