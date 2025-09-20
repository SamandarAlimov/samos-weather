import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { ForecastCard } from "@/components/ForecastCard";
import { useToast } from "@/hooks/use-toast";
import { Cloud, Globe, Bell } from "lucide-react";
import heroImage from "@/assets/weather-hero.jpg";

const Index = () => {
  const { toast } = useToast();
  const [currentWeather, setCurrentWeather] = useState({
    location: "Tashkent, Uzbekistan",
    temperature: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 26
  });

  const [forecast] = useState([
    { day: "Today", condition: "Partly Cloudy", high: 24, low: 15, precipitation: 20 },
    { day: "Tomorrow", condition: "Sunny", high: 27, low: 16, precipitation: 5 },
    { day: "Wednesday", condition: "Rainy", high: 20, low: 12, precipitation: 80 },
    { day: "Thursday", condition: "Sunny", high: 25, low: 14, precipitation: 0 },
    { day: "Friday", condition: "Cloudy", high: 22, low: 13, precipitation: 30 },
    { day: "Saturday", condition: "Sunny", high: 26, low: 15, precipitation: 10 },
    { day: "Sunday", condition: "Partly Cloudy", high: 23, low: 14, precipitation: 15 },
  ]);

  const handleSearch = (location: string) => {
    toast({
      title: "Searching weather...",
      description: `Looking up weather for ${location}`,
    });
    
    // Simulate API call
    setTimeout(() => {
      setCurrentWeather({
        ...currentWeather,
        location: location,
        temperature: Math.floor(Math.random() * 30) + 10,
      });
      toast({
        title: "Weather updated",
        description: `Showing weather for ${location}`,
      });
    }, 1000);
  };

  const handleCurrentLocation = () => {
    toast({
      title: "Getting your location...",
      description: "Fetching weather for your current location",
    });
    
    // Simulate getting current location
    setTimeout(() => {
      setCurrentWeather({
        ...currentWeather,
        location: "Your Location",
        temperature: 22,
      });
      toast({
        title: "Location found",
        description: "Showing weather for your current location",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Background */}
      <div 
        className="relative min-h-screen weather-gradient-primary"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 pb-12">
          {/* Search Section */}
          <div className="pt-8 pb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-light text-white weather-text-shadow mb-4">
                Weather Forecast
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Get accurate weather information and forecasts for any location worldwide
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                onSearch={handleSearch}
                onCurrentLocation={handleCurrentLocation}
              />
            </div>
          </div>

          {/* Current Weather */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <WeatherCard
                location={currentWeather.location}
                temperature={currentWeather.temperature}
                condition={currentWeather.condition}
                humidity={currentWeather.humidity}
                windSpeed={currentWeather.windSpeed}
                visibility={currentWeather.visibility}
                feelsLike={currentWeather.feelsLike}
              />
            </div>
            
            {/* Weekly Forecast */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-white weather-text-shadow mb-6">
                7-Day Forecast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {forecast.map((day, index) => (
                  <ForecastCard
                    key={index}
                    day={day.day}
                    condition={day.condition}
                    high={day.high}
                    low={day.low}
                    precipitation={day.precipitation}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="weather-glass p-6 text-center text-white">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Accurate Forecasts</h4>
              <p className="text-sm opacity-90">
                Get precise weather predictions with our advanced meteorological data
              </p>
            </div>
            
            <div className="weather-glass p-6 text-center text-white">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Coverage</h4>
              <p className="text-sm opacity-90">
                Weather information for any location worldwide, updated in real-time
              </p>
            </div>
            
            <div className="weather-glass p-6 text-center text-white">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Bell className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Smart Alerts</h4>
              <p className="text-sm opacity-90">
                Receive timely notifications about severe weather conditions
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
