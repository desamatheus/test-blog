import React from 'react';
import PostListItem from './PostListItem';

export default function PostListWrapper(props) {
  return (
    <div>
      <div className='user-blog__posts'>
        {props.posts.map((post) => (
          <PostListItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
