
import React from 'react';
import { MapPin, Map } from 'lucide-react';

const DisasterMap = () => {
  // In a real application, this would use a map library like Mapbox, Leaflet, or Google Maps
  return (
    <div className="border rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Disaster Map</h2>
        <div className="flex space-x-2">
          <div className="flex items-center text-xs">
            <span className="h-3 w-3 rounded-full bg-destructive mr-1"></span>
            <span>Active</span>
          </div>
          <div className="flex items-center text-xs">
            <span className="h-3 w-3 rounded-full bg-warning mr-1"></span>
            <span>Warning</span>
          </div>
          <div className="flex items-center text-xs">
            <span className="h-3 w-3 rounded-full bg-success mr-1"></span>
            <span>Resolved</span>
          </div>
        </div>
      </div>
      
      <div className="disaster-map bg-slate-100 relative">
        {/* Placeholder for actual map */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-muted-foreground">
            <Map className="h-12 w-12 mx-auto mb-2 text-primary opacity-70" />
            <p className="text-sm">Interactive disaster map would appear here.</p>
            <p className="text-xs mt-1">Connect to a mapping service for live data</p>
          </div>
        </div>
        
        {/* Example disaster markers - these would be dynamically placed in a real app */}
        <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <MapPin className="h-6 w-6 text-destructive" />
        </div>
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <MapPin className="h-6 w-6 text-warning" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <MapPin className="h-6 w-6 text-success" />
        </div>
      </div>
    </div>
  );
};

export default DisasterMap;
