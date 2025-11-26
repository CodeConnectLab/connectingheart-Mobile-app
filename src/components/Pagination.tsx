import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IS_SMALL_SCREEN = SCREEN_WIDTH < 400;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = IS_SMALL_SCREEN ? 3 : 5,
}) => {
  const { theme } = useTheme();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      let start = Math.max(2, currentPage - halfVisible);
      let end = Math.min(totalPages - 1, currentPage + halfVisible);

      // Adjust if we're near the start
      if (currentPage <= halfVisible + 1) {
        end = maxVisiblePages - 1;
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - halfVisible) {
        start = totalPages - maxVisiblePages + 2;
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push('...');
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.navButton,
          {
            borderColor: theme.colors.border,
            opacity: currentPage === 1 ? 0.4 : 1,
          },
        ]}
        onPress={handlePrevious}
        disabled={currentPage === 1}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.navButtonText,
            {
              color: theme.colors.textSecondary,
            },
          ]}
        >
          Previous
        </Text>
      </TouchableOpacity>

      <View style={styles.pagesContainer} pointerEvents="box-none">
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <Text
                key={`ellipsis-${index}`}
                style={[styles.ellipsis, { color: theme.colors.textSecondary }]}
              >
                …
              </Text>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <TouchableOpacity
              key={pageNumber}
              style={[
                styles.pageButton,
                isActive && {
                  backgroundColor: theme.colors.primary,
                },
              ]}
              onPress={() => onPageChange(pageNumber)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.pageButtonText,
                  isActive
                    ? { color: 'white', fontWeight: '600' }
                    : { color: theme.colors.textSecondary },
                ]}
              >
                {pageNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={[
          styles.navButton,
          {
            borderColor: theme.colors.border,
            opacity: currentPage === totalPages ? 0.4 : 1,
          },
        ]}
        onPress={handleNext}
        disabled={currentPage === totalPages}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.navButtonText,
            {
              color: theme.colors.textSecondary,
            },
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  navButton: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  navButtonText: {
    fontSize: 14,
  },
  pagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pageButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButtonText: {
    fontSize: 14,
  },
  ellipsis: {
    paddingHorizontal: 8,
    fontSize: 14,
  },
});

