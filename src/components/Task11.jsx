import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const UserProfileWithNested = () => {
  const { id } = useParams();

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4">
      <h2 className="mb-3 h2 text-dark text-center">User Profile</h2>
      <p className="text-body fs-5 text-center mb-4">
        Viewing profile for User ID: <span className="fw-bold text-primary">{id}</span>
      </p>
      <nav className="d-flex justify-content-center gap-3 mb-4">
        <Link
          to={`/user/${id}`}
          className="btn btn-primary shadow-sm"
        >
          Profile Overview
        </Link>
        <Link
          to={`/user/${id}/posts`}
          className="btn btn-info shadow-sm"
        >
          View Posts
        </Link>
      </nav>
      <div className="border-top pt-4 mt-4">
        <Outlet />
      </div>
    </div>
  );
};

const UserPosts = () => {
  const { id } = useParams();

  const posts = [
    { id: 1, userId: '999', title: 'My First Post', content: 'This is a test post by user 999.' },
    { id: 2, userId: '999', title: 'Another Post', content: 'More content from user 999.' },
    { id: 3, userId: '123', title: 'Post by user 123', content: 'Content specifically for user 123.' },
    { id: 4, userId: '456', title: 'Post by Alice', content: 'A post from Alice.' },
  ];

  const userPosts = posts.filter(post => post.userId === id);

  return (
    <div className="p-3 bg-light rounded shadow-inner">
      <h3 className="h4 text-dark mb-3 text-center">Posts by User {id}</h3>
      {userPosts.length > 0 ? (
        <ul className="list-group">
          {userPosts.map(post => (
            <li key={post.id} className="list-group-item my-2 border rounded shadow-sm">
              <h4 className="h5 text-dark mb-1">{post.title}</h4>
              <p className="text-muted small mb-1">User ID: {post.userId}</p>
              <p className="text-body">{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted text-center">No posts found for User {id}.</p>
      )}
      <p className="text-muted mt-3 small text-center">
        (Route defined as `/user/:id/posts` as a nested route under `/user/:id`)
      </p>
    </div>
  );
};

export { UserProfileWithNested, UserPosts };