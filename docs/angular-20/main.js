"use strict";
(self["webpackChunkdocs_angular_20"] = self["webpackChunkdocs_angular_20"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _docs_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-meta */ 5745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stackline/angular-data-table-component */ 5304);
var _staticBlock;





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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_section_71_button_4_Template_button_click_0_listener() {
      const demo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectDemo(demo_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const demo_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", demo_r3.id === ctx_r3.selectedDemoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", demo_r3.title, " ");
  }
}
function AppComponent_section_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 46)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppComponent_section_71_button_4_Template, 2, 3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r5.demos)("ngForTrackBy", ctx_r3.trackByDemo);
  }
}
function AppComponent_ng_container_86_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 55)(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AppComponent_ng_container_86_label_3_Template_input_change_1_listener() {
      const toggle_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleKitchenSetting(toggle_r8.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toggle_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r3.kitchenSettings[toggle_r8.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](toggle_r8.label);
  }
}
function AppComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_ng_container_86_label_3_Template, 4, 2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " The Kitchen Sink keeps the docs honest: all core table flags can be combined in one Angular view without adapters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "revive-data-table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_86_Template_revive_data_table_sortChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Kitchen Sink", $event));
    })("selectedRowsChange", function AppComponent_ng_container_86_Template_revive_data_table_selectedRowsChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onBasicSelectionChange($event));
    })("rowClicked", function AppComponent_ng_container_86_Template_revive_data_table_rowClicked_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowClick("Kitchen Sink", $event));
    })("rowExpandToggled", function AppComponent_ng_container_86_Template_revive_data_table_rowExpandToggled_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Kitchen Sink", $event));
    })("pageChange", function AppComponent_ng_container_86_Template_revive_data_table_pageChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Kitchen Sink", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_86_Template_revive_data_table_rowsPerPageChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Kitchen Sink", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const kitchenTools_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](362);
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.kitchenToggles);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.kitchenColumns)("data", ctx_r3.kitchenRows)("selectableRows", ctx_r3.kitchenSettings.selectableRows)("selectableRowsSingle", ctx_r3.kitchenSettings.selectableRowsSingle)("selectableRowsNoSelectAll", ctx_r3.kitchenSettings.selectableRowsNoSelectAll)("selectableRowsVisibleOnly", ctx_r3.kitchenSettings.selectableRowsVisibleOnly)("selectableRowsHighlight", ctx_r3.kitchenSettings.selectableRowsHighlight)("expandableRows", ctx_r3.kitchenSettings.expandableRows)("expandOnRowClicked", ctx_r3.kitchenSettings.expandOnRowClicked)("expandOnRowDoubleClicked", ctx_r3.kitchenSettings.expandOnRowDoubleClicked)("expandableRowsHideExpander", ctx_r3.kitchenSettings.expandableRowsHideExpander)("expandableRowTemplate", movieDetail_r10)("pagination", ctx_r3.kitchenSettings.pagination)("striped", ctx_r3.kitchenSettings.striped)("highlightOnHover", ctx_r3.kitchenSettings.highlightOnHover)("pointerOnHover", ctx_r3.kitchenSettings.pointerOnHover)("dense", ctx_r3.kitchenSettings.dense)("responsive", ctx_r3.kitchenSettings.responsive)("fixedHeader", ctx_r3.kitchenSettings.fixedHeader)("subHeader", ctx_r3.kitchenSettings.subHeader)("subHeaderTemplate", kitchenTools_r9)("noHeader", ctx_r3.kitchenSettings.noHeader)("noTableHead", ctx_r3.kitchenSettings.noTableHead)("noContextMenu", ctx_r3.kitchenSettings.noContextMenu)("progressPending", ctx_r3.kitchenSettings.progressPending)("contextMessage", ctx_r3.reviewContextMessage);
  }
}
function AppComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowClicked", function AppComponent_ng_container_87_Template_revive_data_table_rowClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowClick("Basic table", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Filter state stays in the Angular component while the table continues handling sorting and pagination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "revive-data-table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_88_Template_revive_data_table_sortChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Filtering", $event));
    })("pageChange", function AppComponent_ng_container_88_Template_revive_data_table_pageChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Filtering", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_88_Template_revive_data_table_rowsPerPageChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Filtering", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const filterTools_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", filterTools_r13);
  }
}
function AppComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_89_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Basic sorting", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_90_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Default sort", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.defaultSortColumns)("data", ctx_r3.movies)("pagination", true)("defaultSortFieldId", "rating")("defaultSortAsc", false);
  }
}
function AppComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_91_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Custom sort", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customSortColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_92_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRemoteSort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.remoteSortRows)("pagination", true)("sortServer", true)("progressPending", ctx_r3.remoteSortLoading);
  }
}
function AppComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_93_Template_revive_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Basic pagination", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_93_Template_revive_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Basic pagination", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_94_Template_revive_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onPage("Pagination options", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_94_Template_revive_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowsPerPage("Pagination options", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true)("paginationPerPage", 5)("paginationRowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c7));
  }
}
function AppComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_95_Template_revive_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onServerPage($event));
    })("rowsPerPageChange", function AppComponent_ng_container_95_Template_revive_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onServerRowsPerPage($event));
    })("sortChange", function AppComponent_ng_container_95_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Remote pagination", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.serverColumns)("data", ctx_r3.serverRows)("pagination", true)("paginationServer", true)("paginationDefaultPage", ctx_r3.serverPage)("paginationPerPage", ctx_r3.serverRowsPerPage)("paginationRowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c8))("paginationTotalRows", ctx_r3.allTickets.length)("progressPending", ctx_r3.serverLoading);
  }
}
function AppComponent_ng_container_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_96_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Fixed header", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.movies)("pagination", true)("fixedHeader", true)("highlightOnHover", true);
  }
}
function AppComponent_ng_container_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "revive-data-table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_97_Template_revive_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onBasicSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("pagination", true)("selectableRowsHighlight", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.basicSelectionSummary);
  }
}
function AppComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "revive-data-table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_98_Template_revive_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSingleSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowsSingle", true)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.singleSelectionSummary);
  }
}
function AppComponent_ng_container_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowSelected", ctx_r3.isPreselectedMovie)("pagination", true);
  }
}
function AppComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionStatusColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowDisabled", ctx_r3.isSelectionDisabled)("pagination", true);
  }
}
function AppComponent_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "revive-data-table", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_101_Template_revive_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onVisibleSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("selectableRowsVisibleOnly", true)("pagination", true)("paginationPerPage", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.visibleSelectionSummary);
  }
}
function AppComponent_ng_container_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_102_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.deleteManagedSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Delete selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_102_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.clearManagedSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Clear selection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "revive-data-table", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_102_Template_revive_data_table_selectedRowsChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onManagedSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r3.managedSelectedRows.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r3.managedSelectedRows.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.managedRows)("selectableRows", true)("pagination", true)("clearSelectedRows", ctx_r3.managedClearSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.managedSelectionSummary);
  }
}
function AppComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_103_Template_revive_data_table_selectedRowsChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onBasicSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.selectionColumns)("data", ctx_r3.movies)("selectableRows", true)("pagination", true)("contextMessage", ctx_r3.reviewContextMessage);
  }
}
function AppComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_104_Template_revive_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Expandable", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("pagination", true);
  }
}
function AppComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_105_Template_revive_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Expand on row click", $event));
    })("rowClicked", function AppComponent_ng_container_105_Template_revive_data_table_rowClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onRowClick("Expand on row click", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandOnRowClicked", true)("pagination", true);
  }
}
function AppComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandableRowExpanded", ctx_r3.isPreExpandedMovie)("pagination", true);
  }
}
function AppComponent_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandableRowDisabled", ctx_r3.isExpansionDisabled)("pagination", true);
  }
}
function AppComponent_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_108_Template_revive_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onExpand("Hide expander", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("expandableRowsHideExpander", true)("expandOnRowClicked", true)("pagination", true);
  }
}
function AppComponent_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "revive-data-table", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_110_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSort("Formatters", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.formatterColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.omitColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_112_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleDirectorColumn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "revive-data-table", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.hideDirectorColumn ? "Show director column" : "Hide director column", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.dynamicOmitColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.alignmentColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.customColumns)("data", ctx_r3.movies)("conditionalRowStyles", ctx_r3.contextualStyles)("pagination", true)("highlightOnHover", true)("pointerOnHover", true);
  }
}
function AppComponent_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_115_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.restartLoadingDemo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Restart loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "revive-data-table", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.loadingRows)("pagination", true)("progressPending", ctx_r3.loadingPending);
  }
}
function AppComponent_ng_container_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c9))("pagination", true);
  }
}
function AppComponent_ng_container_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const movieDetail_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.compactColumns)("data", ctx_r3.movies)("pagination", true)("highlightOnHover", true)("pointerOnHover", true)("expandableRows", true)("expandableRowTemplate", movieDetail_r10)("selectableRows", true);
  }
}
function AppComponent_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.compactColumns)("data", ctx_r3.movies)("pagination", true)("dense", true)("striped", true)("highlightOnHover", true)("pointerOnHover", true);
  }
}
function AppComponent_ng_container_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const filterTools_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", filterTools_r13);
  }
}
function AppComponent_ng_container_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true)("noHeader", true);
  }
}
function AppComponent_ng_container_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true)("noTableHead", true)("selectableRows", true);
  }
}
function AppComponent_ng_container_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "revive-data-table", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx_r3.basicColumns)("data", ctx_r3.movies)("pagination", true);
  }
}
function AppComponent_div_335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", entry_r33, " ");
  }
}
function AppComponent_ng_template_361_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 72)(1, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_361_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onKitchenSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_361_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onKitchenSearchTermChange(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.kitchenSearchTerm);
  }
}
function AppComponent_ng_template_363_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 72)(1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_363_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onFilterSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_363_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onFilterSearchTermChange(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.filterSearchTerm);
  }
}
function AppComponent_ng_template_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    const value_r37 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.statusTone(row_r36.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r37, " ");
  }
}
function AppComponent_ng_template_367_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 101)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.formatMoney(row_r38.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r38.genre);
  }
}
function AppComponent_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    const value_r40 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.priorityTone(row_r39.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r40, " ");
  }
}
function AppComponent_ng_template_371_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const value_r42 = ctx.value;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.ticketStatusTone(row_r41.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r42, " ");
  }
}
function AppComponent_ng_template_373_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 104)(1, "div")(2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div")(17, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 106)(22, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r43.director);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r43.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.formatRating(row_r43.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.formatMoney(row_r43.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r43.summary);
  }
}
const INSTALL_CODE = 'npm install @stackline/angular-data-table-component';
const SETUP_CODE = `import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { DataTableModule } from '@stackline/angular-data-table-component';\n\n@NgModule({\n  imports: [BrowserModule, DataTableModule]\n})\nexport class AppModule {}`;
const RENDER_CODE = `<revive-data-table\n  [columns]="columns"\n  [data]="rows"\n  [pagination]="true">\n</revive-data-table>`;
const DEMO_GROUPS = [{
  title: 'Getting Started',
  demos: [{
    id: 'kitchen-sink',
    category: 'Getting Started',
    title: 'Kitchen Sink',
    summary: 'Toggle the main table behaviors together and validate how selection, expansion, pagination, headers, and hover states compose in Angular.',
    code: `<revive-data-table\n  [columns]="kitchenColumns"\n  [data]="kitchenRows"\n  [selectableRows]="kitchenSettings.selectableRows"\n  [expandableRows]="kitchenSettings.expandableRows"\n  [pagination]="kitchenSettings.pagination">\n</revive-data-table>`
  }]
}, {
  title: 'Examples',
  demos: [{
    id: 'basic-table',
    category: 'Examples',
    title: 'Basic Table',
    summary: 'Start with a plain set of declarative columns and turn on pagination with no adapters.',
    code: `<revive-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`
  }, {
    id: 'filtering',
    category: 'Examples',
    title: 'Filtering with Subheader',
    summary: 'Keep search state in the Angular component while the table handles pagination and sorting.',
    code: `<revive-data-table\n  [columns]="sortableColumns"\n  [data]="filteredMovies"\n  [pagination]="true"\n  [subHeader]="true"\n  [subHeaderTemplate]="filterTools">\n</revive-data-table>`
  }]
}, {
  title: 'Sorting',
  demos: [{
    id: 'sorting-basic',
    category: 'Sorting',
    title: 'Basic',
    summary: 'Built-in sorting covers the common case with simple selectors.',
    code: `<revive-data-table\n  [columns]="sortableColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`
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
    code: `<revive-data-table\n  [columns]="sortableColumns"\n  [data]="remoteSortRows"\n  [sortServer]="true"\n  [progressPending]="remoteSortLoading"\n  (sortChange)="onRemoteSort($event)">\n</revive-data-table>`
  }]
}, {
  title: 'Pagination',
  demos: [{
    id: 'pagination-basic',
    category: 'Pagination',
    title: 'Basic',
    summary: 'Client-side pagination keeps longer datasets readable with no extra host code.',
    code: `<revive-data-table\n  [columns]="basicColumns"\n  [data]="movies"\n  [pagination]="true">\n</revive-data-table>`
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
    code: `<revive-data-table\n  [columns]="serverColumns"\n  [data]="serverRows"\n  [pagination]="true"\n  [paginationServer]="true"\n  [paginationTotalRows]="allTickets.length"\n  (pageChange)="onServerPage($event)">\n</revive-data-table>`
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
    code: `<revive-data-table\n  [columns]="selectionColumns"\n  [data]="movies"\n  [selectableRows]="true"\n  (selectedRowsChange)="onBasicSelectionChange($event)">\n</revive-data-table>`
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
    code: `<revive-data-table\n  [columns]="customColumns"\n  [data]="movies"\n  [expandableRows]="true"\n  [expandableRowTemplate]="movieDetail">\n</revive-data-table>`
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
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["docs-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c6, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.kitchenTools = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filterTools = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.statusCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.budgetCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ticketPriorityCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ticketStatusCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.movieDetail = _t.first);
      }
    },
    standalone: false,
    decls: 375,
    vars: 52,
    consts: [["kitchenTools", ""], ["filterTools", ""], ["statusCell", ""], ["budgetCell", ""], ["ticketPriorityCell", ""], ["ticketStatusCell", ""], ["movieDetail", ""], [1, "shell"], [1, "hero"], [1, "hero-card", "hero-main"], [1, "badge"], [1, "feature-grid"], [1, "feature"], [1, "cta-row"], ["href", "#examples", 1, "btn"], ["href", "https://github.com/alexandroit/angular-data-table-component#readme", "target", "_blank", "rel", "noreferrer", 1, "btn", "secondary"], [1, "hero-card", "hero-setup"], [1, "step"], [1, "step-num"], ["id", "examples", 1, "layout"], [1, "panels"], [1, "panel"], [1, "panel-header"], [1, "example-explorer"], [1, "demo-nav"], ["class", "demo-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "demo-stage"], [1, "demo-stage-header"], [1, "demo-breadcrumb"], [1, "meta-pill"], [1, "meta-pill", "light"], [1, "code"], [1, "table-host", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ref-grid"], [1, "ref-card"], [1, "api-table"], [1, "sidebar"], [1, "panel", "log-panel"], [1, "log-header"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "log-list"], ["class", "log-entry", 4, "ngFor", "ngForOf"], [1, "release-card"], [1, "api-row"], [1, "demo-group"], [1, "demo-list"], ["type", "button", "class", "demo-link", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "demo-link", 3, "click"], [1, "demo-stack"], [1, "toggle-grid"], ["class", "toggle-card", 4, "ngFor", "ngForOf"], [1, "demo-note"], ["title", "Kitchen Sink movie list", "fixedHeaderScrollHeight", "280px", 3, "sortChange", "selectedRowsChange", "rowClicked", "rowExpandToggled", "pageChange", "rowsPerPageChange", "columns", "data", "selectableRows", "selectableRowsSingle", "selectableRowsNoSelectAll", "selectableRowsVisibleOnly", "selectableRowsHighlight", "expandableRows", "expandOnRowClicked", "expandOnRowDoubleClicked", "expandableRowsHideExpander", "expandableRowTemplate", "pagination", "striped", "highlightOnHover", "pointerOnHover", "dense", "responsive", "fixedHeader", "subHeader", "subHeaderTemplate", "noHeader", "noTableHead", "noContextMenu", "progressPending", "contextMessage"], [1, "toggle-card"], ["type", "checkbox", 3, "change", "checked"], ["title", "Film catalog", 3, "rowClicked", "columns", "data", "pagination"], ["title", "Searchable releases", 3, "sortChange", "pageChange", "rowsPerPageChange", "columns", "data", "pagination", "subHeader", "subHeaderTemplate"], ["title", "Basic sorting", 3, "sortChange", "columns", "data", "pagination"], ["title", "Default sort by rating", 3, "sortChange", "columns", "data", "pagination", "defaultSortFieldId", "defaultSortAsc"], ["title", "Custom title sort", 3, "sortChange", "columns", "data", "pagination"], ["title", "Server-style sorting", 3, "sortChange", "columns", "data", "pagination", "sortServer", "progressPending"], ["title", "Basic pagination", 3, "pageChange", "rowsPerPageChange", "columns", "data", "pagination"], ["title", "Rows per page options", 3, "pageChange", "rowsPerPageChange", "columns", "data", "pagination", "paginationPerPage", "paginationRowsPerPageOptions"], ["title", "Support tickets", 3, "pageChange", "rowsPerPageChange", "sortChange", "columns", "data", "pagination", "paginationServer", "paginationDefaultPage", "paginationPerPage", "paginationRowsPerPageOptions", "paginationTotalRows", "progressPending"], ["title", "Fixed header", "fixedHeaderScrollHeight", "280px", 3, "sortChange", "columns", "data", "pagination", "fixedHeader", "highlightOnHover"], ["title", "Selectable rows", 3, "selectedRowsChange", "columns", "data", "selectableRows", "pagination", "selectableRowsHighlight"], ["title", "Single selection", 3, "selectedRowsChange", "columns", "data", "selectableRows", "selectableRowsSingle", "pagination"], ["title", "Pre selected rows", 3, "columns", "data", "selectableRows", "selectableRowSelected", "pagination"], ["title", "Pre disabled rows", 3, "columns", "data", "selectableRows", "selectableRowDisabled", "pagination"], ["title", "Visible-page selection", 3, "selectedRowsChange", "columns", "data", "selectableRows", "selectableRowsVisibleOnly", "pagination", "paginationPerPage"], [1, "toolbar", "toolbar-inline"], ["type", "button", 1, "mini-button", "danger", 3, "click", "disabled"], ["type", "button", 1, "mini-button", 3, "click", "disabled"], ["title", "Manage selections", 3, "selectedRowsChange", "columns", "data", "selectableRows", "pagination", "clearSelectedRows"], ["title", "Custom context message", 3, "selectedRowsChange", "columns", "data", "selectableRows", "pagination", "contextMessage"], ["title", "Expandable rows", 3, "rowExpandToggled", "columns", "data", "expandableRows", "expandableRowTemplate", "pagination"], ["title", "Expand on row click", 3, "rowExpandToggled", "rowClicked", "columns", "data", "expandableRows", "expandableRowTemplate", "expandOnRowClicked", "pagination"], ["title", "Pre expanded", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowExpanded", "pagination"], ["title", "Pre disabled expansion", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowDisabled", "pagination"], ["title", "Hide expander", 3, "rowExpandToggled", "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowsHideExpander", "expandOnRowClicked", "pagination"], ["title", "Template-driven cells", 3, "columns", "data", "pagination"], ["title", "Formatter columns", 3, "sortChange", "columns", "data", "pagination"], ["title", "Omit column", 3, "columns", "data", "pagination"], ["type", "button", 1, "mini-button", 3, "click"], ["title", "Dynamic omit", 3, "columns", "data", "pagination"], ["title", "Alignment and wrap", 3, "columns", "data", "pagination"], ["title", "Conditional rows", 3, "columns", "data", "conditionalRowStyles", "pagination", "highlightOnHover", "pointerOnHover"], ["title", "Loading pending", 3, "columns", "data", "pagination", "progressPending"], ["title", "Empty state", "noDataText", "No archived releases found.", 3, "columns", "data", "pagination"], ["title", "Dark theme", "theme", "dark", 3, "columns", "data", "pagination", "highlightOnHover", "pointerOnHover", "expandableRows", "expandableRowTemplate", "selectableRows"], ["title", "Dense and striped", 3, "columns", "data", "pagination", "dense", "striped", "highlightOnHover", "pointerOnHover"], ["title", "Subheader tools", 3, "columns", "data", "pagination", "subHeader", "subHeaderTemplate"], ["title", "No header", 3, "columns", "data", "pagination", "noHeader"], ["title", "No table head", 3, "columns", "data", "pagination", "noTableHead", "selectableRows"], ["title", "Film catalog", 3, "columns", "data", "pagination"], [1, "log-entry"], ["type", "search", "placeholder", "Search titles, directors, genres, or status", 3, "ngModelChange", "ngModel"], ["type", "search", "placeholder", "Filter by title, director, genre, status, or summary", 3, "ngModelChange", "ngModel"], [1, "status-pill", 3, "ngClass"], [1, "metric-stack"], [1, "priority-pill", 3, "ngClass"], [1, "priority-pill", "status-tone", 3, "ngClass"], [1, "detail-grid"], [1, "detail-label"], [1, "detail-summary"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "section", 8)(2, "div", 9)(3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "@stackline/angular-data-table-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " A maintained Angular data table component with a full Angular-first example explorer: sorting, selection, expansion, pagination, conditional rows, themes, loading states, and template-driven cells across every maintained Angular line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 11)(10, "div", 12)(11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Story-rich docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " The docs now cover the full Angular API surface instead of a short flat sample list. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Template-native cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Rich cells and expanded content use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " instead of framework adapters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Table workflows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Sorting, pagination, selection, expansion, hover states, and context bars all stay visible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12)(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Versioned docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Each maintained Angular release line keeps its own docs app and compiled history. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13)(30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Explore examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " README ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16)(35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Setup in 3 steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 17)(38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div")(41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Install");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 17)(46, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div")(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Register the module");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 17)(54, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div")(57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Render the table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "section", 19)(62, "div", 20)(63, "article", 21)(64, "div", 22)(65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Example explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " This gallery rebuilds the docs into a navigable explorer so the Angular API surface is easy to browse on desktop and mobile while staying faithful to the real component capabilities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 23)(70, "aside", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, AppComponent_section_71_Template, 5, 3, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 26)(73, "div", 27)(74, "div", 28)(75, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "pre", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, AppComponent_ng_container_86_Template, 7, 27, "ng-container", 33)(87, AppComponent_ng_container_87_Template, 2, 3, "ng-container", 33)(88, AppComponent_ng_container_88_Template, 5, 5, "ng-container", 33)(89, AppComponent_ng_container_89_Template, 2, 3, "ng-container", 33)(90, AppComponent_ng_container_90_Template, 2, 5, "ng-container", 33)(91, AppComponent_ng_container_91_Template, 2, 3, "ng-container", 33)(92, AppComponent_ng_container_92_Template, 2, 5, "ng-container", 33)(93, AppComponent_ng_container_93_Template, 2, 3, "ng-container", 33)(94, AppComponent_ng_container_94_Template, 2, 6, "ng-container", 33)(95, AppComponent_ng_container_95_Template, 2, 10, "ng-container", 33)(96, AppComponent_ng_container_96_Template, 2, 5, "ng-container", 33)(97, AppComponent_ng_container_97_Template, 5, 6, "ng-container", 33)(98, AppComponent_ng_container_98_Template, 5, 6, "ng-container", 33)(99, AppComponent_ng_container_99_Template, 2, 5, "ng-container", 33)(100, AppComponent_ng_container_100_Template, 2, 5, "ng-container", 33)(101, AppComponent_ng_container_101_Template, 5, 7, "ng-container", 33)(102, AppComponent_ng_container_102_Template, 10, 8, "ng-container", 33)(103, AppComponent_ng_container_103_Template, 2, 5, "ng-container", 33)(104, AppComponent_ng_container_104_Template, 2, 5, "ng-container", 33)(105, AppComponent_ng_container_105_Template, 2, 6, "ng-container", 33)(106, AppComponent_ng_container_106_Template, 2, 6, "ng-container", 33)(107, AppComponent_ng_container_107_Template, 2, 6, "ng-container", 33)(108, AppComponent_ng_container_108_Template, 2, 7, "ng-container", 33)(109, AppComponent_ng_container_109_Template, 2, 3, "ng-container", 33)(110, AppComponent_ng_container_110_Template, 2, 3, "ng-container", 33)(111, AppComponent_ng_container_111_Template, 2, 3, "ng-container", 33)(112, AppComponent_ng_container_112_Template, 6, 4, "ng-container", 33)(113, AppComponent_ng_container_113_Template, 2, 3, "ng-container", 33)(114, AppComponent_ng_container_114_Template, 2, 6, "ng-container", 33)(115, AppComponent_ng_container_115_Template, 6, 4, "ng-container", 33)(116, AppComponent_ng_container_116_Template, 2, 4, "ng-container", 33)(117, AppComponent_ng_container_117_Template, 2, 8, "ng-container", 33)(118, AppComponent_ng_container_118_Template, 2, 7, "ng-container", 33)(119, AppComponent_ng_container_119_Template, 2, 5, "ng-container", 33)(120, AppComponent_ng_container_120_Template, 2, 4, "ng-container", 33)(121, AppComponent_ng_container_121_Template, 2, 5, "ng-container", 33)(122, AppComponent_ng_container_122_Template, 2, 3, "ng-container", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "article", 21)(124, "div", 22)(125, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "API reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " These inputs, column fields, and outputs are the levers that show up repeatedly across the Angular example tree. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 35)(130, "div", 36)(131, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Core inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "table", 37)(134, "thead")(135, "tr")(136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "tbody")(141, "tr")(142, "td")(143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Declarative column definitions with selectors, sort rules, and optional templates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "tr")(148, "td")(149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "The row array to render for the current view.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "tr")(154, "td")(155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Turns on the built-in footer pagination UI.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "tr")(160, "td")(161, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "paginationServer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Stops client slicing so the host component controls which rows are loaded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "tr")(166, "td")(167, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "sortServer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Leaves sorting to the host component while still exposing the sort event payload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "tr")(172, "td")(173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Switch between the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, " presets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 36)(184, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Selection and expansion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "table", 37)(187, "thead")(188, "tr")(189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "tbody")(194, "tr")(195, "td")(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "selectableRows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "Enables checkbox or radio row selection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "tr")(201, "td")(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "selectableRowsSingle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Restricts selection to a single active row.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "tr")(207, "td")(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "selectableRowSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "Programmatically preselect rows from host rules.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "tr")(213, "td")(214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "selectableRowDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Disables rows without removing them from the dataset.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "tr")(219, "td")(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "expandableRows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Enables expandable detail rows.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "tr")(225, "td")(226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "expandableRowTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Angular template used to render expanded row content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 36)(231, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Column capabilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "table", 37)(234, "thead")(235, "tr")(236, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "tbody")(241, "tr")(242, "td")(243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Read values through a property key or a row function.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "tr")(248, "td")(249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "format");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "Return custom display text without a full template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "tr")(254, "td")(255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "cellTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Use an Angular template for richer cell layouts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "tr")(260, "td")(261, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "sortFunction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Override comparison logic for a single column.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "tr")(266, "td")(267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "omit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "Hide a column while keeping it in the declarative config.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "tr")(272, "td")(273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, "wrap / right / center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Control cell alignment and text wrapping declaratively.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 36)(278, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Outputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "table", 37)(281, "thead")(282, "tr")(283, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "tbody")(288, "tr")(289, "td")(290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, "sortChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "Fires with the current column, direction, and visible rows.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "tr")(295, "td")(296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "selectedRowsChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Returns the selection state and selected rows array.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "tr")(301, "td")(302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "pageChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Fires when the current page changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "tr")(307, "td")(308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "rowsPerPageChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, "Fires when the footer page size changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "tr")(313, "td")(314, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, "rowClicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "Fires when a row is clicked.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "tr")(319, "td")(320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321, "rowExpandToggled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323, "Fires when a detail row opens or closes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "aside", 38)(325, "section", 39)(326, "div", 40)(327, "div")(328, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, "Event Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Interact with the demos to watch Angular events and host-side table workflows appear here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_332_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearLog());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](335, AppComponent_div_335_Template, 2, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 44)(337, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "Release line");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "This docs build is pinned to the same Angular release line and package version published on npm.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "div", 45)(342, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "Package line");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "div", 45)(347, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, "Angular compatibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](350);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "div", 45)(352, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Docs path");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "div", 45)(357, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](358, "Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, "versioned docs-src + compiled docs history");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](361, AppComponent_ng_template_361_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(363, AppComponent_ng_template_363_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(365, AppComponent_ng_template_365_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(367, AppComponent_ng_template_367_Template, 5, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(369, AppComponent_ng_template_369_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(371, AppComponent_ng_template_371_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(373, AppComponent_ng_template_373_Template, 26, 5, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("ANGULAR ", ctx.angularLine, " \u00B7 DATA TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.installCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.setupCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.renderCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.demoGroups)("ngForTrackBy", ctx.trackByGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedDemo.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedDemo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedDemo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedDemo.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedDemo.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.selectedDemo.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "kitchen-sink");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "basic-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "sorting-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "sorting-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "sorting-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "sorting-server");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "pagination-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "pagination-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "pagination-remote");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "fixed-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-single");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-preselected");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-predisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-visible-only");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "selectable-context-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "expandable-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "expandable-row-click");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "expandable-preexpanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "expandable-predisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "expandable-hide-expander");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "columns-template-cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "columns-formatters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "columns-omit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "columns-omit-dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "columns-alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "conditional-rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "loading-pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "loading-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "theme-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "theme-dense");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "headers-subheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "headers-no-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "headers-no-table-head");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](214);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.logEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.packageLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.angularLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.docsPath, "/");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_6__.DataTableComponent],
    styles: ["[_nghost-%COMP%] {\n  color: #102033;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(254, 228, 179, 0.5), transparent 32%),\n    radial-gradient(circle at left 18%, rgba(170, 219, 255, 0.4), transparent 28%),\n    linear-gradient(180deg, #fff9f0 0%, #f5fbff 55%, #eef4fb 100%);\n  min-height: 100vh;\n  padding: 2rem 1.25rem 3.5rem;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n\np[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 0.95fr);\n  margin: 0 auto 1.5rem;\n  max-width: 1440px;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n  min-width: 0;\n  padding: 1.5rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #102033;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin-bottom: 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.feature[_ngcontent-%COMP%], \n.demo-note[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #102033;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.code[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  margin-bottom: 1rem;\n}\n\n.example-explorer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(240px, 280px) minmax(0, 1fr);\n  min-width: 0;\n}\n\n.demo-nav[_ngcontent-%COMP%] {\n  align-self: start;\n  display: grid;\n  gap: 0.9rem;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.demo-group[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.demo-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n\n.demo-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.demo-link[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 12px;\n  color: #14324f;\n  cursor: pointer;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;\n  width: 100%;\n}\n\n.demo-link[_ngcontent-%COMP%]:hover {\n  background: #f1f6fb;\n}\n\n.demo-link.active[_ngcontent-%COMP%] {\n  background: #102033;\n  border-color: transparent;\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.demo-stage[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  min-width: 0;\n  padding: 1.1rem;\n}\n\n.demo-stage-header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.meta-pill[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #102033;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  padding: 0.3rem 0.65rem;\n  text-transform: uppercase;\n}\n\n.meta-pill.light[_ngcontent-%COMP%] {\n  background: #edf4fa;\n  border: 1px solid rgba(20, 50, 79, 0.08);\n  color: #14324f;\n}\n\n.table-host[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  border-radius: 16px;\n  margin-top: 0.95rem;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 0.95rem;\n}\n\n.table-host[_ngcontent-%COMP%]   revive-data-table[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\n.demo-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n}\n\n.demo-note[_ngcontent-%COMP%] {\n  background: #edf4fa;\n  border-radius: 12px;\n  padding: 0.75rem 0.9rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.toolbar-inline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #c8d5e3;\n  border-radius: 12px;\n  flex: 1 1 260px;\n  min-width: 0;\n  padding: 0.75rem 0.9rem;\n}\n\n.toggle-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n\n.toggle-card[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 14px;\n  color: #14324f;\n  display: flex;\n  gap: 0.6rem;\n  padding: 0.8rem 0.9rem;\n}\n\n.toggle-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n\n.mini-button[_ngcontent-%COMP%], \n.clear-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.14);\n  border-radius: 999px;\n  color: #14324f;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0.55rem 0.85rem;\n}\n\n.mini-button[_ngcontent-%COMP%]:hover, \n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6fc;\n}\n\n.mini-button.danger[_ngcontent-%COMP%] {\n  border-color: rgba(161, 41, 41, 0.2);\n  color: #a12929;\n}\n\n.status-pill[_ngcontent-%COMP%], \n.priority-pill[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 0.28rem 0.58rem;\n  text-transform: uppercase;\n}\n\n.status-pill.stable[_ngcontent-%COMP%], \n.priority-pill.low[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.status-pill.review[_ngcontent-%COMP%], \n.priority-pill.medium[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.status-pill.critical[_ngcontent-%COMP%], \n.priority-pill.high[_ngcontent-%COMP%] {\n  background: rgba(180, 35, 24, 0.14);\n  color: #8d2219;\n}\n\n.priority-pill.status-tone.open[_ngcontent-%COMP%] {\n  background: rgba(12, 115, 184, 0.12);\n  color: #0c5e93;\n}\n\n.priority-pill.status-tone.pending[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.priority-pill.status-tone.resolved[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.metric-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n\n.metric-stack[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n}\n\n.metric-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.78rem;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  color: #59708a;\n  display: block;\n  font-size: 0.78rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n\n.detail-summary[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.detail-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #102033;\n  margin: 0;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.ref-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.82rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  max-height: calc(100vh - 2.4rem);\n  overflow: hidden;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.log-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  gap: 0.8rem;\n  justify-content: space-between;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  max-height: calc(100vh - 16rem);\n  overflow-y: auto;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 12px;\n  color: #41566f;\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n  font-size: 0.76rem;\n  line-height: 1.5;\n  padding: 0.65rem 0.72rem;\n  word-break: break-word;\n}\n\n.release-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n\n.api-row[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  border-radius: 16px;\n  display: grid;\n  gap: 0.3rem;\n  padding: 0.85rem 0.95rem;\n}\n\n.api-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 1240px) {\n  .example-explorer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-nav[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@media (max-width: 1180px) {\n  .layout[_ngcontent-%COMP%], \n   .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    max-height: min(360px, 50vh);\n    order: 2;\n    position: static;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], \n   .detail-grid[_ngcontent-%COMP%], \n   .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .hero-card[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .table-host[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n\n  .toggle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFOzs7a0VBR2dFO0VBQ2hFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7Ozs7RUFJRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkRBQTZEO0VBQzdELHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7O0VBS0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0RBQWdEO0VBQ2hELGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCwwREFBMEQ7RUFDMUQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLCtFQUErRTtFQUMvRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwwREFBMEQ7RUFDMUQseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNEQUFzRDtFQUN0RCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjs7RUFFQTs7O0lBR0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbG9yOiAjMTAyMDMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyIE5leHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNoZWxsIHtcbiAgYmFja2dyb3VuZDpcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCByaWdodCwgcmdiYSgyNTQsIDIyOCwgMTc5LCAwLjUpLCB0cmFuc3BhcmVudCAzMiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgbGVmdCAxOCUsIHJnYmEoMTcwLCAyMTksIDI1NSwgMC40KSwgdHJhbnNwYXJlbnQgMjglKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmOWYwIDAlLCAjZjVmYmZmIDU1JSwgI2VlZjRmYiAxMDAlKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDJyZW0gMS4yNXJlbSAzLjVyZW07XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0IHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG5wLFxudGQsXG50aCxcbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuY29kZSxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjhmcikgbWlubWF4KDMyMHB4LCAwLjk1ZnIpO1xuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG4gIG1heC13aWR0aDogMTQ0MHB4O1xufVxuXG4uaGVyby1jYXJkLFxuLnBhbmVsIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MSwgMjA2LCAyMjMsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA2MHB4IHJnYmEoMjMsIDUwLCA3NywgMC4xMik7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMTAyMDMzO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNjVyZW07XG59XG5cbi5oZXJvLW1haW4gaDEge1xuICBmb250LXNpemU6IGNsYW1wKDIuNHJlbSwgNHZ3LCAzLjRyZW0pO1xuICBtYXJnaW4tYm90dG9tOiAwLjg1cmVtO1xufVxuXG4uaGVyby1tYWluIHAsXG4ucGFuZWwtaGVhZGVyIHAsXG4ubG9nLXBhbmVsIHAsXG4uZmVhdHVyZSxcbi5kZW1vLW5vdGUge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmZlYXR1cmUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC44cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIG1hcmdpbjogMS4yNXJlbSAwO1xufVxuXG4uZmVhdHVyZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDcsIDI1MSwgMC45Mik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDAuOTVyZW0gMXJlbTtcbn1cblxuLmZlYXR1cmUgc3Ryb25nIHtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbi5jdGEtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzE1ZDNmLCAjOWU0YTMxKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjcycmVtIDEuMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdkNGUyO1xuICBjb2xvcjogIzEwMjAzMztcbn1cblxuLmhlcm8tc2V0dXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5zdGVwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjhyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW5tYXgoMCwgMWZyKTtcbn1cblxuLnN0ZXAtbnVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBjNzNiODtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogMS45cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEuOXJlbTtcbn1cblxuLmhlcm8tc2V0dXAgcHJlLFxuLmNvZGUge1xuICBiYWNrZ3JvdW5kOiAjMTMyNjNhO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjb2xvcjogI2VkZjRmYjtcbiAgZm9udC1zaXplOiAwLjgzcmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDAuNTVyZW0gMCAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC45NXJlbSAxcmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5sYXlvdXQge1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS4yNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTQ0MHB4O1xufVxuXG4ucGFuZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjI1cmVtO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5leGFtcGxlLWV4cGxvcmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNDBweCwgMjgwcHgpIG1pbm1heCgwLCAxZnIpO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5kZW1vLW5hdiB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOXJlbTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxLjJyZW07XG59XG5cbi5kZW1vLWdyb3VwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiAwJSwgI2Y3ZmFmYyAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmRlbW8tZ3JvdXAgaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5kZW1vLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmRlbW8tbGluayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICMxNDMyNGY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC43cmVtIDAuOHJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMjBtcyBlYXNlLCBjb2xvciAxMjBtcyBlYXNlLCB0cmFuc2Zvcm0gMTIwbXMgZWFzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZW1vLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmNmZiO1xufVxuXG4uZGVtby1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMDIwMzM7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5kZW1vLXN0YWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiAwJSwgI2Y3ZmFmYyAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAxLjFyZW07XG59XG5cbi5kZW1vLXN0YWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uZGVtby1icmVhZGNydW1iIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLm1ldGEtcGlsbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxMDIwMzM7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgcGFkZGluZzogMC4zcmVtIDAuNjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tZXRhLXBpbGwubGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZWRmNGZhO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwLCA1MCwgNzksIDAuMDgpO1xuICBjb2xvcjogIzE0MzI0Zjtcbn1cblxuLnRhYmxlLWhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwLjk1cmVtO1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZzogMC45NXJlbTtcbn1cblxuLnRhYmxlLWhvc3QgcmV2aXZlLWRhdGEtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbW8tc3RhY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOTVyZW07XG59XG5cbi5kZW1vLW5vdGUge1xuICBiYWNrZ3JvdW5kOiAjZWRmNGZhO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuOXJlbTtcbn1cblxuLnRvb2xiYXIge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjhyZW07XG59XG5cbi50b29sYmFyLWlubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbGJhciBpbnB1dCxcbi50b29sYmFyIHNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGQ1ZTM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZsZXg6IDEgMSAyNjBweDtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuOXJlbTtcbn1cblxuLnRvZ2dsZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjY1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcbn1cblxuLnRvZ2dsZS1jYXJkIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDcsIDI1MSwgMC45Nik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiAjMTQzMjRmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNnJlbTtcbiAgcGFkZGluZzogMC44cmVtIDAuOXJlbTtcbn1cblxuLnRvZ2dsZS1jYXJkIGlucHV0IHtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xufVxuXG4ubWluaS1idXR0b24sXG4uY2xlYXItYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjE0KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjMTQzMjRmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMC44NXJlbTtcbn1cblxuLm1pbmktYnV0dG9uOmhvdmVyLFxuLmNsZWFyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZmY2ZmM7XG59XG5cbi5taW5pLWJ1dHRvbi5kYW5nZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTYxLCA0MSwgNDEsIDAuMik7XG4gIGNvbG9yOiAjYTEyOTI5O1xufVxuXG4uc3RhdHVzLXBpbGwsXG4ucHJpb3JpdHktcGlsbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjc0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjI4cmVtIDAuNThyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGF0dXMtcGlsbC5zdGFibGUsXG4ucHJpb3JpdHktcGlsbC5sb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAxMjgsIDc5LCAwLjEyKTtcbiAgY29sb3I6ICMxNzY1M2E7XG59XG5cbi5zdGF0dXMtcGlsbC5yZXZpZXcsXG4ucHJpb3JpdHktcGlsbC5tZWRpdW0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMCwgMTA2LCA0MiwgMC4xNCk7XG4gIGNvbG9yOiAjOGI0NTFiO1xufVxuXG4uc3RhdHVzLXBpbGwuY3JpdGljYWwsXG4ucHJpb3JpdHktcGlsbC5oaWdoIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxODAsIDM1LCAyNCwgMC4xNCk7XG4gIGNvbG9yOiAjOGQyMjE5O1xufVxuXG4ucHJpb3JpdHktcGlsbC5zdGF0dXMtdG9uZS5vcGVuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTE1LCAxODQsIDAuMTIpO1xuICBjb2xvcjogIzBjNWU5Mztcbn1cblxuLnByaW9yaXR5LXBpbGwuc3RhdHVzLXRvbmUucGVuZGluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEwLCAxMDYsIDQyLCAwLjE0KTtcbiAgY29sb3I6ICM4YjQ1MWI7XG59XG5cbi5wcmlvcml0eS1waWxsLnN0YXR1cy10b25lLnJlc29sdmVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMiwgMTI4LCA3OSwgMC4xMik7XG4gIGNvbG9yOiAjMTc2NTNhO1xufVxuXG4ubWV0cmljLXN0YWNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjE1cmVtO1xufVxuXG4ubWV0cmljLXN0YWNrIHN0cm9uZyB7XG4gIGNvbG9yOiAjMTAyMDMzO1xufVxuXG4ubWV0cmljLXN0YWNrIHNwYW4ge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xufVxuXG4uZGV0YWlsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOTVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLmRldGFpbC1sYWJlbCB7XG4gIGNvbG9yOiAjNTk3MDhhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZGV0YWlsLXN1bW1hcnkge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4uZGV0YWlsLXN1bW1hcnkgcCB7XG4gIGNvbG9yOiAjMTAyMDMzO1xuICBtYXJnaW46IDA7XG59XG5cbi5yZWYtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4ucmVmLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ucmVmLWNhcmQgaDQge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuXG4uYXBpLXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcGktdGFibGUgdGgsXG4uYXBpLXRhYmxlIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWUyZWM7XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYXBpLXRhYmxlIHRoIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbn1cblxuLnNpZGViYXIge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5sb2ctcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuOHJlbTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIuNHJlbSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMS4ycmVtO1xufVxuXG4ubG9nLWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuOHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9nLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNTVyZW07XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNnJlbSk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5sb2ctZW50cnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ3LCAyNTEsIDAuOTYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogIzQxNTY2ZjtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAwLjY1cmVtIDAuNzJyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5yZWxlYXNlLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmFwaS1yb3cge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmIDAlLCAjZjdmYWZjIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuM3JlbTtcbiAgcGFkZGluZzogMC44NXJlbSAwLjk1cmVtO1xufVxuXG4uYXBpLXJvdyBzdHJvbmcge1xuICBjb2xvcjogIzEwMjAzMztcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjQwcHgpIHtcbiAgLmV4YW1wbGUtZXhwbG9yZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmRlbW8tbmF2IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgLmxheW91dCxcbiAgLmhlcm8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmxvZy1wYW5lbCB7XG4gICAgbWF4LWhlaWdodDogbWluKDM2MHB4LCA1MHZoKTtcbiAgICBvcmRlcjogMjtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgLnJlZi1ncmlkLFxuICAuZGV0YWlsLWdyaWQsXG4gIC5mZWF0dXJlLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuc2hlbGwge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuaGVyby1jYXJkLFxuICAucGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5jdGEtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRhYmxlLWhvc3Qge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gIH1cblxuICAudG9nZ2xlLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmxvZy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-data-table-component */ 5304);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class AppModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_3__.DataTableModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_3__.DataTableModule]
  });
})();

/***/ },

/***/ 5745
/*!******************************!*\
  !*** ./src/app/docs-meta.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGULAR_LINE: () => (/* binding */ ANGULAR_LINE),
/* harmony export */   DOCS_PATH: () => (/* binding */ DOCS_PATH),
/* harmony export */   PACKAGE_LINE: () => (/* binding */ PACKAGE_LINE)
/* harmony export */ });
const ANGULAR_LINE = '20.3.x';
const PACKAGE_LINE = '20.0.0';
const DOCS_PATH = 'angular-20';

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(error => console.error(error));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);