import 'i18n';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'reactRedux';
import NavContainer from 'routes/NavContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AlertContextProvider, BottomSheetContextProvider } from 'context';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <AlertContextProvider>
            <BottomSheetContextProvider>
              <NavContainer />
            </BottomSheetContextProvider>
          </AlertContextProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  </GestureHandlerRootView>
);

export default App;
