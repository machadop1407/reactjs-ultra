import { useState, useTransition } from "react"; // 6.9k (gzipped: 2.7k)

export const TransitionExample = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleFilter}
        placeholder="Search items..."
      />

      {isPending ? (
        <div> Loading Search... </div>
      ) : (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
