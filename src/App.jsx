import "./App.css";
import ContactList from "./confirm";
import { ConfirmProvider } from "material-ui-confirm";

function App() {
  return (
    <>
      <ConfirmProvider>
        <ContactList />
      </ConfirmProvider>
    </>
  );
}

export default App;
