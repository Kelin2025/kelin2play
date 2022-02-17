import { Route } from 'atomic-router-react'
import { history } from '@/shared/lib/routing-history'
import { createHistoryRouter } from 'atomic-router'

import { HomePage } from '@/pages/home'

export const routes = [
  /* @/pages */
  { route: [HomePage.route], path: '/' },
]

export const RootRoutes = () => {
  return (
    <>
      <Route route={HomePage.route} view={HomePage.Page} />
    </>
  )
}

export const router = createHistoryRouter({ routes })

router.setHistory(history)
