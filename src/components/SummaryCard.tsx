
import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  reports: number;
  icon?: React.ReactNode;
}

const SummaryCard = ({ title, value, reports, icon }: SummaryCardProps) => {
  return (
    <div className="summary-card">
      <div>
        <p className="summary-label">{title}</p>
        <p className="summary-value">{value}</p>
        <p className="summary-reports">{reports} Reports</p>
      </div>
      {icon && <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">{icon}</div>}
    </div>
  );
};

export default SummaryCard;
