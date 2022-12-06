import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id.toString() === userId);
  return <span>{author ? author.name : 'Unkown Author'}</span>;
};

export default PostAuthor;
