import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (location: string) => void;
  onCurrentLocation: () => void;
}

export const SearchBar = ({ onSearch, onCurrentLocation }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="weather-glass p-6 mb-8">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for a city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 bg-white/50 border-white/30 backdrop-blur-sm"
          />
        </div>
        <Button 
          type="submit" 
          variant="secondary"
          className="h-12 px-6"
        >
          Search
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCurrentLocation}
          className="h-12 px-4 bg-white/50 border-white/30 hover:bg-white/70"
        >
          <MapPin className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};