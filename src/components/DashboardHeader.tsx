
import React from 'react';
import { Search, User } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
          C
        </div>
        <h1 className="text-2xl font-bold text-white">Disaster Response Dashboard</h1>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Prosize" 
            className="pl-10 pr-4 py-2 rounded-md text-sm border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="h-5 w-5 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
