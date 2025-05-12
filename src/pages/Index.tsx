
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import DisasterMap from '@/components/DisasterMap';
import IncidentCard from '@/components/IncidentCard';
import StatCard from '@/components/StatCard';
import SummaryCard from '@/components/SummaryCard';
import { AlertTriangle, MapPin, Filter, ChevronDown } from 'lucide-react';

const Index = () => {
  const incidents = [
    {
      title: 'Flood Warning',
      location: 'Jackson, MSs',
      description: 'Warning from-Culdish Flood at',
      time: '12 min',
      type: 'flood' as const
    },
    {
      title: 'Wildfire Spread',
      location: 'Redding, CA',
      description: 'Wildfire near, Redding, Wednesday',
      time: '26 min',
      type: 'fire' as const
    },
    {
      title: 'Emergency Medical Supplies',
      location: 'San Juan, PU',
      description: 'Emergency medical supplies fodd. water, H/X',
      time: '42 min',
      type: 'medical' as const
    },
    {
      title: '6.3 Ruauke Strikes',
      location: 'San Francisco, CA',
      description: 'An earthquake strike, nr-Francisco, California, an hour ao',
      time: '1 hour',
      type: 'earthquake' as const
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader />
        
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Total Incidents" 
            value={184}
          />
          <div className="metrics-card">
            <p className="metrics-label">Disaster Type Breakdown</p>
            <div className="flex justify-between items-end">
              <p className="metrics-value">141</p>
              <div className="flex gap-1 items-end h-8">
                <div className="h-full w-2 bg-blue-500 rounded"></div>
                <div className="h-3/4 w-2 bg-red-500 rounded"></div>
                <div className="h-1/2 w-2 bg-orange-500 rounded"></div>
                <div className="h-2/3 w-2 bg-cyan-500 rounded"></div>
                <div className="h-4/5 w-2 bg-pink-500 rounded"></div>
              </div>
            </div>
          </div>
          <div className="metrics-card">
            <p className="metrics-label">Most Affected Regions</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-medium">California</p>
              <ChevronDown className="h-4 w-4" />
            </div>
            <p className="text-lg font-medium mt-1">Texas</p>
          </div>
          <div className="metrics-card">
            <p className="metrics-label">Source</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-medium">All</p>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-lg font-medium">All dates</p>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Map */}
          <div className="col-span-2">
            {/* Filters */}
            <div className="bg-[#1a2c48] p-4 rounded-t-lg text-white mb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Filters</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Tur</span>
                </div>
                <span className="text-sm">10:32 AM</span>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="bg-[#2c3e50] px-3 py-2 rounded flex justify-between items-center w-32">
                  <span>Flood</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="bg-[#2c3e50] px-3 py-2 rounded flex justify-between items-center w-32">
                  <span>An Leve</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            <DisasterMap />
          </div>
          
          {/* Right Column - Incident Cards */}
          <div className="bg-white rounded-lg overflow-hidden h-min">
            <div className="space-y-0">
              {incidents.map((incident, index) => (
                <IncidentCard 
                  key={index} 
                  title={incident.title}
                  location={incident.location}
                  description={incident.description}
                  time={incident.time}
                  type={incident.type}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Row - Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <SummaryCard 
            title="Medical / Rescue Requests" 
            value={53} 
            reports={53}
            icon={<AlertTriangle className="h-4 w-4 text-gray-500" />}
          />
          <SummaryCard 
            title="Infrastructure Damage" 
            value={28} 
            reports={28}
            icon={<AlertTriangle className="h-4 w-4 text-gray-500" />}
          />
          <SummaryCard 
            title="People Affected" 
            value={75} 
            reports={75}
            icon={<AlertTriangle className="h-4 w-4 text-gray-500" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
