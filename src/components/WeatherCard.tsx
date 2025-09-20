import { Card } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Thermometer, Wind, Droplets, Eye } from "lucide-react";

interface WeatherCardProps {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
}

const getWeatherIcon = (condition: string) => {
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
    return <Sun className="w-16 h-16 text-yellow-400" />;
  } else if (lowerCondition.includes('rain')) {
    return <CloudRain className="w-16 h-16 text-blue-400" />;
  } else {
    return <Cloud className="w-16 h-16 text-gray-400" />;
  }
};

export const WeatherCard = ({
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
  visibility,
  feelsLike
}: WeatherCardProps) => {
  return (
    <Card className="weather-card p-8 text-white min-h-[400px]">
      <div className="space-y-6">
        {/* Location */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold weather-text-shadow">{location}</h2>
          <p className="text-sm opacity-90 mt-1">Today</p>
        </div>

        {/* Main Weather Display */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            {getWeatherIcon(condition)}
          </div>
          <div>
            <div className="text-6xl font-light weather-text-shadow">
              {temperature}°
            </div>
            <p className="text-lg opacity-90 mt-2">{condition}</p>
            <p className="text-sm opacity-75">Feels like {feelsLike}°</p>
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div className="text-center space-y-1">
            <Droplets className="w-5 h-5 mx-auto opacity-75" />
            <p className="text-xs opacity-75">Humidity</p>
            <p className="text-sm font-medium">{humidity}%</p>
          </div>
          <div className="text-center space-y-1">
            <Wind className="w-5 h-5 mx-auto opacity-75" />
            <p className="text-xs opacity-75">Wind</p>
            <p className="text-sm font-medium">{windSpeed} km/h</p>
          </div>
          <div className="text-center space-y-1">
            <Eye className="w-5 h-5 mx-auto opacity-75" />
            <p className="text-xs opacity-75">Visibility</p>
            <p className="text-sm font-medium">{visibility} km</p>
          </div>
        </div>
      </div>
    </Card>
  );
};