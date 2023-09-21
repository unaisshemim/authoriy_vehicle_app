// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "dash",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    {
      id: "register",
      title: "Register Request",
      type: "item",
      url: "/request",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    {
      id: "transfer",
      title: "Transfer Request",
      type: "item",
      url: "/transfer",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
