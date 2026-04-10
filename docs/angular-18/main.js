"use strict";
(self["webpackChunkdocs_angular_18"] = self["webpackChunkdocs_angular_18"] || []).push([["main"],{

/***/ 3661:
/*!************************************************************!*\
  !*** ./.stackline-lib/lib/angular-data-table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableComponent: () => (/* binding */ DataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 4975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function DataTableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function DataTableComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function DataTableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableComponent_div_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.subHeaderTemplate);
  }
}
function DataTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.selectedCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.selectedCount === 1 ? ctx_r0.contextMessage.singular : ctx_r0.contextMessage.plural, " ", ctx_r0.contextMessage.message, " ");
  }
}
function DataTableComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DataTableComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.noDataText, " ");
  }
}
function DataTableComponent_ng_container_6_thead_4_ng_container_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_thead_4_ng_container_2_input_2_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    })("change", function DataTableComponent_ng_container_6_thead_4_ng_container_2_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleAllRows($event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.allRowsSelected);
  }
}
function DataTableComponent_ng_container_6_thead_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_6_thead_4_ng_container_2_input_2_Template, 1, 1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.selectableRowsSingle && !ctx_r0.selectableRowsNoSelectAll);
  }
}
function DataTableComponent_ng_container_6_thead_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function DataTableComponent_ng_container_6_thead_4_ng_container_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getSortIndicatorClassName(column_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.activeSortColumn === column_r4 ? ctx_r0.sortDirection === "asc" ? "\u25B2" : "\u25BC" : "\u2195", " ");
  }
}
function DataTableComponent_ng_container_6_thead_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th")(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_thead_4_ng_container_4_Template_button_click_2_listener() {
      const column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleSort(column_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataTableComponent_ng_container_6_thead_4_ng_container_4_span_5_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getHeaderClassName(column_r4))("style", ctx_r0.getHeaderStyleAttribute(column_r4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !column_r4.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getSortButtonClassName(column_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](column_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r4.sortable);
  }
}
function DataTableComponent_ng_container_6_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "thead")(1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_6_thead_4_ng_container_2_Template, 3, 1, "ng-container", 5)(3, DataTableComponent_ng_container_6_thead_4_ng_container_3_Template, 2, 0, "ng-container", 5)(4, DataTableComponent_ng_container_6_thead_4_ng_container_4_Template, 6, 6, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectableRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.expandableRows && !ctx_r0.expandableRowsHideExpander);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.visibleColumns)("ngForTrackBy", ctx_r0.trackByColumn);
  }
}
function DataTableComponent_ng_container_6_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 15)(2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_ng_container_6_ng_container_2_Template_input_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    })("change", function DataTableComponent_ng_container_6_ng_container_6_ng_container_2_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleRowSelection(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.selectableRowsSingle ? "radio" : "checkbox")("checked", ctx_r0.isRowSelected(row_r6))("disabled", ctx_r0.isSelectableDisabled(row_r6));
  }
}
function DataTableComponent_ng_container_6_ng_container_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18)(2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_ng_container_6_ng_container_3_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleRowExpansion(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.isExpandableDisabled(row_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.isRowExpanded(row_r6) ? "\u2212" : "+", " ");
  }
}
function DataTableComponent_ng_container_6_ng_container_6_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function DataTableComponent_ng_container_6_ng_container_6_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableComponent_ng_container_6_ng_container_6_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const row_r6 = ctx_r9.$implicit;
    const rowIndex_r11 = ctx_r9.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", column_r9.cellTemplate)("ngTemplateOutletContext", ctx_r0.getCellContext(row_r6, column_r9, rowIndex_r11));
  }
}
function DataTableComponent_ng_container_6_ng_container_6_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const row_r6 = ctx_r9.$implicit;
    const rowIndex_r11 = ctx_r9.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getCellText(row_r6, column_r9, rowIndex_r11), " ");
  }
}
function DataTableComponent_ng_container_6_ng_container_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_6_ng_container_6_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 5)(3, DataTableComponent_ng_container_6_ng_container_6_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getCellClassName(column_r9))("style", ctx_r0.getCellStyleAttribute(column_r9), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r9.cellTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !column_r9.cellTemplate);
  }
}
function DataTableComponent_ng_container_6_ng_container_6_tr_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function DataTableComponent_ng_container_6_ng_container_6_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_6_ng_container_6_tr_5_ng_container_2_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const row_r6 = ctx_r9.$implicit;
    const rowIndex_r11 = ctx_r9.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r0.visibleColumns.length + (ctx_r0.selectableRows ? 1 : 0) + (ctx_r0.expandableRows && !ctx_r0.expandableRowsHideExpander ? 1 : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.expandableRowTemplate)("ngTemplateOutletContext", ctx_r0.getExpandableContext(row_r6, rowIndex_r11));
  }
}
function DataTableComponent_ng_container_6_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_ng_container_6_Template_tr_click_1_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleRowClick(row_r6));
    })("dblclick", function DataTableComponent_ng_container_6_ng_container_6_Template_tr_dblclick_1_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleRowDoubleClick(row_r6));
    })("mouseenter", function DataTableComponent_ng_container_6_ng_container_6_Template_tr_mouseenter_1_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleMouseEnter(row_r6));
    })("mouseleave", function DataTableComponent_ng_container_6_ng_container_6_Template_tr_mouseleave_1_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleMouseLeave(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_ng_container_6_ng_container_6_ng_container_2_Template, 3, 3, "ng-container", 5)(3, DataTableComponent_ng_container_6_ng_container_6_ng_container_3_Template, 4, 2, "ng-container", 5)(4, DataTableComponent_ng_container_6_ng_container_6_ng_container_4_Template, 4, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataTableComponent_ng_container_6_ng_container_6_tr_5_Template, 3, 3, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getRowClassName(row_r6))("style", ctx_r0.getRowStyleAttribute(row_r6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectableRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.expandableRows && !ctx_r0.expandableRowsHideExpander);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.visibleColumns)("ngForTrackBy", ctx_r0.trackByColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.expandableRows && ctx_r0.expandableRowTemplate && ctx_r0.isRowExpanded(row_r6));
  }
}
function DataTableComponent_ng_container_6_div_7_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const size_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", size_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", size_r13, " ");
  }
}
function DataTableComponent_ng_container_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29)(4, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Rows: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableComponent_ng_container_6_div_7_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.changeRowsPerPage(+$event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTableComponent_ng_container_6_div_7_option_7_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_div_7_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.changePage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_div_7_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_div_7_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_container_6_div_7_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.changePage(ctx_r0.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Last ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" Showing ", ctx_r0.startRow, "\u2013", ctx_r0.endRow, " of ", ctx_r0.totalRows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.rowsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.paginationRowsPerPageOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Page ", ctx_r0.currentPage, " of ", ctx_r0.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function DataTableComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "div")(3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableComponent_ng_container_6_thead_4_Template, 5, 4, "thead", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DataTableComponent_ng_container_6_ng_container_6_Template, 6, 7, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTableComponent_ng_container_6_div_7_Template, 18, 11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getWrapperClassName());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx_r0.getScrollClassName())("style", ctx_r0.getScrollStyleAttribute(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.noTableHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.displayedRows)("ngForTrackBy", ctx_r0.trackByRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showPagination);
  }
}
class DataTableComponent {
  constructor() {
    this.columns = [];
    this.data = [];
    this.keyField = 'id';
    this.title = '';
    this.ariaLabel = '';
    this.pagination = false;
    this.paginationServer = false;
    this.paginationDefaultPage = 1;
    this.paginationPerPage = 10;
    this.paginationTotalRows = 0;
    this.paginationRowsPerPageOptions = [10, 15, 20, 25, 30];
    this.selectableRows = false;
    this.selectableRowsSingle = false;
    this.selectableRowsHighlight = false;
    this.selectableRowsNoSelectAll = false;
    this.selectableRowsVisibleOnly = false;
    this.clearSelectedRows = false;
    this.selectableRowSelected = null;
    this.selectableRowDisabled = null;
    this.expandableRows = false;
    this.expandableRowsHideExpander = false;
    this.expandOnRowClicked = false;
    this.expandOnRowDoubleClicked = false;
    this.expandableRowDisabled = null;
    this.expandableRowExpanded = null;
    this.expandableRowTemplate = null;
    this.striped = false;
    this.highlightOnHover = false;
    this.pointerOnHover = false;
    this.dense = false;
    this.responsive = true;
    this.progressPending = false;
    this.noHeader = false;
    this.noTableHead = false;
    this.noContextMenu = false;
    this.fixedHeader = false;
    this.fixedHeaderScrollHeight = '420px';
    this.subHeader = false;
    this.subHeaderTemplate = null;
    this.noDataText = 'There are no records to display';
    this.conditionalRowStyles = [];
    this.defaultSortFieldId = null;
    this.defaultSortAsc = true;
    this.sortServer = false;
    this.theme = 'default';
    this.contextMessage = {
      singular: 'item',
      plural: 'items',
      message: 'selected'
    };
    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.selectedRowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowsPerPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowDoubleClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowExpandToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.currentPage = 1;
    this.rowsPerPage = 10;
    this.sortDirection = 'asc';
    this.activeSortColumn = null;
    this.selectedKeys = new Set();
    this.expandedKeys = new Set();
    this.trackByColumn = (index, column) => column.id ?? column.name ?? index;
    this.trackByRow = (index, row) => this.getRowKey(row) || index;
  }
  ngOnChanges(changes) {
    if (changes['paginationPerPage']) {
      this.rowsPerPage = this.paginationPerPage;
    }
    if (changes['paginationDefaultPage']) {
      this.currentPage = this.paginationDefaultPage;
    }
    if (changes['clearSelectedRows'] && !changes['clearSelectedRows'].firstChange) {
      this.selectedKeys.clear();
      this.emitSelectionState();
    }
    if (changes['columns'] || changes['defaultSortFieldId'] || changes['defaultSortAsc']) {
      this.applyDefaultSort();
    }
    if (changes['data'] || changes['selectableRowSelected']) {
      this.syncProgrammaticSelection();
    }
    if (changes['data'] || changes['expandableRowExpanded']) {
      this.syncProgrammaticExpansion();
    }
    this.ensureValidPage();
  }
  get visibleColumns() {
    return this.columns.filter(column => !column.omit);
  }
  get shellClassName() {
    return ['adtc-shell', this.theme === 'dark' ? 'adtc-theme-dark' : ''].filter(Boolean).join(' ');
  }
  get sortedRows() {
    if (this.sortServer) {
      return [...this.data];
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sortRows)(this.data, this.activeSortColumn, this.sortDirection);
  }
  get displayedRows() {
    if (this.pagination && !this.paginationServer) {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      return this.sortedRows.slice(start, start + this.rowsPerPage);
    }
    return this.sortedRows;
  }
  get hasRows() {
    return this.data.length > 0;
  }
  get totalRows() {
    return this.paginationServer ? this.paginationTotalRows || this.data.length : this.sortedRows.length;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(Math.max(this.totalRows, 1) / this.rowsPerPage));
  }
  get startRow() {
    if (!this.totalRows) {
      return 0;
    }
    return (this.currentPage - 1) * this.rowsPerPage + 1;
  }
  get endRow() {
    if (!this.totalRows) {
      return 0;
    }
    return Math.min(this.currentPage * this.rowsPerPage, this.totalRows);
  }
  get selectedRows() {
    return this.data.filter(row => this.selectedKeys.has(this.getRowKey(row)));
  }
  get selectedCount() {
    return this.selectedRows.length;
  }
  get allRowsSelected() {
    const selectableRows = this.selectionScopeRows.filter(row => !this.isSelectableDisabled(row));
    return selectableRows.length > 0 && selectableRows.every(row => this.selectedKeys.has(this.getRowKey(row)));
  }
  get showContextBar() {
    return this.selectableRows && !this.noContextMenu && this.selectedCount > 0;
  }
  get showPagination() {
    return this.pagination && !this.progressPending && this.totalRows > 0;
  }
  get selectionScopeRows() {
    return this.selectableRowsVisibleOnly ? this.displayedRows : this.sortedRows;
  }
  getCellValue(row, column, rowIndex) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.resolveCellValue)(row, column, rowIndex);
  }
  getCellText(row, column, rowIndex) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toCellText)(this.getCellValue(row, column, rowIndex));
  }
  getCellContext(row, column, rowIndex) {
    return {
      $implicit: row,
      row,
      rowIndex,
      column,
      value: this.getCellValue(row, column, rowIndex)
    };
  }
  getExpandableContext(row, rowIndex) {
    return {
      $implicit: row,
      row,
      rowIndex
    };
  }
  getHeaderStyle(column) {
    return {
      width: column.width ?? null,
      minWidth: column.minWidth ?? null,
      maxWidth: column.maxWidth ?? null,
      ...column.headerStyle
    };
  }
  getCellStyle(column) {
    return {
      width: column.width ?? null,
      minWidth: column.minWidth ?? null,
      maxWidth: column.maxWidth ?? null,
      ...column.style
    };
  }
  getWrapperClassName() {
    return ['adtc-wrapper', this.responsive ? 'adtc-responsive' : ''].filter(Boolean).join(' ');
  }
  getScrollClassName() {
    return ['adtc-scroll', this.fixedHeader ? 'adtc-fixed-header' : ''].filter(Boolean).join(' ');
  }
  getScrollStyleAttribute() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.styleObjectToString)({
      maxHeight: this.fixedHeader ? this.fixedHeaderScrollHeight : null
    }) || null;
  }
  getSortButtonClassName(column) {
    return ['adtc-sort-button', column.sortable ? 'adtc-sortable' : ''].filter(Boolean).join(' ');
  }
  getSortIndicatorClassName(column) {
    return ['adtc-sort-indicator', this.activeSortColumn === column ? 'active' : ''].filter(Boolean).join(' ');
  }
  getHeaderClassName(column) {
    return [column.headerClassName || '', column.right ? 'adtc-align-right' : '', column.center ? 'adtc-align-center' : '', column.wrap ? 'adtc-wrap' : 'adtc-nowrap'].filter(Boolean).join(' ');
  }
  getCellClassName(column) {
    return [column.className || '', column.right ? 'adtc-align-right' : '', column.center ? 'adtc-align-center' : '', column.wrap ? 'adtc-wrap' : 'adtc-nowrap'].filter(Boolean).join(' ');
  }
  getRowClassNames(row) {
    const classNames = ['adtc-row'];
    if (this.striped) {
      classNames.push('adtc-row-striped');
    }
    if (this.highlightOnHover) {
      classNames.push('adtc-row-hoverable');
    }
    if (this.pointerOnHover) {
      classNames.push('adtc-row-pointer');
    }
    if (this.dense) {
      classNames.push('adtc-row-dense');
    }
    if (this.selectableRowsHighlight && this.selectedKeys.has(this.getRowKey(row))) {
      classNames.push('adtc-row-selected');
    }
    for (const conditionalStyle of this.conditionalRowStyles) {
      if (!conditionalStyle.when(row)) {
        continue;
      }
      const className = typeof conditionalStyle.className === 'function' ? conditionalStyle.className(row) : conditionalStyle.className;
      if (className) {
        classNames.push(className);
      }
    }
    return classNames;
  }
  getRowClassName(row) {
    return this.getRowClassNames(row).join(' ');
  }
  getRowStyle(row) {
    return this.conditionalRowStyles.reduce((acc, conditionalStyle) => {
      if (!conditionalStyle.when(row) || !conditionalStyle.style) {
        return acc;
      }
      const style = typeof conditionalStyle.style === 'function' ? conditionalStyle.style(row) : conditionalStyle.style;
      return {
        ...acc,
        ...style
      };
    }, {});
  }
  getHeaderStyleAttribute(column) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.styleObjectToString)(this.getHeaderStyle(column)) || null;
  }
  getCellStyleAttribute(column) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.styleObjectToString)(this.getCellStyle(column)) || null;
  }
  getRowStyleAttribute(row) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.styleObjectToString)(this.getRowStyle(row)) || null;
  }
  isRowSelected(row) {
    return this.selectedKeys.has(this.getRowKey(row));
  }
  isRowExpanded(row) {
    return this.expandedKeys.has(this.getRowKey(row));
  }
  isSelectableDisabled(row) {
    return this.selectableRowDisabled ? this.selectableRowDisabled(row) : false;
  }
  isExpandableDisabled(row) {
    return this.expandableRowDisabled ? this.expandableRowDisabled(row) : false;
  }
  toggleSort(column) {
    if (!column.sortable) {
      return;
    }
    if (this.activeSortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.activeSortColumn = column;
      this.sortDirection = 'asc';
    }
    this.currentPage = 1;
    const rows = this.sortedRows;
    this.sortChange.emit({
      column,
      direction: this.sortDirection,
      rows
    });
  }
  toggleAllRows(checked) {
    const rows = this.selectionScopeRows.filter(row => !this.isSelectableDisabled(row));
    if (checked) {
      for (const row of rows) {
        this.selectedKeys.add(this.getRowKey(row));
      }
    } else {
      for (const row of rows) {
        this.selectedKeys.delete(this.getRowKey(row));
      }
    }
    this.emitSelectionState();
  }
  toggleRowSelection(row) {
    if (!this.selectableRows || this.isSelectableDisabled(row)) {
      return;
    }
    const key = this.getRowKey(row);
    if (this.selectableRowsSingle) {
      this.selectedKeys.clear();
      this.selectedKeys.add(key);
    } else if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }
    this.emitSelectionState();
  }
  toggleRowExpansion(row) {
    if (!this.expandableRows || this.isExpandableDisabled(row)) {
      return;
    }
    const key = this.getRowKey(row);
    const expanded = !this.expandedKeys.has(key);
    if (expanded) {
      this.expandedKeys.add(key);
    } else {
      this.expandedKeys.delete(key);
    }
    this.rowExpandToggled.emit({
      expanded,
      row
    });
  }
  handleRowClick(row) {
    this.rowClicked.emit(row);
    if (this.expandableRows && this.expandOnRowClicked) {
      this.toggleRowExpansion(row);
    }
  }
  handleRowDoubleClick(row) {
    this.rowDoubleClicked.emit(row);
    if (this.expandableRows && this.expandOnRowDoubleClicked) {
      this.toggleRowExpansion(row);
    }
  }
  handleMouseEnter(row) {
    this.rowMouseEnter.emit(row);
  }
  handleMouseLeave(row) {
    this.rowMouseLeave.emit(row);
  }
  changePage(page) {
    this.currentPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(page, 1, this.totalPages);
    this.pageChange.emit({
      page: this.currentPage,
      totalRows: this.totalRows
    });
  }
  changeRowsPerPage(rowsPerPage) {
    this.rowsPerPage = rowsPerPage;
    this.ensureValidPage();
    this.rowsPerPageChange.emit({
      rowsPerPage: this.rowsPerPage,
      currentPage: this.currentPage
    });
  }
  applyDefaultSort() {
    if (!this.columns.length) {
      this.activeSortColumn = null;
      this.sortDirection = 'asc';
      return;
    }
    const defaultColumn = this.columns.find(column => column.id === this.defaultSortFieldId || String(column.id) === String(this.defaultSortFieldId));
    this.activeSortColumn = defaultColumn ?? this.activeSortColumn;
    this.sortDirection = this.defaultSortAsc ? 'asc' : 'desc';
  }
  syncProgrammaticSelection() {
    if (!this.selectableRowSelected) {
      return;
    }
    this.selectedKeys.clear();
    for (const row of this.data) {
      if (this.selectableRowSelected(row)) {
        this.selectedKeys.add(this.getRowKey(row));
        if (this.selectableRowsSingle) {
          break;
        }
      }
    }
    this.emitSelectionState();
  }
  syncProgrammaticExpansion() {
    if (!this.expandableRowExpanded) {
      return;
    }
    this.expandedKeys.clear();
    for (const row of this.data) {
      if (this.expandableRowExpanded(row)) {
        this.expandedKeys.add(this.getRowKey(row));
      }
    }
  }
  emitSelectionState() {
    this.selectedRowsChange.emit({
      allSelected: this.allRowsSelected,
      selectedCount: this.selectedCount,
      selectedRows: this.selectedRows
    });
  }
  ensureValidPage() {
    this.currentPage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.currentPage, 1, this.totalPages);
  }
  getRowKey(row) {
    const candidate = row[this.keyField];
    if (candidate == null || candidate === '') {
      return `row-${this.data.indexOf(row)}`;
    }
    return String(candidate);
  }
  static {
    this.ɵfac = function DataTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableComponent,
      selectors: [["stackline-data-table"]],
      inputs: {
        columns: "columns",
        data: "data",
        keyField: "keyField",
        title: "title",
        ariaLabel: "ariaLabel",
        pagination: "pagination",
        paginationServer: "paginationServer",
        paginationDefaultPage: "paginationDefaultPage",
        paginationPerPage: "paginationPerPage",
        paginationTotalRows: "paginationTotalRows",
        paginationRowsPerPageOptions: "paginationRowsPerPageOptions",
        selectableRows: "selectableRows",
        selectableRowsSingle: "selectableRowsSingle",
        selectableRowsHighlight: "selectableRowsHighlight",
        selectableRowsNoSelectAll: "selectableRowsNoSelectAll",
        selectableRowsVisibleOnly: "selectableRowsVisibleOnly",
        clearSelectedRows: "clearSelectedRows",
        selectableRowSelected: "selectableRowSelected",
        selectableRowDisabled: "selectableRowDisabled",
        expandableRows: "expandableRows",
        expandableRowsHideExpander: "expandableRowsHideExpander",
        expandOnRowClicked: "expandOnRowClicked",
        expandOnRowDoubleClicked: "expandOnRowDoubleClicked",
        expandableRowDisabled: "expandableRowDisabled",
        expandableRowExpanded: "expandableRowExpanded",
        expandableRowTemplate: "expandableRowTemplate",
        striped: "striped",
        highlightOnHover: "highlightOnHover",
        pointerOnHover: "pointerOnHover",
        dense: "dense",
        responsive: "responsive",
        progressPending: "progressPending",
        noHeader: "noHeader",
        noTableHead: "noTableHead",
        noContextMenu: "noContextMenu",
        fixedHeader: "fixedHeader",
        fixedHeaderScrollHeight: "fixedHeaderScrollHeight",
        subHeader: "subHeader",
        subHeaderTemplate: "subHeaderTemplate",
        noDataText: "noDataText",
        conditionalRowStyles: "conditionalRowStyles",
        defaultSortFieldId: "defaultSortFieldId",
        defaultSortAsc: "defaultSortAsc",
        sortServer: "sortServer",
        theme: "theme",
        contextMessage: "contextMessage"
      },
      outputs: {
        sortChange: "sortChange",
        selectedRowsChange: "selectedRowsChange",
        pageChange: "pageChange",
        rowsPerPageChange: "rowsPerPageChange",
        rowClicked: "rowClicked",
        rowDoubleClicked: "rowDoubleClicked",
        rowMouseEnter: "rowMouseEnter",
        rowMouseLeave: "rowMouseLeave",
        rowExpandToggled: "rowExpandToggled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 7,
      consts: [["class", "adtc-header", 4, "ngIf"], ["class", "adtc-subheader", 4, "ngIf"], ["class", "adtc-context", 4, "ngIf"], ["class", "adtc-state adtc-loading", 4, "ngIf"], ["class", "adtc-state", 4, "ngIf"], [4, "ngIf"], [1, "adtc-header"], [1, "adtc-subheader"], [4, "ngTemplateOutlet"], [1, "adtc-context"], [1, "adtc-state", "adtc-loading"], [1, "adtc-state"], [1, "adtc-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "adtc-pagination", 4, "ngIf"], [1, "adtc-select-col"], ["type", "checkbox", 3, "checked", "click", "change", 4, "ngIf"], ["type", "checkbox", 3, "click", "change", "checked"], [1, "adtc-expand-col"], ["type", "button", 3, "click", "disabled"], [3, "click", "dblclick", "mouseenter", "mouseleave"], ["class", "adtc-expanded-row", 4, "ngIf"], [3, "click", "change", "type", "checked", "disabled"], ["type", "button", 1, "adtc-expander", 3, "click", "disabled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "adtc-expanded-row"], [1, "adtc-expanded-cell"], [1, "adtc-pagination"], [1, "adtc-pagination-meta"], [1, "adtc-pagination-controls"], [1, "adtc-pagination-size"], [3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "adtc-page-indicator"], [3, "value"]],
      template: function DataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableComponent_div_1_Template, 3, 1, "div", 0)(2, DataTableComponent_div_2_Template, 2, 1, "div", 1)(3, DataTableComponent_div_3_Template, 4, 3, "div", 2)(4, DataTableComponent_div_4_Template, 2, 0, "div", 3)(5, DataTableComponent_div_5_Template, 2, 1, "div", 4)(6, DataTableComponent_ng_container_6_Template, 8, 8, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", ctx.shellClassName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title && !ctx.noHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.subHeader && ctx.subHeaderTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showContextBar);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressPending);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.progressPending && !ctx.hasRows);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.progressPending && ctx.hasRows);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.adtc-shell[_ngcontent-%COMP%] {\n  --adtc-bg: #ffffff;\n  --adtc-surface: #f8fafc;\n  --adtc-border: #d9e2ec;\n  --adtc-border-strong: #b9c8d8;\n  --adtc-text: #17324d;\n  --adtc-muted: #59708a;\n  --adtc-accent: #0c73b8;\n  --adtc-accent-soft: rgba(12, 115, 184, 0.08);\n  --adtc-selected: rgba(12, 115, 184, 0.12);\n  --adtc-striped: rgba(16, 44, 74, 0.03);\n  --adtc-hover: rgba(12, 115, 184, 0.06);\n  color: var(--adtc-text);\n}\n\n.adtc-theme-dark[_ngcontent-%COMP%] {\n  --adtc-bg: #111c2d;\n  --adtc-surface: #162438;\n  --adtc-border: #2b3c56;\n  --adtc-border-strong: #3f5678;\n  --adtc-text: #eef4fb;\n  --adtc-muted: #b0c1d8;\n  --adtc-accent: #7cc7ff;\n  --adtc-accent-soft: rgba(124, 199, 255, 0.12);\n  --adtc-selected: rgba(124, 199, 255, 0.18);\n  --adtc-striped: rgba(255, 255, 255, 0.025);\n  --adtc-hover: rgba(124, 199, 255, 0.08);\n}\n\n.adtc-shell[_ngcontent-%COMP%] {\n  background: var(--adtc-bg);\n  border: 1px solid var(--adtc-border);\n  border-radius: 18px;\n  overflow: hidden;\n}\n\n.adtc-header[_ngcontent-%COMP%], \n.adtc-subheader[_ngcontent-%COMP%], \n.adtc-context[_ngcontent-%COMP%], \n.adtc-pagination[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n}\n\n.adtc-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--adtc-border);\n  background: linear-gradient(180deg, var(--adtc-bg), var(--adtc-surface));\n}\n\n.adtc-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n.adtc-subheader[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--adtc-border);\n  background: var(--adtc-surface);\n}\n\n.adtc-context[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--adtc-border);\n  background: var(--adtc-accent-soft);\n  color: var(--adtc-text);\n}\n\n.adtc-wrapper[_ngcontent-%COMP%] {\n  background: var(--adtc-bg);\n}\n\n.adtc-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.adtc-scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.adtc-fixed-header[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n.adtc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 720px;\n}\n\n.adtc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--adtc-surface);\n  border-bottom: 1px solid var(--adtc-border-strong);\n  color: var(--adtc-muted);\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 0;\n  text-align: left;\n}\n\n.adtc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--adtc-border);\n  color: var(--adtc-text);\n  padding: 0.9rem 1rem;\n  vertical-align: middle;\n}\n\n.adtc-row-hoverable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--adtc-hover);\n}\n\n.adtc-row-pointer[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.adtc-row-striped[_ngcontent-%COMP%]:nth-child(4n + 1)   td[_ngcontent-%COMP%], \n.adtc-row-striped[_ngcontent-%COMP%]:nth-child(4n + 2)   td[_ngcontent-%COMP%] {\n  background: var(--adtc-striped);\n}\n\n.adtc-row-dense[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-block: 0.58rem;\n}\n\n.adtc-row-selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--adtc-selected);\n}\n\n.adtc-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.adtc-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.adtc-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.adtc-wrap[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.adtc-sort-button[_ngcontent-%COMP%] {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: inherit;\n  cursor: default;\n  display: inline-flex;\n  font: inherit;\n  gap: 0.45rem;\n  justify-content: space-between;\n  padding: 0.95rem 1rem;\n  width: 100%;\n}\n\n.adtc-sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.adtc-sort-indicator[_ngcontent-%COMP%] {\n  color: var(--adtc-border-strong);\n  font-size: 0.8rem;\n}\n\n.adtc-sort-indicator.active[_ngcontent-%COMP%] {\n  color: var(--adtc-accent);\n}\n\n.adtc-select-col[_ngcontent-%COMP%], \n.adtc-expand-col[_ngcontent-%COMP%] {\n  width: 1%;\n  white-space: nowrap;\n  text-align: center;\n}\n\n.adtc-expander[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--adtc-border);\n  border-radius: 999px;\n  color: var(--adtc-accent);\n  cursor: pointer;\n  font-size: 1rem;\n  height: 2rem;\n  line-height: 1;\n  width: 2rem;\n}\n\n.adtc-expander[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n\n.adtc-expanded-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--adtc-surface);\n}\n\n.adtc-expanded-cell[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n}\n\n.adtc-pagination[_ngcontent-%COMP%] {\n  align-items: center;\n  border-top: 1px solid var(--adtc-border);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n.adtc-pagination-meta[_ngcontent-%COMP%] {\n  color: var(--adtc-muted);\n  font-size: 0.92rem;\n}\n\n.adtc-pagination-controls[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n\n.adtc-pagination-size[_ngcontent-%COMP%] {\n  align-items: center;\n  color: var(--adtc-muted);\n  display: inline-flex;\n  gap: 0.4rem;\n}\n\n.adtc-pagination[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.adtc-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--adtc-bg);\n  border: 1px solid var(--adtc-border);\n  border-radius: 10px;\n  color: var(--adtc-text);\n  font: inherit;\n  padding: 0.45rem 0.7rem;\n}\n\n.adtc-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.adtc-page-indicator[_ngcontent-%COMP%] {\n  color: var(--adtc-muted);\n  font-size: 0.92rem;\n}\n\n.adtc-state[_ngcontent-%COMP%] {\n  color: var(--adtc-muted);\n  padding: 2rem 1.25rem;\n  text-align: center;\n}\n\n.adtc-loading[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n@media (max-width: 900px) {\n  .adtc-shell[_ngcontent-%COMP%] {\n    border-radius: 14px;\n  }\n\n  .adtc-table[_ngcontent-%COMP%] {\n    min-width: 620px;\n  }\n\n  .adtc-pagination[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy5zdGFja2xpbmUtbGliL2xpYi9hbmd1bGFyLWRhdGEtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsc0NBQXNDO0VBQ3RDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7RUFDN0MsMENBQTBDO0VBQzFDLDBDQUEwQztFQUMxQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0Msd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtEQUFrRDtFQUNsRCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkdGMtc2hlbGwge1xuICAtLWFkdGMtYmc6ICNmZmZmZmY7XG4gIC0tYWR0Yy1zdXJmYWNlOiAjZjhmYWZjO1xuICAtLWFkdGMtYm9yZGVyOiAjZDllMmVjO1xuICAtLWFkdGMtYm9yZGVyLXN0cm9uZzogI2I5YzhkODtcbiAgLS1hZHRjLXRleHQ6ICMxNzMyNGQ7XG4gIC0tYWR0Yy1tdXRlZDogIzU5NzA4YTtcbiAgLS1hZHRjLWFjY2VudDogIzBjNzNiODtcbiAgLS1hZHRjLWFjY2VudC1zb2Z0OiByZ2JhKDEyLCAxMTUsIDE4NCwgMC4wOCk7XG4gIC0tYWR0Yy1zZWxlY3RlZDogcmdiYSgxMiwgMTE1LCAxODQsIDAuMTIpO1xuICAtLWFkdGMtc3RyaXBlZDogcmdiYSgxNiwgNDQsIDc0LCAwLjAzKTtcbiAgLS1hZHRjLWhvdmVyOiByZ2JhKDEyLCAxMTUsIDE4NCwgMC4wNik7XG4gIGNvbG9yOiB2YXIoLS1hZHRjLXRleHQpO1xufVxuXG4uYWR0Yy10aGVtZS1kYXJrIHtcbiAgLS1hZHRjLWJnOiAjMTExYzJkO1xuICAtLWFkdGMtc3VyZmFjZTogIzE2MjQzODtcbiAgLS1hZHRjLWJvcmRlcjogIzJiM2M1NjtcbiAgLS1hZHRjLWJvcmRlci1zdHJvbmc6ICMzZjU2Nzg7XG4gIC0tYWR0Yy10ZXh0OiAjZWVmNGZiO1xuICAtLWFkdGMtbXV0ZWQ6ICNiMGMxZDg7XG4gIC0tYWR0Yy1hY2NlbnQ6ICM3Y2M3ZmY7XG4gIC0tYWR0Yy1hY2NlbnQtc29mdDogcmdiYSgxMjQsIDE5OSwgMjU1LCAwLjEyKTtcbiAgLS1hZHRjLXNlbGVjdGVkOiByZ2JhKDEyNCwgMTk5LCAyNTUsIDAuMTgpO1xuICAtLWFkdGMtc3RyaXBlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7XG4gIC0tYWR0Yy1ob3ZlcjogcmdiYSgxMjQsIDE5OSwgMjU1LCAwLjA4KTtcbn1cblxuLmFkdGMtc2hlbGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hZHRjLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWR0Yy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWR0Yy1oZWFkZXIsXG4uYWR0Yy1zdWJoZWFkZXIsXG4uYWR0Yy1jb250ZXh0LFxuLmFkdGMtcGFnaW5hdGlvbiB7XG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbn1cblxuLmFkdGMtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFkdGMtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYWR0Yy1iZyksIHZhcigtLWFkdGMtc3VyZmFjZSkpO1xufVxuXG4uYWR0Yy1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uYWR0Yy1zdWJoZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWR0Yy1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hZHRjLXN1cmZhY2UpO1xufVxuXG4uYWR0Yy1jb250ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFkdGMtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWR0Yy1hY2NlbnQtc29mdCk7XG4gIGNvbG9yOiB2YXIoLS1hZHRjLXRleHQpO1xufVxuXG4uYWR0Yy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWR0Yy1iZyk7XG59XG5cbi5hZHRjLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uYWR0Yy1zY3JvbGwge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmFkdGMtZml4ZWQtaGVhZGVyIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYWR0Yy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtaW4td2lkdGg6IDcyMHB4O1xufVxuXG4uYWR0Yy10YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFkdGMtc3VyZmFjZSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hZHRjLWJvcmRlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tYWR0Yy1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFkdGMtdGFibGUgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWR0Yy1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tYWR0Yy10ZXh0KTtcbiAgcGFkZGluZzogMC45cmVtIDFyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hZHRjLXJvdy1ob3ZlcmFibGU6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hZHRjLWhvdmVyKTtcbn1cblxuLmFkdGMtcm93LXBvaW50ZXIgdGQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZHRjLXJvdy1zdHJpcGVkOm50aC1jaGlsZCg0biArIDEpIHRkLFxuLmFkdGMtcm93LXN0cmlwZWQ6bnRoLWNoaWxkKDRuICsgMikgdGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hZHRjLXN0cmlwZWQpO1xufVxuXG4uYWR0Yy1yb3ctZGVuc2UgdGQge1xuICBwYWRkaW5nLWJsb2NrOiAwLjU4cmVtO1xufVxuXG4uYWR0Yy1yb3ctc2VsZWN0ZWQgdGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hZHRjLXNlbGVjdGVkKTtcbn1cblxuLmFkdGMtYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFkdGMtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWR0Yy1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWR0Yy13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmFkdGMtc29ydC1idXR0b24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZHRjLXNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWR0Yy1zb3J0LWluZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1hZHRjLWJvcmRlci1zdHJvbmcpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmFkdGMtc29ydC1pbmRpY2F0b3IuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWFkdGMtYWNjZW50KTtcbn1cblxuLmFkdGMtc2VsZWN0LWNvbCxcbi5hZHRjLWV4cGFuZC1jb2wge1xuICB3aWR0aDogMSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkdGMtZXhwYW5kZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWR0Yy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6IHZhcigtLWFkdGMtYWNjZW50KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uYWR0Yy1leHBhbmRlcjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNDU7XG59XG5cbi5hZHRjLWV4cGFuZGVkLXJvdyB0ZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFkdGMtc3VyZmFjZSk7XG59XG5cbi5hZHRjLWV4cGFuZGVkLWNlbGwge1xuICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XG59XG5cbi5hZHRjLXBhZ2luYXRpb24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYWR0Yy1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWR0Yy1wYWdpbmF0aW9uLW1ldGEge1xuICBjb2xvcjogdmFyKC0tYWR0Yy1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbn1cblxuLmFkdGMtcGFnaW5hdGlvbi1jb250cm9scyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjY1cmVtO1xufVxuXG4uYWR0Yy1wYWdpbmF0aW9uLXNpemUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tYWR0Yy1tdXRlZCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBnYXA6IDAuNHJlbTtcbn1cblxuLmFkdGMtcGFnaW5hdGlvbiBzZWxlY3QsXG4uYWR0Yy1wYWdpbmF0aW9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFkdGMtYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hZHRjLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1hZHRjLXRleHQpO1xuICBmb250OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwLjQ1cmVtIDAuN3JlbTtcbn1cblxuLmFkdGMtcGFnaW5hdGlvbiBidXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5hZHRjLXBhZ2UtaW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWFkdGMtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOTJyZW07XG59XG5cbi5hZHRjLXN0YXRlIHtcbiAgY29sb3I6IHZhcigtLWFkdGMtbXV0ZWQpO1xuICBwYWRkaW5nOiAycmVtIDEuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkdGMtbG9hZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuYWR0Yy1zaGVsbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgfVxuXG4gIC5hZHRjLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDYyMHB4O1xuICB9XG5cbiAgLmFkdGMtcGFnaW5hdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7952:
/*!*********************************************************!*\
  !*** ./.stackline-lib/lib/angular-data-table.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableModule: () => (/* binding */ DataTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-data-table.component */ 3661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class DataTableModule {
  static {
    this.ɵfac = function DataTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataTableModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DataTableModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DataTableModule, {
    declarations: [_angular_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_angular_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableComponent]
  });
})();

/***/ }),

