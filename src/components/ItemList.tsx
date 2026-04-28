import { deleteItem } from '../api';

interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
  date: Date;
}

export default function ItemList({ items, onRefresh }: { items: Item[]; onRefresh: () => void }) {
const handleDelete = async (id: string) => {
await deleteItem(id);
onRefresh();
};
return (
<div>
<h2>Items</h2>
{items.map((item: Item) => (
<div key={item._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
<h3>{item.name}</h3>
<p>{item.description}</p>
<p>{new Date (item.date).toLocaleDateString()}</p>
<p><strong>Price: ${item.price}</strong></p>

<button onClick={() => handleDelete(item._id)}>Delete</button>
</div>
))}
</div>
);
}