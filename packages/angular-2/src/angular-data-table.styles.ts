export const DATA_TABLE_STYLES = `
:host {
  display: block;
}

.adtc-shell {
  background: #ffffff;
  border: 1px solid #d6dee8;
  border-radius: 6px;
  color: #17324d;
  font-family: inherit;
  overflow: hidden;
}

.adtc-theme-dark {
  background: #111c2d;
  border-color: #2b3c56;
  color: #eef4fb;
}

.adtc-header,
.adtc-context,
.adtc-pagination {
  padding: 10px 12px;
}

.adtc-header {
  background: #fbfcfe;
  border-bottom: 1px solid #d9e2ec;
}

.adtc-theme-dark .adtc-header {
  background: #162438;
  border-bottom-color: #2b3c56;
}

.adtc-header h3 {
  color: #142842;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
}

.adtc-context {
  background: #eaf5fd;
  border-bottom: 1px solid #d9e2ec;
}

.adtc-theme-dark .adtc-context {
  background: #183555;
  border-bottom-color: #2b3c56;
}

.adtc-responsive {
  overflow-x: auto;
}

.adtc-scroll {
  overflow: auto;
}

.adtc-fixed-header thead th {
  position: sticky;
  top: 0;
  z-index: 2;
}

.adtc-table {
  border-collapse: collapse;
  font-size: 13px;
  line-height: 1.35;
  min-width: 100%;
  table-layout: fixed;
  width: 100%;
}

.adtc-responsive .adtc-table {
  min-width: 720px;
}

.adtc-table thead th {
  background: #f7f9fc;
  border-bottom: 1px solid #cbd6e2;
  border-right: 1px solid #e7edf4;
  color: #405874;
  font-size: 12px;
  font-weight: 700;
  padding: 0;
  text-align: left;
  vertical-align: middle;
}

.adtc-table thead th:last-child {
  border-right: 0;
}

.adtc-group-header {
  padding: 8px 10px !important;
  text-align: center;
}

.adtc-theme-dark .adtc-table thead th {
  background: #162438;
  border-bottom-color: #3f5678;
  color: #b0c1d8;
}

.adtc-table td {
  border-bottom: 1px solid #d9e2ec;
  border-right: 1px solid #eef3f7;
  color: inherit;
  height: 38px;
  padding: 7px 10px;
  vertical-align: middle;
}

.adtc-table td:last-child {
  border-right: 0;
}

.adtc-theme-dark .adtc-table td {
  border-bottom-color: #2b3c56;
  border-right-color: #243650;
}

.adtc-theme-dark .adtc-table thead th {
  border-right-color: #243650;
}

.adtc-row-hoverable:hover td {
  background: #f2f8fd;
}

.adtc-theme-dark .adtc-row-hoverable:hover td {
  background: #183555;
}

.adtc-row-pointer td {
  cursor: pointer;
}

.adtc-row:focus {
  outline: 2px solid rgba(12, 115, 184, 0.34);
  outline-offset: -2px;
}

.adtc-row:focus td {
  background: #eef7ff;
}

.adtc-row-striped:nth-child(odd) td {
  background: #fbfcfe;
}

.adtc-theme-dark .adtc-row-striped:nth-child(odd) td {
  background: #142238;
}

.adtc-row-dense td {
  height: 32px;
  padding: 5px 9px;
}

.adtc-row-selected td {
  background: #e9f4fd;
}

.adtc-row-pinned-top td,
.adtc-row-pinned-bottom td {
  background: #f3f8fc;
  font-weight: 600;
}

.adtc-theme-dark .adtc-row-pinned-top td,
.adtc-theme-dark .adtc-row-pinned-bottom td {
  background: #183555;
}

.adtc-theme-dark .adtc-row-selected td {
  background: #1e4268;
}

.adtc-align-right {
  text-align: right;
}

.adtc-align-center {
  text-align: center;
}

.adtc-nowrap {
  white-space: nowrap;
}

.adtc-wrap {
  white-space: normal;
}

.adtc-sort-button {
  align-items: center;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: default;
  display: inline-flex;
  font: inherit;
  justify-content: flex-start;
  min-height: 36px;
  padding: 8px 10px;
  text-align: left;
  width: 100%;
}

.adtc-sort-button:focus {
  outline: 2px solid rgba(12, 115, 184, 0.28);
  outline-offset: -2px;
}

.adtc-sort-button span:first-child {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.adtc-sortable {
  cursor: pointer;
}

.adtc-sort-right {
  justify-content: flex-end;
  text-align: right;
}

.adtc-sort-center {
  justify-content: center;
  text-align: center;
}

.adtc-sort-indicator {
  color: #8395a8;
  flex: 0 0 auto;
  font-size: 9px;
  margin-left: 6px;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  text-transform: uppercase;
  transition: max-width 0.16s ease, opacity 0.16s ease;
  white-space: nowrap;
}

.adtc-sort-indicator.active {
  color: #0c73b8;
  max-width: 36px;
  opacity: 1;
}

.adtc-table thead th:hover .adtc-sort-indicator {
  max-width: 36px;
  opacity: 0.72;
}

.adtc-select-col {
  background: #fbfdff;
  min-width: 54px;
  padding-left: 16px !important;
  padding-right: 16px !important;
  text-align: center;
  white-space: nowrap;
  width: 54px;
}

.adtc-expand-col {
  text-align: center;
  white-space: nowrap;
  width: 46px;
}

.adtc-select-col input {
  accent-color: #0c73b8;
  appearance: none;
  background: #ffffff;
  border: 1px solid #9fb0c3;
  border-radius: 3px;
  cursor: pointer;
  display: block;
  height: 16px;
  margin: 0 auto;
  position: relative;
  vertical-align: middle;
  width: 16px;
}

.adtc-select-col input[type='radio'] {
  border-radius: 999px;
}

.adtc-select-col input:checked {
  background: #0c73b8;
  border-color: #0c73b8;
}

.adtc-select-col input[type='checkbox']:checked:after {
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  content: '';
  height: 8px;
  left: 5px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg);
  width: 4px;
}

.adtc-select-col input[type='radio']:checked:after {
  background: #ffffff;
  border-radius: 999px;
  content: '';
  height: 6px;
  left: 4px;
  position: absolute;
  top: 4px;
  width: 6px;
}

.adtc-select-col input:disabled {
  background: #eef2f6;
  border-color: #c6d0dc;
  cursor: not-allowed;
  opacity: 0.7;
}

.adtc-select-col input:focus {
  outline: 2px solid rgba(12, 115, 184, 0.28);
  outline-offset: 2px;
}

.adtc-expander {
  align-items: center;
  background: transparent;
  border: 1px solid #d9e2ec;
  border-radius: 999px;
  color: #0c73b8;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  height: 26px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  width: 26px;
}

.adtc-theme-dark .adtc-expander {
  border-color: #3f5678;
  color: #7cc7ff;
}

.adtc-expander:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.adtc-expanded-row td {
  background: #f8fafc;
}

.adtc-theme-dark .adtc-expanded-row td {
  background: #162438;
}

.adtc-expanded-cell {
  padding: 12px;
}

.adtc-group-row td {
  background: #eef6fd;
  border-bottom: 1px solid #d9e2ec;
  color: #17324d;
  padding: 8px 10px;
}

.adtc-theme-dark .adtc-group-row td {
  background: #183555;
  border-bottom-color: #2b3c56;
  color: #eef4fb;
}

.adtc-group-cell {
  align-items: center;
  display: flex;
  gap: 8px;
  min-width: 0;
}

.adtc-group-cell em {
  color: #59708a;
  flex: 0 0 auto;
  font-size: 12px;
  font-style: normal;
  margin-left: auto;
  white-space: nowrap;
}

.adtc-group-toggle {
  align-items: center;
  background: #ffffff;
  border: 1px solid #d9e2ec;
  border-radius: 999px;
  color: #0c73b8;
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 700;
  height: 26px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  width: 26px;
}

.adtc-pinned-left {
  box-shadow: 2px 0 0 rgba(12, 115, 184, 0.08);
}

.adtc-pinned-right {
  box-shadow: -2px 0 0 rgba(12, 115, 184, 0.08);
}

.adtc-pagination {
  align-items: center;
  border-top: 1px solid #d9e2ec;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
}

.adtc-theme-dark .adtc-pagination {
  border-top-color: #2b3c56;
}

.adtc-pagination-meta {
  color: #59708a;
  font-size: 12px;
}

.adtc-theme-dark .adtc-pagination-meta {
  color: #b0c1d8;
}

.adtc-pagination-controls {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.adtc-pagination-size {
  align-items: center;
  color: #59708a;
  display: inline-flex;
  gap: 6px;
  font-size: 12px;
}

.adtc-pagination select,
.adtc-pagination button {
  background: #ffffff;
  border: 1px solid #d9e2ec;
  border-radius: 6px;
  color: #17324d;
  font-size: 12px;
  min-height: 30px;
  padding: 5px 9px;
}

.adtc-pagination select {
  min-width: 64px;
}

.adtc-theme-dark .adtc-pagination select,
.adtc-theme-dark .adtc-pagination button {
  background: #111c2d;
  border-color: #2b3c56;
  color: #eef4fb;
}

.adtc-pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.adtc-page-indicator {
  color: #59708a;
  font-size: 12px;
}

.adtc-theme-dark .adtc-page-indicator {
  color: #b0c1d8;
}

.adtc-state {
  color: #59708a;
  padding: 32px 16px;
  text-align: center;
}

.adtc-theme-dark .adtc-state {
  color: #b0c1d8;
}
`;
