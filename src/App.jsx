import Sidebar from "./components/Sidebar";
import Main from "./components/MainContent";

function App() {
  return (
    <main className="flex w-full jakarta overflow-x-hidden">
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
