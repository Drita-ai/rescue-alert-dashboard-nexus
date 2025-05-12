
import React from 'react';
import { CloudLightning, CloudRain, Zap, Info } from 'lucide-react';

interface IncidentCardProps {
  title: string;
  location: string;
  description: string;
  time: string;
  type: 'flood' | 'fire' | 'earthquake' | 'medical' | 'other';
}

const IncidentCard = ({ title, location, description, time, type }: IncidentCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'flood':
        return <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <CloudRain className="h-5 w-5" />
        </div>;
      case 'fire':
        return <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white">
          <Zap className="h-5 w-5" />
        </div>;
      case 'earthquake':
        return <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
          <Zap className="h-5 w-5" />
        </div>;
      case 'medical':
        return <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
          <Info className="h-5 w-5" />
        </div>;
      default:
        return <div className="h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
          <Info className="h-5 w-5" />
        </div>;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'flood':
        return 'border-l-blue-500';
      case 'fire':
        return 'border-l-red-500';
      case 'earthquake':
        return 'border-l-orange-500';
      case 'medical':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-500';
    }
  };

  return (
    <div className={`incident-card ${getBorderColor()}`}>
      {getIcon()}
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-xs text-gray-500">{location}</p>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default IncidentCard;
