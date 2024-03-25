import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Root';
import Home from './componants/Home';
import Statistics from './componants/Statistics';
import AppliedJobs from './componants/AppliedJobs';
import Blog from './componants/Blog';
import ErrorPage from './componants/ErrorPage';
import JobDetails from './componants/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json') 
      },
      {
        path: "/blog",
        element: <Blog></Blog> 
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
