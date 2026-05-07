import { useEffect, useState } from "react";

const PendingApproval = () => {
  const [data, setData] = useState([]);
  const [rejectId, setRejectId] = useState(null);
  const [reason, setReason] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, title: "Math PDF", subject: "Math", status: "Pending" },
        { id: 2, title: "Science Image", subject: "Science", status: "Pending" },
      ]);
    }, 500);
  }, []);

  const approve = (id) => {
    alert("Approved " + id);
  };

  const reject = () => {
    if (!reason) {
      alert("Reason required");
      return;
    }
    alert(`Rejected ${rejectId} with reason: ${reason}`);
    setRejectId(null);
    setReason("");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Pending Approval</h1>

      {data.map((item) => (
        <div key={item.id} className="bg-white p-4 mb-3 shadow rounded">
          <h2>{item.title}</h2>
          <p>{item.subject}</p>

          <div className="flex gap-2 mt-2">
            <button onClick={() => approve(item.id)} className="bg-green-500 text-white px-3 py-1">
              Approve
            </button>

            <button onClick={() => setRejectId(item.id)} className="bg-red-500 text-white px-3 py-1">
              Reject
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {rejectId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <h2>Reject Reason</h2>

            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border p-2 w-full"
            />

            <button onClick={reject} className="bg-red-500 text-white px-4 py-2 mt-2">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingApproval;