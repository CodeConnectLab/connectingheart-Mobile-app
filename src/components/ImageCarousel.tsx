import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

export interface ImageCarouselProps {
  images: string[];
  label?: string;
  heading?: string;
  height?: number;
  showArrows?: boolean;
  showOverlay?: boolean;
  onImageChange?: (index: number) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  label,
  heading,
  height = 220,
  showArrows = true,
  showOverlay = true,
  onImageChange,
}) => {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.imageCarousel, { height }]}>
        {images[currentImageIndex] ? (
          <Image
            source={{ uri: images[currentImageIndex] }}
            style={styles.carouselImage}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.placeholderImage, { backgroundColor: theme.colors.surface }]}>
            <Ionicons name="image-outline" size={48} color={theme.colors.textSecondary} />
          </View>
        )}

        {/* Navigation Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <TouchableOpacity
              style={styles.carouselArrowLeft}
              onPress={handlePreviousImage}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.carouselArrowRight}
              onPress={handleNextImage}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </TouchableOpacity>
          </>
        )}

        {/* Text Overlay */}
        {showOverlay && (label || heading) && (
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.textOverlay}
          >
            <View style={styles.overlayContent}>
              {label && <Text style={styles.contentLabel}>{label}</Text>}
              {heading && <Text style={styles.contentHeading}>{heading}</Text>}
            </View>
          </LinearGradient>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  imageCarousel: {
    width: '100%',
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselArrowLeft: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
    zIndex: 10,
  },
  carouselArrowRight: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
    zIndex: 10,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'flex-end',
  },
  overlayContent: {
    gap: 8,
  },
  contentLabel: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 3.2,
    color: 'rgba(248, 250, 252, 0.8)',
  },
  contentHeading: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    color: 'white',
  },
});

