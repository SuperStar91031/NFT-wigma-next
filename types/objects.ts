export interface Category {
  id?: number;
  name: string;
  isSystem?: boolean;
  type: string; // income, expense
  icon: string;
  userId?: number;
  templateId?: number;
  createdAt?: string;
  updatedAt?: string;
}
