/* eslint-disable prettier/prettier */
import { ActivityAction } from '../enums/activity-action.enum';

export interface IActivityLog {
  id: string;
  userId: string;
  action: ActivityAction;
  details?: string;
  targetId?: string;
  createdAt: Date;
}