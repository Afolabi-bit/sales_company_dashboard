import Sidebar from "./components/Sidebar";
import Main from "./components/MainContent";

function App() {
  return (
    <main className="flex w-full h-full border border-red-500 jakarta overflow-x-hidden">
      <Sidebar />
      <Main />
    </main>
  );
}

export default App;
