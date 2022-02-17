import { render } from 'react-dom'
import { Suspense } from 'react'
import { RouterProvider } from 'atomic-router-react'

import '@/shared/ui'

import { RootRoutes, router } from '@/app/routing'

const App = () => {
  return (
    <RouterProvider router={router}>
      <Suspense fallback="Loading...">
        <RootRoutes />
      </Suspense>
    </RouterProvider>
  )
}

render(<App />, document.getElementById('app'))
