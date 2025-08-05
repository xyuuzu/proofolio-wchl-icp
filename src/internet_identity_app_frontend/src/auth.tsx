import { AuthClient } from "@dfinity/auth-client";

export async function login() {
  const authClient = await AuthClient.create();

  await authClient.login({
    identityProvider: "http://uxrrr-q7777-77774-qaaaq-cai.localhost:4943/",
    onSuccess: async () => {
      const identity = authClient.getIdentity();
      const principal = identity.getPrincipal().toString();
      console.log("Logged in as:", principal);
    },
  });
}
