// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://backend.prod.connectingheart.co/api',
  ENDPOINTS: {
    PROFILE: '/profile',
    RECOMMENDATIONS: '/recommendations',
    VISITORS: '/visitors',
    SEARCH: '/search',
  },
};

// API utility functions can be added here
export const getImageUrl = (path: string) => {
  return `${API_CONFIG.BASE_URL}${path}`;
};

