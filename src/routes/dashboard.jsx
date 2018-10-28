import Dashboard from "views/Dashboard/Dashboard.jsx";
import Detalhe from "views/Detalhe/Detalhe.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Cartao from "views/card_rotas.js"
import Login from "views/login/login.js";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Lista de Vagas",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/detalhe",
    name: "Lista de Vagas",
    icon: "nc-icon nc-bank",
    component: Detalhe
  },
  {
    path: "/card_1",
    name: "Vaga1",
    icon: "nc-icon nc-bank",
    component: Cartao
  },
  {
    path: "/user-page",
    name: "Meu Cadastro",
    icon: "nc-icon nc-single-02",
    component: UserPage
  },
  {
    path: "/tables",
    name: "Vagas",
    
    icon: "nc-icon nc-tile-56",
    component: TableList
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Instituições",
    icon: "nc-icon nc-spaceship"
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bank",
    component: Login
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
