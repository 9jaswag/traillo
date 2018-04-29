import UserStore from './UserStore';
import DashboardStore from './DashboardStore';

const store = {
  UserStore: new UserStore,
  Dashboard: new DashboardStore
}
export default store;

