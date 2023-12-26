import { createBrowserRouter } from "react-router-dom";
import Container from "src/components/layout/Container";
import Home from "src/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <Home />,
                label: 'main',
            }
        ]
    }
])

export default router;