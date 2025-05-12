
import { cn } from '@/lib/utils';
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DisasterIncidentProps {
  title: string;
  location: string;
  time: string;
  type: string;
  severity: 'high' | 'medium' | 'low';
  status: 'active' | 'resolved' | 'monitoring';
}

const DisasterIncidentCard = ({ title, location, time, type, severity, status }: DisasterIncidentProps) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
          <p className="text-xs text-muted-foreground mt-1">{time}</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <Badge variant={
            status === 'active' ? 'destructive' : 
            status === 'monitoring' ? 'default' : 'outline'
          }>
            {status}
          </Badge>
          <Badge variant={
            severity === 'high' ? 'destructive' : 
            severity === 'medium' ? 'default' : 'outline'
          }>
            {severity} severity
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center mt-3">
        <Badge variant="outline" className="mr-2">
          {type}
        </Badge>
        {severity === 'high' && (
          <AlertTriangle className="h-4 w-4 text-destructive" />
        )}
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Button variant="default" size="sm">View Details</Button>
        <Button variant="outline" size="sm">Assign Team</Button>
      </div>
    </div>
  );
};

export default DisasterIncidentCard;
