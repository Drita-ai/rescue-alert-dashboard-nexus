
import React from 'react';
import { Shield, AlertTriangle, Bell, Info, Star, Wrench, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QuickActions = () => {
  const actionButtons = [
    { 
      name: 'Trigger Alert', 
      icon: <Bell className="h-5 w-5" />, 
      description: 'Send emergency notifications',
      variant: 'destructive'
    },
    { 
      name: 'Emergency Response', 
      icon: <AlertTriangle className="h-5 w-5" />,
      description: 'Activate response teams',
      variant: 'warning'
    },
    { 
      name: 'Deploy Resources', 
      icon: <Shield className="h-5 w-5" />,
      description: 'Allocate emergency resources',
      variant: 'default'
    },
    { 
      name: 'Situation Report', 
      icon: <Info className="h-5 w-5" />,
      description: 'Generate current status report',
      variant: 'secondary'
    },
    { 
      name: 'Priority Tasks', 
      icon: <Star className="h-5 w-5" />, 
      description: 'View high priority actions',
      variant: 'default'
    },
    { 
      name: 'Maintenance', 
      icon: <Wrench className="h-5 w-5" />,
      description: 'Schedule system maintenance',
      variant: 'secondary'
    },
    { 
      name: 'Recent Updates', 
      icon: <Clock className="h-5 w-5" />,
      description: 'View latest incident updates',
      variant: 'default'
    },
    { 
      name: 'Staff Roster', 
      icon: <Users className="h-5 w-5" />,
      description: 'Manage response personnel',
      variant: 'secondary'
    },
  ];

  // Group buttons by variant for consistent color scheme
  const variantToClassName = {
    destructive: 'bg-destructive hover:bg-destructive/90 text-destructive-foreground',
    warning: 'bg-warning hover:bg-warning/90 text-warning-foreground',
    default: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    secondary: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground',
  };

  return (
    <Card className="h-full shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {actionButtons.map((button, index) => (
            <Button 
              key={index} 
              className={`relative group flex flex-col h-auto py-3 w-full justify-start items-start text-left ${variantToClassName[button.variant as keyof typeof variantToClassName]}`}
            >
              <div className="flex items-center w-full">
                <div className="p-2 rounded-full bg-white/20 mr-3">
                  {button.icon}
                </div>
                <div>
                  <div className="font-semibold">{button.name}</div>
                  <div className="text-xs opacity-90">{button.description}</div>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
