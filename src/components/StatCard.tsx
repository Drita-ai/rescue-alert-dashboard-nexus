
import { cn } from '@/lib/utils';
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  status?: 'emergency' | 'warning' | 'stable';
}

const StatCard = ({ title, value, change, icon, status = 'stable' }: StatCardProps) => {
  return (
    <div className={cn("stat-card border", status)}>
      <div className="flex justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && (
            <p className={cn(
              "text-xs flex items-center mt-1",
              change.startsWith('+') ? "text-success" : "text-destructive"
            )}>
              {change}
            </p>
          )}
        </div>
        <div>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
