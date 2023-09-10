
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Video from './pages/Video';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/video/:id", 
        element: <Video />
    },
    {
        path:"/",
        element: <Home />
    }
])

function App() {
    return (
       <RouterProvider router={router} />
    
    );
}

export default App;
