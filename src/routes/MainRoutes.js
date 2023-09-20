import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import CarDetails from 'views/Authority/Request/CarDetails';
import Transfer from 'views/Authority/Transfer/Transfer';
import TransferCarDetails from 'views/Authority/Transfer/transferCarDetails';




// dashboard routing


// utilities routing


// sample page routing
const Dashboard = Loadable(lazy(() => import('views/Authority/Dashboard/Dashboard')));
const Request =Loadable(lazy(()=>import('views/Authority/Request/Request')))


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: < Dashboard/>
    },
    {
      path:'/request',
      element:<Request/>
    },{
      path:'/cardetail',
      element:<CarDetails/>
    },{
      path:'/transfer',
      element:<Transfer/>
      
    },{
      path:'/transferCarDetail',
      element:<TransferCarDetails/>
    }
  ]
};

export default MainRoutes;
