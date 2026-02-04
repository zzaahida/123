
import { Patient, ActivityData } from './types';

export const PATIENTS_TODAY: Patient[] = [
  { id: '1', name: 'Zaina Riddle', condition: 'Headache', time: '10:30', initials: 'ZR', status: 'First visit', date: 'May 23', payment: 'Paid' },
  { id: '2', name: 'Jakub Tucker', condition: 'Runny nose', time: '10:30', avatar: 'https://picsum.photos/seed/jakub/40/40', status: 'Follow-up', date: 'May 23', payment: 'Pending' },
  { id: '3', name: 'Aleksander Craig', condition: 'Cold', time: '11:30', avatar: 'https://picsum.photos/seed/aleks/40/40', status: 'First visit', date: 'May 23', payment: 'Pending' },
  { id: '4', name: 'Brianna Sears', condition: 'Flu', time: '12:00', initials: 'BS', status: 'Discharge summary', date: 'May 24', payment: 'Paid' },
  { id: '5', name: 'Rory Todd', condition: 'Stomach-ache', time: '12:15', initials: 'RT', status: 'First visit', date: 'May 24', payment: 'Pending' },
  { id: '6', name: 'Mariyah Mcmahon', condition: 'Runny nose', time: '12:30', avatar: 'https://picsum.photos/seed/mariyah/40/40', status: 'First visit', date: 'May 23', payment: 'Paid' },
  { id: '7', name: 'Austin Camacho', condition: 'Headache', time: '12:55', initials: 'AC', status: 'First visit', date: 'May 23', payment: 'Paid' },
];

export const ACTIVITY_CHART_DATA: ActivityData[] = [
  { month: 'Jan', recovered: 40 },
  { month: 'Feb', recovered: 70 },
  { month: 'Mar', recovered: 45 },
  { month: 'Apr', recovered: 60 },
  { month: 'May', recovered: 35 },
  { month: 'Jun', recovered: 85 }, // Highlighted in screenshot
  { month: 'Jul', recovered: 50 },
  { month: 'Aug', recovered: 65 },
  { month: 'Sep', recovered: 75 },
  { month: 'Oct', recovered: 40 },
  { month: 'Nov', recovered: 20 },
  { month: 'Dec', recovered: 55 },
];
