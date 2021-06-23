import Link from 'next/link';
import React from 'react';
import { StyledList } from './List.styles';
import Date from '../date';

interface ListProps {
  posts: { id: string; date: string; title: string }[];
}

const List: React.FC<ListProps> = ({ posts }) => {
  return (
    <StyledList>
      {posts.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </StyledList>
  );
};

export default List;
