import { Cloud } from "lucide-react";

export const Header = () => {
  return (
    <header className="relative z-10 p-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white weather-text-shadow">
              SAMOS Weather
            </h1>
            <p className="text-xs text-white/80">Global Technologies Inc.</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-white/90 text-sm">
          <a href="#forecast" className="hover:text-white transition-colors">
            Forecast
          </a>
          <a href="#maps" className="hover:text-white transition-colors">
            Maps
          </a>
          <a href="#alerts" className="hover:text-white transition-colors">
            Alerts
          </a>
        </div>
      </nav>
    </header>
  );
};