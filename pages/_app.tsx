import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import store from '@/store';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});




 const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    </MantineProvider>
  )
}


export default appWithTranslation(App)
