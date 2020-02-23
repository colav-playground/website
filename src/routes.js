/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

//Aqui el import de las vistas de colciencias
import  H5  from "views/Colcienicias/H5.js";
import AlcanceGeografico  from "views/Colcienicias/AlcanceGeografico.js";
import Redes from "views/Colcienicias/Redes.js";

const dashboardRoutes = [
  {
    path: "/colciencias/h5",
    name: "H5",
    icon: Dashboard,
    component: H5,
    layout: "/admin"
  },
  {
    path: "/alcancegeografico",
    name: "Alcance Geografico",
    icon: Dashboard,
    component: AlcanceGeografico,
    layout: "/admin"
  },
  {
    path: "/redes",
    name: "Redes",
    icon: "content_paste",
    component: Redes,
    layout: "/admin"
  },
  {
    path: "/documentation",
    name: "Documentation",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/cnetworks",
    name: "Complex Networks",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  }/*,
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
