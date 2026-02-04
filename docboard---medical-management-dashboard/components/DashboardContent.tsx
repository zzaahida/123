
import React from 'react';
import { Search, Bell, ChevronDown, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, PieChart, Pie } from 'recharts';
import { ACTIVITY_CHART_DATA, PATIENTS_TODAY } from '../constants';

const DashboardContent: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-[1400px] mx-auto">
      {/* Top Bar */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Hello, Jane Doe!</h1>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors bg-white rounded-xl relative">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <img src="https://picsum.photos/seed/doctor/80/80" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
            <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-900" />
          </div>
        </div>
      </header>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Peak activity */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex flex-col justify-between h-[180px]">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 font-medium">Peak activity hours</p>
            <ArrowUpRight size={20} className="text-gray-300" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">10:00-12:30</span>
              <span className="text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded text-sm">PM</span>
            </div>
          </div>
        </div>

        {/* Total patients */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 h-[180px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 font-medium">Total patients</p>
            <MoreHorizontal size={20} className="text-gray-300" />
          </div>
          <div>
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-4xl font-bold">492</span>
              <div className="flex items-center text-green-500 font-bold text-sm bg-green-50 px-2 py-0.5 rounded">
                +13% <span className="text-[10px] ml-1 text-gray-400 font-medium">vs last month</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden flex">
               <div className="h-full bg-blue-600 w-[60%]"></div>
               <div className="h-full bg-purple-300 w-[40%]"></div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-[10px] text-gray-500 font-medium">by appointment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-[10px] text-gray-500 font-medium">walk-in queue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Avg doctor rating */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 h-[180px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-gray-500 font-medium">Avg doctor rating</p>
            <ArrowUpRight size={20} className="text-gray-300" />
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold text-yellow-500">4.9</span>
            <span className="text-orange-100 bg-orange-50 px-3 py-1 rounded-full text-xs font-bold text-orange-400">654 reviews</span>
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Large Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Patients</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-semibold border border-gray-100">
                Recovered <ChevronDown size={14} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-semibold border border-gray-100">
                Month <ChevronDown size={14} />
              </button>
            </div>
          </div>
          
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ACTIVITY_CHART_DATA}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8' }} 
                  dy={10}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#1C1C1C] text-white px-3 py-1.5 rounded-lg text-xs shadow-xl">
                          {payload[0].value} recovered
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="recovered" radius={[8, 8, 8, 8]} barSize={32}>
                  {ACTIVITY_CHART_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 5 ? '#1C1C1C' : '#B8C6DE'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            {/* Custom Tooltip Circle for Jun */}
            <div className="absolute left-[45.8%] top-[12%] w-3 h-3 bg-white border-2 border-black rounded-full shadow-lg"></div>
          </div>
          
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-xs text-blue-400 font-medium">recovered</span>
            </div>
          </div>
        </div>

        {/* Working Hours Donut */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Working hours</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl text-xs font-semibold border border-gray-100">
              Week <ChevronDown size={12} />
            </button>
          </div>

          <div className="relative flex-1 flex flex-col items-center justify-center">
            <div className="h-[180px] w-full relative">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Reception', value: 26, color: '#60A5FA' },
                        { name: 'Documenting', value: 10, color: '#1C1C1C' },
                        { name: 'Consultation', value: 4, color: '#D8B4FE' },
                      ]}
                      cx="50%"
                      cy="100%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {[
                        { color: '#60A5FA' },
                        { color: '#1C1C1C' },
                        { color: '#D8B4FE' },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
               </ResponsiveContainer>
               <div className="absolute inset-x-0 bottom-4 flex flex-col items-center">
                  <span className="text-4xl font-bold">40</span>
                  <span className="text-xs text-gray-400 font-medium">Total hours</span>
               </div>
            </div>

            <div className="w-full mt-6 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="font-semibold">26</span>
                  <span className="text-gray-400">Patient reception</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span className="font-semibold">10</span>
                  <span className="text-gray-400">Document processing</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                  <span className="font-semibold">4</span>
                  <span className="text-gray-400">Online consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-bold">Appointment</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-semibold border border-gray-100 text-gray-500">
              Status <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm font-semibold border border-gray-100 text-gray-500">
              Payment <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm font-medium border-b border-gray-50">
                <th className="pb-4 font-normal">Name</th>
                <th className="pb-4 font-normal">Status</th>
                <th className="pb-4 font-normal">Date</th>
                <th className="pb-4 font-normal">Time</th>
                <th className="pb-4 font-normal">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {PATIENTS_TODAY.map((p) => (
                <tr key={p.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      {p.avatar ? (
                        <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-sm">
                          {p.initials}
                        </div>
                      )}
                      <span className="font-semibold text-gray-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`
                      px-3 py-1.5 rounded-lg text-xs font-bold
                      ${p.status === 'First visit' ? 'bg-blue-50 text-blue-500' : ''}
                      ${p.status === 'Follow-up' ? 'bg-yellow-50 text-yellow-500' : ''}
                      ${p.status === 'Discharge summary' ? 'bg-green-50 text-green-500' : ''}
                    `}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-500 font-medium text-sm">{p.date}</td>
                  <td className="py-4 text-gray-500 font-medium text-sm">{p.time} PM</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                       <CheckCircle2Icon active={p.payment === 'Paid'} />
                       <span className={`text-sm font-semibold ${p.payment === 'Paid' ? 'text-green-500' : 'text-gray-400'}`}>
                         {p.payment}
                       </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Simple helper icon component for the payment status
const CheckCircle2Icon: React.FC<{ active: boolean }> = ({ active }) => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={active ? 'text-green-500' : 'text-gray-200'}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default DashboardContent;
