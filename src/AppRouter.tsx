import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '@/layouts/Layout/Layout'
import Dashboard from '@/pages/Dashboard/Dashboard'
import SignIn from '@/pages/Sign/Sign-in'
import { ROUTE_PATHS } from '@/routes/route'

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={ROUTE_PATHS.SIGN_IN} replace />} />
      <Route
        path={ROUTE_PATHS.SIGN_IN}
        element={<SignIn />}
      />
      {/* 레이아웃 라우트 */}
      <Route element={<Layout />}>
        {/* 예: /home -> / 리다이렉트 */}
        {/* <Route index element={<Navigate to={ROUTE_PATHS.DASHBOARD} replace />} /> */}
        <Route
          path={ROUTE_PATHS.DASHBOARD}
          element={<Dashboard />}
        />
        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default AppRouter