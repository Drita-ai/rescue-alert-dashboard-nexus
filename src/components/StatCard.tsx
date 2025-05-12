
import { cn } from '@/lib/utils';
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon?: React.ReactNode;
  status?: 'emergency' | 'warning' | 'stable';
  className?: string;
}

const StatCard = ({ title, value, change, icon, status = 'stable', className }: StatCardProps) => {
  return (
    <div className={cn("metrics-card", className)}>
      <p className="metrics-label">{title}</p>
      <div className="flex justify-between items-start">
        <p className="metrics-value">{value}</p>
        {icon && <div className="mt-1">{icon}</div>}
      </div>
      {change && (
        <p className={cn(
          "text-xs mt-1",
          change.startsWith('+') ? "text-success" : "text-destructive"
        )}>
          {change}
        </p>
      )}
    </div>
  );
};

export default StatCard;