/***/ 6011:
/*!*************************************!*\
  !*** ./.stackline-lib/lib/types.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4975:
/*!*************************************!*\
  !*** ./.stackline-lib/lib/utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   resolveCellValue: () => (/* binding */ resolveCellValue),
/* harmony export */   resolveSelectorValue: () => (/* binding */ resolveSelectorValue),
/* harmony export */   sortRows: () => (/* binding */ sortRows),
/* harmony export */   styleObjectToString: () => (/* binding */ styleObjectToString),
/* harmony export */   toCellText: () => (/* binding */ toCellText)
/* harmony export */ });
function compareUnknown(left, right) {
  if (left == null && right == null) {
    return 0;
  }
  if (left == null) {
    return -1;
  }
  if (right == null) {
    return 1;
  }
  if (typeof left === 'number' && typeof right === 'number') {
    return left - right;
  }
  if (typeof left === 'boolean' && typeof right === 'boolean') {
    return Number(left) - Number(right);
  }
  return String(left).localeCompare(String(right), undefined, {
    numeric: true,
    sensitivity: 'base'
  });
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function resolveSelectorValue(row, column, rowIndex) {
  if (!column.selector) {
    return null;
  }
  if (typeof column.selector === 'function') {
    return column.selector(row, rowIndex);
  }
  return row[column.selector];
}
function resolveCellValue(row, column, rowIndex) {
  if (column.format) {
    return column.format(row, rowIndex);
  }
  return resolveSelectorValue(row, column, rowIndex);
}
function toCellText(value) {
  if (value == null) {
    return '';
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}
function toKebabCase(value) {
  return value.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
}
function styleObjectToString(style) {
  return Object.entries(style).filter(([, value]) => value != null && value !== '').map(([property, value]) => `${toKebabCase(property)}: ${String(value)}`).join('; ');
}
function sortRows(rows, column, direction) {
  if (!column) {
    return [...rows];
  }
  const multiplier = direction === 'asc' ? 1 : -1;
  return [...rows].sort((left, right) => {
    if (column.sortFunction) {
      return column.sortFunction(left, right) * multiplier;
    }
    const leftIndex = rows.indexOf(left);
    const rightIndex = rows.indexOf(right);
    return compareUnknown(resolveSelectorValue(left, column, leftIndex), resolveSelectorValue(right, column, rightIndex)) * multiplier;
  });
}

/***/ }),

