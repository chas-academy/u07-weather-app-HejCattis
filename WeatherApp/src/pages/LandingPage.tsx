import { useEffect } from "react";
import Api from "../components/Api";
import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";
import WeatherIcon from "../components/WeatherIcon";
import { formatDate } from "../utils/dateUtils";


function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  const { getWeatherData } = Api();

  const today = new Date();
  const formattedDate = formatDate(today);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
        <Header title={weatherData?.name} subtitle={weatherData?.sys.country} text={formattedDate} icon></Header>
        { weatherData && <WeatherIcon weatherCondition={weatherData.weather[0].main} degree={weatherData.main.temp} ></WeatherIcon>}
    </div>
  );
}

export default LandingPage;
