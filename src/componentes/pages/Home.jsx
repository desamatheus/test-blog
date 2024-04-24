import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import AppLoading from '../organisms/AppLoading';

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6627e6f6b625bf088c0a361c.mockapi.io/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className='home center'>
      <div className='home__logo'>
        <img src={logo} className='responsive' alt='' />
      </div>
      <select
        onChange={(event) => setCurrentUser(event.target.value)}
        className='home__select-users'>
        <option value=''>Selecione um usuario</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUser && (
        <button
          onClick={() => navigate(`/users/${currentUser}`)}
          className='button-primary'>
          Entrar
        </button>
      )}
      <button onClick={() => navigate(`/bingo`)} className='button-primary'>
        {' '}
        Bingo
      </button>
    </div>
  );
}

/* useEffect é onde as coisas vao ser feitas depois que 
toda pagina for carregada */
/*deixar '!!" antes de um estado torna ele um booleano e se tiver codigo dentro é true nao ter é false*/
