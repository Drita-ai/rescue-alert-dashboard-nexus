
import React from 'react';
import { Shield, AlertTriangle, Bell, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  const actionButtons = [
    { name: 'Trigger Alert', icon: <Bell className="h-4 w-4 mr-2" />, color: 'bg-destructive hover:bg-destructive/90' },
    { name: 'Emergency Response', icon: <AlertTriangle className="h-4 w-4 mr-2" />, color: 'bg-warning hover:bg-warning/90' },
    { name: 'Deploy Resources', icon: <Shield className="h-4 w-4 mr-2" />, color: 'bg-primary hover:bg-primary/90' },
    { name: 'Situation Report', icon: <Info className="h-4 w-4 mr-2" />, color: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' },
  ];

  return (
    <div className="border rounded-lg p-4 h-full">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actionButtons.map((button, index) => (
          <Button 
            key={index} 
            className={`flex items-center justify-center ${button.color}`}
          >
            {button.icon}
            {button.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
