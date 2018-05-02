import UserStore from './UserStore';
import DashboardStore from './DashboardStore';
import BoardStore from './BoardStore';

const store = {
  UserStore: new UserStore,
  Dashboard: new DashboardStore,
  Board: new BoardStore
}
export default store;

