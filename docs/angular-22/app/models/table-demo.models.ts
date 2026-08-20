export interface VisibilityColumnOption {
  id: string;
  label: string;
}

export interface OrderRow {
  id: number;
  order: string;
  customer: string;
  status: string;
  total: number;
  region: string;
  channel: string;
  notes: string;
}

export interface TicketRow {
  ticket: string;
  subject: string;
  priority: string;
  owner: string;
}

export interface InventoryRow {
  id: number;
  sku: string;
  product: string;
  stock: number;
  warehouse: string;
}

export interface LockedRow {
  id: number;
  name: string;
  state: string;
  locked: boolean;
}

export interface RevenueRow {
  id: number;
  region: string;
  quarter: string;
  revenue: number;
  margin: string;
}

export interface LongTextRow {
  id: number;
  name: string;
  description: string;
  owner: string;
}

export interface ProductRow {
  id: number;
  name: string;
  category: string;
  stock: number;
  owner: string;
  image: string;
}

export interface LargePageState {
  rows: any[];
  totalRows: number;
  page: number;
  perPage: number;
  loading: boolean;
}
