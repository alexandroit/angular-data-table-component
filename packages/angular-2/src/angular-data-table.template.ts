export const DATA_TABLE_TEMPLATE = `
<div [attr.class]="shellClassName">
  <div *ngIf="title && !noHeader" class="adtc-header">
    <h3>{{ title }}</h3>
  </div>

  <div *ngIf="showContextBar" class="adtc-context">
    <strong>{{ selectedCount }}</strong>
    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}
    {{ contextMessage.message }}
  </div>

  <div *ngIf="progressPending" class="adtc-state adtc-loading" role="status" aria-live="polite">
    Loading...
  </div>

  <div *ngIf="!progressPending && !hasRows" class="adtc-state" role="status" aria-live="polite">
    {{ noDataText }}
  </div>

  <div *ngIf="!progressPending && hasRows">
      <div [attr.class]="wrapperClassName">
      <div [attr.class]="scrollClassName" [ngStyle]="scrollStyle">
        <table
          class="adtc-table"
          role="grid"
          [attr.aria-label]="tableAriaLabel"
          [attr.aria-rowcount]="totalRows"
          [attr.aria-colcount]="expandedColspan">
          <thead *ngIf="!noTableHead">
            <tr *ngIf="hasColumnGroups" role="row">
              <th *ngIf="selectableRows" class="adtc-select-col" rowspan="2" scope="col" role="columnheader">
                <input
                  *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                  type="checkbox"
                  [attr.aria-label]="selectAllAriaLabel"
                  [attr.aria-checked]="selectAllAriaChecked"
                  [indeterminate]="someRowsSelected"
                  [checked]="allRowsSelected"
                  (click)="$event.stopPropagation()"
                  (change)="toggleAllRows($event.target.checked)" />
              </th>

              <th *ngIf="expandableRows && !expandableRowsHideExpander" class="adtc-expand-col" rowspan="2" scope="col" role="columnheader"></th>

              <th *ngFor="let group of columnGroups" class="adtc-group-header" [attr.colspan]="group.colspan" scope="colgroup" role="columnheader">
                {{ group.name }}
              </th>
            </tr>

            <tr role="row">
              <th *ngIf="selectableRows && !hasColumnGroups" class="adtc-select-col" scope="col" role="columnheader">
                <input
                  *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                  type="checkbox"
                  [attr.aria-label]="selectAllAriaLabel"
                  [attr.aria-checked]="selectAllAriaChecked"
                  [indeterminate]="someRowsSelected"
                  [checked]="allRowsSelected"
                  (click)="$event.stopPropagation()"
                  (change)="toggleAllRows($event.target.checked)" />
              </th>

              <th *ngIf="expandableRows && !expandableRowsHideExpander && !hasColumnGroups" class="adtc-expand-col" scope="col" role="columnheader"></th>

              <th
                *ngFor="let column of visibleColumns"
                [attr.class]="getHeaderClassName(column)"
                [ngStyle]="getHeaderStyle(column)"
                scope="col"
                role="columnheader"
                [attr.aria-sort]="getAriaSort(column)">
                <button
                  type="button"
	                  [attr.class]="getSortButtonClassName(column)"
	                  [attr.aria-label]="getSortButtonAriaLabel(column)"
	                  [disabled]="!column.sortable"
	                  (keydown)="handleSortButtonKeydown($event, column)"
	                  (click)="toggleSort(column)">
                  <span>{{ column.name }}</span>
                  <span *ngIf="column.sortable" [attr.class]="getSortIndicatorClassName(column)">
                    {{ activeSortColumn === column ? (sortDirection === 'asc' ? 'Asc' : 'Desc') : 'Sort' }}
                  </span>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            <template ngFor let-row [ngForOf]="displayedRows" let-rowIndex="index">
              <tr *ngIf="isGroupRow(row)" class="adtc-group-row" role="row" [attr.id]="getGroupRowId(row)">
                <td class="adtc-group-cell" [attr.colspan]="expandedColspan" role="gridcell">
                  <button
                    type="button"
                    class="adtc-group-toggle"
	                    [attr.aria-label]="getGroupToggleAriaLabel(row)"
	                    [attr.aria-expanded]="isGroupRowExpanded(row)"
	                    [attr.aria-controls]="getGroupRowId(row)"
	                    (keydown)="handleGroupToggleKeydown($event, row)"
	                    (click)="toggleGroupRow(row)">
                    {{ isGroupRowExpanded(row) ? '-' : '+' }}
                  </button>
                  <strong>{{ row.groupLabel }}</strong>
                  <span>{{ row.groupValue }}</span>
                  <em>{{ row.leafRows.length }} rows</em>
                </td>
              </tr>

              <tr
                *ngIf="!isGroupRow(row)"
                role="row"
                [attr.class]="getRowClassName(row)"
                [ngStyle]="getRowStyle(row)"
                [attr.tabindex]="getRowTabIndex(row)"
                [attr.aria-selected]="getRowAriaSelected(row)"
                (keydown)="handleRowKeydown($event, row)"
                (click)="handleRowClick(row)"
                (dblclick)="handleRowDoubleClick(row)"
                (mouseenter)="handleMouseEnter(row)"
                (mouseleave)="handleMouseLeave(row)">
                <td *ngIf="selectableRows" class="adtc-select-col" role="gridcell">
                  <input
                    [type]="selectableRowsSingle ? 'radio' : 'checkbox'"
                    [attr.aria-label]="getRowSelectionAriaLabel(row, rowIndex)"
                    [attr.aria-checked]="isRowSelected(row)"
                    [checked]="isRowSelected(row)"
                    [disabled]="isSelectableDisabled(row)"
                    (click)="$event.stopPropagation()"
                    (change)="toggleRowSelection(row)" />
                </td>

                <td *ngIf="expandableRows && !expandableRowsHideExpander" class="adtc-expand-col" role="gridcell">
                  <button
                    type="button"
                    class="adtc-expander"
                    [attr.aria-label]="getRowExpandAriaLabel(row, rowIndex)"
	                    [attr.aria-expanded]="isRowExpanded(row)"
	                    [attr.aria-controls]="getExpandedRowId(row)"
	                    [disabled]="isExpandableDisabled(row)"
	                    (keydown)="handleExpanderKeydown($event, row)"
	                    (click)="$event.stopPropagation(); toggleRowExpansion(row)">
                    {{ isRowExpanded(row) ? '-' : '+' }}
                  </button>
                </td>

                <td *ngFor="let column of visibleColumns" [attr.class]="getCellClassName(column)" [ngStyle]="getCellStyle(column)" role="gridcell">
                  <template [ngIf]="column.cellTemplate">
                    <template
                      [ngTemplateOutlet]="column.cellTemplate"
                      [ngOutletContext]="getCellContext(row, column, rowIndex)">
                    </template>
                  </template>
                  <template [ngIf]="!column.cellTemplate">
                    {{ getCellText(row, column, rowIndex) }}
                  </template>
                </td>
              </tr>

              <tr
                *ngIf="!isGroupRow(row) && expandableRows && expandableRowTemplate && isRowExpanded(row)"
                class="adtc-expanded-row"
                role="row"
                [attr.id]="getExpandedRowId(row)">
                <td class="adtc-expanded-cell" [attr.colspan]="expandedColspan" role="gridcell">
                  <template
                    [ngTemplateOutlet]="expandableRowTemplate"
                    [ngOutletContext]="getExpandableContext(row, rowIndex)">
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <div *ngIf="showPagination" class="adtc-pagination">
      <div class="adtc-pagination-meta">
        Showing {{ startRow }}-{{ endRow }} of {{ totalRows }}
      </div>

      <div class="adtc-pagination-controls">
        <label class="adtc-pagination-size">
          Rows:
          <select [value]="rowsPerPage" (change)="changeRowsPerPage($event.target.value)">
            <option *ngFor="let size of paginationRowsPerPageOptions" [value]="size">
              {{ size }}
            </option>
          </select>
        </label>

        <button type="button" (click)="changePage(1)" [disabled]="currentPage === 1">First</button>
        <button type="button" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">Prev</button>
        <span class="adtc-page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button type="button" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">Next</button>
        <button type="button" (click)="changePage(totalPages)" [disabled]="currentPage === totalPages">Last</button>
      </div>
    </div>
  </div>
</div>
`;
