import {useState}  from "react";
import { AuthClient } from "@dfinity/auth-client";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [identity, setIdentity] = useState<any>(null);

  const login = async () => {
    const authClient = await AuthClient.create();

    await authClient.login({
      identityProvider: `http://uxrrr-q7777-77774-qaaaq-cai.localhost:4943/`, // ganti dengan canister id `internet_identity` milikmu
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        setIdentity(identity);
        setIsAuthenticated(true);
      },
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Login Web3 ICP</h1>
      {!isAuthenticated ? (
        <button
          onClick={login}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login dengan Internet Identity
        </button>
      ) : (
        <div>
          <p className="mb-2">Berhasil login sebagai:</p>
          <code className="bg-gray-100 p-2 block">
            {identity?.getPrincipal().toText()}
          </code>
        </div>
      )}
    </div>
  );
}
