# Development Guide - Connecting Hearts

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- npm or yarn package manager
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac only) or Android Studio with emulator
- VS Code (recommended) with extensions:
  - ESLint
  - Prettier
  - React Native Tools
  - TypeScript

### First Time Setup

1. **Clone and Install**
```bash
cd ConnectingHearts
npm install
```

2. **Start Development Server**
```bash
npm start
```

3. **Run on Device/Simulator**
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on physical device

## 📝 Development Workflow

### Creating a New Screen

1. **Create Screen File**
```bash
# Create file: src/screens/NewScreen.tsx
```

2. **Screen Template**
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const NewScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.text }]}>
        New Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```

3. **Export from index**
```typescript
// src/screens/index.ts
export { NewScreen } from './NewScreen';
```

4. **Add to Navigation**
```typescript
// src/navigation/BottomTabNavigator.tsx
<Tab.Screen
  name="NewScreen"
  component={NewScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="icon-name" size={size} color={color} />
    ),
  }}
/>
```

### Creating a New Component

1. **Create Component File**
```bash
# Create file: src/components/NewComponent.tsx
```

2. **Component Template**
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface NewComponentProps {
  title: string;
  onPress?: () => void;
}

export const NewComponent: React.FC<NewComponentProps> = ({ 
  title, 
  onPress 
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.cardBackground }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
```

3. **Export from index**
```typescript
// src/components/index.ts
export { NewComponent } from './NewComponent';
```

### Adding a Redux Slice

1. **Create Slice File**
```bash
# Create file: src/store/slices/newSlice.ts
```

2. **Slice Template**
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewState {
  data: string[];
  loading: boolean;
}

const initialState: NewState = {
  data: [],
  loading: false,
};

const newSlice = createSlice({
  name: 'new',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setData, setLoading } = newSlice.actions;
export default newSlice.reducer;
```

3. **Add to Store**
```typescript
// src/store/index.ts
import newReducer from './slices/newSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    new: newReducer, // Add here
  },
});
```

### Creating a Custom Hook

1. **Create Hook File**
```bash
# Create file: src/hooks/useNewHook.ts
```

2. **Hook Template**
```typescript
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setData } from '../store/slices/newSlice';

export const useNewHook = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.new.data);

  const updateData = (newData: string[]) => {
    dispatch(setData(newData));
  };

  return {
    data,
    updateData,
  };
};
```

## 🎨 Styling Guidelines

### Using Theme Colors
```typescript
const { theme } = useTheme();

// ✅ Good - Theme-aware
<View style={{ backgroundColor: theme.colors.background }}>
  <Text style={{ color: theme.colors.text }}>Hello</Text>
</View>

// ❌ Bad - Hardcoded colors
<View style={{ backgroundColor: '#ffffff' }}>
  <Text style={{ color: '#000000' }}>Hello</Text>
</View>
```

### Available Theme Colors
```typescript
theme.colors.primary          // Pink primary color
theme.colors.secondary        // Secondary pink
theme.colors.background       // Screen background
theme.colors.surface          // Card/surface background
theme.colors.text             // Primary text
theme.colors.textSecondary    // Secondary text
theme.colors.border           // Border color
theme.colors.error            // Error red
theme.colors.success          // Success green
theme.colors.warning          // Warning orange
theme.colors.cardBackground   // Card background
```

### Responsive Styling
```typescript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9, // 90% of screen width
    padding: width > 768 ? 24 : 16, // Larger padding on tablets
  },
});
```

## 🔧 Common Tasks

### Toggle Theme
```typescript
const { toggleTheme } = useTheme();

<TouchableOpacity onPress={toggleTheme}>
  <Text>Toggle Theme</Text>
</TouchableOpacity>
```

### Navigation
```typescript
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

// Navigate to screen
navigation.navigate('ScreenName');

// Go back
navigation.goBack();
```

### API Integration (Future)
```typescript
// Create service: src/services/apiService.ts
import { API_CONFIG } from '../config/api';

export const fetchProfiles = async () => {
  const response = await fetch(`${API_CONFIG.BASE_URL}/profiles`);
  return response.json();
};

// Use in component
const [profiles, setProfiles] = useState([]);

useEffect(() => {
  const loadProfiles = async () => {
    const data = await fetchProfiles();
    setProfiles(data);
  };
  loadProfiles();
}, []);
```

## 🐛 Debugging

### React Native Debugger
1. Install React Native Debugger
2. Start app with `npm start`
3. Press `Cmd+D` (iOS) or `Cmd+M` (Android)
4. Select "Debug"

### Redux DevTools
Redux DevTools are automatically enabled in development mode.

### Console Logging
```typescript
console.log('Debug:', variable);
console.warn('Warning:', message);
console.error('Error:', error);
```

### Common Issues

**Issue**: Metro bundler cache issues
```bash
npm start -- --reset-cache
```

**Issue**: iOS build fails
```bash
cd ios && pod install && cd ..
npm run ios
```

**Issue**: Android build fails
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

## 📦 Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Web
```bash
npm run web
expo build:web
```

## 🧪 Testing (Future Implementation)

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run e2e
```

## 📚 Code Examples

### Fetching Data with Loading State
```typescript
const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, []);

if (loading) return <ActivityIndicator />;
if (error) return <Text>Error: {error}</Text>;
return <FlatList data={data} ... />;
```

### Form Handling
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
});

const handleChange = (field: string, value: string) => {
  setFormData(prev => ({ ...prev, [field]: value }));
};

const handleSubmit = () => {
  console.log('Form data:', formData);
  // Submit logic here
};

<TextInput
  value={formData.name}
  onChangeText={(text) => handleChange('name', text)}
/>
```

### List Rendering
```typescript
<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ItemComponent item={item} />}
  ListEmptyComponent={<Text>No items</Text>}
  refreshing={loading}
  onRefresh={handleRefresh}
/>
```

## 🔐 Environment Variables (Future)

Create `.env` file:
```
API_BASE_URL=https://api.example.com
API_KEY=your_api_key
```

Access in code:
```typescript
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.apiUrl;
```

## 📱 Platform-Specific Code

```typescript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    ...Platform.select({
      ios: { shadowColor: '#000' },
      android: { elevation: 4 },
    }),
  },
});
```

## 🎯 Best Practices

1. **Always use TypeScript types** - No `any` types
2. **Keep components small** - Under 300 lines
3. **Use hooks for logic** - Keep components clean
4. **Theme-aware styling** - Use `useTheme()` hook
5. **Proper error handling** - Try/catch for async operations
6. **Loading states** - Show feedback to users
7. **Optimize images** - Use proper sizes and formats
8. **Memoization** - Use `React.memo`, `useMemo`, `useCallback`
9. **Accessibility** - Add proper labels and hints
10. **Code reviews** - Review before merging

## 📖 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Happy coding! 🚀

