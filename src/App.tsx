import { BrowserSolidLdoProvider } from "@ldo/solid-react";
import Main from "./Main";

import "./styles.css";

export default function App() {
  return (
    <BrowserSolidLdoProvider>
      <Main />
    </BrowserSolidLdoProvider>
  );
}
