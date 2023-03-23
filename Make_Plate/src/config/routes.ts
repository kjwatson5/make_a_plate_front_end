import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: Boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: 'Home Screen',
        protected: false
    },
    {
        path: '/dashboard',
        component: DashBoard,
        name: 'Dashboard',
        protected: false
    }
];

export default routes
