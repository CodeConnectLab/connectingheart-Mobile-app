# Connecting Hearts - Mobile App

A professional matrimonial mobile application built with React Native, Expo, TypeScript, Redux, and modern UI libraries.

## 🚀 Tech Stack

- **Framework**: Expo (React Native)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation (Bottom Tabs)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: Ant Design React Native
- **Icons**: Expo Vector Icons (Ionicons)

## 📁 Project Structure

```
ConnectingHearts/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── StatCard.tsx
│   │   └── index.ts
│   ├── screens/             # Screen components
│   │   ├── DashboardScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   ├── DailyPicksScreen.tsx
│   │   ├── ProfilesScreen.tsx
│   │   ├── MembershipScreen.tsx
│   │   └── index.ts
│   ├── navigation/          # Navigation configuration
│   │   ├── BottomTabNavigator.tsx
│   │   └── index.tsx
│   ├── store/               # Redux store and slices
│   │   ├── slices/
│   │   │   └── themeSlice.ts
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.ts
│   ├── theme/               # Theme configuration
│   │   ├── colors.ts
│   │   └── index.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   └── config/              # App configuration
│       └── api.ts
├── App.tsx                  # Root component
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## 🎨 Features

### Implemented
- ✅ Professional project structure following industry standards
- ✅ Light & Dark theme support with Redux state management
- ✅ Bottom tab navigation with 5 screens
- ✅ Custom header component with search and notifications
- ✅ Dashboard screen with:
  - User profile card with gradient background
  - Stats cards (Acceptance, Just Joined)
  - Daily Recommendations section
  - Profile Visitors section
  - All Profiles section
- ✅ Reusable ProfileCard component
- ✅ Reusable StatCard component
- ✅ Theme-aware components
- ✅ TypeScript strict typing
- ✅ Scalable and maintainable architecture

### Theme System
The app supports both light and dark themes:
- Theme state managed via Redux
- Custom hook `useTheme()` for easy theme access
- All components are theme-aware
- Easy to toggle between themes

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Install Dependencies
```bash
npm install
```

### Run the App

#### Start Development Server
```bash
npm start
```

#### Run on iOS
```bash
npm run ios
```

#### Run on Android
```bash
npm run android
```

#### Run on Web
```bash
npm run web
```

## 📱 Screens

1. **Dashboard** - Main screen with profile overview and recommendations
2. **Search** - Search for profiles (placeholder)
3. **Daily Picks** - Daily recommended profiles (placeholder)
4. **Profiles** - Browse all profiles (placeholder)
5. **Membership** - Membership plans and upgrades (placeholder)

## 🎯 Code Standards

- **Component Structure**: Functional components with TypeScript
- **State Management**: Redux Toolkit for global state
- **Styling**: StyleSheet API with theme-aware colors
- **Type Safety**: Strict TypeScript with proper interfaces
- **Reusability**: DRY principles with reusable components
- **Separation of Concerns**: UI and business logic separated
- **Naming Conventions**: PascalCase for components, camelCase for functions

## 🔧 Configuration

### API Configuration
API endpoints are configured in `src/config/api.ts`:
```typescript
export const API_CONFIG = {
  BASE_URL: 'https://backend.prod.connectingheart.co/api',
  ENDPOINTS: {
    PROFILE: '/profile',
    RECOMMENDATIONS: '/recommendations',
    VISITORS: '/visitors',
    SEARCH: '/search',
  },
};
```

### Theme Configuration
Theme colors are defined in `src/theme/colors.ts` and can be easily customized.

## 📝 Next Steps

- Implement API integration with custom hooks
- Add authentication flow
- Complete remaining screens
- Add loading states and error handling
- Implement profile detail view
- Add filters and search functionality
- Implement chat/messaging feature
- Add push notifications

## 🤝 Contributing

Follow the established code structure and patterns when adding new features.

## 📄 License

Private - All rights reserved

