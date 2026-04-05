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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kYXRhLXRhYmxlLnRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hbmd1bGFyLWRhdGEtdGFibGUudGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkpsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERBVEFfVEFCTEVfVEVNUExBVEUgPSBgXG48ZGl2IFthdHRyLmNsYXNzXT1cInNoZWxsQ2xhc3NOYW1lXCI+XG4gIDxkaXYgKm5nSWY9XCJ0aXRsZSAmJiAhbm9IZWFkZXJcIiBjbGFzcz1cImFkdGMtaGVhZGVyXCI+XG4gICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cInN1YkhlYWRlciAmJiBzdWJIZWFkZXJUZW1wbGF0ZVwiIGNsYXNzPVwiYWR0Yy1zdWJoZWFkZXJcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3ViSGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cInNob3dDb250ZXh0QmFyXCIgY2xhc3M9XCJhZHRjLWNvbnRleHRcIj5cbiAgICA8c3Ryb25nPnt7IHNlbGVjdGVkQ291bnQgfX08L3N0cm9uZz5cbiAgICB7eyBzZWxlY3RlZENvdW50ID09PSAxID8gY29udGV4dE1lc3NhZ2Uuc2luZ3VsYXIgOiBjb250ZXh0TWVzc2FnZS5wbHVyYWwgfX1cbiAgICB7eyBjb250ZXh0TWVzc2FnZS5tZXNzYWdlIH19XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJwcm9ncmVzc1BlbmRpbmdcIiBjbGFzcz1cImFkdGMtc3RhdGUgYWR0Yy1sb2FkaW5nXCI+XG4gICAgTG9hZGluZ+KAplxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiIXByb2dyZXNzUGVuZGluZyAmJiAhaGFzUm93c1wiIGNsYXNzPVwiYWR0Yy1zdGF0ZVwiPlxuICAgIHt7IG5vRGF0YVRleHQgfX1cbiAgPC9kaXY+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFwcm9ncmVzc1BlbmRpbmcgJiYgaGFzUm93c1wiPlxuICAgIDxkaXYgW2F0dHIuY2xhc3NdPVwiZ2V0V3JhcHBlckNsYXNzTmFtZSgpXCI+XG4gICAgICA8ZGl2IFthdHRyLmNsYXNzXT1cImdldFNjcm9sbENsYXNzTmFtZSgpXCIgW2F0dHIuc3R5bGVdPVwiZ2V0U2Nyb2xsU3R5bGVBdHRyaWJ1dGUoKVwiPlxuICAgICAgICA8dGFibGUgY2xhc3M9XCJhZHRjLXRhYmxlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWwgfHwgbnVsbFwiPlxuICAgICAgICAgIDx0aGVhZCAqbmdJZj1cIiFub1RhYmxlSGVhZFwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0YWJsZVJvd3NcIj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJhZHRjLXNlbGVjdC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFzZWxlY3RhYmxlUm93c1NpbmdsZSAmJiAhc2VsZWN0YWJsZVJvd3NOb1NlbGVjdEFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImFsbFJvd3NTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZUFsbFJvd3MoJGFueSgkZXZlbnQudGFyZ2V0KS5jaGVja2VkKVwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGVSb3dzICYmICFleHBhbmRhYmxlUm93c0hpZGVFeHBhbmRlclwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cImFkdGMtZXhwYW5kLWNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiB2aXNpYmxlQ29sdW1uczsgdHJhY2tCeTogdHJhY2tCeUNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDx0aCBbYXR0ci5jbGFzc109XCJnZXRIZWFkZXJDbGFzc05hbWUoY29sdW1uKVwiIFthdHRyLnN0eWxlXT1cImdldEhlYWRlclN0eWxlQXR0cmlidXRlKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmNsYXNzXT1cImdldFNvcnRCdXR0b25DbGFzc05hbWUoY29sdW1uKVwiXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhY29sdW1uLnNvcnRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVNvcnQoY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBjb2x1bW4ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjb2x1bW4uc29ydGFibGVcIiBbYXR0ci5jbGFzc109XCJnZXRTb3J0SW5kaWNhdG9yQ2xhc3NOYW1lKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBhY3RpdmVTb3J0Q29sdW1uID09PSBjb2x1bW4gPyAoc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAn4payJyA6ICfilrwnKSA6ICfihpUnIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIGRpc3BsYXllZFJvd3M7IGxldCByb3dJbmRleCA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5Um93XCI+XG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIFthdHRyLmNsYXNzXT1cImdldFJvd0NsYXNzTmFtZShyb3cpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5zdHlsZV09XCJnZXRSb3dTdHlsZUF0dHJpYnV0ZShyb3cpXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlUm93Q2xpY2socm93KVwiXG4gICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cImhhbmRsZVJvd0RvdWJsZUNsaWNrKHJvdylcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhhbmRsZU1vdXNlRW50ZXIocm93KVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaGFuZGxlTW91c2VMZWF2ZShyb3cpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGFibGVSb3dzXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJhZHRjLXNlbGVjdC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwic2VsZWN0YWJsZVJvd3NTaW5nbGUgPyAncmFkaW8nIDogJ2NoZWNrYm94J1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXNSb3dTZWxlY3RlZChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNTZWxlY3RhYmxlRGlzYWJsZWQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVSb3dTZWxlY3Rpb24ocm93KVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGVSb3dzICYmICFleHBhbmRhYmxlUm93c0hpZGVFeHBhbmRlclwiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWR0Yy1leHBhbmQtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkdGMtZXhwYW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0V4cGFuZGFibGVEaXNhYmxlZChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB0b2dnbGVSb3dFeHBhbnNpb24ocm93KVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGlzUm93RXhwYW5kZWQocm93KSA/ICfiiJInIDogJysnIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiB2aXNpYmxlQ29sdW1uczsgdHJhY2tCeTogdHJhY2tCeUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPHRkIFthdHRyLmNsYXNzXT1cImdldENlbGxDbGFzc05hbWUoY29sdW1uKVwiIFthdHRyLnN0eWxlXT1cImdldENlbGxTdHlsZUF0dHJpYnV0ZShjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW4uY2VsbFRlbXBsYXRlOyBjb250ZXh0OiBnZXRDZWxsQ29udGV4dChyb3csIGNvbHVtbiwgcm93SW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRDZWxsVGV4dChyb3csIGNvbHVtbiwgcm93SW5kZXgpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICA8dHIgKm5nSWY9XCJleHBhbmRhYmxlUm93cyAmJiBleHBhbmRhYmxlUm93VGVtcGxhdGUgJiYgaXNSb3dFeHBhbmRlZChyb3cpXCIgY2xhc3M9XCJhZHRjLWV4cGFuZGVkLXJvd1wiPlxuICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhZHRjLWV4cGFuZGVkLWNlbGxcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJ2aXNpYmxlQ29sdW1ucy5sZW5ndGggKyAoc2VsZWN0YWJsZVJvd3MgPyAxIDogMCkgKyAoZXhwYW5kYWJsZVJvd3MgJiYgIWV4cGFuZGFibGVSb3dzSGlkZUV4cGFuZGVyID8gMSA6IDApXCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXhwYW5kYWJsZVJvd1RlbXBsYXRlOyBjb250ZXh0OiBnZXRFeHBhbmRhYmxlQ29udGV4dChyb3csIHJvd0luZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJzaG93UGFnaW5hdGlvblwiIGNsYXNzPVwiYWR0Yy1wYWdpbmF0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWR0Yy1wYWdpbmF0aW9uLW1ldGFcIj5cbiAgICAgICAgU2hvd2luZyB7eyBzdGFydFJvdyB9feKAk3t7IGVuZFJvdyB9fSBvZiB7eyB0b3RhbFJvd3MgfX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYWR0Yy1wYWdpbmF0aW9uLWNvbnRyb2xzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImFkdGMtcGFnaW5hdGlvbi1zaXplXCI+XG4gICAgICAgICAgUm93czpcbiAgICAgICAgICA8c2VsZWN0IFt2YWx1ZV09XCJyb3dzUGVyUGFnZVwiIChjaGFuZ2UpPVwiY2hhbmdlUm93c1BlclBhZ2UoKyRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCI+XG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBzaXplIG9mIHBhZ2luYXRpb25Sb3dzUGVyUGFnZU9wdGlvbnNcIiBbdmFsdWVdPVwic2l6ZVwiPlxuICAgICAgICAgICAgICB7eyBzaXplIH19XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2hhbmdlUGFnZSgxKVwiIFtkaXNhYmxlZF09XCJjdXJyZW50UGFnZSA9PT0gMVwiPlxuICAgICAgICAgIEZpcnN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2hhbmdlUGFnZShjdXJyZW50UGFnZSAtIDEpXCIgW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSAxXCI+XG4gICAgICAgICAgUHJldlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZHRjLXBhZ2UtaW5kaWNhdG9yXCI+UGFnZSB7eyBjdXJyZW50UGFnZSB9fSBvZiB7eyB0b3RhbFBhZ2VzIH19PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2hhbmdlUGFnZShjdXJyZW50UGFnZSArIDEpXCIgW2Rpc2FibGVkXT1cImN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzXCI+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2UodG90YWxQYWdlcylcIiBbZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXNcIj5cbiAgICAgICAgICBMYXN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gO1xuIl19