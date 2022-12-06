import React from 'react';
import { useState } from 'react';

import { postAdded } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserID] = useState('');

  const dispatch = useDispatch();
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserID(e.target.value);
  const users = useSelector(selectAllUsers);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const onSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" value={title} onChange={onTitleChanged} />
        <label htmlFor="postAuthor">Post Author</label>
        <select id="postAuthor" onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content</label>
        <textarea type="text" value={content} onChange={onContentChange} />
      </form>
      <button disabled={!canSave} onClick={onSavePost}>
        Save
      </button>
    </section>
  );
};

export default AddPost;
