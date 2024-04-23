import Home from './componentes/pages/Home';
import './styles/main.css';
import './styles/normalize.css';
import './styles/fontawesome.min.css';
import Users from './componentes/pages/Users';
import UserBlog from './componentes/pages/UserBlog';
import PostForm from './componentes/pages/PostForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserBlog />} />
        <Route path='/users/:userId/post' element={<PostForm />} />
        <Route path='*' element={<h1>Not found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

/* melhorar a rota de notfound,pesquisar no youtube se tem como
 colocar 404 */
