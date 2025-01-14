import type { SelectedInventoryItem } from "./inventory";

export interface InvoiceItem {
  id: string;
  service: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  net: number;
}

export interface InvoiceDetails {
  id: string;
  date: string;
  serviceAdviser: string;
  customer: {
    name: string;
    nic?: string;
    address: string;
  };
  vehicle: {
    number: string;
    model: string;
    odometer?: number;
  };
  branch: string;
  jobType: string;
}

export interface InvoiceTotals {
  subtotal: number;
  discountTotal: number;
  inventoryTotal: number;
  taxRate: number;
  taxAmount: number;
  grandTotal: number;
}

export interface Invoice extends InvoiceDetails {
  items: InvoiceItem[];
  inventoryItems: SelectedInventoryItem[];
  totals: InvoiceTotals;
  relatedJobs: string[];
  status: "draft" | "pending" | "paid" | "void";
  terms: string;
  createdAt: string;
  updatedAt: string;
}
