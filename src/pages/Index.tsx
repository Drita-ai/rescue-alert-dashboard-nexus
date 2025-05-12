
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import DisasterMap from '@/components/DisasterMap';
import DisasterIncidentCard from '@/components/DisasterIncidentCard';
import WeatherAlerts from '@/components/WeatherAlerts';
import QuickActions from '@/components/QuickActions';
import StatCard from '@/components/StatCard';
import { AlertTriangle, Shield, MapPin, Flag } from 'lucide-react';

const Index = () => {
  // These would come from your API or data source in a real application
  const incidents = [
    {
      title: 'Coastal Flooding',
      location: 'Pacific Coast, Bay Area',
      time: 'Started 2 hours ago',
      type: 'Flood',
      severity: 'high',
      status: 'active',
    },
    {
      title: 'Forest Fire',
      location: 'Northern Woods, Mountain Region',
      time: 'Started 6 hours ago',
      type: 'Fire',
      severity: 'medium',
      status: 'monitoring',
    },
    {
      title: 'Landslide',
      location: 'Highway 101, Mile 126',
      time: 'Occurred yesterday',
      type: 'Landslide',
      severity: 'low',
      status: 'resolved',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader />
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Active Incidents" 
            value={7} 
            change="+2 from yesterday" 
            icon={<AlertTriangle className="h-8 w-8 text-destructive opacity-80" />}
            status="emergency"
          />
          <StatCard 
            title="Affected Areas" 
            value={12} 
            icon={<MapPin className="h-8 w-8 text-primary opacity-80" />}
          />
          <StatCard 
            title="Response Teams" 
            value={18} 
            change="+5 deployed" 
            icon={<Shield className="h-8 w-8 text-primary opacity-80" />}
          />
          <StatCard 
            title="Alerts Issued" 
            value={23} 
            change="+8 today" 
            icon={<Flag className="h-8 w-8 text-warning opacity-80" />}
            status="warning"
          />
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Map */}
          <div className="lg:col-span-2">
            <DisasterMap />
          </div>
          
          {/* Right Column - Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Recent Incidents */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Recent Incidents</h2>
              {incidents.map((incident, index) => (
                <DisasterIncidentCard 
                  key={index} 
                  {...incident as any} 
                />
              ))}
            </div>
          </div>
          
          {/* Weather Alerts */}
          <div>
            <WeatherAlerts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
