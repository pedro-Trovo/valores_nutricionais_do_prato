import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './features/register/presentation/screens/RegisterScreen';
import LoginScreen from './features/login/presentation/screens/LoginScreen';
import FoodScreen from './features/food/presentation/screens/FoodScreen';
import ProfileScreen from './features/profile/presentation/ProfileScreen';
import colors from '../core/design-system/tokens/colors';
import { UserProvider } from './contexts/UserContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
  });

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Food" component={FoodScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
