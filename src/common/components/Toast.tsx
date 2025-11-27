import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

export interface ToastProps {
  message: string;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
  resetKey?: number;
}

/**
 * Lightweight toast component to display transient success/info messages.
 * Handles its own entry/exit animation and exposes an `onHide` callback so the caller
 * can toggle visibility when the animation finishes.
 */
export const Toast: React.FC<ToastProps> = ({
  message,
  visible,
  duration = 3000,
  onHide,
  resetKey,
}) => {
  const { theme } = useTheme();
  const slideAnim = useRef(new Animated.Value(-120)).current;
  const progressAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let progressAnimation: Animated.CompositeAnimation | null = null;

    if (visible) {
      slideAnim.setValue(-120);
      progressAnim.setValue(1);

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }).start();

      progressAnimation = Animated.timing(progressAnim, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      });

      progressAnimation.start(({ finished }) => {
        if (finished) {
          Animated.timing(slideAnim, {
            toValue: -120,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            onHide?.();
          });
        }
      });
    } else {
      slideAnim.setValue(-120);
      progressAnim.setValue(1);
    }

    return () => {
      progressAnimation?.stop();
    };
  }, [visible, duration, slideAnim, progressAnim, onHide, resetKey]);

  if (!visible) {
    return null;
  }

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View
      style={[
        styles.toastWrapper,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
      pointerEvents="box-none"
    >
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor: theme.colors.surface,
            shadowColor: theme.colors.text,
          },
        ]}
      >
        <View style={styles.toastContent}>
          <View style={styles.toastIconWrapper}>
            <Ionicons
              name="checkmark-circle"
              size={20}
              color={theme.colors.success}
            />
          </View>
          <Text style={[styles.toastText, { color: theme.colors.text }]}>
            {message}
          </Text>
          <TouchableOpacity onPress={onHide} activeOpacity={0.7}>
            <Ionicons
              name="close"
              size={18}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.progressTrack, { backgroundColor: theme.colors.border }]}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                backgroundColor: theme.colors.success,
                width: progressWidth,
              },
            ]}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  toastContainer: {
    width: '90%',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  toastIconWrapper: {
    padding: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(16,185,129,0.1)',
  },
  toastText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  progressTrack: {
    height: 4,
    borderRadius: 999,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
});


