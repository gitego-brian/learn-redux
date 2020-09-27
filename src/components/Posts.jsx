/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Loader from './Loader';
import ToastError from './ToastError';

const Posts = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((store) => store.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {error && <ToastError message={error} />}
      {items.map((item) => (
        <pre key={item.id}>{item.title}</pre>
      ))}
    </div>
  );
};

export default Posts;
