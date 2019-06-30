import LoginPage from '../page/Login/LoginPage'
import DashboardPage from '../page/Dashboard/DashboardPage'
import ManageNewsPage from '../page/News/ManageNewsPage'
import AddNewsPage from '../page/News/AddNewsPage'
import EmailListPage from '../page/Email/EmailListPage'
import AddEmailPage from '../page/Email/AddEmailPage'

const indexRoutes = [
  { path: '/', name: 'login', component: LoginPage },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage },
  { path: '/manage-news', name: 'manage-news', component: ManageNewsPage },
  { path: '/add-news', name: 'add-news', component: AddNewsPage },
  { path: '/email-list', name: 'email-list', component: EmailListPage },
  { path: '/add-email', name: 'add-email', component: AddEmailPage }
]

export default indexRoutes