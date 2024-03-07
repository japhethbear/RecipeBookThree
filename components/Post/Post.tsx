import React from 'react';
import DeletePostButton from './DeletePostButton';

interface PostProps {
  id: number;
  title: string;
  content: string | null;
  authorId: number;
  authorName: string;
}

const Post: React.FC<PostProps> = ({ id, title, content, authorId, authorName }) => {
  return (
    <div style={{ border: '1px solid black', padding: '15px', margin: '10px 0px', display: 'flex', flexDirection: 'column' }}>
      <h3>Author: {authorName}</h3>
      <h4>{title}</h4>
      <p style={{ flex: '1 0 auto' }}>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
};

export default Post;
