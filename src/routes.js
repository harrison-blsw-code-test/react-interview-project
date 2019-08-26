import SearchScreen from './screens/SearchScreen';
import UserScreen from './screens/UserScreen';
import RepositoriesScreen from './screens/RepositoriesScreen';
import OrganisationsScreen from './screens/OrganisationsScreen';

export default [
  {
    path: '/',
    component: SearchScreen,
  },
  {
    path: '/user/:username',
    component: UserScreen,
  },
  {
    path: '/user/:username/repositories',
    component: RepositoriesScreen,
  },
  {
    path: '/user/:username/organisations',
    component: OrganisationsScreen,
  },
];
