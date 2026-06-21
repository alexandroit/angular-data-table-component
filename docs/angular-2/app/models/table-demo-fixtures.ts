export var pageSizes = [4, 5, 8, 10];
export var statusOptions = ['', 'Paid', 'Pending', 'Review'];
export var regionOptions = ['', 'Argentina', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Ecuador', 'Mexico', 'Peru', 'Portugal', 'United States', 'Uruguay'];

export var visibilityColumns = [
  { id: 'order', label: 'Order' },
  { id: 'customer', label: 'Customer' },
  { id: 'region', label: 'Region' },
  { id: 'channel', label: 'Channel' },
  { id: 'status', label: 'Status' },
  { id: 'total', label: 'Total' }
];

export var orders = [
  { id: 1, order: 'SO-1001', customer: 'Acme Studio', status: 'Paid', total: 1840, region: 'Canada', channel: 'Online', notes: 'Priority customer with same-day fulfilment.' },
  { id: 2, order: 'SO-1002', customer: 'Northwind', status: 'Pending', total: 920, region: 'United States', channel: 'Partner', notes: 'Waiting for tax document confirmation.' },
  { id: 3, order: 'SO-1003', customer: 'Blue Harbor', status: 'Paid', total: 1430, region: 'Brazil', channel: 'Online', notes: 'Includes fragile packaging.' },
  { id: 4, order: 'SO-1004', customer: 'Greenline', status: 'Review', total: 680, region: 'Portugal', channel: 'Retail', notes: 'Manual review because of address mismatch.' },
  { id: 5, order: 'SO-1005', customer: 'Bright Labs', status: 'Paid', total: 2210, region: 'Mexico', channel: 'Online', notes: 'Large order approved by sales operations.' },
  { id: 6, order: 'SO-1006', customer: 'Nova Foods', status: 'Pending', total: 1140, region: 'Colombia', channel: 'Partner', notes: 'Awaiting inventory allocation.' },
  { id: 7, order: 'SO-1007', customer: 'Summit Health', status: 'Paid', total: 3150, region: 'Chile', channel: 'Direct', notes: 'Requires split shipment across two warehouses.' },
  { id: 8, order: 'SO-1008', customer: 'Cedar Works', status: 'Review', total: 760, region: 'Argentina', channel: 'Retail', notes: 'New customer validation in progress.' },
  { id: 9, order: 'SO-1009', customer: 'Orion Retail', status: 'Paid', total: 1980, region: 'Canada', channel: 'Direct', notes: 'Invoice already synchronized with accounting.' },
  { id: 10, order: 'SO-1010', customer: 'Lima Market', status: 'Pending', total: 540, region: 'Peru', channel: 'Online', notes: 'Payment retry scheduled.' },
  { id: 11, order: 'SO-1011', customer: 'Costa Norte', status: 'Paid', total: 2875, region: 'Uruguay', channel: 'Direct', notes: 'Customer requested weekend delivery.' },
  { id: 12, order: 'SO-1012', customer: 'Pacific Tools', status: 'Review', total: 1320, region: 'Ecuador', channel: 'Partner', notes: 'Needs compliance approval before release.' }
];

export var tickets = [
  { ticket: 'T-4301', subject: 'Export button is hidden on mobile', priority: 'High', owner: 'Maya' },
  { ticket: 'T-4302', subject: 'Billing report needs a row total', priority: 'Normal', owner: 'Theo' },
  { ticket: 'T-4303', subject: 'Legacy dashboard should keep filters', priority: 'High', owner: 'Iris' },
  { ticket: 'T-4304', subject: 'Audit screen should load faster', priority: 'Low', owner: 'Noah' },
  { ticket: 'T-4305', subject: 'Table should preserve selection between pages', priority: 'High', owner: 'Lena' }
];

export var inventory = [
  { id: 1, sku: 'BAG-01', product: 'Canvas bag', stock: 22, warehouse: 'Toronto' },
  { id: 2, sku: 'MUG-03', product: 'Ceramic mug', stock: 4, warehouse: 'Montreal' },
  { id: 3, sku: 'CAP-09', product: 'Structured cap', stock: 31, warehouse: 'Vancouver' },
  { id: 4, sku: 'TEE-12', product: 'Cotton shirt', stock: 7, warehouse: 'Calgary' },
  { id: 5, sku: 'BOX-18', product: 'Shipping box', stock: 64, warehouse: 'Toronto' },
  { id: 6, sku: 'PIN-22', product: 'Enamel pin set', stock: 3, warehouse: 'Ottawa' }
];

export var lockedRows = [
  { id: 1, name: 'Open report', state: 'Ready', locked: false },
  { id: 2, name: 'Closed invoice batch', state: 'Locked', locked: true },
  { id: 3, name: 'Pending reconciliation', state: 'Ready', locked: false },
  { id: 4, name: 'Archived payout', state: 'Locked', locked: true }
];

export var revenue = [
  { id: 1, region: 'North America', quarter: 'Q1', revenue: 142000, margin: '29%' },
  { id: 2, region: 'South America', quarter: 'Q1', revenue: 94000, margin: '25%' },
  { id: 3, region: 'Europe', quarter: 'Q1', revenue: 128000, margin: '31%' },
  { id: 4, region: 'North America', quarter: 'Q2', revenue: 158000, margin: '32%' },
  { id: 5, region: 'South America', quarter: 'Q2', revenue: 104000, margin: '27%' },
  { id: 6, region: 'Europe', quarter: 'Q2', revenue: 136000, margin: '30%' },
  { id: 7, region: 'North America', quarter: 'Q3', revenue: 166000, margin: '30%' },
  { id: 8, region: 'South America', quarter: 'Q3', revenue: 111000, margin: '28%' },
  { id: 9, region: 'Europe', quarter: 'Q3', revenue: 151000, margin: '34%' },
  { id: 10, region: 'North America', quarter: 'Q4', revenue: 172000, margin: '31%' }
];

export var longTextRows = [
  { id: 1, name: 'Migration plan', description: 'A longer operational note that should wrap cleanly instead of forcing the application layout to overflow in a confusing way.', owner: 'Maya' },
  { id: 2, name: 'Release checklist', description: 'The table keeps the responsive shell active while individual cells can opt into wrapping for readable admin screens.', owner: 'Theo' },
  { id: 3, name: 'Customer export', description: 'This row intentionally carries enough text to show how Angular 2 consumers can protect dense dashboards.', owner: 'Iris' }
];

export function formatTotal(row: any) {
  return '$' + row.total.toLocaleString();
}

export function formatRevenue(row: any) {
  return '$' + row.revenue.toLocaleString();
}

export function getOrderColumns() {
  return [
    { id: 'order', name: 'Order', selector: 'order', sortable: true, width: '130px' },
    { id: 'customer', name: 'Customer', selector: 'customer', sortable: true, wrap: true, minWidth: '220px' },
    { id: 'status', name: 'Status', selector: 'status', sortable: true, center: true, width: '120px' },
    { id: 'total', name: 'Total', selector: formatTotal, sortable: true, right: true, width: '130px' }
  ];
}

export function getAdvancedColumns() {
  return [
    { id: 'order', name: 'Order', selector: 'order', sortable: true, width: '130px', group: 'Order' },
    { id: 'customer', name: 'Customer', selector: 'customer', sortable: true, wrap: true, minWidth: '220px', group: 'Customer' },
    { id: 'region', name: 'Region', selector: 'region', sortable: true, width: '150px', group: 'Customer' },
    { id: 'channel', name: 'Channel', selector: 'channel', sortable: true, width: '130px', group: 'Operations' },
    { id: 'status', name: 'Status', selector: 'status', sortable: true, center: true, width: '120px', group: 'Operations' },
    { id: 'total', name: 'Total', selector: formatTotal, sortable: true, right: true, width: '130px', group: 'Finance' }
  ];
}

export function getHeaderGroupColumns() {
  return [
    {
      id: 'orderGroup',
      name: 'Order',
      columns: [
        { id: 'order', name: 'Order', selector: 'order', sortable: true, width: '130px' },
        { id: 'status', name: 'Status', selector: 'status', sortable: true, center: true, width: '120px' }
      ]
    },
    {
      id: 'customerGroup',
      name: 'Customer',
      columns: [
        { id: 'customer', name: 'Customer', selector: 'customer', sortable: true, wrap: true, minWidth: '220px' },
        { id: 'region', name: 'Region', selector: 'region', sortable: true, width: '150px' }
      ]
    },
    {
      id: 'moneyGroup',
      name: 'Finance',
      columns: [
        { id: 'channel', name: 'Channel', selector: 'channel', sortable: true, width: '130px' },
        { id: 'total', name: 'Total', selector: formatTotal, sortable: true, right: true, width: '130px' }
      ]
    }
  ];
}

export function getTicketColumns() {
  return [
    { id: 'ticket', name: 'Ticket', selector: 'ticket', sortable: true, width: '120px' },
    { id: 'subject', name: 'Subject', selector: 'subject', sortable: true, wrap: true, minWidth: '260px' },
    { id: 'priority', name: 'Priority', selector: 'priority', center: true, width: '110px' },
    { id: 'owner', name: 'Owner', selector: 'owner', width: '140px' }
  ];
}

export function getInventoryColumns() {
  return [
    { id: 'sku', name: 'SKU', selector: 'sku', sortable: true, width: '120px' },
    { id: 'product', name: 'Product', selector: 'product', sortable: true, wrap: true, minWidth: '240px' },
    { id: 'stock', name: 'Stock', selector: 'stock', sortable: true, right: true, width: '110px' },
    { id: 'warehouse', name: 'Warehouse', selector: 'warehouse', width: '150px' }
  ];
}

export function getLockedColumns() {
  return [
    { id: 'id', name: 'ID', selector: 'id', width: '80px' },
    { id: 'name', name: 'Name', selector: 'name', sortable: true },
    { id: 'state', name: 'State', selector: 'state', center: true }
  ];
}

export function getRevenueColumns() {
  return [
    { id: 'region', name: 'Region', selector: 'region', sortable: true, minWidth: '220px' },
    { id: 'quarter', name: 'Quarter', selector: 'quarter', center: true, width: '110px' },
    { id: 'revenue', name: 'Revenue', selector: formatRevenue, sortable: true, right: true, width: '150px' },
    { id: 'margin', name: 'Margin', selector: 'margin', right: true, width: '110px' }
  ];
}

export function getWrappedColumns() {
  return [
    { id: 'name', name: 'Name', selector: 'name', sortable: true, width: '180px' },
    { id: 'description', name: 'Description', selector: 'description', wrap: true, minWidth: '420px' },
    { id: 'owner', name: 'Owner', selector: 'owner', width: '140px' }
  ];
}

export function getLargeColumns() {
  return [
    { id: 'id', name: 'ID', selector: 'id', sortable: true, width: '90px' },
    { id: 'name', name: 'Name', selector: 'name', sortable: true },
    { id: 'region', name: 'Region', selector: 'region', sortable: true },
    { id: 'score', name: 'Score', selector: 'score', sortable: true, right: true }
  ];
}

export function buildLargeRows() {
  var rows: any[] = [];
  var regions = ['Canada', 'Brazil', 'Portugal', 'Mexico', 'Colombia', 'Chile'];
  var i: number;

  for (i = 1; i <= 120; i += 1) {
    rows.push({
      id: i,
      name: 'Record ' + i,
      region: regions[i % regions.length],
      score: (i * 17) % 100
    });
  }

  return rows;
}

export function getLargeDataColumns() {
  return [
    { id: 'id', name: 'ID', selector: 'id', sortable: true, width: '90px' },
    { id: 'account', name: 'Account', selector: 'account', sortable: true, minWidth: '220px' },
    { id: 'region', name: 'Region', selector: 'region', sortable: true, width: '150px' },
    { id: 'status', name: 'Status', selector: 'status', sortable: true, center: true, width: '120px' },
    { id: 'amount', name: 'Amount', selector: formatLargeAmount, sortable: true, right: true, width: '130px' }
  ];
}

export function buildLargePage(page: number, perPage: number, totalRows: number, sortField?: string, sortDirection?: string) {
  var rows: any[] = [];
  var regions = ['Canada', 'Brazil', 'Mexico', 'Portugal', 'Colombia', 'Chile', 'Uruguay', 'Argentina'];
  var statuses = ['Paid', 'Pending', 'Review', 'Approved'];
  var start = (page - 1) * perPage;
  var end = Math.min(start + perPage, totalRows);
  var index: number;
  var i: number;

  for (i = start; i < end; i += 1) {
    index = resolveLargeRowIndex(i, totalRows, sortField, sortDirection);
    rows.push({
      id: index + 1,
      account: 'Enterprise account ' + padNumber(index + 1, 5),
      region: regions[index % regions.length],
      status: statuses[index % statuses.length],
      amount: 500 + ((index * 73) % 9500)
    });
  }

  return rows;
}

export function formatLargeAmount(row: any) {
  return '$' + row.amount.toLocaleString();
}

function padNumber(value: number, size: number) {
  var text = String(value);

  while (text.length < size) {
    text = '0' + text;
  }

  return text;
}

function resolveLargeRowIndex(position: number, totalRows: number, sortField?: string, sortDirection?: string) {
  if ((sortField === 'id' || sortField === 'account') && sortDirection === 'desc') {
    return totalRows - 1 - position;
  }

  return position;
}

export function cloneColumnVisibility(current: any, columnId: string, visible: boolean) {
  var next: any = {};
  var key: string;

  for (key in current) {
    if (current.hasOwnProperty(key)) {
      next[key] = current[key];
    }
  }

  if (visible) {
    delete next[columnId];
  } else {
    next[columnId] = false;
  }

  return next;
}

export function dataSnippet(rows: any[]) {
  return JSON.stringify(rows, null, 2);
}
