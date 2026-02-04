
export interface Patient {
  id: string;
  name: string;
  condition: string;
  time: string;
  avatar?: string;
  initials?: string;
  status: 'First visit' | 'Follow-up' | 'Discharge summary';
  date: string;
  payment: 'Paid' | 'Pending';
}

export interface ActivityData {
  month: string;
  recovered: number;
}
