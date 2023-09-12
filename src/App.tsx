import 'i18n';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'reactRedux';
import NavContainer from 'routes/NavContainer';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SafeAreaProvider>
        <NavContainer />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
