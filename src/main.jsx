import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApolloProvider from './apolloProvider.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './app/errorBoundary/index.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <ApolloProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
