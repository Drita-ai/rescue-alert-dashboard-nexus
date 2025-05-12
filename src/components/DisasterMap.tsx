
import React from 'react';
import { MapPin } from 'lucide-react';

const DisasterMap = () => {
  // In a real application, this would use a map library like Mapbox, Leaflet, or Google Maps
  return (
    <div className="rounded-lg overflow-hidden h-full">      
      <div className="disaster-map bg-[#c3d7e6] relative">
        {/* Placeholder for actual map */}
        
        {/* Example disaster markers - these would be dynamically placed in a real app */}
        <div className="absolute top-1/4 left-1/5">
          <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute top-1/3 left-1/4">
          <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/5">
          <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute top-2/5 right-1/3">
          <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute center right-1/3">
          <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <div className="bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute top-2/3 right-1/4">
          <div className="bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute top-1/2 center">
          <div className="bg-orange-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <div className="bg-orange-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterMap;
