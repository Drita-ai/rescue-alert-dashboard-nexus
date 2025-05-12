
import React from 'react';
import { CloudRain, CloudLightning, CloudSnow, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeatherAlertProps {
  type: 'rain' | 'storm' | 'snow' | 'other';
  location: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

const WeatherAlert = ({ type, location, time, severity }: WeatherAlertProps) => {
  const getIcon = () => {
    switch (type) {
      case 'rain':
        return <CloudRain className={cn(
          "h-5 w-5",
          severity === 'high' ? 'text-destructive' : 
          severity === 'medium' ? 'text-warning' : 'text-primary'
        )} />;
      case 'storm':
        return <CloudLightning className={cn(
          "h-5 w-5",
          severity === 'high' ? 'text-destructive' : 
          severity === 'medium' ? 'text-warning' : 'text-primary'
        )} />;
      case 'snow':
        return <CloudSnow className={cn(
          "h-5 w-5",
          severity === 'high' ? 'text-destructive' : 
          severity === 'medium' ? 'text-warning' : 'text-primary'
        )} />;
      default:
        return <AlertTriangle className={cn(
          "h-5 w-5",
          severity === 'high' ? 'text-destructive' : 
          severity === 'medium' ? 'text-warning' : 'text-primary'
        )} />;
    }
  };

  return (
    <div className={cn(
      "flex items-start p-3 border-l-4 rounded mb-3",
      severity === 'high' ? 'border-l-destructive bg-destructive/5' : 
      severity === 'medium' ? 'border-l-warning bg-warning/5' : 'border-l-primary bg-primary/5'
    )}>
      <div className="mr-3 mt-1">
        {getIcon()}
      </div>
      <div>
        <h4 className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} Alert</h4>
        <p className="text-sm text-muted-foreground">{location}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
};

const WeatherAlerts = () => {
  const weatherAlerts = [
    { type: 'storm', location: 'North Coast Region', time: 'Next 3 hours', severity: 'high' },
    { type: 'rain', location: 'Central Valley', time: 'Next 12 hours', severity: 'medium' },
    { type: 'snow', location: 'Mountain Region', time: 'Next 24 hours', severity: 'low' },
  ] as WeatherAlertProps[];

  return (
    <div className="border rounded-lg p-4 h-full">
      <h2 className="text-lg font-semibold mb-4">Weather Alerts</h2>
      <div className="space-y-2">
        {weatherAlerts.map((alert, index) => (
          <WeatherAlert key={index} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default WeatherAlerts;
