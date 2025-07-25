import React, { useState, useEffect } from 'react';
import { apps_backend } from 'declarations/apps_backend';

function App() {
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };

  const loadFiles = async () => {
    const backendFiles = await apps_backend.getFiles();
    setFiles(backendFiles);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!file) return;

      const arrayBuffer = await file.arrayBuffer();
      const fileBlob = [...new Uint8Array(arrayBuffer)]; // convert Uint8Array to number[]

      const response = await apps_backend.uploadFile(
        file.name,
        file.type,
        file.size,
        fileBlob
      );

      setUploadMsg(response);
      setFile(null);
      e.target.reset();
      await loadFiles();
    } catch (err) {
      console.error("Upload error:", err);
      setUploadMsg("Upload failed.");
    }
  };

  const formatSize = (bytes) => {
    const num = Number(bytes);
    if (num < 1024) return `${num} B`;
    else if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`;
    else if (num < 1024 * 1024 * 1024) return `${(num / (1024 * 1024)).toFixed(1)} MB`;
    else return `${(num / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  };

  const formatDate = (nano) => {
    const millis = Number(nano) / 1_000_000;
    return new Date(millis).toLocaleString();
  };

  const handleDownload = (file) => {
    const uint8Array = new Uint8Array(file.content);
    const blob = new Blob([uint8Array], { type: file.fileType || "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Upload Test | File to ICP</h1>

      <form onSubmit={handleUpload} className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <input type="file" onChange={handleFileChange} />
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700" type="submit">
          Upload
        </button>
      </form>

      <p className="text-green-700">{uploadMsg}</p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Nama</th>
              <th className="border px-3 py-2">Tipe</th>
              <th className="border px-3 py-2">Ukuran</th>
              <th className="border px-3 py-2">Waktu Upload</th>
              <th className="border px-3 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {files.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-3">Belum ada file yang diunggah.</td>
              </tr>
            ) : (
              files.map((f, i) => (
                <tr key={i}>
                  <td className="border px-3 py-1">{f.name ?? "-"}</td>
                  <td className="border px-3 py-1">{f.fileType ?? "-"}</td>
                  <td className="border px-3 py-1">{formatSize(f.size ?? 0)}</td>
                  <td className="border px-3 py-1">{formatDate(f.uploadedAt ?? 0)}</td>
                  <td className="border px-3 py-1">
                    {f.fileType?.startsWith("image/") ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={URL.createObjectURL(new Blob([new Uint8Array(f.content)], { type: f.fileType }))}
                          alt={f.name}
                          className="w-20 h-auto border rounded mb-1"
                        />
                        <button
                          onClick={() => handleDownload(f)}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-xs"
                        >
                          Download
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDownload(f)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Download
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
