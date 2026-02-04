
import React from 'react';
import { 
  LayoutGrid, Users, FileText, Calendar as CalendarIcon, 
  MessageSquare, Settings, LifeBuoy, LogOut, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2
} from 'lucide-react';
import { PATIENTS_TODAY } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[320px] bg-[#0A0A0A] h-screen overflow-y-auto text-white flex flex-col p-6 scrollbar-hide">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
        </div>
      </div>

      {/* Nav Section */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="p-3 bg-blue-600 rounded-xl text-white cursor-pointer transition-colors">
          <LayoutGrid size={24} />
        </div>
        <div className="p-3 text-gray-500 hover:text-white cursor-pointer transition-colors">
          <Users size={24} />
        </div>
        <div className="p-3 text-gray-500 hover:text-white cursor-pointer transition-colors">
          <FileText size={24} />
        </div>
        <div className="p-3 text-gray-500 hover:text-white cursor-pointer transition-colors">
          <CalendarIcon size={24} />
        </div>
        <div className="p-3 text-gray-500 hover:text-white cursor-pointer transition-colors">
          <MessageSquare size={24} />
        </div>
      </div>

      {/* Calendar Widget */}
      <div className="bg-white rounded-[2rem] p-5 text-black mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">My Schedule</h3>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-gray-100 rounded-lg"><ChevronLeft size={16} /></button>
            <button className="p-1 hover:bg-gray-100 rounded-lg"><ChevronRight size={16} /></button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
            <span key={day} className="text-gray-400 font-medium mb-2">{day}</span>
          ))}
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const isToday = day === 14;
            const isOtherMonth = day > 24 && day < 29;
            return (
              <div 
                key={i} 
                className={`
                  p-2 rounded-lg cursor-pointer transition-all
                  ${isToday ? 'bg-blue-600 text-white font-bold' : 'hover:bg-gray-100'}
                  ${isOtherMonth ? 'text-gray-300' : ''}
                `}
              >
                {day <= 30 ? day : day - 30}
              </div>
            );
          })}
        </div>
      </div>

      {/* Patients Today */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            <span className="text-blue-500">19</span> Patients today
          </h3>
          <button className="p-2 bg-[#1C1C1C] rounded-lg">
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="space-y-4">
          {PATIENTS_TODAY.slice(0, 7).map((patient, idx) => (
            <div key={patient.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                {patient.avatar ? (
                  <img src={patient.avatar} alt={patient.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center font-medium text-gray-400 text-sm">
                    {patient.initials}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-semibold">{patient.name}</h4>
                  <p className="text-xs text-gray-500">{patient.condition}</p>
                </div>
              </div>
              <div className="text-right">
                {idx === 0 ? (
                  <CheckCircle2 size={20} className="text-green-500" />
                ) : (
                  <span className="text-[10px] font-medium text-gray-500">{patient.time}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Nav */}
      <div className="mt-8 pt-6 border-t border-gray-800 space-y-4">
        <div className="flex items-center gap-3 text-gray-500 hover:text-white cursor-pointer">
          <Settings size={20} />
          <span className="text-sm">Settings</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500 hover:text-white cursor-pointer">
          <LifeBuoy size={20} />
          <span className="text-sm">Support</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500 hover:text-white cursor-pointer">
          <LogOut size={20} />
          <span className="text-sm">Log out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
