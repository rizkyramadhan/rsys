import * as React from 'react';
import { light as theme, mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { HomeScreen } from './src/HomeScreen';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;
