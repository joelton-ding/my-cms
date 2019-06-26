import LoginPage from '../page/Login/LoginPage'
import ManageNewsPage from '../page/News/ManageNewsPage'
import AddNewsPage from '../page/News/AddNewsPage'
import EmailListPage from '../page/Email/EmailListPage'
import AddEmailPage from '../page/Email/AddEmailPage'

const indexRoutes = [
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/manage-news', name: 'manage-news', component: ManageNewsPage },
  { path: '/add-news', name: 'add-news', component: AddNewsPage },
  { path: '/email-list', name: 'email-list', component: EmailListPage },
  { path: '/add-email', name: 'add-email', component: AddEmailPage }
]

export default indexRoutes