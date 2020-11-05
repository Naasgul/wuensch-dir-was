import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link, useHistory, useParams } from 'react-router-dom';
import AddButton from '../components/AddButton';

import { deleteListbyId, getListbyId } from '../api/api';
import WishlistItem from '../components/WishlistItem';

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
`;

export default function Details() {
  const { listId } = useParams();
  const history = useHistory();
  const [list, setList] = useState([]);
  useEffect(async () => {
    const newList = await getListbyId(listId);
    setList(newList);
  }, []);

  const handleDelete = async () => {
    await deleteListbyId(listId);
    history.push('/');
  };

  return (
    <HomeSection>
      <h2>{list?.title}</h2>
      {list.wishes?.map((wish) => (
        <WishlistItem key={wish} title={wish} />
      ))}
      <button type="button" onClick={handleDelete}>
        {' '}
        Delete{' '}
      </button>
    </HomeSection>
  );
}
