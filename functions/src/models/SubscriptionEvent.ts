export interface SubscriptionEvent {
  subscription_id: string;
  chargebee_customer_id: string;
  plan_code: string;
  plan_type: 'Adaptable' | 'NoAdaptable';
  treatment: 'OBESIDAD' | 'DIABETES';
  medicine_type?: 'Wegobi' | 'Ozempic' | 'Zaxenda';
  duration: '0m' | '6m' | '12m' | '5w';
  payment_status: 'active' | 'paused' | 'cancelled';
  last_payment_amount: number;
  payment_method: string;
  paycash_reference: string;
  event_time: string; // ISODate
} 