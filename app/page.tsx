import DailyForecast from "./components/DailyForecast/DailyForecast";
import Navbar from "./components/Navbar";
import AirPollution from "./components/Pollution/AirPollution";
import Sunset from "./components/sunset/sunset";
import Temperature from "./components/Temperature/Temperature";
import Wind from "./components/Wind/wind";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar/>
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature/>
        </div>
        <div className="felx flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:cools-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution/>
            <Sunset/>
            <Wind/>
            <DailyForecast/>
          </div>
        </div>
      </div>
    </main>
  );
}
