import { useResource, useSolidAuth, useSubject } from "@ldo/solid-react";
import AuthenticatedApp from "./AuthenticatedApp";

export default function Main() {
  const { session, login, logout } = useSolidAuth();

  return (
    <div>
      {session.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button
          onClick={() => {
            const issuer = prompt(
              "Enter your Solid Issuer",
              "http://localhost:3001/",
            );
            if (!issuer) return;
            void login(issuer);
          }}
        >
          Login
        </button>
      )}

      {session.isLoggedIn && (
        <div style={{ marginTop: "2rem" }}>
          <AuthenticatedApp />
        </div>
      )}
    </div>
  );
}
