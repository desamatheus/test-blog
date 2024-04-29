import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Default from '../templates/Default';
import AppLoading from '../organisms/AppLoading';
import UserBio from '../molecules/UserBio';
import PostListWrapper from '../molecules/PostListWrapper';

export default function UserBlog() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(
          `https://6627e6f6b625bf088c0a361c.mockapi.io/users/${userId}`
        ).then((response) => response.json()),
        fetch(
          `https://6627e6f6b625bf088c0a361c.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json()),
      ]);
      setUser(userResponse);
      setPosts(postsResponse);
      setIsLoading(false);
    };
    getApiData();
  }, [userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className='user-blog'>
        <UserBio user={user} />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}

/* da uma olhada em func async e em promisse.all */
/* linha 29 a array vem vazia,coloca dentro oque for usar dentro do useEffect*/
