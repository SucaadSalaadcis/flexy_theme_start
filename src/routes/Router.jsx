import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.jsx"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1.jsx"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable.jsx"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete.jsx")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton.jsx"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox.jsx"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio.jsx"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider.jsx"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch.jsx"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.jsx"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
    ],
  },
];

export default ThemeRoutes;
