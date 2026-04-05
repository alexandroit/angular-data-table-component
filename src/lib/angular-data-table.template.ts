export const DATA_TABLE_TEMPLATE = `
<div [attr.class]="shellClassName">
  <div *ngIf="title && !noHeader" class="adtc-header">
    <h3>{{ title }}</h3>
  </div>

  <div *ngIf="subHeader && subHeaderTemplate" class="adtc-subheader">
    <ng-container *ngTemplateOutlet="subHeaderTemplate"></ng-container>
  </div>

  <div *ngIf="showContextBar" class="adtc-context">
    <strong>{{ selectedCount }}</strong>
    {{ selectedCount === 1 ? contextMessage.singular : contextMessage.plural }}
    {{ contextMessage.message }}
  </div>

  <div *ngIf="progressPending" class="adtc-state adtc-loading">
    Loading…
  </div>

  <div *ngIf="!progressPending && !hasRows" class="adtc-state">
    {{ noDataText }}
  </div>

  <ng-container *ngIf="!progressPending && hasRows">
    <div [attr.class]="getWrapperClassName()">
      <div [attr.class]="getScrollClassName()" [attr.style]="getScrollStyleAttribute()">
        <table class="adtc-table" [attr.aria-label]="ariaLabel || null">
          <thead *ngIf="!noTableHead">
            <tr>
              <ng-container *ngIf="selectableRows">
                <th class="adtc-select-col">
                  <input
                    *ngIf="!selectableRowsSingle && !selectableRowsNoSelectAll"
                    type="checkbox"
                    [checked]="allRowsSelected"
                    (click)="$event.stopPropagation()"
                    (change)="toggleAllRows($any($event.target).checked)" />
                </th>
              </ng-container>

              <ng-container *ngIf="expandableRows && !expandableRowsHideExpander">
                <th class="adtc-expand-col"></th>
              </ng-container>

              <ng-container *ngFor="let column of visibleColumns; trackBy: trackByColumn">
                <th [attr.class]="getHeaderClassName(column)" [attr.style]="getHeaderStyleAttribute(column)">
                  <button
                    type="button"
                    [attr.class]="getSortButtonClassName(column)"
                    [disabled]="!column.sortable"
                    (click)="toggleSort(column)">
                    <span>{{ column.name }}</span>
                    <span *ngIf="column.sortable" [attr.class]="getSortIndicatorClassName(column)">
                      {{ activeSortColumn === column ? (sortDirection === 'asc' ? '▲' : '▼') : '↕' }}
                    </span>
                  </button>
                </th>
              </ng-container>
            </tr>
          </thead>

          <tbody>
            <ng-container *ngFor="let row of displayedRows; let rowIndex = index; trackBy: trackByRow">
              <tr
                [attr.class]="getRowClassName(row)"
                [attr.style]="getRowStyleAttribute(row)"
                (click)="handleRowClick(row)"
                (dblclick)="handleRowDoubleClick(row)"
                (mouseenter)="handleMouseEnter(row)"
                (mouseleave)="handleMouseLeave(row)">
                <ng-container *ngIf="selectableRows">
                  <td class="adtc-select-col">
                    <input
                      [type]="selectableRowsSingle ? 'radio' : 'checkbox'"
                      [checked]="isRowSelected(row)"
                      [disabled]="isSelectableDisabled(row)"
                      (click)="$event.stopPropagation()"
                      (change)="toggleRowSelection(row)" />
                  </td>
                </ng-container>

                <ng-container *ngIf="expandableRows && !expandableRowsHideExpander">
                  <td class="adtc-expand-col">
                    <button
                      type="button"
                      class="adtc-expander"
                      [disabled]="isExpandableDisabled(row)"
                      (click)="$event.stopPropagation(); toggleRowExpansion(row)">
                      {{ isRowExpanded(row) ? '−' : '+' }}
                    </button>
                  </td>
                </ng-container>

                <ng-container *ngFor="let column of visibleColumns; trackBy: trackByColumn">
                  <td [attr.class]="getCellClassName(column)" [attr.style]="getCellStyleAttribute(column)">
                    <ng-container *ngIf="column.cellTemplate">
                      <ng-container
                        *ngTemplateOutlet="column.cellTemplate; context: getCellContext(row, column, rowIndex)">
                      </ng-container>
                    </ng-container>
                    <ng-container *ngIf="!column.cellTemplate">
                      {{ getCellText(row, column, rowIndex) }}
                    </ng-container>
                  </td>
                </ng-container>
              </tr>

              <tr *ngIf="expandableRows && expandableRowTemplate && isRowExpanded(row)" class="adtc-expanded-row">
                <td
                  class="adtc-expanded-cell"
                  [attr.colspan]="visibleColumns.length + (selectableRows ? 1 : 0) + (expandableRows && !expandableRowsHideExpander ? 1 : 0)">
                  <ng-container
                    *ngTemplateOutlet="expandableRowTemplate; context: getExpandableContext(row, rowIndex)">
                  </ng-container>
                </td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>
    </div>

    <div *ngIf="showPagination" class="adtc-pagination">
      <div class="adtc-pagination-meta">
        Showing {{ startRow }}–{{ endRow }} of {{ totalRows }}
      </div>

      <div class="adtc-pagination-controls">
        <label class="adtc-pagination-size">
          Rows:
          <select [value]="rowsPerPage" (change)="changeRowsPerPage(+$any($event.target).value)">
            <option *ngFor="let size of paginationRowsPerPageOptions" [value]="size">
              {{ size }}
            </option>
          </select>
        </label>

        <button type="button" (click)="changePage(1)" [disabled]="currentPage === 1">
          First
        </button>
        <button type="button" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">
          Prev
        </button>
        <span class="adtc-page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button type="button" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">
          Next
        </button>
        <button type="button" (click)="changePage(totalPages)" [disabled]="currentPage === totalPages">
          Last
        </button>
      </div>
    </div>
  </ng-container>
</div>
`;
