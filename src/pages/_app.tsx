import React, { useEffect, useMemo } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import GlobalStyle from '../themes/global'
import { theme } from '../themes'
import Head from 'next/head'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { ApplicationState, allReducers, rootSaga } from 'stores'
import createSagaMiddleware from 'redux-saga'
import { Header } from 'components/Header'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const { store } = useMemo<{ store: Store<ApplicationState> }>(() => {
    const sagaMiddleware = createSagaMiddleware()
    const storage: Store<ApplicationState> = createStore(
      allReducers,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)

    return {
      store: storage,
    }
  }, [composeEnhancers])

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
