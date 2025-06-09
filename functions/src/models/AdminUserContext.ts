import { CRMUserContext } from './CRMUserContext';

export interface AdminUserContext {
  firebase_user_id: string;
  plan: string;
  plan_status: string;
  payment_status: string;
  treatment_metadata: {
    treatment: string;
    medicine?: string;
    plan_type: string;
    duration: string;
  };
  crm_data: CRMUserContext;
} 