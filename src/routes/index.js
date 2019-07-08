import LoginPage from '../page/Login/LoginPage'
import ForgotPassword from '../page/ForgotPassword/ForgotPasswordPage'
import DashboardPage from '../page/Dashboard/DashboardPage'
import ManageNewsPage from '../page/News/ManageNewsPage'
import AddNewsPage from '../page/News/AddNewsPage'
import EmailListPage from '../page/Email/EmailListPage'
import AddEmailPage from '../page/Email/AddEmailPage'

import index from '../page/404'

const indexRoutes = [
  { path: '/', name: 'login', component: LoginPage },
  { path: '/forgot-password', name: 'forgot-password', component: ForgotPassword },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage },
  { path: '/manage-news', name: 'manage-news', component: ManageNewsPage },
  { path: '/add-news', name: 'add-news', component: AddNewsPage },
  { path: '/email-list', name: 'email-list', component: EmailListPage },
  { path: '/add-email', name: 'add-email', component: AddEmailPage },
  { path: '/404', name: '404', component: index }
]

export default indexRoutes