# Connecting Hearts - Architecture Documentation

## 🏗️ Architecture Overview

This application follows a **modular, scalable architecture** based on industry best practices for React Native/Expo applications.

## 📐 Design Patterns

### 1. Component-Based Architecture
- **Atomic Design Principles**: Components are organized from simple to complex
- **Reusability**: All UI components are designed to be reusable
- **Single Responsibility**: Each component has one clear purpose

### 2. State Management
- **Redux Toolkit**: Centralized state management
- **Slices**: Feature-based state organization
- **Custom Hooks**: Abstraction layer for accessing state

### 3. Separation of Concerns
```
┌─────────────────────────────────────────┐
│           Presentation Layer            │
│  (Screens, Components, Navigation)      │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           Business Logic Layer          │
│     (Hooks, Services, Utilities)        │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│              Data Layer                 │
│    (Redux Store, API Config, Types)     │
└─────────────────────────────────────────┘
```

## 📂 Folder Structure Explained

### `/src/components`
**Purpose**: Reusable UI components
- `Header.tsx` - App header with navigation and notifications
- `ProfileCard.tsx` - Profile display card (reusable across screens)
- `StatCard.tsx` - Statistics display card
- `index.ts` - Barrel export for clean imports

**Best Practices**:
- Each component is self-contained
- Props are strictly typed with TypeScript interfaces
- Theme-aware styling using `useTheme` hook
- No business logic - only presentation

### `/src/screens`
**Purpose**: Full-screen components representing app pages
- Each screen is a container component
- Screens compose smaller components
- Handle screen-level state and logic
- Connected to navigation

### `/src/navigation`
**Purpose**: Navigation configuration
- `BottomTabNavigator.tsx` - Bottom tab navigation setup
- Type-safe navigation with TypeScript
- Theme-aware tab bar styling

### `/src/store`
**Purpose**: Redux state management
```
store/
├── slices/              # Feature-based state slices
│   └── themeSlice.ts   # Theme state management
└── index.ts            # Store configuration
```

**Why Redux Toolkit?**
- Simplified Redux setup
- Built-in best practices
- Excellent TypeScript support
- DevTools integration

### `/src/hooks`
**Purpose**: Custom React hooks for reusable logic
- `useTheme.ts` - Theme access and manipulation
- Future: `useAuth.ts`, `useApi.ts`, etc.

**Benefits**:
- Encapsulate complex logic
- Promote code reuse
- Easy to test
- Clean component code

### `/src/theme`
**Purpose**: Centralized theme configuration
```typescript
// Light and dark color schemes
export const lightColors = { ... };
export const darkColors = { ... };

// Theme object with colors and metadata
export interface Theme {
  colors: Colors;
  isDark: boolean;
}
```

**Scalability**:
- Easy to add new themes
- Consistent color usage across app
- Type-safe color references

### `/src/types`
**Purpose**: TypeScript type definitions
- Shared interfaces and types
- API response types
- Component prop types

**Benefits**:
- Type safety throughout the app
- Better IDE autocomplete
- Catch errors at compile time

### `/src/config`
**Purpose**: App configuration
- API endpoints
- Environment-specific settings
- Feature flags (future)

## 🎨 Theme System Architecture

### Theme Flow
```
User Action → Redux Action → Theme State Update → 
useTheme Hook → Component Re-render with New Theme
```

### Implementation
1. **State**: Theme mode stored in Redux (`light` | `dark`)
2. **Hook**: `useTheme()` provides theme object and toggle function
3. **Components**: Use theme colors from hook
4. **Persistence**: Can be extended to save preference to AsyncStorage

### Usage Example
```typescript
const { theme, toggleTheme } = useTheme();

<View style={{ backgroundColor: theme.colors.background }}>
  <Text style={{ color: theme.colors.text }}>Hello</Text>
</View>
```

## 🔄 Data Flow

### Component Data Flow
```
Redux Store
    ↓
Custom Hook (useTheme, useAuth, etc.)
    ↓
Screen Component
    ↓
Child Components (via props)
```

### API Data Flow (Future Implementation)
```
Screen/Component
    ↓
Custom Hook (useApi)
    ↓
API Service
    ↓
Redux Store (cache)
    ↓
Component Update
```

## 🎯 SOLID Principles Implementation

