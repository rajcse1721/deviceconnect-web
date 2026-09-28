import { useState } from "react";
import "./App.css";

const API_BASE_URL = "http://localhost:8080/api";

function App() {
  const [protocol, setProtocol] = useState("TCP");
  const [host, setHost] = useState("127.0.0.1");
  const [port, setPort] = useState("9021");
  const [status, setStatus] = useState("Not Connected");

  async function connect() {
    setStatus("Sending connection request...");

    try {
      const response = await fetch(`${API_BASE_URL}/connections`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          protocol: protocol,
          host: host,
          port: Number(port),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(`Error: ${JSON.stringify(data)}`);
        return;
      }

      setStatus(data.message);
    } catch (error) {
      setStatus(`Backend connection error :${error.message}`);
    }
  }

  return (
    <main className="page">
      <h1>DeviceConnect Simulator</h1>

      <section className="page">
        <h2>Connection Configuration</h2>

        <label>
          Protocol
          <select
            value={protocol}
            onChange={(event) => setProtocol(event.target.value)}
          >
            <option value="TCP">TCP</option>
            <option value="UDP">UDP</option>
          </select>
        </label>

        <label>
          Host /IP Address{" "}
          <input
            value={host}
            onChange={(event) => setHost(event.target.value)}
            placeholder="127.0.0.1"
          />
        </label>

        <label>
          {" "}
          Port{" "}
          <input
            type="number"
            value={port}
            onChange={(event) => setPort(event.target.value)}
            placeholder="9021"
          />{" "}
        </label>

        <button onClick={connect}>Connect</button>
        <p className="status">{status}</p>
      </section>
    </main>
  );
}

export default App;
