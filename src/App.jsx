import Sidebar from "./components/Sidebar";
import Main from "./components/MainContent";
import SalesTrend from "./components/SalesTrend";
import LastOrders from "./components/LastOrders";
import TotalsAndAverage from "./components/TotalsAndAverage";
import TopPlatforms from "./components/TopPlatforms";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className=" md:hidden mb-[30px] w-full h-full jakarta overflow-x-hidden ">
        <Navbar />
        <div className="pt-[20px] flex flex-col gap-[38px] px-[10px] w-full h-full">
          <SalesTrend />
          <LastOrders />
          <TotalsAndAverage />
          <TopPlatforms />
        </div>
      </main>
      <main className="hidden md:flex w-full h-full jakarta overflow-x-hidden ">
        <Sidebar />
        <Main />
      </main>
    </>
  );
}

export default App;
