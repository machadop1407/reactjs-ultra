import { useState, useDeferredValue } from "react"; // 6.9k (gzipped: 2.7k)

export const DeferredValueExample = () => {
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  const items = Array.from({ length: 50000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );
  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleFilter}
        placeholder="Search items..."
      />

      {query !== deferredQuery ? (
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