/***/ 5376:
/*!**************************************!*\
  !*** ./.stackline-lib/public-api.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableComponent: () => (/* reexport safe */ _lib_angular_data_table_component__WEBPACK_IMPORTED_MODULE_1__.DataTableComponent),
/* harmony export */   DataTableModule: () => (/* reexport safe */ _lib_angular_data_table_module__WEBPACK_IMPORTED_MODULE_0__.DataTableModule)
/* harmony export */ });
/* harmony import */ var _lib_angular_data_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/angular-data-table.module */ 7952);
/* harmony import */ var _lib_angular_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/angular-data-table.component */ 3661);
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/types */ 6011);




/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _docs_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-meta */ 5745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _stackline_lib_lib_angular_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.stackline-lib/lib/angular-data-table.component */ 3661);





const _c0 = ["kitchenTools"];
const _c1 = ["filterTools"];
const _c2 = ["statusCell"];
const _c3 = ["budgetCell"];
const _c4 = ["ticketPriorityCell"];
const _c5 = ["ticketStatusCell"];
const _c6 = ["movieDetail"];
const _c7 = () => [5, 8, 12];
const _c8 = () => [5, 10, 15];
const _c9 = () => [];
function AppComponent_section_71_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_section_71_button_4_Template_button_click_0_listener() {
      const demo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectDemo(demo_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const demo_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", demo_r3.id === ctx_r3.selectedDemoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", demo_r3.title, " ");
  }
}
function AppComponent_section_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 46)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_section_71_button_4_Template, 2, 3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r5.demos)("ngForTrackBy", ctx_r3.trackByDemo);
  }
}
function AppComponent_ng_container_86_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 55)(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_ng_container_86_label_3_Template_input_change_1_listener() {
      const toggle_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleKitchenSetting(toggle_r8.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toggle_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r3.kitchenSettings[toggle_r8.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](toggle_r8.label);
  }
}
function AppComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_ng_container_86_label_3_Template, 4, 2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " The Kitchen Sink keeps the docs honest: all core table flags can be combined in one Angular view without adapters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "stackline-data-table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_86_Template_stackline_data_table_sortChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Kitchen Sink", $event));
    })("selectedRowsChange", function AppComponent_ng_container_86_Template_stackline_data_table_selectedRowsChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onBasicSelectionChange($event));
    })("rowClicked", function AppComponent_ng_container_86_Template_stackline_data_table_rowClicked_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowClick("Kitchen Sink", $event));
    })("rowExpandToggled", function AppComponent_ng_container_86_Template_stackline_data_table_rowExpandToggled_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Kitchen Sink", $event));
    })("pageChange", function AppComponent_ng_container_86_Template_stackline_data_table_pageChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Kitchen Sink", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_86_Template_stackline_data_table_rowsPerPageChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Kitchen Sink", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const kitchenTools_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](362);
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.kitchenToggles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.kitchenColumns)("data", ctx_r3.kitchenRows)("selectableRows", ctx_r3.kitchenSettings.selectableRows)("selectableRowsSingle", ctx_r3.kitchenSettings.selectableRowsSingle)("selectableRowsNoSelectAll", ctx_r3.kitchenSettings.selectableRowsNoSelectAll)("selectableRowsVisibleOnly", ctx_r3.kitchenSettings.selectableRowsVisibleOnly)("selectableRowsHighlight", ctx_r3.kitchenSettings.selectableRowsHighlight)("expandableRows", ctx_r3.kitchenSettings.expandableRows)("expandOnRowClicked", ctx_r3.kitchenSettings.expandOnRowClicked)("expandOnRowDoubleClicked", ctx_r3.kitchenSettings.expandOnRowDoubleClicked)("expandableRowsHideExpander", ctx_r3.kitchenSettings.expandableRowsHideExpander)("expandableRowTemplate", movieDetail_r10)("pagination", ctx_r3.kitchenSettings.pagination)("striped", ctx_r3.kitchenSettings.striped)("highlightOnHover", ctx_r3.kitchenSettings.highlightOnHover)("pointerOnHover", ctx_r3.kitchenSettings.pointerOnHover)("dense", ctx_r3.kitchenSettings.dense)("responsive", ctx_r3.kitchenSettings.responsive)("fixedHeader", ctx_r3.kitchenSettings.fixedHeader)("subHeader", ctx_r3.kitchenSettings.subHeader)("subHeaderTemplate", kitchenTools_r9)("noHeader", ctx_r3.kitchenSettings.noHeader)("noTableHead", ctx_r3.kitchenSettings.noTableHead)("noContextMenu", ctx_r3.kitchenSettings.noContextMenu)("progressPending", ctx_r3.kitchenSettings.progressPending)("contextMessage", ctx_r3.reviewContextMessage);
  }
}
function AppComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rowClicked", function AppComponent_ng_container_87_Template_stackline_data_table_rowClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowClick("Basic table", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Filter state stays in the Angular component while the table continues handling sorting and pagination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "stackline-data-table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_88_Template_stackline_data_table_sortChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Filtering", $event));
    })("pageChange", function AppComponent_ng_container_88_Template_stackline_data_table_pageChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Filtering", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_88_Template_stackline_data_table_rowsPerPageChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Filtering", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const filterTools_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", filterTools_r13);
  }
}
function AppComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_89_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Basic sorting", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_90_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Default sort", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.defaultSortColumns)("data", ctx_r3.movies)("pagination", true)("defaultSortFieldId", "rating")("defaultSortAsc", false);
  }
}
function AppComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_91_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Custom sort", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customSortColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_92_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRemoteSort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.remoteSortRows)("pagination", true)("sortServer", true)("progressPending", ctx_r3.remoteSortLoading);
  }
}
function AppComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_93_Template_stackline_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Basic pagination", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_93_Template_stackline_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Basic pagination", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_94_Template_stackline_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Pagination options", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_94_Template_stackline_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Pagination options", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true)("paginationPerPage", 5)("paginationRowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c7));
  }
}
function AppComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_95_Template_stackline_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onServerPage($event));
    })("rowsPerPageChange", function AppComponent_ng_container_95_Template_stackline_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onServerRowsPerPage($event));
    })("sortChange", function AppComponent_ng_container_95_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Remote pagination", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.serverColumns)("data", ctx_r3.serverRows)("pagination", true)("paginationServer", true)("paginationDefaultPage", ctx_r3.serverPage)("paginationPerPage", ctx_r3.serverRowsPerPage)("paginationRowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c8))("paginationTotalRows", ctx_r3.allTickets.length)("progressPending", ctx_r3.serverLoading);
  }
}
function AppComponent_ng_container_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_96_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Fixed header", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.movies)("pagination", true)("fixedHeader", true)("highlightOnHover", true);
  }
}
function AppComponent_ng_container_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "stackline-data-table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_97_Template_stackline_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onBasicSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("pagination", true)("selectableRowsHighlight", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.basicSelectionSummary);
  }
}
function AppComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "stackline-data-table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_98_Template_stackline_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSingleSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowsSingle", true)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.singleSelectionSummary);
  }
}
function AppComponent_ng_container_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowSelected", ctx_r3.isPreselectedMovie)("pagination", true);
  }
}
function AppComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionStatusColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowDisabled", ctx_r3.isSelectionDisabled)("pagination", true);
  }
}
function AppComponent_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "stackline-data-table", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_101_Template_stackline_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onVisibleSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowsVisibleOnly", true)("pagination", true)("paginationPerPage", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.visibleSelectionSummary);
  }
}
function AppComponent_ng_container_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_102_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.deleteManagedSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Delete selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_102_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.clearManagedSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Clear selection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "stackline-data-table", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_102_Template_stackline_data_table_selectedRowsChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onManagedSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.managedSelectedRows.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.managedSelectedRows.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.managedRows)("selectableRows", true)("pagination", true)("clearSelectedRows", ctx_r3.managedClearSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.managedSelectionSummary);
  }
}
function AppComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_103_Template_stackline_data_table_selectedRowsChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onBasicSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("pagination", true)("contextMessage", ctx_r3.reviewContextMessage);
  }
}
function AppComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_104_Template_stackline_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Expandable", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("pagination", true);
  }
}
function AppComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_105_Template_stackline_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Expand on row click", $event));
    })("rowClicked", function AppComponent_ng_container_105_Template_stackline_data_table_rowClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowClick("Expand on row click", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandOnRowClicked", true)("pagination", true);
  }
}
function AppComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandableRowExpanded", ctx_r3.isPreExpandedMovie)("pagination", true);
  }
}
function AppComponent_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandableRowDisabled", ctx_r3.isExpansionDisabled)("pagination", true);
  }
}
function AppComponent_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_108_Template_stackline_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Hide expander", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandableRowsHideExpander", true)("expandOnRowClicked", true)("pagination", true);
  }
}
function AppComponent_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "stackline-data-table", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_110_Template_stackline_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Formatters", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.formatterColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.omitColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_112_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleDirectorColumn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "stackline-data-table", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.hideDirectorColumn ? "Show director column" : "Hide director column", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.dynamicOmitColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.alignmentColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("conditionalRowStyles", ctx_r3.contextualStyles)("pagination", true)("highlightOnHover", true)("pointerOnHover", true);
  }
}
function AppComponent_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_115_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.restartLoadingDemo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Restart loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "stackline-data-table", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.loadingRows)("pagination", true)("progressPending", ctx_r3.loadingPending);
  }
}
function AppComponent_ng_container_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c9))("pagination", true);
  }
}
function AppComponent_ng_container_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.compactColumns)("data", ctx_r3.movies)("pagination", true)("highlightOnHover", true)("pointerOnHover", true)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("selectableRows", true);
  }
}
function AppComponent_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.compactColumns)("data", ctx_r3.movies)("pagination", true)("dense", true)("striped", true)("highlightOnHover", true)("pointerOnHover", true);
  }
}
function AppComponent_ng_container_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const filterTools_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", filterTools_r13);
  }
}
function AppComponent_ng_container_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true)("noHeader", true);
  }
}
function AppComponent_ng_container_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true)("noTableHead", true)("selectableRows", true);
  }
}
function AppComponent_ng_container_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "stackline-data-table", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_div_335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", entry_r33, " ");
  }
}
function AppComponent_ng_template_361_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_361_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onKitchenSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_361_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onKitchenSearchTermChange(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.kitchenSearchTerm);
  }
}
function AppComponent_ng_template_363_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_363_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onFilterSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_363_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onFilterSearchTermChange(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.filterSearchTerm);
  }
}
function AppComponent_ng_template_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    const value_r37 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.statusTone(row_r36.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r37, " ");
  }
}
function AppComponent_ng_template_367_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.formatMoney(row_r38.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r38.genre);
  }
}
function AppComponent_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    const value_r40 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.priorityTone(row_r39.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r40, " ");
  }
}
function AppComponent_ng_template_371_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const value_r42 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.ticketStatusTone(row_r41.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r42, " ");
  }
}
function AppComponent_ng_template_373_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "div")(2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 106)(22, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r43.director);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r43.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.formatRating(row_r43.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.formatMoney(row_r43.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r43.summary);
  }
}
const INSTALL_CODE = 'npm install @stackline/angular-data-table-component@18';
const SETUP_CODE = `import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { DataTableModule } from '@stackline/angular-data-table-component';\n\n@NgModule({\n  imports: [BrowserModule, DataTableModule]\n})\nexport class AppModule {}`;
const RENDER_CODE = `<stackline-data-table\n  [columns]="columns"\n  [data]="rows"\n  [pagination]="true">\n</stackline-data-table>`;
const DEMO_GROUPS = [{
  title: 'Getting Started',
  demos: [{
    id: 'kitchen-sink',
    category: 'Getting Started',
    title: 'Kitchen Sink',
    summary: 'Toggle the main table behaviors together and validate how selection, expansion, pagination, headers, and hover states compose in Angular.',
    code: `<stackline-data-table\n  [columns]="kitchenColumns"\n  [data]="kitchenRows"\n  [selectableRows]="kitchenSettings.selectableRows"\n  [expandableRows]="kitchenSettings.expandableRows"\n  [pagination]="kitchenSettings.pagination">\n</stackline-data-table>`
  }]
}, {
  title: 'Examples',
  demos: [{
    id: 'basic-table',
    category: 'Examples',
    title: 'Basic Table',
    summary: 'Start with a plain set of declarative columns and turn on pagination with no adapters.',
    code: `<stackline-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</stackline-data-table>`
  }, {
    id: 'filtering',
    category: 'Examples',
    title: 'Filtering with Subheader',
    summary: 'Keep search state in the Angular component while the table handles pagination and sorting.',
    code: `<stackline-data-table\n  [columns]="sortableColumns"\n  [data]="filteredMovies"\n  [pagination]="true"\n  [subHeader]="true"\n  [subHeaderTemplate]="filterTools">\n</stackline-data-table>`
  }]
}, {
  title: 'Sorting',
  demos: [{
    id: 'sorting-basic',
    category: 'Sorting',
    title: 'Basic',
    summary: 'Built-in sorting covers the common case with simple selectors.',
    code: `<stackline-data-table\n  [columns]="sortableColumns"\n  [data]="movies"\n  [pagination]="true">\n</stackline-data-table>`
  }, {
    id: 'sorting-default',
    category: 'Sorting',
    title: 'Default Sort',
    summary: 'Use a column id and direction to set the default ordering for the first render.',
    code: `[defaultSortFieldId]="'rating'"\n[defaultSortAsc]="false"`
  }, {
    id: 'sorting-custom',
    category: 'Sorting',
    title: 'Custom Sort',
    summary: 'Override one column with custom comparison logic when the domain needs special ordering.',
    code: `{\n  id: 'title',\n  name: 'Title',\n  selector: row => row.title,\n  sortable: true,\n  sortFunction: (left, right) => normalizeTitle(left.title).localeCompare(normalizeTitle(right.title))\n}`
  }, {
    id: 'sorting-server',
    category: 'Sorting',
    title: 'Server Sort',
    summary: 'Enable server-style sorting and update the rows in the host component after the event fires.',
    code: `<stackline-data-table\n  [columns]="sortableColumns"\n  [data]="remoteSortRows"\n  [sortServer]="true"\n  [progressPending]="remoteSortLoading"\n  (sortChange)="onRemoteSort($event)">\n</stackline-data-table>`
  }]
}, {
  title: 'Pagination',
  demos: [{
    id: 'pagination-basic',
    category: 'Pagination',
    title: 'Basic',
    summary: 'Client-side pagination keeps longer datasets readable with no extra host code.',
    code: `<stackline-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</stackline-data-table>`
  }, {
    id: 'pagination-options',
    category: 'Pagination',
    title: 'Rows Per Page Options',
    summary: 'Use custom page-size options and a different default page size.',
    code: `[paginationPerPage]="5"\n[paginationRowsPerPageOptions]="[5, 8, 12]"`
  }, {
    id: 'pagination-remote',
    category: 'Pagination',
    title: 'Remote',
    summary: 'Simulate a remote API by slicing rows in the container after page and page-size events.',
    code: `<stackline-data-table\n  [columns]="serverColumns"\n  [data]="serverRows"\n  [pagination]="true"\n  [paginationServer]="true"\n  [paginationTotalRows]="allTickets.length"\n  (pageChange)="onServerPage($event)">\n</stackline-data-table>`
  }, {
    id: 'fixed-header',
    category: 'Pagination',
    title: 'Fixed Header',
    summary: 'Keep headers visible while the table body scrolls inside a constrained viewport.',
    code: `[fixedHeader]="true"\nfixedHeaderScrollHeight="280px"`
  }]
}, {
  title: 'Selectable',
  demos: [{
    id: 'selectable-basic',
    category: 'Selectable',
    title: 'Basic',
    summary: 'Selection state is emitted in a plain Angular shape with selected rows and counts.',
    code: `<stackline-data-table\n  [columns]="selectionColumns"\n  [data]="movies"\n  [selectableRows]="true"\n  (selectedRowsChange)="onBasicSelectionChange($event)">\n</stackline-data-table>`
  }, {
    id: 'selectable-single',
    category: 'Selectable',
    title: 'Single Selection',
    summary: 'Use radio-style selection when only one active record should be chosen.',
    code: `[selectableRows]="true"\n[selectableRowsSingle]="true"`
  }, {
    id: 'selectable-preselected',
    category: 'Selectable',
    title: 'Pre Selected',
    summary: 'Programmatically preselect rows based on host-defined rules.',
    code: `[selectableRowSelected]="isPreselectedMovie"`
  }, {
    id: 'selectable-predisabled',
    category: 'Selectable',
    title: 'Pre Disabled',
    summary: 'Disable unavailable rows without removing them from the dataset.',
    code: `[selectableRowDisabled]="isSelectionDisabled"`
  }, {
    id: 'selectable-visible-only',
    category: 'Selectable',
    title: 'Visible Page Only',
    summary: 'Limit select-all behavior to the current paginated view.',
    code: `[selectableRowsVisibleOnly]="true"`
  }, {
    id: 'selectable-manage',
    category: 'Selectable',
    title: 'Manage Selections',
    summary: 'Use host-level buttons to clear or delete the selected rows without changing the component API.',
    code: `[clearSelectedRows]="managedClearSelection"\n(selectedRowsChange)="onManagedSelectionChange($event)"`
  }, {
    id: 'selectable-context-message',
    category: 'Selectable',
    title: 'Custom Context Message',
    summary: 'Tune the selection context bar wording to match the product voice.',
    code: `[contextMessage]="reviewContextMessage"`
  }]
}, {
  title: 'Expandable',
  demos: [{
    id: 'expandable-basic',
    category: 'Expandable',
    title: 'Basic',
    summary: 'Template-driven expanded content keeps the main row layout compact.',
    code: `<stackline-data-table\n  [columns]="customColumns"\n  [data]="movies"\n  [expandableRows]="true"\n  [expandableRowTemplate]="movieDetail">\n</stackline-data-table>`
  }, {
    id: 'expandable-row-click',
    category: 'Expandable',
    title: 'Expand On Row Click',
    summary: 'Open detail rows from the row itself instead of the expander control.',
    code: `[expandOnRowClicked]="true"`
  }, {
    id: 'expandable-preexpanded',
    category: 'Expandable',
    title: 'Pre Expanded',
    summary: 'Start with one or more rows already expanded.',
    code: `[expandableRowExpanded]="isPreExpandedMovie"`
  }, {
    id: 'expandable-predisabled',
    category: 'Expandable',
    title: 'Pre Disabled',
    summary: 'Prevent expansion for rows that do not have extra content available.',
    code: `[expandableRowDisabled]="isExpansionDisabled"`
  }, {
    id: 'expandable-hide-expander',
    category: 'Expandable',
    title: 'Hide Expander',
    summary: 'Rely on row click and remove the dedicated expander column.',
    code: `[expandableRowsHideExpander]="true"\n[expandOnRowClicked]="true"`
  }]
}, {
  title: 'Columns',
  demos: [{
    id: 'columns-template-cells',
    category: 'Columns',
    title: 'Template Cells',
    summary: 'Use Angular templates for richer status, budget, and detail rendering.',
    code: `{\n  id: 'status',\n  name: 'Status',\n  selector: row => row.status,\n  cellTemplate: statusCell\n}`
  }, {
    id: 'columns-formatters',
    category: 'Columns',
    title: 'Formatters',
    summary: 'Use `format` when a column only needs transformed text instead of a full template.',
    code: `{\n  id: 'budgetSummary',\n  name: 'Budget summary',\n  format: row => \`\${formatMoney(row.budget)} • \${row.genre}\`\n}`
  }, {
    id: 'columns-omit',
    category: 'Columns',
    title: 'Omit',
    summary: 'Hide a column from one table configuration while keeping the base dataset the same.',
    code: `{\n  id: 'director',\n  name: 'Director',\n  selector: row => row.director,\n  omit: true\n}`
  }, {
    id: 'columns-omit-dynamic',
    category: 'Columns',
    title: 'Omit Dynamically',
    summary: 'Toggle a column on and off from Angular state without rebuilding the table shell.',
    code: `toggleDirectorColumn() {\n  this.hideDirectorColumn = !this.hideDirectorColumn;\n}`
  }, {
    id: 'columns-alignment',
    category: 'Columns',
    title: 'Alignment and Wrap',
    summary: 'Mix wrapped, centered, and right-aligned columns in one declarative column list.',
    code: `{\n  name: 'Budget',\n  selector: row => row.budget,\n  right: true,\n  width: '130px'\n}`
  }]
}, {
  title: 'Conditional Rows',
  demos: [{
    id: 'conditional-rows',
    category: 'Conditional Rows',
    title: 'Status Tones',
    summary: 'Use row-level conditional styles to flag records that need attention.',
    code: `[conditionalRowStyles]="contextualStyles"`
  }]
}, {
  title: 'Loading & States',
  demos: [{
    id: 'loading-pending',
    category: 'Loading & States',
    title: 'Progress Pending',
    summary: 'Keep the table shell in place while rows are being fetched or recomputed.',
    code: `[progressPending]="loadingPending"`
  }, {
    id: 'loading-empty',
    category: 'Loading & States',
    title: 'Empty State',
    summary: 'Customize the text shown when there are no rows to render.',
    code: `[data]="[]"\nnoDataText="No archived releases found."`
  }]
}, {
  title: 'Theming',
  demos: [{
    id: 'theme-dark',
    category: 'Theming',
    title: 'Dark Theme',
    summary: 'Switch to the built-in dark theme without changing your Angular templates.',
    code: `theme="dark"`
  }, {
    id: 'theme-dense',
    category: 'Theming',
    title: 'Dense and Striped',
    summary: 'Combine compact rows, stripes, and hover affordances for denser operational views.',
    code: `[dense]="true"\n[striped]="true"\n[highlightOnHover]="true"`
  }]
}, {
  title: 'Headers',
  demos: [{
    id: 'headers-subheader',
    category: 'Headers',
    title: 'Subheader Tools',
    summary: 'Mount Angular controls above the table via a `TemplateRef` subheader.',
    code: `[subHeader]="true"\n[subHeaderTemplate]="filterTools"`
  }, {
    id: 'headers-no-header',
    category: 'Headers',
    title: 'No Header',
    summary: 'Hide the title bar while keeping the body and footer intact.',
    code: `[noHeader]="true"`
  }, {
    id: 'headers-no-table-head',
    category: 'Headers',
    title: 'No Table Head',
    summary: 'Hide the table head when you need a list-style presentation.',
    code: `[noTableHead]="true"`
  }]
}];
const KITCHEN_TOGGLES = [{
  key: 'selectableRows',
  label: 'Selectable rows'
}, {
  key: 'selectableRowsSingle',
  label: 'Single selection'
}, {
  key: 'selectableRowsNoSelectAll',
  label: 'Hide select all'
}, {
  key: 'selectableRowsVisibleOnly',
  label: 'Visible page only'
}, {
  key: 'selectableRowsHighlight',
  label: 'Selection highlight'
}, {
  key: 'expandableRows',
  label: 'Expandable rows'
}, {
  key: 'expandOnRowClicked',
  label: 'Expand on row click'
}, {
  key: 'expandOnRowDoubleClicked',
  label: 'Expand on double click'
}, {
  key: 'expandableRowsHideExpander',
  label: 'Hide expander'
}, {
  key: 'pagination',
  label: 'Pagination'
}, {
  key: 'striped',
  label: 'Striped'
}, {
  key: 'highlightOnHover',
  label: 'Highlight on hover'
}, {
  key: 'pointerOnHover',
  label: 'Pointer on hover'
}, {
  key: 'dense',
  label: 'Dense'
}, {
  key: 'responsive',
  label: 'Responsive'
}, {
  key: 'fixedHeader',
  label: 'Fixed header'
}, {
  key: 'subHeader',
  label: 'Subheader'
}, {
  key: 'noHeader',
  label: 'No header'
}, {
  key: 'noTableHead',
  label: 'No table head'
}, {
  key: 'noContextMenu',
  label: 'No context bar'
}, {
  key: 'progressPending',
  label: 'Progress pending'
}];
function buildMovies() {
  return [{
    id: 1,
    title: 'Arrival',
    director: 'Denis Villeneuve',
    year: 2016,
    genre: 'Sci-Fi',
    rating: 8.1,
    status: 'stable',
    budget: 47000000,
    summary: 'A linguist is recruited to decode an alien language before global panic wins.'
  }, {
    id: 2,
    title: 'Moonlight',
    director: 'Barry Jenkins',
    year: 2016,
    genre: 'Drama',
    rating: 7.4,
    status: 'review',
    budget: 1500000,
    summary: 'A three-part portrait of identity, vulnerability, and adulthood.'
  }, {
    id: 3,
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    year: 2015,
    genre: 'Action',
    rating: 8.1,
    status: 'stable',
    budget: 150000000,
    summary: 'A relentless desert chase powered by practical effects and chaos.'
  }, {
    id: 4,
    title: 'Annihilation',
    director: 'Alex Garland',
    year: 2018,
    genre: 'Sci-Fi',
    rating: 6.8,
    status: 'critical',
    budget: 40000000,
    summary: 'A biologist enters a shifting zone where nature mutates beyond recognition.'
  }, {
    id: 5,
    title: 'Whiplash',
    director: 'Damien Chazelle',
    year: 2014,
    genre: 'Drama',
    rating: 8.5,
    status: 'stable',
    budget: 3300000,
    summary: 'A young drummer collides with an unforgiving mentor.'
  }, {
    id: 6,
    title: 'Everything Everywhere All at Once',
    director: 'Daniels',
    year: 2022,
    genre: 'Fantasy',
    rating: 7.8,
    status: 'review',
    budget: 25000000,
    summary: 'Multiverse absurdity, family pressure, and empathy on maximalist settings.'
  }, {
    id: 7,
    title: 'The Farewell',
    director: 'Lulu Wang',
    year: 2019,
    genre: 'Comedy',
    rating: 7.5,
    status: 'stable',
    budget: 3000000,
    summary: 'A family stages a fake wedding to say goodbye without saying goodbye.'
  }, {
    id: 8,
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    genre: 'Thriller',
    rating: 8.5,
    status: 'stable',
    budget: 11400000,
    summary: 'Class satire escalates into a razor-sharp thriller.'
  }, {
    id: 9,
    title: 'Aftersun',
    director: 'Charlotte Wells',
    year: 2022,
    genre: 'Drama',
    rating: 7.6,
    status: 'review',
    budget: 2000000,
    summary: 'A holiday memory shifts into a meditation on grief and perspective.'
  }, {
    id: 10,
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    year: 2023,
    genre: 'History',
    rating: 8.3,
    status: 'stable',
    budget: 100000000,
    summary: 'A dense character-driven story about ambition, fear, and consequence.'
  }, {
    id: 11,
    title: 'Past Lives',
    director: 'Celine Song',
    year: 2023,
    genre: 'Romance',
    rating: 7.9,
    status: 'stable',
    budget: 12000000,
    summary: 'Two lives stay connected across years, borders, and decisions.'
  }, {
    id: 12,
    title: 'Tenet',
    director: 'Christopher Nolan',
    year: 2020,
    genre: 'Sci-Fi',
    rating: 7.3,
    status: 'critical',
    budget: 205000000,
    summary: 'Time inversion delivers spectacle and confusion in equal measure.'
  }];
}
function buildTickets() {
  const priorities = ['low', 'medium', 'high'];
  const statuses = ['open', 'pending', 'resolved'];
  const teams = ['Platform', 'Billing', 'Delivery', 'Identity'];
  const regions = ['NA', 'EU', 'LATAM', 'APAC'];
  const agents = ['Lena', 'Marco', 'Priya', 'Jon', 'Ari', 'Sara'];
  const rows = [];
  for (let index = 0; index < 42; index += 1) {
    rows.push({
      id: index + 1,
      team: teams[index % teams.length],
      region: regions[index % regions.length],
      agent: agents[index % agents.length],
      priority: priorities[index % priorities.length],
      age: 1 + index * 3 % 24,
      status: statuses[index % statuses.length]
    });
  }
  return rows;
}
function stamp(message) {
  return `${new Date().toLocaleTimeString('en-US', {
    hour12: false
  })}  ${message}`;
}
function normalizeTitle(value) {
  return value.replace(/^(a|an|the)\s+/i, '').toLowerCase();
}
function toSortValue(row, selector, rowIndex) {
  if (!selector) {
    return null;
  }
  if (typeof selector === 'function') {
    return selector(row, rowIndex);
  }
  return row[selector];
}
function compareSortValues(left, right) {
  if (left == null && right == null) {
    return 0;
  }
  if (left == null) {
    return -1;
  }
  if (right == null) {
    return 1;
  }
  if (typeof left === 'number' && typeof right === 'number') {
    return left - right;
  }
  return String(left).localeCompare(String(right), undefined, {
    numeric: true,
    sensitivity: 'base'
  });
}
function sortRowsByEvent(rows, event) {
  const directionMultiplier = event.direction === 'asc' ? 1 : -1;
  return [...rows].sort((left, right) => {
    if (event.column.sortFunction) {
      return event.column.sortFunction(left, right) * directionMultiplier;
    }
    const leftValue = toSortValue(left, event.column.selector, rows.indexOf(left));
    const rightValue = toSortValue(right, event.column.selector, rows.indexOf(right));
    return compareSortValues(leftValue, rightValue) * directionMultiplier;
  });
}
class AppComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.angularLine = _docs_meta__WEBPACK_IMPORTED_MODULE_0__.ANGULAR_LINE;
    this.packageLine = _docs_meta__WEBPACK_IMPORTED_MODULE_0__.PACKAGE_LINE;
    this.docsPath = _docs_meta__WEBPACK_IMPORTED_MODULE_0__.DOCS_PATH;
    this.installCode = INSTALL_CODE;
    this.setupCode = SETUP_CODE;
    this.renderCode = RENDER_CODE;
    this.demoGroups = DEMO_GROUPS;
    this.kitchenToggles = KITCHEN_TOGGLES;
    this.movies = buildMovies();
    this.allTickets = buildTickets();
    this.logEntries = [];
    this.contextualStyles = [{
      when: row => row.status === 'critical',
      style: {
        borderLeft: '4px solid #b42318',
        background: 'rgba(180, 35, 24, 0.06)'
      }
    }, {
      when: row => row.status === 'review',
      style: {
        borderLeft: '4px solid #d26a2a',
        background: 'rgba(210, 106, 42, 0.06)'
      }
    }];
    this.reviewContextMessage = {
      singular: 'movie',
      plural: 'movies',
      message: 'queued for review'
    };
    this.selectedDemoId = 'kitchen-sink';
    this.kitchenSearchTerm = '';
    this.filterSearchTerm = '';
    this.kitchenSettings = {
      selectableRows: true,
      selectableRowsSingle: false,
      selectableRowsNoSelectAll: false,
      selectableRowsVisibleOnly: false,
      selectableRowsHighlight: true,
      expandableRows: true,
      expandOnRowClicked: false,
      expandOnRowDoubleClicked: false,
      expandableRowsHideExpander: false,
      pagination: true,
      striped: false,
      highlightOnHover: true,
      pointerOnHover: true,
      dense: false,
      responsive: true,
      fixedHeader: false,
      subHeader: true,
      noHeader: false,
      noTableHead: false,
      noContextMenu: false,
      progressPending: false
    };
    this.kitchenColumns = [];
    this.basicColumns = [];
    this.sortableColumns = [];
    this.defaultSortColumns = [];
    this.customSortColumns = [];
    this.selectionColumns = [];
    this.selectionStatusColumns = [];
    this.customColumns = [];
    this.formatterColumns = [];
    this.omitColumns = [];
    this.alignmentColumns = [];
    this.compactColumns = [];
    this.serverColumns = [];
    this.hideDirectorColumn = false;
    this.basicSelectionSummary = 'No rows selected yet.';
    this.singleSelectionSummary = 'No primary record selected.';
    this.visibleSelectionSummary = 'Visible-page selection is empty.';
    this.managedSelectionSummary = 'Use the table selection to stage delete or clear actions.';
    this.managedSelectedRows = [];
    this.managedRows = [];
    this.managedClearSelection = false;
    this.remoteSortRows = [];
    this.remoteSortLoading = false;
    this.serverPage = 1;
    this.serverRowsPerPage = 5;
    this.serverLoading = false;
    this.serverRows = [];
    this.loadingRows = [];
    this.loadingPending = true;
    this.customLoadingRows = [];
    this.customLoadingPending = true;
    this.isPreselectedMovie = row => row.rating >= 8.3;
    this.isSelectionDisabled = row => row.status === 'critical';
    this.isPreExpandedMovie = row => row.id === 1;
    this.isExpansionDisabled = row => row.year < 2000;
  }
  ngOnInit() {
    this.kitchenColumns = this.createKitchenColumns();
    this.basicColumns = this.createBasicColumns();
    this.sortableColumns = this.createSortableColumns();
    this.defaultSortColumns = this.createDefaultSortColumns();
    this.customSortColumns = this.createCustomSortColumns();
    this.selectionColumns = this.createSelectionColumns();
    this.selectionStatusColumns = this.createSelectionStatusColumns();
    this.customColumns = this.createCustomColumns();
    this.formatterColumns = this.createFormatterColumns();
    this.omitColumns = this.createOmitColumns();
    this.alignmentColumns = this.createAlignmentColumns();
    this.compactColumns = this.createCompactColumns();
    this.serverColumns = this.createServerColumns();
    this.managedRows = [...this.movies];
    this.remoteSortRows = [...this.movies];
    this.refreshServerRows(false);
    this.restartLoadingDemo(false);
    this.restartCustomLoadingDemo(false);
    this.pushLog('Demo loaded successfully.');
    this.changeDetectorRef.detectChanges();
  }
  get selectedDemo() {
    for (const group of this.demoGroups) {
      const found = group.demos.find(demo => demo.id === this.selectedDemoId);
      if (found) {
        return found;
      }
    }
    return this.demoGroups[0].demos[0];
  }
  get kitchenRows() {
    const term = this.kitchenSearchTerm.trim().toLowerCase();
    if (!term) {
      return this.movies;
    }
    return this.movies.filter(movie => [movie.title, movie.director, movie.genre, movie.status, movie.summary].join(' ').toLowerCase().includes(term));
  }
  get filteredMovies() {
    const term = this.filterSearchTerm.trim().toLowerCase();
    if (!term) {
      return this.movies;
    }
    return this.movies.filter(movie => [movie.title, movie.director, movie.genre, movie.status, movie.summary].join(' ').toLowerCase().includes(term));
  }
  get dynamicOmitColumns() {
    return [this.sortableColumns[0], {
      ...this.sortableColumns[1],
      omit: this.hideDirectorColumn
    }, this.sortableColumns[2], this.sortableColumns[3]];
  }
  trackByGroup(index, group) {
    return `${group.title}-${index}`;
  }
  trackByDemo(index, demo) {
    return demo.id || index;
  }
  selectDemo(demoId) {
    this.selectedDemoId = demoId;
    this.pushLog(`Opened demo: ${this.selectedDemo.category} / ${this.selectedDemo.title}.`);
  }
  pushLog(message) {
    this.logEntries.unshift(stamp(message));
    this.logEntries.splice(14);
  }
  clearLog() {
    this.logEntries.splice(0, this.logEntries.length);
  }
  toggleKitchenSetting(key) {
    this.kitchenSettings = {
      ...this.kitchenSettings,
      [key]: !this.kitchenSettings[key]
    };
    this.pushLog(`Kitchen Sink: ${key} ${this.kitchenSettings[key] ? 'enabled' : 'disabled'}.`);
  }
  onKitchenSearchTermChange(term) {
    this.kitchenSearchTerm = term;
    this.pushLog(`Kitchen Sink search: ${term || 'cleared'}.`);
  }
  onFilterSearchTermChange(term) {
    this.filterSearchTerm = term;
    this.pushLog(`Filter query: ${term || 'cleared'}.`);
  }
  onSort(label, event) {
    this.pushLog(`${label}: sorted by ${String(event.column.name)} (${event.direction}).`);
  }
  onRemoteSort(event) {
    this.remoteSortLoading = true;
    this.pushLog(`Remote sort requested: ${String(event.column.name)} (${event.direction}).`);
    setTimeout(() => {
      this.remoteSortRows = sortRowsByEvent(this.remoteSortRows, event);
      this.remoteSortLoading = false;
      this.pushLog(`Remote sort applied for ${String(event.column.name)}.`);
      this.changeDetectorRef.detectChanges();
    }, 220);
  }
  onBasicSelectionChange(state) {
    this.basicSelectionSummary = state.selectedCount === 0 ? 'No rows selected yet.' : `${state.selectedCount} row(s) selected: ${state.selectedRows.map(row => row.title).join(', ')}.`;
    this.pushLog(`Basic selection changed: ${state.selectedCount} row(s).`);
  }
  onSingleSelectionChange(state) {
    this.singleSelectionSummary = state.selectedCount === 0 ? 'No primary record selected.' : `Primary record: ${state.selectedRows[0].title}.`;
    this.pushLog(`Single selection changed: ${state.selectedCount} row(s).`);
  }
  onVisibleSelectionChange(state) {
    this.visibleSelectionSummary = state.selectedCount === 0 ? 'Visible-page selection is empty.' : `${state.selectedCount} visible row(s) selected.`;
    this.pushLog(`Visible-page selection changed: ${state.selectedCount} row(s).`);
  }
  onManagedSelectionChange(state) {
    this.managedSelectedRows = state.selectedRows;
    this.managedSelectionSummary = state.selectedCount === 0 ? 'Use the table selection to stage delete or clear actions.' : `${state.selectedCount} row(s) staged: ${state.selectedRows.map(row => row.title).join(', ')}.`;
    this.pushLog(`Managed selection changed: ${state.selectedCount} row(s).`);
  }
  clearManagedSelection() {
    this.managedClearSelection = !this.managedClearSelection;
    this.managedSelectedRows = [];
    this.managedSelectionSummary = 'Selection cleared from the host component.';
    this.pushLog('Managed selection cleared.');
  }
  deleteManagedSelection() {
    if (!this.managedSelectedRows.length) {
      return;
    }
    const selectedIds = new Set(this.managedSelectedRows.map(row => row.id));
    this.managedRows = this.managedRows.filter(row => !selectedIds.has(row.id));
    this.managedClearSelection = !this.managedClearSelection;
    this.managedSelectionSummary = 'Selected rows deleted from the host data source.';
    this.managedSelectedRows = [];
    this.pushLog('Managed rows deleted from the host data source.');
  }
  onExpand(label, event) {
    this.pushLog(`${label}: ${event.expanded ? 'expanded' : 'collapsed'} "${event.row.title}".`);
  }
  onRowClick(label, row) {
    this.pushLog(`${label}: row clicked "${row.title}".`);
  }
  onPage(label, event) {
    this.pushLog(`${label}: moved to page ${event.page}.`);
  }
  onRowsPerPage(label, event) {
    this.pushLog(`${label}: rows per page ${event.rowsPerPage}.`);
  }
  onServerPage(event) {
    this.serverPage = event.page;
    this.serverLoading = true;
    this.pushLog(`Server page requested: ${event.page}.`);
    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
      this.changeDetectorRef.detectChanges();
    }, 220);
  }
  onServerRowsPerPage(event) {
    this.serverRowsPerPage = event.rowsPerPage;
    this.serverPage = 1;
    this.serverLoading = true;
    this.pushLog(`Server page size changed to ${event.rowsPerPage}.`);
    setTimeout(() => {
      this.serverLoading = false;
      this.refreshServerRows();
      this.changeDetectorRef.detectChanges();
    }, 220);
  }
  restartLoadingDemo(log = true) {
    this.loadingPending = true;
    this.loadingRows = [];
    if (log) {
      this.pushLog('Restarted loading pending demo.');
    }
    setTimeout(() => {
      this.loadingRows = this.movies.slice(0, 8);
      this.loadingPending = false;
      this.pushLog('Loading pending demo resolved.');
      this.changeDetectorRef.detectChanges();
    }, 1200);
  }
  restartCustomLoadingDemo(log = true) {
    this.customLoadingPending = true;
    this.customLoadingRows = [];
    if (log) {
      this.pushLog('Restarted custom loading demo.');
    }
    setTimeout(() => {
      this.customLoadingRows = this.allTickets.slice(0, 8);
      this.customLoadingPending = false;
      this.pushLog('Custom loading demo resolved.');
      this.changeDetectorRef.detectChanges();
    }, 1500);
  }
  toggleDirectorColumn() {
    this.hideDirectorColumn = !this.hideDirectorColumn;
    this.pushLog(`Dynamic omit: director column ${this.hideDirectorColumn ? 'hidden' : 'shown'}.`);
  }
  statusTone(status) {
    return status;
  }
  priorityTone(priority) {
    return priority;
  }
  ticketStatusTone(status) {
    return status;
  }
  formatMoney(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  }
  formatRating(value) {
    return `${value.toFixed(1)}/10`;
  }
  refreshServerRows(log = true) {
    const start = (this.serverPage - 1) * this.serverRowsPerPage;
    this.serverRows = this.allTickets.slice(start, start + this.serverRowsPerPage);
    if (log) {
      this.pushLog(`Server rows refreshed for page ${this.serverPage}.`);
    }
  }
  createKitchenColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'director',
      name: 'Director',
      selector: row => row.director,
      sortable: true,
      wrap: true,
      minWidth: '180px'
    }, {
      id: 'year',
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      right: true,
      width: '90px'
    }, {
      id: 'rating',
      name: 'Rating',
      selector: row => row.rating,
      sortable: true,
      right: true,
      width: '100px'
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px',
      cellTemplate: this.statusCell
    }];
  }
  createBasicColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'director',
      name: 'Director',
      selector: row => row.director,
      sortable: true,
      minWidth: '180px'
    }, {
      id: 'year',
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  createSortableColumns() {
    return [...this.createBasicColumns(), {
      id: 'genre',
      name: 'Genre',
      selector: row => row.genre,
      sortable: true,
      width: '120px'
    }, {
      id: 'rating',
      name: 'Rating',
      selector: row => row.rating,
      sortable: true,
      right: true,
      width: '110px'
    }];
  }
  createDefaultSortColumns() {
    return [...this.createSortableColumns(), {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px',
      cellTemplate: this.statusCell
    }];
  }
  createCustomSortColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      sortFunction: (left, right) => normalizeTitle(left.title).localeCompare(normalizeTitle(right.title))
    }, {
      id: 'director',
      name: 'Director',
      selector: row => row.director,
      sortable: true
    }, {
      id: 'year',
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  createSelectionColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true
    }, {
      id: 'genre',
      name: 'Genre',
      selector: row => row.genre,
      sortable: true,
      width: '120px'
    }, {
      id: 'rating',
      name: 'Rating',
      selector: row => row.rating,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  createSelectionStatusColumns() {
    return [this.createSelectionColumns()[0], {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px',
      cellTemplate: this.statusCell
    }, this.createSelectionColumns()[2]];
  }
  createCustomColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '130px',
      cellTemplate: this.statusCell
    }, {
      id: 'budget',
      name: 'Budget',
      selector: row => row.budget,
      sortable: true,
      right: true,
      width: '130px',
      cellTemplate: this.budgetCell
    }, {
      id: 'summary',
      name: 'Summary',
      selector: row => row.summary,
      wrap: true,
      minWidth: '280px'
    }];
  }
  createFormatterColumns() {
    return [{
      id: 'title',
      name: 'Release',
      selector: row => row.title,
      sortable: true,
      format: row => `${row.title} (${row.year})`,
      wrap: true,
      minWidth: '240px'
    }, {
      id: 'budgetSummary',
      name: 'Budget summary',
      sortable: true,
      selector: row => row.budget,
      format: row => `${this.formatMoney(row.budget)} • ${row.genre}`,
      wrap: true,
      minWidth: '180px'
    }, {
      id: 'rating',
      name: 'Rating snapshot',
      selector: row => row.rating,
      sortable: true,
      format: row => `${this.formatRating(row.rating)} • ${row.status}`,
      right: true,
      width: '150px'
    }];
  }
  createOmitColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true
    }, {
      id: 'director',
      name: 'Director',
      selector: row => row.director,
      sortable: true,
      omit: true
    }, {
      id: 'year',
      name: 'Year',
      selector: row => row.year,
      sortable: true,
      right: true,
      width: '100px'
    }, {
      id: 'genre',
      name: 'Genre',
      selector: row => row.genre,
      sortable: true
    }];
  }
  createAlignmentColumns() {
    return [{
      id: 'title',
      name: 'Wrapped title',
      selector: row => `${row.title} — ${row.summary}`,
      sortable: true,
      wrap: true,
      minWidth: '320px'
    }, {
      id: 'genre',
      name: 'Genre',
      selector: row => row.genre,
      sortable: true,
      center: true,
      width: '140px'
    }, {
      id: 'budget',
      name: 'Budget',
      selector: row => row.budget,
      sortable: true,
      right: true,
      width: '130px',
      format: row => this.formatMoney(row.budget)
    }];
  }
  createCompactColumns() {
    return [{
      id: 'title',
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,
      minWidth: '220px'
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px',
      cellTemplate: this.statusCell
    }, {
      id: 'rating',
      name: 'Rating',
      selector: row => row.rating,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  createServerColumns() {
    return [{
      id: 'team',
      name: 'Team',
      selector: row => row.team,
      sortable: true
    }, {
      id: 'region',
      name: 'Region',
      selector: row => row.region,
      sortable: true
    }, {
      id: 'agent',
      name: 'Agent',
      selector: row => row.agent,
      sortable: true,
      minWidth: '140px'
    }, {
      id: 'priority',
      name: 'Priority',
      selector: row => row.priority,
      sortable: true,
      width: '120px',
      cellTemplate: this.ticketPriorityCell
    }, {
      id: 'status',
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      width: '120px',
      cellTemplate: this.ticketStatusCell
    }, {
      id: 'age',
      name: 'Age (h)',
      selector: row => row.age,
      sortable: true,
      right: true,
      width: '100px'
    }];
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["docs-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.kitchenTools = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filterTools = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.statusCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.budgetCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ticketPriorityCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ticketStatusCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.movieDetail = _t.first);
        }
      },
      decls: 375,
      vars: 52,
      consts: [["kitchenTools", ""], ["filterTools", ""], ["statusCell", ""], ["budgetCell", ""], ["ticketPriorityCell", ""], ["ticketStatusCell", ""], ["movieDetail", ""], [1, "shell"], [1, "hero"], [1, "hero-card", "hero-main"], [1, "badge"], [1, "feature-grid"], [1, "feature"], [1, "cta-row"], ["href", "#examples", 1, "btn"], ["href", "https://github.com/alexandroit/angular-data-table-component#readme", "target", "_blank", "rel", "noreferrer", 1, "btn", "secondary"], [1, "hero-card", "hero-setup"], [1, "step"], [1, "step-num"], ["id", "examples", 1, "layout"], [1, "panels"], [1, "panel"], [1, "panel-header"], [1, "example-explorer"], [1, "demo-nav"], ["class", "demo-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "demo-stage"], [1, "demo-stage-header"], [1, "demo-breadcrumb"], [1, "meta-pill"], [1, "meta-pill", "light"], [1, "code"], [1, "table-host", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ref-grid"], [1, "ref-card"], [1, "api-table"], [1, "sidebar"], [1, "panel", "log-panel"], [1, "log-header"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "log-list"], ["class", "log-entry", 4, "ngFor", "ngForOf"], [1, "release-card"], [1, "api-row"], [1, "demo-group"], [1, "demo-list"], ["type", "button", "class", "demo-link", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "demo-link", 3, "click"], [1, "demo-stack"], [1, "toggle-grid"], ["class", "toggle-card", 4, "ngFor", "ngForOf"], [1, "demo-note"], ["title", "Kitchen Sink movie list", "fixedHeaderScrollHeight", "280px", 3, "sortChange", "selectedRowsChange", "rowClicked", "rowExpandToggled", "pageChange", "rowsPerPageChange", "columns", "data", "selectableRows", "selectableRowsSingle", "selectableRowsNoSelectAll", "selectableRowsVisibleOnly", "selectableRowsHighlight", "expandableRows", "expandOnRowClicked", "expandOnRowDoubleClicked", "expandableRowsHideExpander", "expandableRowTemplate", "pagination", "striped", "highlightOnHover", "pointerOnHover", "dense", "responsive", "fixedHeader", "subHeader", "subHeaderTemplate", "noHeader", "noTableHead", "noContextMenu", "progressPending", "contextMessage"], [1, "toggle-card"], ["type", "checkbox", 3, "change", "checked"], ["title", "Film catalog", 3, "rowClicked", "columns", "data", "pagination"], ["title", "Searchable releases", 3, "sortChange", "pageChange", "rowsPerPageChange", "columns", "data", "pagination", "subHeader", "subHeaderTemplate"], ["title", "Basic sorting", 3, "sortChange", "columns", "data", "pagination"], ["title", "Default sort by rating", 3, "sortChange", "columns", "data", "pagination", "defaultSortFieldId", "defaultSortAsc"], ["title", "Custom title sort", 3, "sortChange", "columns", "data", "pagination"], ["title", "Server-style sorting", 3, "sortChange", "columns", "data", "pagination", "sortServer", "progressPending"], ["title", "Basic pagination", 3, "pageChange", "rowsPerPageChange", "columns", "data", "pagination"], ["title", "Rows per page options", 3, "pageChange", "rowsPerPageChange", "columns", "data", "pagination", "paginationPerPage", "paginationRowsPerPageOptions"], ["title", "Support tickets", 3, "pageChange", "rowsPerPageChange", "sortChange", "columns", "data", "pagination", "paginationServer", "paginationDefaultPage", "paginationPerPage", "paginationRowsPerPageOptions", "paginationTotalRows", "progressPending"], ["title", "Fixed header", "fixedHeaderScrollHeight", "280px", 3, "sortChange", "columns", "data", "pagination", "fixedHeader", "highlightOnHover"], ["title", "Selectable rows", 3, "selectedRowsChange", "columns", "data", "selectableRows", "pagination", "selectableRowsHighlight"], ["title", "Single selection", 3, "selectedRowsChange", "columns", "data", "selectableRows", "selectableRowsSingle", "pagination"], ["title", "Pre selected rows", 3, "columns", "data", "selectableRows", "selectableRowSelected", "pagination"], ["title", "Pre disabled rows", 3, "columns", "data", "selectableRows", "selectableRowDisabled", "pagination"], ["title", "Visible-page selection", 3, "selectedRowsChange", "columns", "data", "selectableRows", "selectableRowsVisibleOnly", "pagination", "paginationPerPage"], [1, "toolbar", "toolbar-inline"], ["type", "button", 1, "mini-button", "danger", 3, "click", "disabled"], ["type", "button", 1, "mini-button", 3, "click", "disabled"], ["title", "Manage selections", 3, "selectedRowsChange", "columns", "data", "selectableRows", "pagination", "clearSelectedRows"], ["title", "Custom context message", 3, "selectedRowsChange", "columns", "data", "selectableRows", "pagination", "contextMessage"], ["title", "Expandable rows", 3, "rowExpandToggled", "columns", "data", "expandableRows", "expandableRowTemplate", "pagination"], ["title", "Expand on row click", 3, "rowExpandToggled", "rowClicked", "columns", "data", "expandableRows", "expandableRowTemplate", "expandOnRowClicked", "pagination"], ["title", "Pre expanded", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowExpanded", "pagination"], ["title", "Pre disabled expansion", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowDisabled", "pagination"], ["title", "Hide expander", 3, "rowExpandToggled", "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowsHideExpander", "expandOnRowClicked", "pagination"], ["title", "Template-driven cells", 3, "columns", "data", "pagination"], ["title", "Formatter columns", 3, "sortChange", "columns", "data", "pagination"], ["title", "Omit column", 3, "columns", "data", "pagination"], ["type", "button", 1, "mini-button", 3, "click"], ["title", "Dynamic omit", 3, "columns", "data", "pagination"], ["title", "Alignment and wrap", 3, "columns", "data", "pagination"], ["title", "Conditional rows", 3, "columns", "data", "conditionalRowStyles", "pagination", "highlightOnHover", "pointerOnHover"], ["title", "Loading pending", 3, "columns", "data", "pagination", "progressPending"], ["title", "Empty state", "noDataText", "No archived releases found.", 3, "columns", "data", "pagination"], ["title", "Dark theme", "theme", "dark", 3, "columns", "data", "pagination", "highlightOnHover", "pointerOnHover", "expandableRows", "expandableRowTemplate", "selectableRows"], ["title", "Dense and striped", 3, "columns", "data", "pagination", "dense", "striped", "highlightOnHover", "pointerOnHover"], ["title", "Subheader tools", 3, "columns", "data", "pagination", "subHeader", "subHeaderTemplate"], ["title", "No header", 3, "columns", "data", "pagination", "noHeader"], ["title", "No table head", 3, "columns", "data", "pagination", "noTableHead", "selectableRows"], ["title", "Film catalog", 3, "columns", "data", "pagination"], [1, "log-entry"], ["type", "search", "placeholder", "Search titles, directors, genres, or status", 3, "ngModelChange", "ngModel"], ["type", "search", "placeholder", "Filter by title, director, genre, status, or summary", 3, "ngModelChange", "ngModel"], [1, "status-pill", 3, "ngClass"], [1, "metric-stack"], [1, "priority-pill", 3, "ngClass"], [1, "priority-pill", "status-tone", 3, "ngClass"], [1, "detail-grid"], [1, "detail-label"], [1, "detail-summary"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "section", 8)(2, "div", 9)(3, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "@stackline/angular-data-table-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " A maintained Angular data table component with a full Angular-first example explorer: sorting, selection, expansion, pagination, conditional rows, themes, loading states, and template-driven cells across every maintained Angular line. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 11)(10, "div", 12)(11, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Story-rich docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " The docs now cover the full Angular API surface instead of a short flat sample list. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Template-native cells");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Rich cells and expanded content use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "TemplateRef");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " instead of framework adapters. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Table workflows");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Sorting, pagination, selection, expansion, hover states, and context bars all stay visible. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12)(26, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Versioned docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Each maintained Angular release line keeps its own docs app and compiled history. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13)(30, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Explore examples");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " README ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16)(35, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Setup in 3 steps");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17)(38, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div")(41, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Install");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17)(46, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div")(49, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Register the module");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 17)(54, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div")(57, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Render the table");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "section", 19)(62, "div", 20)(63, "article", 21)(64, "div", 22)(65, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Example explorer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " This gallery rebuilds the docs into a navigable explorer so the Angular API surface is easy to browse on desktop and mobile while staying faithful to the real component capabilities. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 23)(70, "aside", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, AppComponent_section_71_Template, 5, 3, "section", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 26)(73, "div", 27)(74, "div", 28)(75, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "pre", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, AppComponent_ng_container_86_Template, 7, 27, "ng-container", 33)(87, AppComponent_ng_container_87_Template, 2, 3, "ng-container", 33)(88, AppComponent_ng_container_88_Template, 5, 5, "ng-container", 33)(89, AppComponent_ng_container_89_Template, 2, 3, "ng-container", 33)(90, AppComponent_ng_container_90_Template, 2, 5, "ng-container", 33)(91, AppComponent_ng_container_91_Template, 2, 3, "ng-container", 33)(92, AppComponent_ng_container_92_Template, 2, 5, "ng-container", 33)(93, AppComponent_ng_container_93_Template, 2, 3, "ng-container", 33)(94, AppComponent_ng_container_94_Template, 2, 6, "ng-container", 33)(95, AppComponent_ng_container_95_Template, 2, 10, "ng-container", 33)(96, AppComponent_ng_container_96_Template, 2, 5, "ng-container", 33)(97, AppComponent_ng_container_97_Template, 5, 6, "ng-container", 33)(98, AppComponent_ng_container_98_Template, 5, 6, "ng-container", 33)(99, AppComponent_ng_container_99_Template, 2, 5, "ng-container", 33)(100, AppComponent_ng_container_100_Template, 2, 5, "ng-container", 33)(101, AppComponent_ng_container_101_Template, 5, 7, "ng-container", 33)(102, AppComponent_ng_container_102_Template, 10, 8, "ng-container", 33)(103, AppComponent_ng_container_103_Template, 2, 5, "ng-container", 33)(104, AppComponent_ng_container_104_Template, 2, 5, "ng-container", 33)(105, AppComponent_ng_container_105_Template, 2, 6, "ng-container", 33)(106, AppComponent_ng_container_106_Template, 2, 6, "ng-container", 33)(107, AppComponent_ng_container_107_Template, 2, 6, "ng-container", 33)(108, AppComponent_ng_container_108_Template, 2, 7, "ng-container", 33)(109, AppComponent_ng_container_109_Template, 2, 3, "ng-container", 33)(110, AppComponent_ng_container_110_Template, 2, 3, "ng-container", 33)(111, AppComponent_ng_container_111_Template, 2, 3, "ng-container", 33)(112, AppComponent_ng_container_112_Template, 6, 4, "ng-container", 33)(113, AppComponent_ng_container_113_Template, 2, 3, "ng-container", 33)(114, AppComponent_ng_container_114_Template, 2, 6, "ng-container", 33)(115, AppComponent_ng_container_115_Template, 6, 4, "ng-container", 33)(116, AppComponent_ng_container_116_Template, 2, 4, "ng-container", 33)(117, AppComponent_ng_container_117_Template, 2, 8, "ng-container", 33)(118, AppComponent_ng_container_118_Template, 2, 7, "ng-container", 33)(119, AppComponent_ng_container_119_Template, 2, 5, "ng-container", 33)(120, AppComponent_ng_container_120_Template, 2, 4, "ng-container", 33)(121, AppComponent_ng_container_121_Template, 2, 5, "ng-container", 33)(122, AppComponent_ng_container_122_Template, 2, 3, "ng-container", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "article", 21)(124, "div", 22)(125, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "API reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " These inputs, column fields, and outputs are the levers that show up repeatedly across the Angular example tree. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 35)(130, "div", 36)(131, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Core inputs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "table", 37)(134, "thead")(135, "tr")(136, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "tbody")(141, "tr")(142, "td")(143, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Declarative column definitions with selectors, sort rules, and optional templates.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "tr")(148, "td")(149, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "data");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "The row array to render for the current view.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "tr")(154, "td")(155, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Turns on the built-in footer pagination UI.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "tr")(160, "td")(161, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "paginationServer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Stops client slicing so the host component controls which rows are loaded.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "tr")(166, "td")(167, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "sortServer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Leaves sorting to the host component while still exposing the sort event payload.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "tr")(172, "td")(173, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Switch between the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "default");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, " presets.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 36)(184, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Selection and expansion");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "table", 37)(187, "thead")(188, "tr")(189, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "tbody")(194, "tr")(195, "td")(196, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "selectableRows");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Enables checkbox or radio row selection.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "tr")(201, "td")(202, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "selectableRowsSingle");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Restricts selection to a single active row.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "tr")(207, "td")(208, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "selectableRowSelected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Programmatically preselect rows from host rules.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "tr")(213, "td")(214, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "selectableRowDisabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Disables rows without removing them from the dataset.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "tr")(219, "td")(220, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "expandableRows");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Enables expandable detail rows.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "tr")(225, "td")(226, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "expandableRowTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Angular template used to render expanded row content.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 36)(231, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Column capabilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "table", 37)(234, "thead")(235, "tr")(236, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "Field");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "tbody")(241, "tr")(242, "td")(243, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "selector");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "Read values through a property key or a row function.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "tr")(248, "td")(249, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "format");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Return custom display text without a full template.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "tr")(254, "td")(255, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, "cellTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Use an Angular template for richer cell layouts.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "tr")(260, "td")(261, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "sortFunction");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, "Override comparison logic for a single column.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "tr")(266, "td")(267, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "omit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Hide a column while keeping it in the declarative config.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "tr")(272, "td")(273, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "wrap / right / center");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Control cell alignment and text wrapping declaratively.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 36)(278, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "Outputs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "table", 37)(281, "thead")(282, "tr")(283, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](284, "Output");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "tbody")(288, "tr")(289, "td")(290, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, "sortChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "Fires with the current column, direction, and visible rows.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "tr")(295, "td")(296, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "selectedRowsChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "Returns the selection state and selected rows array.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "tr")(301, "td")(302, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "pageChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](305, "Fires when the current page changes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "tr")(307, "td")(308, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "rowsPerPageChange");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "Fires when the footer page size changes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "tr")(313, "td")(314, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, "rowClicked");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, "Fires when a row is clicked.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "tr")(319, "td")(320, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "rowExpandToggled");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "Fires when a detail row opens or closes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "aside", 38)(325, "section", 39)(326, "div", 40)(327, "div")(328, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Event Log");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "Interact with the demos to watch Angular events and host-side table workflows appear here.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_332_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearLog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "Clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](335, AppComponent_div_335_Template, 2, 1, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "div", 44)(337, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "Release line");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "This docs build is pinned to the same Angular release line and package version published on npm.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "div", 45)(342, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, "Package line");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](345);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "div", 45)(347, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "Angular compatibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "div", 45)(352, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "Docs path");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "div", 45)(357, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "Pattern");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "versioned docs-src + compiled docs history");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](361, AppComponent_ng_template_361_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(363, AppComponent_ng_template_363_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(365, AppComponent_ng_template_365_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(367, AppComponent_ng_template_367_Template, 5, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(369, AppComponent_ng_template_369_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(371, AppComponent_ng_template_371_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(373, AppComponent_ng_template_373_Template, 26, 5, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ANGULAR ", ctx.angularLine, " \u00B7 DATA TABLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.installCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.setupCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.renderCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.demoGroups)("ngForTrackBy", ctx.trackByGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedDemo.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedDemo.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedDemo.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedDemo.summary);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedDemo.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.selectedDemo.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "kitchen-sink");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "basic-table");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "filtering");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "sorting-basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "sorting-default");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "sorting-custom");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "sorting-server");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "pagination-basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "pagination-options");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "pagination-remote");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "fixed-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-single");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-preselected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-predisabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-visible-only");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-manage");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "selectable-context-message");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "expandable-basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "expandable-row-click");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "expandable-preexpanded");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "expandable-predisabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "expandable-hide-expander");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "columns-template-cells");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "columns-formatters");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "columns-omit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "columns-omit-dynamic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "columns-alignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "conditional-rows");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "loading-pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "loading-empty");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "theme-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "theme-dense");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "headers-subheader");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "headers-no-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "headers-no-table-head");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](214);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.logEntries);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.packageLine);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.angularLine);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.docsPath, "/");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _stackline_lib_lib_angular_data_table_component__WEBPACK_IMPORTED_MODULE_1__.DataTableComponent],
      styles: ["[_nghost-%COMP%] {\n  color: #102033;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(254, 228, 179, 0.5), transparent 32%),\n    radial-gradient(circle at left 18%, rgba(170, 219, 255, 0.4), transparent 28%),\n    linear-gradient(180deg, #fff9f0 0%, #f5fbff 55%, #eef4fb 100%);\n  min-height: 100vh;\n  padding: 2rem 1.25rem 3.5rem;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n\np[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 0.95fr);\n  margin: 0 auto 1.5rem;\n  max-width: 1440px;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%] {\n  backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n  min-width: 0;\n  padding: 1.5rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #102033;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin-bottom: 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.demo-note[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #102033;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  margin-bottom: 1rem;\n}\n\n.example-explorer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(240px, 280px) minmax(0, 1fr);\n  min-width: 0;\n}\n\n.demo-nav[_ngcontent-%COMP%] {\n  align-self: start;\n  display: grid;\n  gap: 0.9rem;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.demo-group[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.demo-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n\n.demo-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.demo-link[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 12px;\n  color: #14324f;\n  cursor: pointer;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;\n  width: 100%;\n}\n\n.demo-link[_ngcontent-%COMP%]:hover {\n  background: #f1f6fb;\n}\n\n.demo-link.active[_ngcontent-%COMP%] {\n  background: #102033;\n  border-color: transparent;\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.demo-stage[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  min-width: 0;\n  padding: 1.1rem;\n}\n\n.demo-stage-header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.meta-pill[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #102033;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  padding: 0.3rem 0.65rem;\n  text-transform: uppercase;\n}\n\n.meta-pill.light[_ngcontent-%COMP%] {\n  background: #edf4fa;\n  border: 1px solid rgba(20, 50, 79, 0.08);\n  color: #14324f;\n}\n\n.table-host[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  border-radius: 16px;\n  margin-top: 0.95rem;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 0.95rem;\n}\n\n.table-host[_ngcontent-%COMP%]   stackline-data-table[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\n.demo-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n}\n\n.demo-note[_ngcontent-%COMP%] {\n  background: #edf4fa;\n  border-radius: 12px;\n  padding: 0.75rem 0.9rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.toolbar-inline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #c8d5e3;\n  border-radius: 12px;\n  flex: 1 1 260px;\n  min-width: 0;\n  padding: 0.75rem 0.9rem;\n}\n\n.toggle-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n\n.toggle-card[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 14px;\n  color: #14324f;\n  display: flex;\n  gap: 0.6rem;\n  padding: 0.8rem 0.9rem;\n}\n\n.toggle-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n\n.mini-button[_ngcontent-%COMP%], \n.clear-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.14);\n  border-radius: 999px;\n  color: #14324f;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0.55rem 0.85rem;\n}\n\n.mini-button[_ngcontent-%COMP%]:hover, \n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6fc;\n}\n\n.mini-button.danger[_ngcontent-%COMP%] {\n  border-color: rgba(161, 41, 41, 0.2);\n  color: #a12929;\n}\n\n.status-pill[_ngcontent-%COMP%], \n.priority-pill[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 0.28rem 0.58rem;\n  text-transform: uppercase;\n}\n\n.status-pill.stable[_ngcontent-%COMP%], \n.priority-pill.low[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.status-pill.review[_ngcontent-%COMP%], \n.priority-pill.medium[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.status-pill.critical[_ngcontent-%COMP%], \n.priority-pill.high[_ngcontent-%COMP%] {\n  background: rgba(180, 35, 24, 0.14);\n  color: #8d2219;\n}\n\n.priority-pill.status-tone.open[_ngcontent-%COMP%] {\n  background: rgba(12, 115, 184, 0.12);\n  color: #0c5e93;\n}\n\n.priority-pill.status-tone.pending[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.priority-pill.status-tone.resolved[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.metric-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n\n.metric-stack[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n}\n\n.metric-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.78rem;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  color: #59708a;\n  display: block;\n  font-size: 0.78rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n\n.detail-summary[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.detail-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #102033;\n  margin: 0;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.ref-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.82rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  max-height: calc(100vh - 2.4rem);\n  overflow: hidden;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.log-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  gap: 0.8rem;\n  justify-content: space-between;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  max-height: calc(100vh - 16rem);\n  overflow-y: auto;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 12px;\n  color: #41566f;\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n  font-size: 0.76rem;\n  line-height: 1.5;\n  padding: 0.65rem 0.72rem;\n  word-break: break-word;\n}\n\n.release-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n\n.api-row[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  border-radius: 16px;\n  display: grid;\n  gap: 0.3rem;\n  padding: 0.85rem 0.95rem;\n}\n\n.api-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 1240px) {\n  .example-explorer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-nav[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@media (max-width: 1180px) {\n  .layout[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    max-height: min(360px, 50vh);\n    order: 2;\n    position: static;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], \n   .detail-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .table-host[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n\n  .toggle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n\n\n\n[_nghost-%COMP%] {\n  --stack-docs-surface: rgba(255, 255, 255, 0.92);\n  --stack-docs-surface-soft: #eef4fb;\n  --stack-docs-border: rgba(63, 81, 181, 0.14);\n  --stack-docs-border-strong: rgba(63, 81, 181, 0.22);\n  --stack-docs-text: #212121;\n  --stack-docs-muted: #616161;\n  --stack-docs-primary: #3f51b5;\n  --stack-docs-primary-soft: #e8eaf6;\n  --stack-docs-shadow: 0 1px 2px rgba(33, 33, 33, 0.12), 0 18px 44px rgba(63, 81, 181, 0.08);\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(63, 81, 181, 0.14), transparent 28%),\n    radial-gradient(circle at left 18%, rgba(23, 50, 77, 0.08), transparent 26%),\n    linear-gradient(180deg, #f8f9fc 0%, #f5f7fb 44%, #eef2f8 100%);\n  color: var(--stack-docs-text);\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.demo-group[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%] {\n  background: var(--stack-docs-surface);\n  border-color: var(--stack-docs-border);\n  box-shadow: var(--stack-docs-shadow);\n}\n\n.badge[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%], \n.stage-pill[_ngcontent-%COMP%], \n.release-link[_ngcontent-%COMP%] {\n  background: var(--stack-docs-primary-soft);\n  color: var(--stack-docs-primary);\n  border: 1px solid var(--stack-docs-border-strong);\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.demo-note[_ngcontent-%COMP%], \n.history-copy[_ngcontent-%COMP%], \n.release-item[_ngcontent-%COMP%], \n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.demo-breadcrumb[_ngcontent-%COMP%], \n.example-stage-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--stack-docs-muted);\n}\n\n.feature[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.ref-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.demo-group[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%], \n.table-host[_ngcontent-%COMP%], \n.toggle-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, var(--stack-docs-surface-soft) 100%);\n  border-color: var(--stack-docs-border);\n}\n\n.btn[_ngcontent-%COMP%], \n.release-link.is-current[_ngcontent-%COMP%], \n.demo-link.active[_ngcontent-%COMP%], \n.example-link.active[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%]:not(.secondary):not(.ghost):not(.small), \n.step-num[_ngcontent-%COMP%], \n.step-badge[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%]:not(.light) {\n  background: linear-gradient(135deg, var(--stack-docs-primary), #5c6bc0);\n  color: #ffffff;\n}\n\n.btn.secondary[_ngcontent-%COMP%], \n.demo-link[_ngcontent-%COMP%], \n.example-link[_ngcontent-%COMP%], \nbutton.secondary[_ngcontent-%COMP%], \nbutton.ghost[_ngcontent-%COMP%], \nbutton.small[_ngcontent-%COMP%], \n.clear-btn[_ngcontent-%COMP%], \n.copy-button[_ngcontent-%COMP%], \n.mini-button[_ngcontent-%COMP%], \n.custom-pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.meta-pill.light[_ngcontent-%COMP%] {\n  border-color: var(--stack-docs-border);\n  color: #17324d;\n}\n\npre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.state[_ngcontent-%COMP%], \n.step[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-block[_ngcontent-%COMP%], \n.code-preview[_ngcontent-%COMP%] {\n  background: #1f2438;\n  color: #eef3ff;\n}\n\n@media (max-width: 980px) {\n  .hero[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%], \n   .example-shell[_ngcontent-%COMP%], \n   .example-explorer[_ngcontent-%COMP%], \n   .quickstart-grid[_ngcontent-%COMP%], \n   .docs-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n\n  .demo-nav[_ngcontent-%COMP%], \n   .sidebar[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%] {\n    position: static;\n    top: auto;\n    max-height: none;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], \n   .results-grid[_ngcontent-%COMP%], \n   .control-grid[_ngcontent-%COMP%], \n   .api-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%], \n   .demo-grid[_ngcontent-%COMP%], \n   .toggle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 16px 12px 36px !important;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%], \n   .sidebar-card[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%], \n   .demo-stage[_ngcontent-%COMP%], \n   .example-stage[_ngcontent-%COMP%] {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 13vw, 3rem);\n    line-height: 1.02;\n  }\n\n  .cta-row[_ngcontent-%COMP%], \n   .release-links[_ngcontent-%COMP%], \n   .controls[_ngcontent-%COMP%], \n   .toolbar[_ngcontent-%COMP%], \n   .example-stage-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .btn[_ngcontent-%COMP%], \n   .release-link[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .copy-button[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  line-height: 1.02;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.preview-frame[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.install-card[_ngcontent-%COMP%], \n.copy-card[_ngcontent-%COMP%], \n.card-shell[_ngcontent-%COMP%], \n.showcase-card[_ngcontent-%COMP%], \n.docs-card[_ngcontent-%COMP%], \n.docs-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.badge[_ngcontent-%COMP%], \n.hero-badge[_ngcontent-%COMP%], \n.version-pill[_ngcontent-%COMP%], \n.release-pill[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(2rem, 11vw, 3.15rem);\n  }\n}\n\n\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(1.7rem, 8vw, 2.65rem) !important;\n    line-height: 0.98 !important;\n    letter-spacing: -0.035em !important;\n    word-break: break-all;\n  }\n}\n\n\n\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child, \narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%], \n.docs-layout[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%], \n.hero-grid[_ngcontent-%COMP%], \n.content-grid[_ngcontent-%COMP%], \n.playground-shell[_ngcontent-%COMP%], \n.playground__grid[_ngcontent-%COMP%], \n.example-shell[_ngcontent-%COMP%], \n.example-explorer[_ngcontent-%COMP%], \n.quickstart-grid[_ngcontent-%COMP%], \n.workbench-grid[_ngcontent-%COMP%], \n.release-links[_ngcontent-%COMP%], \n.cta-row[_ngcontent-%COMP%], \n.controls[_ngcontent-%COMP%], \n.hero-actions[_ngcontent-%COMP%], \n.inline-actions[_ngcontent-%COMP%], \n.playground-actions[_ngcontent-%COMP%], \n.playground-preview-tabs[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%], \n.field.two-up[_ngcontent-%COMP%], \n.sidebar[_ngcontent-%COMP%], \n.sidebar-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.demo-card[_ngcontent-%COMP%], \n.playground-card[_ngcontent-%COMP%], \n.playground-controls[_ngcontent-%COMP%], \n.playground-preview[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%], \n.controls-card[_ngcontent-%COMP%], \n.release-card[_ngcontent-%COMP%], \n.api-card[_ngcontent-%COMP%], \n.preview-card[_ngcontent-%COMP%], \n.example-stage[_ngcontent-%COMP%], \n.demo-stage[_ngcontent-%COMP%], \n.docs-panel[_ngcontent-%COMP%], \n.docs-card[_ngcontent-%COMP%], \n.table-shell[_ngcontent-%COMP%], \n.surface-card[_ngcontent-%COMP%], \n.copy-card[_ngcontent-%COMP%], \n.install-card[_ngcontent-%COMP%], \n.card-shell[_ngcontent-%COMP%], \n.hero-copy[_ngcontent-%COMP%], \n.hero-setup[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.badge[_ngcontent-%COMP%], \n.hero-badge[_ngcontent-%COMP%], \n.version-pill[_ngcontent-%COMP%], \n.release-pill[_ngcontent-%COMP%], \n.meta-pill[_ngcontent-%COMP%], \n.release-link[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\npre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%], \n.code-block[_ngcontent-%COMP%], \n.code-preview[_ngcontent-%COMP%], \n.snippet[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n@media (max-width: 760px) {\n  .release-links[_ngcontent-%COMP%], \n   .cta-row[_ngcontent-%COMP%], \n   .controls[_ngcontent-%COMP%], \n   .hero-actions[_ngcontent-%COMP%], \n   .inline-actions[_ngcontent-%COMP%], \n   .playground-actions[_ngcontent-%COMP%], \n   .toolbar[_ngcontent-%COMP%], \n   .example-stage-header[_ngcontent-%COMP%], \n   .playground-preview-tabs[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: 1fr !important;\n    align-items: stretch;\n  }\n\n  .release-link[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%], \n   .button[_ngcontent-%COMP%], \n   .ghost-button[_ngcontent-%COMP%], \n   button[_ngcontent-%COMP%], \n   .copy-button[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .playground-shell[_ngcontent-%COMP%], \n   .playground__grid[_ngcontent-%COMP%], \n   .example-shell[_ngcontent-%COMP%], \n   .example-explorer[_ngcontent-%COMP%], \n   .quickstart-grid[_ngcontent-%COMP%], \n   .workbench-grid[_ngcontent-%COMP%], \n   .demo-grid[_ngcontent-%COMP%], \n   .api-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%], \n   .results-grid[_ngcontent-%COMP%], \n   .control-grid[_ngcontent-%COMP%], \n   .toggle-grid[_ngcontent-%COMP%], \n   .meta-grid[_ngcontent-%COMP%], \n   .page-grid[_ngcontent-%COMP%], \n   .surface-card-grid[_ngcontent-%COMP%], \n   .hero-grid[_ngcontent-%COMP%], \n   .content-grid[_ngcontent-%COMP%], \n   .layout[_ngcontent-%COMP%], \n   .docs-layout[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n\n  .field.two-up[_ngcontent-%COMP%], \n   .playground-table-head[_ngcontent-%COMP%], \n   .playground-table-row[_ngcontent-%COMP%], \n   .table-head[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .docs-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child, \n   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n    font-size: clamp(1.55rem, 7vw, 2.35rem) !important;\n    line-height: 1.03 !important;\n    letter-spacing: -0.03em !important;\n  }\n\n  .app-shell[_ngcontent-%COMP%], \n   .shell[_ngcontent-%COMP%], \n   .docs-page[_ngcontent-%COMP%], \n   .page-shell[_ngcontent-%COMP%], \n   #app[_ngcontent-%COMP%], \n   .docs-shell[_ngcontent-%COMP%] {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .log-panel[_ngcontent-%COMP%], \n   .sidebar-card[_ngcontent-%COMP%], \n   .demo-card[_ngcontent-%COMP%], \n   .ref-card[_ngcontent-%COMP%], \n   .release-card[_ngcontent-%COMP%], \n   .demo-stage[_ngcontent-%COMP%], \n   .example-stage[_ngcontent-%COMP%], \n   .playground-controls[_ngcontent-%COMP%], \n   .playground-preview[_ngcontent-%COMP%], \n   .api-card[_ngcontent-%COMP%], \n   .preview-card[_ngcontent-%COMP%], \n   .surface-card[_ngcontent-%COMP%], \n   .table-shell[_ngcontent-%COMP%], \n   .docs-card[_ngcontent-%COMP%], \n   .docs-panel[_ngcontent-%COMP%] {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .badge[_ngcontent-%COMP%], \n   .hero-badge[_ngcontent-%COMP%], \n   .version-pill[_ngcontent-%COMP%], \n   .release-pill[_ngcontent-%COMP%], \n   .meta-pill[_ngcontent-%COMP%], \n   .release-link[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n\n  pre[_ngcontent-%COMP%], \n   .code[_ngcontent-%COMP%], \n   .code-block[_ngcontent-%COMP%], \n   .code-preview[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFOzs7a0VBR2dFO0VBQ2hFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7Ozs7RUFJRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkRBQTZEO0VBQzdELHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDBEQUEwRDtFQUMxRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMERBQTBEO0VBQzFELHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsK0VBQStFO0VBQy9FLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0RBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMERBQTBEO0VBQzFELHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7SUFHRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztJQUVFLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7O0FBR0EsZ0NBQWdDO0FBQ2hDO0VBQ0UsK0NBQStDO0VBQy9DLGtDQUFrQztFQUNsQyw0Q0FBNEM7RUFDNUMsbURBQW1EO0VBQ25ELDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQywwRkFBMEY7QUFDNUY7O0FBRUE7RUFDRTs7O2tFQUdnRTtFQUNoRSw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTs7OztFQUlFLDBDQUEwQztFQUMxQyxnQ0FBZ0M7RUFDaEMsaURBQWlEO0FBQ25EOztBQUVBOzs7Ozs7Ozs7Ozs7OztFQWNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUsb0ZBQW9GO0VBQ3BGLHNDQUFzQztBQUN4Qzs7QUFFQTs7Ozs7Ozs7RUFRRSx1RUFBdUU7RUFDdkUsY0FBYztBQUNoQjs7QUFFQTs7Ozs7Ozs7Ozs7RUFXRSxzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjs7QUFFQTs7Ozs7OztFQU9FLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7Ozs7OztJQU1FLHFDQUFxQztFQUN2Qzs7RUFFQTs7O0lBR0UsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7Ozs7Ozs7SUFPRSxxQ0FBcUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBOzs7Ozs7Ozs7SUFTRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGtDQUFrQztJQUNsQyxpQkFBaUI7RUFDbkI7O0VBRUE7Ozs7O0lBS0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7RUFFQTs7Ozs7SUFLRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUEsaUNBQWlDO0FBQ2pDOzs7OztFQUtFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7Ozs7Ozs7OztFQWFFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7Ozs7O0lBS0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0U7Ozs7O0lBS0UsaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMscUJBQXFCO0VBQ3ZCO0FBQ0Y7OztBQUdBLDBDQUEwQztBQUMxQzs7Ozs7Ozs7Ozs7O0VBWUUsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQ0UsWUFBWTtBQUNkOztBQUVBOzs7Ozs7RUFNRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7Ozs7O0VBTUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOzs7Ozs7Ozs7SUFTRSx3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtFQUN0Qjs7RUFFQTs7Ozs7OztJQU9FLFdBQVc7RUFDYjs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkUscUNBQXFDO0VBQ3ZDOztFQUVBOzs7OztJQUtFLDJEQUEyRDtFQUM3RDtBQUNGOztBQUVBO0VBQ0U7Ozs7Ozs7Ozs7OztJQVlFLGtEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsa0NBQWtDO0VBQ3BDOztFQUVBOzs7Ozs7SUFNRSw2QkFBNkI7SUFDN0IsOEJBQThCO0VBQ2hDOztFQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBOzs7Ozs7SUFNRSxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOztFQUVBOzs7O0lBSUUsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjb2xvcjogIzEwMjAzMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pciBOZXh0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zaGVsbCB7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsIHJnYmEoMjU0LCAyMjgsIDE3OSwgMC41KSwgdHJhbnNwYXJlbnQgMzIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGxlZnQgMTglLCByZ2JhKDE3MCwgMjE5LCAyNTUsIDAuNCksIHRyYW5zcGFyZW50IDI4JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZjlmMCAwJSwgI2Y1ZmJmZiA1NSUsICNlZWY0ZmIgMTAwJSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtIDEuMjVyZW0gMy41cmVtO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIG1hcmdpbjogMDtcbn1cblxucCxcbnRkLFxudGgsXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmNvZGUsXG5wcmUge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4uaGVybyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS4yNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS44ZnIpIG1pbm1heCgzMjBweCwgMC45NWZyKTtcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbn1cblxuLmhlcm8tY2FyZCxcbi5wYW5lbCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTEsIDIwNiwgMjIzLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDI0cHggNjBweCByZ2JhKDIzLCA1MCwgNzcsIDAuMTIpO1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzEwMjAzMztcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjY1cmVtO1xufVxuXG4uaGVyby1tYWluIGgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjRyZW0sIDR2dywgMy40cmVtKTtcbiAgbWFyZ2luLWJvdHRvbTogMC44NXJlbTtcbn1cblxuLmhlcm8tbWFpbiBwLFxuLnBhbmVsLWhlYWRlciBwLFxuLmxvZy1wYW5lbCBwLFxuLmZlYXR1cmUsXG4uZGVtby1ub3RlIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5mZWF0dXJlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbn1cblxuLmZlYXR1cmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAwLjk1cmVtIDFyZW07XG59XG5cbi5mZWF0dXJlIHN0cm9uZyB7XG4gIGNvbG9yOiAjMTAyMDMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4uY3RhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC44cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2MxNWQzZiwgIzllNGEzMSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMC43MnJlbSAxLjFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDRlMjtcbiAgY29sb3I6ICMxMDIwMzM7XG59XG5cbi5oZXJvLXNldHVwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3RlcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC44cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWlubWF4KDAsIDFmcik7XG59XG5cbi5zdGVwLW51bSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwYzczYjg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDEuOXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjlyZW07XG59XG5cbi5oZXJvLXNldHVwIHByZSxcbi5jb2RlIHtcbiAgYmFja2dyb3VuZDogIzEzMjYzYTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgY29sb3I6ICNlZGY0ZmI7XG4gIGZvbnQtc2l6ZTogMC44M3JlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAwLjU1cmVtIDAgMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ubGF5b3V0IHtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuMjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbn1cblxuLnBhbmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS4yNXJlbTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZXhhbXBsZS1leHBsb3JlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjQwcHgsIDI4MHB4KSBtaW5tYXgoMCwgMWZyKTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uZGVtby1uYXYge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjlyZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMS4ycmVtO1xufVxuXG4uZGVtby1ncm91cCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmN2ZhZmMgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5kZW1vLWdyb3VwIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuXG4uZGVtby1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kZW1vLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiAjMTQzMjRmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbSAwLjhyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTIwbXMgZWFzZSwgY29sb3IgMTIwbXMgZWFzZSwgdHJhbnNmb3JtIDEyMG1zIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVtby1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjZmYjtcbn1cblxuLmRlbW8tbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMTAyMDMzO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uZGVtby1zdGFnZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmN2ZhZmMgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMS4xcmVtO1xufVxuXG4uZGVtby1zdGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmRlbW8tYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5tZXRhLXBpbGwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTAyMDMzO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjY1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWV0YS1waWxsLmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2VkZjRmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMCwgNTAsIDc5LCAwLjA4KTtcbiAgY29sb3I6ICMxNDMyNGY7XG59XG5cbi50YWJsZS1ob3N0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWFyZ2luLXRvcDogMC45NXJlbTtcbiAgbWluLXdpZHRoOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuOTVyZW07XG59XG5cbi50YWJsZS1ob3N0IHN0YWNrbGluZS1kYXRhLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZW1vLXN0YWNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjk1cmVtO1xufVxuXG4uZGVtby1ub3RlIHtcbiAgYmFja2dyb3VuZDogI2VkZjRmYTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMC43NXJlbSAwLjlyZW07XG59XG5cbi50b29sYmFyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC44cmVtO1xufVxuXG4udG9vbGJhci1pbmxpbmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXIgaW5wdXQsXG4udG9vbGJhciBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhkNWUzO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmbGV4OiAxIDEgMjYwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMC43NXJlbSAwLjlyZW07XG59XG5cbi50b2dnbGUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC42NXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG59XG5cbi50b2dnbGUtY2FyZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjb2xvcjogIzE0MzI0ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjZyZW07XG4gIHBhZGRpbmc6IDAuOHJlbSAwLjlyZW07XG59XG5cbi50b2dnbGUtY2FyZCBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn1cblxuLm1pbmktYnV0dG9uLFxuLmNsZWFyLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogIzE0MzI0ZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuODVyZW07XG59XG5cbi5taW5pLWJ1dHRvbjpob3Zlcixcbi5jbGVhci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWZmNmZjO1xufVxuXG4ubWluaS1idXR0b24uZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2MSwgNDEsIDQxLCAwLjIpO1xuICBjb2xvcjogI2ExMjkyOTtcbn1cblxuLnN0YXR1cy1waWxsLFxuLnByaW9yaXR5LXBpbGwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC4yOHJlbSAwLjU4cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RhdHVzLXBpbGwuc3RhYmxlLFxuLnByaW9yaXR5LXBpbGwubG93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMiwgMTI4LCA3OSwgMC4xMik7XG4gIGNvbG9yOiAjMTc2NTNhO1xufVxuXG4uc3RhdHVzLXBpbGwucmV2aWV3LFxuLnByaW9yaXR5LXBpbGwubWVkaXVtIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTAsIDEwNiwgNDIsIDAuMTQpO1xuICBjb2xvcjogIzhiNDUxYjtcbn1cblxuLnN0YXR1cy1waWxsLmNyaXRpY2FsLFxuLnByaW9yaXR5LXBpbGwuaGlnaCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAzNSwgMjQsIDAuMTQpO1xuICBjb2xvcjogIzhkMjIxOTtcbn1cblxuLnByaW9yaXR5LXBpbGwuc3RhdHVzLXRvbmUub3BlbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExNSwgMTg0LCAwLjEyKTtcbiAgY29sb3I6ICMwYzVlOTM7XG59XG5cbi5wcmlvcml0eS1waWxsLnN0YXR1cy10b25lLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMCwgMTA2LCA0MiwgMC4xNCk7XG4gIGNvbG9yOiAjOGI0NTFiO1xufVxuXG4ucHJpb3JpdHktcGlsbC5zdGF0dXMtdG9uZS5yZXNvbHZlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDEyOCwgNzksIDAuMTIpO1xuICBjb2xvcjogIzE3NjUzYTtcbn1cblxuLm1ldHJpYy1zdGFjayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4xNXJlbTtcbn1cblxuLm1ldHJpYy1zdGFjayBzdHJvbmcge1xuICBjb2xvcjogIzEwMjAzMztcbn1cblxuLm1ldHJpYy1zdGFjayBzcGFuIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbn1cblxuLmRldGFpbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjk1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5kZXRhaWwtbGFiZWwge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRldGFpbC1zdW1tYXJ5IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbn1cblxuLmRldGFpbC1zdW1tYXJ5IHAge1xuICBjb2xvcjogIzEwMjAzMztcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmVmLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLnJlZi1jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnJlZi1jYXJkIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLmFwaS10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBpLXRhYmxlIHRoLFxuLmFwaS10YWJsZSB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDllMmVjO1xuICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFwaS10YWJsZSB0aCB7XG4gIGNvbG9yOiAjNTk3MDhhO1xuICBmb250LXNpemU6IDAuODJyZW07XG59XG5cbi5zaWRlYmFyIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ubG9nLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjhyZW07XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyLjRyZW0pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEuMnJlbTtcbn1cblxuLmxvZy1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjhyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjU1cmVtO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZyZW0pO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubG9nLWVudHJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjUxLCAwLjk2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICM0MTU2NmY7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMC42NXJlbSAwLjcycmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ucmVsZWFzZS1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5hcGktcm93IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiAwJSwgI2Y3ZmFmYyAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjNyZW07XG4gIHBhZGRpbmc6IDAuODVyZW0gMC45NXJlbTtcbn1cblxuLmFwaS1yb3cgc3Ryb25nIHtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI0MHB4KSB7XG4gIC5leGFtcGxlLWV4cGxvcmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5kZW1vLW5hdiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gIC5sYXlvdXQsXG4gIC5oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5sb2ctcGFuZWwge1xuICAgIG1heC1oZWlnaHQ6IG1pbigzNjBweCwgNTB2aCk7XG4gICAgb3JkZXI6IDI7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gIC5yZWYtZ3JpZCxcbiAgLmRldGFpbC1ncmlkLFxuICAuZmVhdHVyZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmhlcm8tY2FyZCxcbiAgLnBhbmVsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuY3RhLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC50YWJsZS1ob3N0IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG5cbiAgLnRvZ2dsZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5sb2ctaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cblxuLyogc3RhY2tsaW5lLWRvY3MtcmVmcmVzaC0yMDI2ICovXG46aG9zdCB7XG4gIC0tc3RhY2stZG9jcy1zdXJmYWNlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICAtLXN0YWNrLWRvY3Mtc3VyZmFjZS1zb2Z0OiAjZWVmNGZiO1xuICAtLXN0YWNrLWRvY3MtYm9yZGVyOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjE0KTtcbiAgLS1zdGFjay1kb2NzLWJvcmRlci1zdHJvbmc6IHJnYmEoNjMsIDgxLCAxODEsIDAuMjIpO1xuICAtLXN0YWNrLWRvY3MtdGV4dDogIzIxMjEyMTtcbiAgLS1zdGFjay1kb2NzLW11dGVkOiAjNjE2MTYxO1xuICAtLXN0YWNrLWRvY3MtcHJpbWFyeTogIzNmNTFiNTtcbiAgLS1zdGFjay1kb2NzLXByaW1hcnktc29mdDogI2U4ZWFmNjtcbiAgLS1zdGFjay1kb2NzLXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMzMsIDMzLCAzMywgMC4xMiksIDAgMThweCA0NHB4IHJnYmEoNjMsIDgxLCAxODEsIDAuMDgpO1xufVxuXG4uc2hlbGwge1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIHJpZ2h0LCByZ2JhKDYzLCA4MSwgMTgxLCAwLjE0KSwgdHJhbnNwYXJlbnQgMjglKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGxlZnQgMTglLCByZ2JhKDIzLCA1MCwgNzcsIDAuMDgpLCB0cmFuc3BhcmVudCAyNiUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGY5ZmMgMCUsICNmNWY3ZmIgNDQlLCAjZWVmMmY4IDEwMCUpO1xuICBjb2xvcjogdmFyKC0tc3RhY2stZG9jcy10ZXh0KTtcbn1cblxuLmhlcm8tY2FyZCxcbi5wYW5lbCxcbi5sb2ctcGFuZWwsXG4uc2lkZWJhcixcbi5zaWRlYmFyLWNhcmQsXG4uZGVtby1jYXJkLFxuLnJlZi1jYXJkLFxuLnJlbGVhc2UtY2FyZCxcbi5kZW1vLWdyb3VwLFxuLmRlbW8tc3RhZ2UsXG4uY29udHJvbHMtY2FyZCxcbi5wbGF5Z3JvdW5kLWNhcmQsXG4ucmVzdWx0LWNhcmQsXG4uYXBpLWNhcmQsXG4ucHJldmlldy1jYXJkLFxuLnN1cmZhY2UtY2FyZCxcbi50YWJsZS1zaGVsbCxcbi5leGFtcGxlLXN0YWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3RhY2stZG9jcy1zdXJmYWNlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdGFjay1kb2NzLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXN0YWNrLWRvY3Mtc2hhZG93KTtcbn1cblxuLmJhZGdlLFxuLm1ldGEtcGlsbCxcbi5zdGFnZS1waWxsLFxuLnJlbGVhc2UtbGluayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0YWNrLWRvY3MtcHJpbWFyeS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyLXN0cm9uZyk7XG59XG5cbi5oZXJvLW1haW4gcCxcbi5wYW5lbC1oZWFkZXIgcCxcbi5sb2ctcGFuZWwgcCxcbi5mZWF0dXJlLFxuLmRlbW8tbm90ZSxcbi5oaXN0b3J5LWNvcHksXG4ucmVsZWFzZS1pdGVtLFxuLmZvb3RlciBwLFxuLmZpZWxkIGxhYmVsLFxuLnJlc3VsdC1jYXJkIHN0cm9uZyxcbi5hcGktdGFibGUgdGgsXG4uYXBpLXJvdyBzdHJvbmcsXG4uZGVtby1icmVhZGNydW1iLFxuLmV4YW1wbGUtc3RhZ2UtaGVhZGVyIHAge1xuICBjb2xvcjogdmFyKC0tc3RhY2stZG9jcy1tdXRlZCk7XG59XG5cbi5mZWF0dXJlLFxuLmRlbW8tY2FyZCxcbi5yZWYtY2FyZCxcbi5yZWxlYXNlLWNhcmQsXG4uZGVtby1ncm91cCxcbi5kZW1vLXN0YWdlLFxuLmNvbnRyb2xzLWNhcmQsXG4ucGxheWdyb3VuZC1jYXJkLFxuLnJlc3VsdC1jYXJkLFxuLmFwaS1jYXJkLFxuLnByZXZpZXctY2FyZCxcbi5zdXJmYWNlLWNhcmQsXG4uZXhhbXBsZS1zdGFnZSxcbi50YWJsZS1ob3N0LFxuLnRvZ2dsZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgdmFyKC0tc3RhY2stZG9jcy1zdXJmYWNlLXNvZnQpIDEwMCUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyKTtcbn1cblxuLmJ0bixcbi5yZWxlYXNlLWxpbmsuaXMtY3VycmVudCxcbi5kZW1vLWxpbmsuYWN0aXZlLFxuLmV4YW1wbGUtbGluay5hY3RpdmUsXG5idXR0b246bm90KC5zZWNvbmRhcnkpOm5vdCguZ2hvc3QpOm5vdCguc21hbGwpLFxuLnN0ZXAtbnVtLFxuLnN0ZXAtYmFkZ2UsXG4ubWV0YS1waWxsOm5vdCgubGlnaHQpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tc3RhY2stZG9jcy1wcmltYXJ5KSwgIzVjNmJjMCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuLnNlY29uZGFyeSxcbi5kZW1vLWxpbmssXG4uZXhhbXBsZS1saW5rLFxuYnV0dG9uLnNlY29uZGFyeSxcbmJ1dHRvbi5naG9zdCxcbmJ1dHRvbi5zbWFsbCxcbi5jbGVhci1idG4sXG4uY29weS1idXR0b24sXG4ubWluaS1idXR0b24sXG4uY3VzdG9tLXBhZ2VyIGJ1dHRvbixcbi5tZXRhLXBpbGwubGlnaHQge1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0YWNrLWRvY3MtYm9yZGVyKTtcbiAgY29sb3I6ICMxNzMyNGQ7XG59XG5cbnByZSxcbi5jb2RlLFxuLnN0YXRlLFxuLnN0ZXAgcHJlLFxuLmNvZGUtY2FyZCBwcmUsXG4uY29kZS1ibG9jayxcbi5jb2RlLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiAjMWYyNDM4O1xuICBjb2xvcjogI2VlZjNmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5oZXJvLFxuICAubGF5b3V0LFxuICAuZXhhbXBsZS1zaGVsbCxcbiAgLmV4YW1wbGUtZXhwbG9yZXIsXG4gIC5xdWlja3N0YXJ0LWdyaWQsXG4gIC5kb2NzLWxheW91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZW1vLW5hdixcbiAgLnNpZGViYXIsXG4gIC5sb2ctcGFuZWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdG9wOiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cblxuICAucmVmLWdyaWQsXG4gIC5yZXN1bHRzLWdyaWQsXG4gIC5jb250cm9sLWdyaWQsXG4gIC5hcGktZ3JpZCxcbiAgLmZlYXR1cmUtZ3JpZCxcbiAgLmRlbW8tZ3JpZCxcbiAgLnRvZ2dsZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuc2hlbGwge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweCAzNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGVyby1jYXJkLFxuICAucGFuZWwsXG4gIC5sb2ctcGFuZWwsXG4gIC5zaWRlYmFyLWNhcmQsXG4gIC5kZW1vLWNhcmQsXG4gIC5yZWYtY2FyZCxcbiAgLnJlbGVhc2UtY2FyZCxcbiAgLmRlbW8tc3RhZ2UsXG4gIC5leGFtcGxlLXN0YWdlIHtcbiAgICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgfVxuXG4gIC5oZXJvLW1haW4gaDEsXG4gIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDEzdncsIDNyZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjAyO1xuICB9XG5cbiAgLmN0YS1yb3csXG4gIC5yZWxlYXNlLWxpbmtzLFxuICAuY29udHJvbHMsXG4gIC50b29sYmFyLFxuICAuZXhhbXBsZS1zdGFnZS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuYnRuLFxuICAucmVsZWFzZS1saW5rLFxuICBidXR0b24sXG4gIC5jb3B5LWJ1dHRvbixcbiAgLmNsZWFyLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFibGUtaGVhZCxcbiAgLnRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbi8qIHN0YWNrbGluZS1kb2NzLXdyYXAtZml4LTIwMjYgKi9cbi5oZXJvLW1haW4gaDEsXG4uaGVybyBoMSxcbi5wYWdlLWhlYWRlciBoMSxcbi5kb2NzLWhlcm8gaDEsXG5hcnRpY2xlIGgxOmZpcnN0LWNoaWxkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDEuMDI7XG59XG5cbi5oZXJvLWNhcmQsXG4ucGFuZWwsXG4uc2lkZWJhci1jYXJkLFxuLmRlbW8tY2FyZCxcbi5wcmV2aWV3LWZyYW1lLFxuLnN1cmZhY2UtY2FyZCxcbi50YWJsZS1zaGVsbCxcbi5pbnN0YWxsLWNhcmQsXG4uY29weS1jYXJkLFxuLmNhcmQtc2hlbGwsXG4uc2hvd2Nhc2UtY2FyZCxcbi5kb2NzLWNhcmQsXG4uZG9jcy1wYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmJhZGdlLFxuLmhlcm8tYmFkZ2UsXG4udmVyc2lvbi1waWxsLFxuLnJlbGVhc2UtcGlsbCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVyby1tYWluIGgxLFxuICAuaGVybyBoMSxcbiAgLnBhZ2UtaGVhZGVyIGgxLFxuICAuZG9jcy1oZXJvIGgxLFxuICBhcnRpY2xlIGgxOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDExdncsIDMuMTVyZW0pO1xuICB9XG59XG5cbi8qIHN0YWNrbGluZS1kb2NzLW1vYmlsZS10aXRsZS1maXgtMjAyNiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5oZXJvLW1haW4gaDEsXG4gIC5oZXJvIGgxLFxuICAucGFnZS1oZWFkZXIgaDEsXG4gIC5kb2NzLWhlcm8gaDEsXG4gIGFydGljbGUgaDE6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCA4dncsIDIuNjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW0gIWltcG9ydGFudDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cbn1cblxuXG4vKiBzdGFja2xpbmUtZG9jcy1tb2JpbGUtbGF5b3V0LWZpeC0yMDI2ICovXG4uaGVyby1tYWluIGgxLFxuLmhlcm8tbWFpbiBoMixcbi5oZXJvLWNhcmQgaDEsXG4uaGVyby1jYXJkIGgyLFxuLmhlcm8gaDEsXG4uaGVybyBoMixcbi5wYWdlLWhlYWRlciBoMSxcbi5wYWdlLWhlYWRlciBoMixcbi5kb2NzLWhlcm8gaDEsXG4uZG9jcy1oZXJvIGgyLFxuYXJ0aWNsZSBoMTpmaXJzdC1jaGlsZCxcbmFydGljbGUgaDI6Zmlyc3QtY2hpbGQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ubGF5b3V0LFxuLmRvY3MtbGF5b3V0LFxuLmhlcm8sXG4uaGVyby1ncmlkLFxuLmNvbnRlbnQtZ3JpZCxcbi5wbGF5Z3JvdW5kLXNoZWxsLFxuLnBsYXlncm91bmRfX2dyaWQsXG4uZXhhbXBsZS1zaGVsbCxcbi5leGFtcGxlLWV4cGxvcmVyLFxuLnF1aWNrc3RhcnQtZ3JpZCxcbi53b3JrYmVuY2gtZ3JpZCxcbi5yZWxlYXNlLWxpbmtzLFxuLmN0YS1yb3csXG4uY29udHJvbHMsXG4uaGVyby1hY3Rpb25zLFxuLmlubGluZS1hY3Rpb25zLFxuLnBsYXlncm91bmQtYWN0aW9ucyxcbi5wbGF5Z3JvdW5kLXByZXZpZXctdGFicyxcbi5maWVsZCxcbi5maWVsZC50d28tdXAsXG4uc2lkZWJhcixcbi5zaWRlYmFyLWNhcmQsXG4ucGFuZWwsXG4uZGVtby1jYXJkLFxuLnBsYXlncm91bmQtY2FyZCxcbi5wbGF5Z3JvdW5kLWNvbnRyb2xzLFxuLnBsYXlncm91bmQtcHJldmlldyxcbi5yZXN1bHQtY2FyZCxcbi5jb250cm9scy1jYXJkLFxuLnJlbGVhc2UtY2FyZCxcbi5hcGktY2FyZCxcbi5wcmV2aWV3LWNhcmQsXG4uZXhhbXBsZS1zdGFnZSxcbi5kZW1vLXN0YWdlLFxuLmRvY3MtcGFuZWwsXG4uZG9jcy1jYXJkLFxuLnRhYmxlLXNoZWxsLFxuLnN1cmZhY2UtY2FyZCxcbi5jb3B5LWNhcmQsXG4uaW5zdGFsbC1jYXJkLFxuLmNhcmQtc2hlbGwsXG4uaGVyby1jb3B5LFxuLmhlcm8tc2V0dXAge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5iYWRnZSxcbi5oZXJvLWJhZGdlLFxuLnZlcnNpb24tcGlsbCxcbi5yZWxlYXNlLXBpbGwsXG4ubWV0YS1waWxsLFxuLnJlbGVhc2UtbGluayB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbnByZSxcbi5jb2RlLFxuLmNvZGUtYmxvY2ssXG4uY29kZS1wcmV2aWV3LFxuLnNuaXBwZXQgcHJlLFxuLmNvZGUtY2FyZCBwcmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucmVsZWFzZS1saW5rcyxcbiAgLmN0YS1yb3csXG4gIC5jb250cm9scyxcbiAgLmhlcm8tYWN0aW9ucyxcbiAgLmlubGluZS1hY3Rpb25zLFxuICAucGxheWdyb3VuZC1hY3Rpb25zLFxuICAudG9vbGJhcixcbiAgLmV4YW1wbGUtc3RhZ2UtaGVhZGVyLFxuICAucGxheWdyb3VuZC1wcmV2aWV3LXRhYnMge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLnJlbGVhc2UtbGluayxcbiAgLmJ0bixcbiAgLmJ1dHRvbixcbiAgLmdob3N0LWJ1dHRvbixcbiAgYnV0dG9uLFxuICAuY29weS1idXR0b24sXG4gIC5jbGVhci1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBsYXlncm91bmQtc2hlbGwsXG4gIC5wbGF5Z3JvdW5kX19ncmlkLFxuICAuZXhhbXBsZS1zaGVsbCxcbiAgLmV4YW1wbGUtZXhwbG9yZXIsXG4gIC5xdWlja3N0YXJ0LWdyaWQsXG4gIC53b3JrYmVuY2gtZ3JpZCxcbiAgLmRlbW8tZ3JpZCxcbiAgLmFwaS1ncmlkLFxuICAuZmVhdHVyZS1ncmlkLFxuICAucmVzdWx0cy1ncmlkLFxuICAuY29udHJvbC1ncmlkLFxuICAudG9nZ2xlLWdyaWQsXG4gIC5tZXRhLWdyaWQsXG4gIC5wYWdlLWdyaWQsXG4gIC5zdXJmYWNlLWNhcmQtZ3JpZCxcbiAgLmhlcm8tZ3JpZCxcbiAgLmNvbnRlbnQtZ3JpZCxcbiAgLmxheW91dCxcbiAgLmRvY3MtbGF5b3V0LFxuICAuaGVybyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maWVsZC50d28tdXAsXG4gIC5wbGF5Z3JvdW5kLXRhYmxlLWhlYWQsXG4gIC5wbGF5Z3JvdW5kLXRhYmxlLXJvdyxcbiAgLnRhYmxlLWhlYWQsXG4gIC50YWJsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVyby1tYWluIGgxLFxuICAuaGVyby1tYWluIGgyLFxuICAuaGVyby1jYXJkIGgxLFxuICAuaGVyby1jYXJkIGgyLFxuICAuaGVybyBoMSxcbiAgLmhlcm8gaDIsXG4gIC5wYWdlLWhlYWRlciBoMSxcbiAgLnBhZ2UtaGVhZGVyIGgyLFxuICAuZG9jcy1oZXJvIGgxLFxuICAuZG9jcy1oZXJvIGgyLFxuICBhcnRpY2xlIGgxOmZpcnN0LWNoaWxkLFxuICBhcnRpY2xlIGgyOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNTVyZW0sIDd2dywgMi4zNXJlbSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS4wMyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLXNoZWxsLFxuICAuc2hlbGwsXG4gIC5kb2NzLXBhZ2UsXG4gIC5wYWdlLXNoZWxsLFxuICAjYXBwLFxuICAuZG9jcy1zaGVsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlcm8tY2FyZCxcbiAgLnBhbmVsLFxuICAubG9nLXBhbmVsLFxuICAuc2lkZWJhci1jYXJkLFxuICAuZGVtby1jYXJkLFxuICAucmVmLWNhcmQsXG4gIC5yZWxlYXNlLWNhcmQsXG4gIC5kZW1vLXN0YWdlLFxuICAuZXhhbXBsZS1zdGFnZSxcbiAgLnBsYXlncm91bmQtY29udHJvbHMsXG4gIC5wbGF5Z3JvdW5kLXByZXZpZXcsXG4gIC5hcGktY2FyZCxcbiAgLnByZXZpZXctY2FyZCxcbiAgLnN1cmZhY2UtY2FyZCxcbiAgLnRhYmxlLXNoZWxsLFxuICAuZG9jcy1jYXJkLFxuICAuZG9jcy1wYW5lbCB7XG4gICAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIH1cblxuICAuYmFkZ2UsXG4gIC5oZXJvLWJhZGdlLFxuICAudmVyc2lvbi1waWxsLFxuICAucmVsZWFzZS1waWxsLFxuICAubWV0YS1waWxsLFxuICAucmVsZWFzZS1saW5rIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIHByZSxcbiAgLmNvZGUsXG4gIC5jb2RlLWJsb2NrLFxuICAuY29kZS1wcmV2aWV3IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stackline/angular-data-table-component */ 5376);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableModule]
  });
})();

/***/ }),

/***/ 5745:
/*!******************************!*\
  !*** ./src/app/docs-meta.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGULAR_LINE: () => (/* binding */ ANGULAR_LINE),
/* harmony export */   DOCS_PATH: () => (/* binding */ DOCS_PATH),
/* harmony export */   PACKAGE_LINE: () => (/* binding */ PACKAGE_LINE)
/* harmony export */ });
const ANGULAR_LINE = '18.2.x';
const PACKAGE_LINE = '18.0.0';
const DOCS_PATH = 'angular-18';

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(error => console.error(error));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map