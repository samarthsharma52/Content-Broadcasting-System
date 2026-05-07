import { useEffect, useState } from "react";

const AllContent = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData([
      { id: 1, title: "Math", status: "Approved" },
      { id: 2, title: "Science", status: "Pending" },
      { id: 3, title: "English", status: "Rejected" },
    ]);
  }, []);

  const filtered = data.filter((item) => {
    return (
      (!filter || item.status === filter) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">All Content</h1>

      <div className="flex gap-3 mb-4">
        <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
        />
      </div>

      {filtered.map((item) => (
        <div key={item.id} className="bg-white p-3 mb-2 shadow">
          {item.title} - {item.status}
        </div>
      ))}
    </div>
  );
};

export default AllContent;