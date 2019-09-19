/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import TableList from "./views/Tables.jsx";
import UserPage from "./views/User.jsx";
import Logout from "./components/Logout.jsx";
import FormAudience from "./components/FormAudience";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-globe-americas",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Details",
    icon: "fa fa-user-astronaut",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/audiences",
    name: "Audiences",
    icon: "fa fa-rocket",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Logout",
    icon: "fa fa-rocket",
    component: Logout,
    layout: "/admin"
  }
];

export default routes;
