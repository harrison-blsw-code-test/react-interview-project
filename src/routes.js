import SearchScreen from './screens/SearchScreen';
import UserScreen from './screens/UserScreen';

export default [
  {
    path: '/',
    component: SearchScreen,
  },
  {
    path: '/user/:id',
    component: UserScreen,
  },
];
