import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/PostsPage';
import PostsPage from './pages/PostsPage'
import './index.css';


// Router has 2 different ways of navigating , Navigate or useNavigate
function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path = '/' element = {<DashboardPage/>}/>
     <Route path = '/posts' element = {<PostsPage/>}/>
     <Route path ='*' element ={<Navigate to = '/'/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
