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

  <div *ngIf="progressPending" class="adtc-state adtc-loading" role="status" aria-live="polite" [attr.style]="loadingStyleText">
    {{ localize('', 'loadingText') }}
  </div>

  <div *ngIf="!progressPending && !hasRows" class="adtc-state" role="status" aria-live="polite">
    {{ noDataText }}
  </div>

  <div *ngIf="!progressPending && hasRows" #adtcRows>
      <div [attr.class]="wrapperClassName">
      <div [attr.class]="scrollClassName" [attr.style]="scrollStyleText">
        <table
          class="adtc-table"
          role="grid"
          [attr.aria-label]="tableAriaLabel"
          [attr.aria-rowcount]="ariaRowCount"
          [attr.aria-colcount]="expandedColspan">
          <thead *ngIf="!noTableHead">
            <tr *ngIf="hasColumnGroups" role="row">
              <th *ngIf="selectableRows" class="adtc-select-col" rowspan="2" scope="col" role="columnheader">
                <input
                  *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                  type="checkbox"
                  [attr.aria-label]="getSelectAllAriaLabel()"
                  [attr.aria-checked]="selectAllAriaChecked"
                  [indeterminate]="someRowsSelected"
                  [checked]="allRowsSelected"
                  (click)="$event.stopPropagation()"
                  (change)="toggleAllRows($any($event.target).checked)" />
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
                  [attr.aria-label]="getSelectAllAriaLabel()"
                  [attr.aria-checked]="selectAllAriaChecked"
                  [indeterminate]="someRowsSelected"
                  [checked]="allRowsSelected"
                  (click)="$event.stopPropagation()"
                  (change)="toggleAllRows($any($event.target).checked)" />
              </th>

              <th *ngIf="expandableRows && !expandableRowsHideExpander && !hasColumnGroups" class="adtc-expand-col" scope="col" role="columnheader"></th>

              <th
                *ngFor="let column of visibleColumns"
                [attr.class]="getHeaderClassName(column)"
                [attr.style]="getHeaderStyleText(column)"
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
                    {{ getSortIndicatorText(column) }}
                  </span>
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            <ng-template ngFor let-row [ngForOf]="displayedRows" [ngForTrackBy]="rowTrackBy" let-rowIndex="index">
              <tr *ngIf="isGroupRow(row)" class="adtc-group-row" role="row" [attr.id]="getGroupRowId(row)" [attr.aria-rowindex]="getRowAriaIndex(rowIndex)">
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
                  <em>{{ getGroupRowCountText(row) }}</em>
                </td>
              </tr>

              <tr
                *ngIf="!isGroupRow(row)"
                role="row"
                [attr.aria-rowindex]="getRowAriaIndex(rowIndex)"
                [attr.class]="getRowClassName(row)"
                [attr.style]="getRowStyleText(row)"
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

                <td *ngFor="let column of visibleColumns" [attr.class]="getCellClassName(column)" [attr.style]="getCellStyleText(column)" role="gridcell">
                  <ng-template [ngIf]="column.cellTemplate">
                    <ng-template
                      [ngTemplateOutlet]="column.cellTemplate"
                      [ngTemplateOutletContext]="getCellContext(row, column, rowIndex)">
                    </ng-template>
                  </ng-template>
                  <ng-template [ngIf]="!column.cellTemplate">
                    {{ getCellText(row, column, rowIndex) }}
                  </ng-template>
                </td>
              </tr>

              <tr
                *ngIf="!isGroupRow(row) && expandableRows && expandableRowTemplate && isRowExpanded(row)"
                class="adtc-expanded-row"
                role="row"
                [attr.aria-rowindex]="getRowAriaIndex(rowIndex) + 1"
                [attr.id]="getExpandedRowId(row)">
                <td class="adtc-expanded-cell" [attr.colspan]="expandedColspan" role="gridcell">
                  <ng-template
                    [ngTemplateOutlet]="expandableRowTemplate"
                    [ngTemplateOutletContext]="getExpandableContext(row, rowIndex)">
                  </ng-template>
                </td>
              </tr>
            </ng-template>
          </tbody>
        </table>
      </div>
    </div>

    <ng-container *ngIf="showPagination && !persistPagination" [ngTemplateOutlet]="adtcPagination"></ng-container>
  </div>

  <ng-container *ngIf="showPersistentPagination" [ngTemplateOutlet]="adtcPagination"></ng-container>
</div>

<ng-template #adtcPagination>
  <div class="adtc-pagination" [attr.role]="paginationAriaLabel ? 'navigation' : null" [attr.aria-label]="paginationAriaLabel">
    <ng-container
      *ngIf="paginationTemplate; else adtcPaginationContent"
      [ngTemplateOutlet]="paginationTemplate"
      [ngTemplateOutletContext]="paginationContext"></ng-container>
  </div>
</ng-template>

<ng-template #adtcPaginationContent>
  <div class="adtc-pagination-meta" aria-live="polite" aria-atomic="true">
    {{ paginationOption('showingText') }} {{ startRow }}-{{ endRow }} {{ paginationOption('rangeSeparatorText') }} {{ totalRows }}
  </div>

  <div class="adtc-pagination-controls">
    <label *ngIf="!paginationHideRowsPerPage && !paginationOption('noRowsPerPage')" class="adtc-pagination-size">
      {{ paginationOption('rowsPerPageText') }}
      <select [value]="rowsPerPage" [attr.aria-label]="localize('pagination', 'rowsPerPageAriaLabel') || null" (change)="changeRowsPerPage($any($event.target).value)">
        <option
          *ngFor="let size of rowsPerPageOptions; let index = index; let last = last; let sizes = ngForOf"
          [value]="size"
          [selected]="size === rowsPerPage && sizes.indexOf(size) === index">
          {{ getRowsPerPageOptionLabel(size, last) }}
        </option>
      </select>
    </label>

    <button type="button" (click)="changePage(1); keepPagerFocus($event)" [disabled]="currentPage === 1" [attr.aria-label]="localize('pagination', 'firstPageAriaLabel') || null">{{ paginationOption('firstPageText') }}</button>
    <button type="button" (click)="changePage(currentPage - 1); keepPagerFocus($event)" [disabled]="currentPage === 1" [attr.aria-label]="localize('pagination', 'previousPageAriaLabel') || null">{{ paginationOption('previousPageText') }}</button>
    <span class="adtc-page-indicator">{{ paginationOption('pageText') }} {{ currentPage }} {{ paginationOption('rangeSeparatorText') }} {{ totalPages }}</span>
    <button type="button" (click)="changePage(currentPage + 1); keepPagerFocus($event)" [disabled]="currentPage === totalPages" [attr.aria-label]="localize('pagination', 'nextPageAriaLabel') || null">{{ paginationOption('nextPageText') }}</button>
    <button type="button" (click)="changePage(totalPages); keepPagerFocus($event)" [disabled]="currentPage === totalPages" [attr.aria-label]="localize('pagination', 'lastPageAriaLabel') || null">{{ paginationOption('lastPageText') }}</button>
  </div>
</ng-template>
`;
