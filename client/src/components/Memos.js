import { useState, useEffect } from "react"

export default function Memos({ state }) {
  const [memos, setmemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getview();
      setmemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div className="bg-yellow-300 flex flex-col gap-2 border-white ">
      {memos.map((item, index) => {
        return (
          <table key={index} style={{ borderCollapse: "collapse", borderSpacing: 0 }}>
            <thead>
              <tr  style={{ borderBottom: "1px solid black" }}>
                <th>Name</th>
                <th>Message</th>
                <th>Timestamp</th>
                <th>From</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td style={{ padding: "5px" }}>{item.name}</td>
                <td style={{ padding: "5px" }}>{item.message}</td>
                <td style={{ padding: "5px" }}>{String(item.timestamp)}</td>
                <td style={{ padding: "5px" }}>{item.from}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}