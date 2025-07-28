import "./App.css";
import RouterForm from "./routes";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterForm />
      </AuthProvider>
    </>
  );
}

export default App;