### Single Responsibility Principle
- Each component has one clear purpose
- Hooks encapsulate specific logic
- Screens orchestrate, components present

### Open/Closed Principle
- Components accept props for customization
- Theme system is extensible without modifying existing code
- New features added via new slices/hooks

### Liskov Substitution Principle
- All ProfileCard instances are interchangeable
- Theme objects (light/dark) are substitutable

### Interface Segregation Principle
- TypeScript interfaces are specific and focused
- Components only receive props they need

### Dependency Inversion Principle
- Components depend on hooks (abstractions), not Redux directly
- API calls will go through service layer, not direct fetch

## 📱 Screen Architecture

### Dashboard Screen Structure
```
DashboardScreen
├── Profile Header (Gradient Card)
├── Stats Section
│   ├── StatCard (Acceptance)
│   └── StatCard (Just Joined)
├── Daily Recommendations Section
│   └── Horizontal ScrollView of ProfileCards
├── Profile Visitors Section
│   └── Horizontal ScrollView of ProfileCards
└── All Profiles Section
    └── Horizontal ScrollView of ProfileCards
```

## 🔐 Type Safety

### TypeScript Configuration
- Strict mode enabled
- No implicit any
- Strict null checks
- All props and state typed

### Benefits
- Catch errors at compile time
- Better refactoring support
- Self-documenting code
- Improved IDE experience

## 🚀 Scalability Considerations

### Adding New Features
1. **New Screen**: Add to `/src/screens`, register in navigation
2. **New Component**: Add to `/src/components`, export from index
3. **New State**: Create slice in `/src/store/slices`
4. **New API**: Add endpoint to `/src/config/api.ts`

### Performance Optimization
- Use `React.memo` for expensive components
- Implement `useMemo` and `useCallback` where needed
- Lazy load screens with React.lazy
- Optimize images with proper sizing
- Use FlatList for long lists

### Code Organization
- Keep files under 300 lines
- Extract complex logic to hooks
- Create utility functions for common operations
- Use barrel exports (index.ts) for clean imports

## 🧪 Testing Strategy (Future)

### Unit Tests
- Test hooks in isolation
- Test utility functions
- Test Redux slices

### Component Tests
- Test component rendering
- Test user interactions
- Test theme switching

### Integration Tests
- Test navigation flows
- Test API integration
- Test state management

## 📊 State Management Strategy

### What Goes in Redux?
- ✅ Theme preference
- ✅ User authentication state
- ✅ Cached API responses
- ✅ Global UI state (modals, toasts)

### What Stays in Component State?
- ✅ Form inputs
- ✅ UI toggles (dropdowns, accordions)
- ✅ Temporary/transient state
- ✅ Screen-specific state

## 🔄 Future Enhancements

### Planned Architecture Improvements
1. **API Layer**: Implement service layer with Axios/Fetch
2. **Authentication**: Add auth slice and protected routes
3. **Offline Support**: Add Redux Persist for offline capability
4. **Error Handling**: Centralized error handling and logging
5. **Analytics**: Add analytics tracking layer
6. **Feature Flags**: Implement feature toggle system
7. **Internationalization**: Add i18n support
8. **Performance Monitoring**: Add performance tracking

## 📝 Code Style Guidelines

### Component Structure
```typescript
// 1. Imports
import React from 'react';
import { View, Text } from 'react-native';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
}

// 3. Component
export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  // 4. Hooks
  const { theme } = useTheme();
  
  // 5. Handlers
  const handlePress = () => { ... };
  
  // 6. Render
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

// 7. Styles
const styles = StyleSheet.create({ ... });
```

### Naming Conventions
- **Components**: PascalCase (`ProfileCard.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useTheme.ts`)
- **Functions**: camelCase (`handlePress`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Interfaces**: PascalCase with descriptive names (`ProfileCardProps`)

## 🎓 Learning Resources

For developers new to this architecture:
1. Redux Toolkit: https://redux-toolkit.js.org/
2. React Navigation: https://reactnavigation.org/
3. TypeScript: https://www.typescriptlang.org/
4. React Hooks: https://react.dev/reference/react

---

This architecture is designed to be **maintainable**, **scalable**, and **developer-friendly**. Follow these patterns when adding new features to ensure consistency across the codebase.

