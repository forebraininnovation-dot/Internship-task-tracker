import { useState } from "react";
import { certificateData } from "../data/certificatesData";

function Certificates() {
  const [inputId, setInputId] = useState("");
  const [result, setResult] = useState(null);

  const handleVerify = () => {
    const cert = certificateData.find(c => c.id === inputId.trim());
    setResult(cert || { issued: false });
  };

  return (
    <div className="page">
      <h1>Certificate Verification</h1>

      <div className="cert-box">
        <input
          value={inputId}
          onChange={e => setInputId(e.target.value)}
          placeholder="Enter Certificate ID"
        />
        <button onClick={handleVerify}>Verify</button>
      </div>

      {result && (
        <div className={`cert-result ${result.issued ? "valid" : "invalid"}`}>
          {result.issued ? (
            <>
              <h3>Valid Certificate ✅</h3>
              <p><b>Name:</b> {result.name}</p>
              <p><b>Course:</b> {result.course}</p>
            </>
          ) : (
            <h3>Invalid Certificate ❌</h3>
          )}
        </div>
      )}

      <hr />

      <h2>Issued Certificates (Admin View)</h2>
      <ul>
        {certificateData.map(c => (
          <li key={c.id}>
            {c.id} – {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
