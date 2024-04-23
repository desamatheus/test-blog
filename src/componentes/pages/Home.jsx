import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://6627e6f6b625bf088c0a361c.mockapi.io/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div className='home center'>
      <div className='home__logo'>
        <img src={logo} className='responsive' alt='' />
      </div>
      <select className='home__select-users'>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      <button className='button-primary'>Entrar</button>
    </div>
  );
}

/* useEffect é onde as coisas vao ser feitas depois que 
toda pagina for carregada */
