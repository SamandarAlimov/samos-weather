import { Card } from "@/components/ui/card";
import { Cloud, Sun, CloudRain } from "lucide-react";

interface ForecastCardProps {
  day: string;
  condition: string;
  high: number;
  low: number;
  precipitation?: number;
}

const getWeatherIcon = (condition: string) => {
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
    return <Sun className="w-8 h-8 text-yellow-400" />;
  } else if (lowerCondition.includes('rain')) {
    return <CloudRain className="w-8 h-8 text-blue-400" />;
  } else {
    return <Cloud className="w-8 h-8 text-gray-400" />;
  }
};

export const ForecastCard = ({ day, condition, high, low, precipitation }: ForecastCardProps) => {
  return (
    <Card className="weather-card p-4 text-center text-white min-h-[180px] flex flex-col justify-between">
      <div className="space-y-3">
        <h3 className="font-medium text-sm opacity-90">{day}</h3>
        
        <div className="flex justify-center">
          {getWeatherIcon(condition)}
        </div>
        
        <div className="space-y-1">
          <div className="text-lg font-semibold">{high}°</div>
          <div className="text-sm opacity-75">{low}°</div>
        </div>
        
        {precipitation !== undefined && (
          <div className="text-xs opacity-75">
            {precipitation}% rain
          </div>
        )}
      </div>
    </Card>
  );
};