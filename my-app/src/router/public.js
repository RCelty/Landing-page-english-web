import PublicLayout from "@/layout/public";
import Home from "@/view/home";

export default [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        name: "home",
        path: "",
        component: Home
      }
    ]
  }
];
