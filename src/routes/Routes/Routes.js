import { createBrowserRouter } from "react-router-dom";
import AccessCourse from "../../components/AccessCourse/AccessCourse";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import Login from "../../components/Login/Login";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import Register from "../../components/Register/Register";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import Terms from "../../components/Terms/Terms";
import UserDetails from "../../components/UserDetails/UserDetails";
import Main from "../../layout/Main";
import PriveteRoute from "../PriveteRoute/PriveteRoute";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://code-skill-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                loader: () => fetch('https://code-skill-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://code-skill-server.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>

            },
            {
                path: '/course/access/:id',
                loader: ({ params }) => fetch(`https://code-skill-server.vercel.app/course/access/${params.id}`),
                element: <PriveteRoute><AccessCourse></AccessCourse></PriveteRoute>
            },

            {
                path: '/user/details',
                element: <UserDetails></UserDetails>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/reset/password',
        element: <ResetPassword></ResetPassword>
    },
])