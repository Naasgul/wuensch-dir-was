export async function getLists() {
  const response = await fetch('http://localhost:5000/lists');
  const lists = response.json();
  return lists;
}

export async function getListbyId(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`);
  const list = response.json();
  return list;
}

export async function deleteListbyId(id) {
  await fetch(`http://localhost:5000/lists/${id}`, { method: 'DELETE' });
}
