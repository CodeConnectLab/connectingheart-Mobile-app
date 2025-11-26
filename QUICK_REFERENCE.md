# Quick Reference Guide

## 🚀 Common Commands

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web browser
npm run web

# Clear cache and restart
npm start -- --reset-cache

# Install new package
npm install package-name

# Check for updates
npm outdated
```

## 📁 File Locations

| What | Where |
|------|-------|
| Screens | `src/screens/` |
| Components | `src/components/` |
| Navigation | `src/navigation/` |
| Redux Store | `src/store/` |
| Hooks | `src/hooks/` |
| Theme | `src/theme/` |
| Types | `src/types/` |
| Config | `src/config/` |

## 🎨 Theme Colors Quick Access

```typescript
const { theme } = useTheme();

theme.colors.primary          // #ec4899 (Pink)
theme.colors.secondary        // #db2777 (Dark Pink)
theme.colors.background       // White/Dark Slate
theme.colors.text             // Black/White
theme.colors.textSecondary    // Gray
theme.colors.border           // Light Gray
theme.colors.cardBackground   // White/Dark Slate
```

## 🧩 Component Templates

### Basic Component
```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});
```

### Screen Component
```typescript
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const MyScreen: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        My Screen
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    padding: 16,
  },
});
```

## 🔗 Navigation

```typescript
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

// Navigate to screen
navigation.navigate('ScreenName');

// Go back
navigation.goBack();

// Navigate with params
navigation.navigate('ScreenName', { id: 123 });
```

## 🗂️ Redux Usage

### Access State
```typescript
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const value = useSelector((state: RootState) => state.slice.value);
```

### Dispatch Action
```typescript
import { useDispatch } from 'react-redux';
import { actionName } from '../store/slices/sliceName';

const dispatch = useDispatch();
dispatch(actionName(payload));
```

### Using Custom Hook
```typescript
const { theme, toggleTheme } = useTheme();
```

## 📱 Common Patterns

### Loading State
```typescript
const [loading, setLoading] = useState(false);

if (loading) {
  return <ActivityIndicator size="large" color={theme.colors.primary} />;
}
```

### Error Handling
```typescript
const [error, setError] = useState<string | null>(null);

try {
  // API call
} catch (err) {
  setError(err.message);
}

if (error) {
  return <Text style={{ color: theme.colors.error }}>{error}</Text>;
}
```

### List Rendering
```typescript
<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ItemComponent item={item} />}
  ListEmptyComponent={<Text>No items</Text>}
/>
```

## 🎯 Icons

```typescript
import { Ionicons } from '@expo/vector-icons';

<Ionicons name="home" size={24} color={theme.colors.primary} />
```

Common icon names:
- `home`, `home-outline`
- `search`, `search-outline`
- `person`, `person-outline`
- `heart`, `heart-outline`
- `star`, `star-outline`
- `settings`, `settings-outline`
- `menu`, `menu-outline`
- `close`, `close-outline`
- `chevron-forward`, `chevron-back`
- `add`, `remove`

## 🖼️ Images

```typescript
// Remote image
<Image 
  source={{ uri: 'https://...' }} 
  style={{ width: 100, height: 100 }}
/>

// Local image
<Image 
  source={require('../assets/image.png')} 
  style={{ width: 100, height: 100 }}
/>
```

## 🎨 Gradients

```typescript
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#ec4899', '#db2777', '#f43f5e']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.gradient}
>
  <Text>Content</Text>
</LinearGradient>
```

## 📏 Dimensions

```typescript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.5,
  },
});
```

## 🔘 Buttons

```typescript
import { TouchableOpacity } from 'react-native';

<TouchableOpacity 
  onPress={handlePress}
  activeOpacity={0.7}
  style={styles.button}
>
  <Text style={styles.buttonText}>Press Me</Text>
</TouchableOpacity>
```

## 📝 Text Input

```typescript
import { TextInput } from 'react-native';

<TextInput
  value={value}
  onChangeText={setValue}
  placeholder="Enter text"
  placeholderTextColor={theme.colors.textSecondary}
  style={[styles.input, { 
    color: theme.colors.text,
    borderColor: theme.colors.border 
  }]}
/>
```

## 🔄 Pull to Refresh

```typescript
const [refreshing, setRefreshing] = useState(false);

const onRefresh = async () => {
  setRefreshing(true);
  // Fetch data
  setRefreshing(false);
};

<ScrollView
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }
>
  {/* Content */}
</ScrollView>
```

## 🎭 Modal

```typescript
import { Modal } from 'react-native';

const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setVisible(false)}
>
  <View style={styles.modalContainer}>
    {/* Modal content */}
  </View>
</Modal>
```

## ⚡ Performance Tips

```typescript
// Memoize expensive computations
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Memoize callbacks
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// Memoize components
export const MyComponent = React.memo(({ prop }) => {
  return <View>{prop}</View>;
});
```

## 🐛 Debugging

```typescript
// Console logs
console.log('Value:', value);
console.warn('Warning:', warning);
console.error('Error:', error);

// JSON stringify for objects
console.log('Object:', JSON.stringify(object, null, 2));

// React DevTools
// Press Cmd+D (iOS) or Cmd+M (Android) -> Debug
```

## 📦 Common Imports

```typescript
// React
import React, { useState, useEffect, useMemo, useCallback } from 'react';

// React Native
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Custom
import { useTheme } from '../hooks/useTheme';
```

## 🎨 Common Styles

```typescript
const styles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  // Spacing
  padding: {
    padding: 16,
  },
  margin: {
    margin: 16,
  },
  gap: {
    gap: 16,
  },
  
  // Text
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
  },
  
  // Buttons
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  // Cards
  card: {
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
```

## 📞 Support

- **Documentation**: See README.md, ARCHITECTURE.md, DEVELOPMENT_GUIDE.md
- **Issues**: Check console logs and error messages
- **Expo Docs**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/

---

Keep this file handy for quick reference! 🚀

