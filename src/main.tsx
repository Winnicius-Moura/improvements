import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { store } from './redux/store.ts'
import { router } from './routes.tsx'
import { LoadingBarLinearComponent } from './components/loadingBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="loading-bar-container">
        <LoadingBarLinearComponent />
      </div>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
