"use strict";
(self["webpackChunkdocs_angular_15"] = self["webpackChunkdocs_angular_15"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _docs_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-meta */ 3109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stackline/angular-data-table-component */ 7775);





const _c0 = ["kitchenTools"];
const _c1 = ["filterTools"];
const _c2 = ["statusCell"];
const _c3 = ["budgetCell"];
const _c4 = ["ticketPriorityCell"];
const _c5 = ["ticketStatusCell"];
const _c6 = ["movieDetail"];
function AppComponent_section_71_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_section_71_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);
      const demo_r55 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r56.selectDemo(demo_r55.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const demo_r55 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", demo_r55.id === ctx_r54.selectedDemoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", demo_r55.title, " ");
  }
}
function AppComponent_section_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 46)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_section_71_button_4_Template, 2, 3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r53 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r53.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r53.demos)("ngForTrackBy", ctx_r0.trackByDemo);
  }
}
function AppComponent_ng_container_86_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 55)(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_ng_container_86_label_3_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);
      const toggle_r59 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r60.toggleKitchenSetting(toggle_r59.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toggle_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r58.kitchenSettings[toggle_r59.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toggle_r59.label);
  }
}
function AppComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_ng_container_86_label_3_Template, 4, 2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " The Kitchen Sink keeps the docs honest: all core table flags can be combined in one Angular view without adapters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "revive-data-table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_86_Template_revive_data_table_sortChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r62.onSort("Kitchen Sink", $event));
    })("selectedRowsChange", function AppComponent_ng_container_86_Template_revive_data_table_selectedRowsChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r64.onBasicSelectionChange($event));
    })("rowClicked", function AppComponent_ng_container_86_Template_revive_data_table_rowClicked_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r65.onRowClick("Kitchen Sink", $event));
    })("rowExpandToggled", function AppComponent_ng_container_86_Template_revive_data_table_rowExpandToggled_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r66.onExpand("Kitchen Sink", $event));
    })("pageChange", function AppComponent_ng_container_86_Template_revive_data_table_pageChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r67.onPage("Kitchen Sink", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_86_Template_revive_data_table_rowsPerPageChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r68.onRowsPerPage("Kitchen Sink", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](362);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.kitchenToggles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r1.kitchenColumns)("data", ctx_r1.kitchenRows)("selectableRows", ctx_r1.kitchenSettings.selectableRows)("selectableRowsSingle", ctx_r1.kitchenSettings.selectableRowsSingle)("selectableRowsNoSelectAll", ctx_r1.kitchenSettings.selectableRowsNoSelectAll)("selectableRowsVisibleOnly", ctx_r1.kitchenSettings.selectableRowsVisibleOnly)("selectableRowsHighlight", ctx_r1.kitchenSettings.selectableRowsHighlight)("expandableRows", ctx_r1.kitchenSettings.expandableRows)("expandOnRowClicked", ctx_r1.kitchenSettings.expandOnRowClicked)("expandOnRowDoubleClicked", ctx_r1.kitchenSettings.expandOnRowDoubleClicked)("expandableRowsHideExpander", ctx_r1.kitchenSettings.expandableRowsHideExpander)("expandableRowTemplate", _r51)("pagination", ctx_r1.kitchenSettings.pagination)("striped", ctx_r1.kitchenSettings.striped)("highlightOnHover", ctx_r1.kitchenSettings.highlightOnHover)("pointerOnHover", ctx_r1.kitchenSettings.pointerOnHover)("dense", ctx_r1.kitchenSettings.dense)("responsive", ctx_r1.kitchenSettings.responsive)("fixedHeader", ctx_r1.kitchenSettings.fixedHeader)("subHeader", ctx_r1.kitchenSettings.subHeader)("subHeaderTemplate", _r39)("noHeader", ctx_r1.kitchenSettings.noHeader)("noTableHead", ctx_r1.kitchenSettings.noTableHead)("noContextMenu", ctx_r1.kitchenSettings.noContextMenu)("progressPending", ctx_r1.kitchenSettings.progressPending)("contextMessage", ctx_r1.reviewContextMessage);
  }
}
function AppComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowClicked", function AppComponent_ng_container_87_Template_revive_data_table_rowClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r69.onRowClick("Basic table", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r2.basicColumns)("data", ctx_r2.movies)("pagination", true);
  }
}
function AppComponent_ng_container_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Filter state stays in the Angular component while the table continues handling sorting and pagination. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "revive-data-table", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_88_Template_revive_data_table_sortChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r71.onSort("Filtering", $event));
    })("pageChange", function AppComponent_ng_container_88_Template_revive_data_table_pageChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r73.onPage("Filtering", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_88_Template_revive_data_table_rowsPerPageChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r74.onRowsPerPage("Filtering", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r3.sortableColumns)("data", ctx_r3.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", _r41);
  }
}
function AppComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_89_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r75.onSort("Basic sorting", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r4.sortableColumns)("data", ctx_r4.movies)("pagination", true);
  }
}
function AppComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_90_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r77.onSort("Default sort", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r5.defaultSortColumns)("data", ctx_r5.movies)("pagination", true)("defaultSortFieldId", "rating")("defaultSortAsc", false);
  }
}
function AppComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_91_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r79.onSort("Custom sort", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r6.customSortColumns)("data", ctx_r6.movies)("pagination", true);
  }
}
function AppComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_92_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r81.onRemoteSort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r7.sortableColumns)("data", ctx_r7.remoteSortRows)("pagination", true)("sortServer", true)("progressPending", ctx_r7.remoteSortLoading);
  }
}
function AppComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_93_Template_revive_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r83.onPage("Basic pagination", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_93_Template_revive_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r85.onRowsPerPage("Basic pagination", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r8.basicColumns)("data", ctx_r8.movies)("pagination", true);
  }
}
const _c7 = function () {
  return [5, 8, 12];
};
function AppComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_94_Template_revive_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r86.onPage("Pagination options", $event));
    })("rowsPerPageChange", function AppComponent_ng_container_94_Template_revive_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r88.onRowsPerPage("Pagination options", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r9.basicColumns)("data", ctx_r9.movies)("pagination", true)("paginationPerPage", 5)("paginationRowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c7));
  }
}
const _c8 = function () {
  return [5, 10, 15];
};
function AppComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AppComponent_ng_container_95_Template_revive_data_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r89.onServerPage($event));
    })("rowsPerPageChange", function AppComponent_ng_container_95_Template_revive_data_table_rowsPerPageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r91.onServerRowsPerPage($event));
    })("sortChange", function AppComponent_ng_container_95_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r92.onSort("Remote pagination", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r10.serverColumns)("data", ctx_r10.serverRows)("pagination", true)("paginationServer", true)("paginationDefaultPage", ctx_r10.serverPage)("paginationPerPage", ctx_r10.serverRowsPerPage)("paginationRowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c8))("paginationTotalRows", ctx_r10.allTickets.length)("progressPending", ctx_r10.serverLoading);
  }
}
function AppComponent_ng_container_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_96_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r93.onSort("Fixed header", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r11.sortableColumns)("data", ctx_r11.movies)("pagination", true)("fixedHeader", true)("highlightOnHover", true);
  }
}
function AppComponent_ng_container_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "revive-data-table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_97_Template_revive_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r95.onBasicSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r12.selectionColumns)("data", ctx_r12.movies)("selectableRows", true)("pagination", true)("selectableRowsHighlight", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.basicSelectionSummary);
  }
}
function AppComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "revive-data-table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_98_Template_revive_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r97.onSingleSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r13.selectionColumns)("data", ctx_r13.movies)("selectableRows", true)("selectableRowsSingle", true)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.singleSelectionSummary);
  }
}
function AppComponent_ng_container_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r14.selectionColumns)("data", ctx_r14.movies)("selectableRows", true)("selectableRowSelected", ctx_r14.isPreselectedMovie)("pagination", true);
  }
}
function AppComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r15.selectionStatusColumns)("data", ctx_r15.movies)("selectableRows", true)("selectableRowDisabled", ctx_r15.isSelectionDisabled)("pagination", true);
  }
}
function AppComponent_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "revive-data-table", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_101_Template_revive_data_table_selectedRowsChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r99.onVisibleSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r16.selectionColumns)("data", ctx_r16.movies)("selectableRows", true)("selectableRowsVisibleOnly", true)("pagination", true)("paginationPerPage", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.visibleSelectionSummary);
  }
}
function AppComponent_ng_container_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_102_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r101.deleteManagedSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Delete selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_102_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r103.clearManagedSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Clear selection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "revive-data-table", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_102_Template_revive_data_table_selectedRowsChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r104.onManagedSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r17.managedSelectedRows.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r17.managedSelectedRows.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r17.selectionColumns)("data", ctx_r17.managedRows)("selectableRows", true)("pagination", true)("clearSelectedRows", ctx_r17.managedClearSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.managedSelectionSummary);
  }
}
function AppComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowsChange", function AppComponent_ng_container_103_Template_revive_data_table_selectedRowsChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r105.onBasicSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r18.selectionColumns)("data", ctx_r18.movies)("selectableRows", true)("pagination", true)("contextMessage", ctx_r18.reviewContextMessage);
  }
}
function AppComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_104_Template_revive_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r107.onExpand("Expandable", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r19.customColumns)("data", ctx_r19.movies)("expandableRows", true)("expandableRowTemplate", _r51)("pagination", true);
  }
}
function AppComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_105_Template_revive_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r110);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r109.onExpand("Expand on row click", $event));
    })("rowClicked", function AppComponent_ng_container_105_Template_revive_data_table_rowClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r110);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r111.onRowClick("Expand on row click", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r20.customColumns)("data", ctx_r20.movies)("expandableRows", true)("expandableRowTemplate", _r51)("expandOnRowClicked", true)("pagination", true);
  }
}
function AppComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r21.customColumns)("data", ctx_r21.movies)("expandableRows", true)("expandableRowTemplate", _r51)("expandableRowExpanded", ctx_r21.isPreExpandedMovie)("pagination", true);
  }
}
function AppComponent_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r22.customColumns)("data", ctx_r22.movies)("expandableRows", true)("expandableRowTemplate", _r51)("expandableRowDisabled", ctx_r22.isExpansionDisabled)("pagination", true);
  }
}
function AppComponent_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowExpandToggled", function AppComponent_ng_container_108_Template_revive_data_table_rowExpandToggled_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r112.onExpand("Hide expander", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r23.customColumns)("data", ctx_r23.movies)("expandableRows", true)("expandableRowTemplate", _r51)("expandableRowsHideExpander", true)("expandOnRowClicked", true)("pagination", true);
  }
}
function AppComponent_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r24.customColumns)("data", ctx_r24.movies)("pagination", true);
  }
}
function AppComponent_ng_container_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "revive-data-table", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sortChange", function AppComponent_ng_container_110_Template_revive_data_table_sortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r114.onSort("Formatters", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r25.formatterColumns)("data", ctx_r25.movies)("pagination", true);
  }
}
function AppComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r26.omitColumns)("data", ctx_r26.movies)("pagination", true);
  }
}
function AppComponent_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_112_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r116.toggleDirectorColumn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "revive-data-table", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r27.hideDirectorColumn ? "Show director column" : "Hide director column", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r27.dynamicOmitColumns)("data", ctx_r27.movies)("pagination", true);
  }
}
function AppComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r28.alignmentColumns)("data", ctx_r28.movies)("pagination", true);
  }
}
function AppComponent_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r29.customColumns)("data", ctx_r29.movies)("conditionalRowStyles", ctx_r29.contextualStyles)("pagination", true)("highlightOnHover", true)("pointerOnHover", true);
  }
}
function AppComponent_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 50)(2, "div", 72)(3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_115_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r118.restartLoadingDemo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Restart loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "revive-data-table", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r30.basicColumns)("data", ctx_r30.loadingRows)("pagination", true)("progressPending", ctx_r30.loadingPending);
  }
}
const _c9 = function () {
  return [];
};
function AppComponent_ng_container_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r31.basicColumns)("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c9))("pagination", true);
  }
}
function AppComponent_ng_container_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r32.compactColumns)("data", ctx_r32.movies)("pagination", true)("highlightOnHover", true)("pointerOnHover", true)("expandableRows", true)("expandableRowTemplate", _r51)("selectableRows", true);
  }
}
function AppComponent_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r33.compactColumns)("data", ctx_r33.movies)("pagination", true)("dense", true)("striped", true)("highlightOnHover", true)("pointerOnHover", true);
  }
}
function AppComponent_ng_container_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r34.sortableColumns)("data", ctx_r34.filteredMovies)("pagination", true)("subHeader", true)("subHeaderTemplate", _r41);
  }
}
function AppComponent_ng_container_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r35.basicColumns)("data", ctx_r35.movies)("pagination", true)("noHeader", true);
  }
}
function AppComponent_ng_container_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r36.basicColumns)("data", ctx_r36.movies)("pagination", true)("noTableHead", true)("selectableRows", true);
  }
}
function AppComponent_ng_container_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "revive-data-table", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx_r37.basicColumns)("data", ctx_r37.movies)("pagination", true);
  }
}
function AppComponent_div_335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", entry_r120, " ");
  }
}
function AppComponent_ng_template_361_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72)(1, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_361_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r121.onKitchenSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_template_361_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r123.onKitchenSearchTermChange(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r40.kitchenSearchTerm);
  }
}
function AppComponent_ng_template_363_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72)(1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_363_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r124.onFilterSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_template_363_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r126.onFilterSearchTermChange(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r42.filterSearchTerm);
  }
}
function AppComponent_ng_template_365_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r127 = ctx.$implicit;
    const value_r128 = ctx.value;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r44.statusTone(row_r127.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r128, " ");
  }
}
function AppComponent_ng_template_367_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r129 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r46.formatMoney(row_r129.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r129.genre);
  }
}
function AppComponent_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r130 = ctx.$implicit;
    const value_r131 = ctx.value;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r48.priorityTone(row_r130.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r131, " ");
  }
}
function AppComponent_ng_template_371_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r132 = ctx.$implicit;
    const value_r133 = ctx.value;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r50.ticketStatusTone(row_r132.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r133, " ");
  }
}
function AppComponent_ng_template_373_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 104)(1, "div")(2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 106)(22, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r134 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r134.director);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r134.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r52.formatRating(row_r134.rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r52.formatMoney(row_r134.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r134.summary);
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["docs-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.kitchenTools = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterTools = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.statusCell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.budgetCell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ticketPriorityCell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ticketStatusCell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.movieDetail = _t.first);
    }
  },
  decls: 375,
  vars: 52,
  consts: [[1, "shell"], [1, "hero"], [1, "hero-card", "hero-main"], [1, "badge"], [1, "feature-grid"], [1, "feature"], [1, "cta-row"], ["href", "#examples", 1, "btn"], ["href", "https://github.com/alexandroit/angular-data-table-component#readme", "target", "_blank", "rel", "noreferrer", 1, "btn", "secondary"], [1, "hero-card", "hero-setup"], [1, "step"], [1, "step-num"], ["id", "examples", 1, "layout"], [1, "panels"], [1, "panel"], [1, "panel-header"], [1, "example-explorer"], [1, "demo-nav"], ["class", "demo-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "demo-stage"], [1, "demo-stage-header"], [1, "demo-breadcrumb"], [1, "meta-pill"], [1, "meta-pill", "light"], [1, "code"], [1, "table-host", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ref-grid"], [1, "ref-card"], [1, "api-table"], [1, "sidebar"], [1, "panel", "log-panel"], [1, "log-header"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "log-list"], ["class", "log-entry", 4, "ngFor", "ngForOf"], [1, "release-card"], [1, "api-row"], ["kitchenTools", ""], ["filterTools", ""], ["statusCell", ""], ["budgetCell", ""], ["ticketPriorityCell", ""], ["ticketStatusCell", ""], ["movieDetail", ""], [1, "demo-group"], [1, "demo-list"], ["type", "button", "class", "demo-link", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "demo-link", 3, "click"], [1, "demo-stack"], [1, "toggle-grid"], ["class", "toggle-card", 4, "ngFor", "ngForOf"], [1, "demo-note"], ["title", "Kitchen Sink movie list", "fixedHeaderScrollHeight", "280px", 3, "columns", "data", "selectableRows", "selectableRowsSingle", "selectableRowsNoSelectAll", "selectableRowsVisibleOnly", "selectableRowsHighlight", "expandableRows", "expandOnRowClicked", "expandOnRowDoubleClicked", "expandableRowsHideExpander", "expandableRowTemplate", "pagination", "striped", "highlightOnHover", "pointerOnHover", "dense", "responsive", "fixedHeader", "subHeader", "subHeaderTemplate", "noHeader", "noTableHead", "noContextMenu", "progressPending", "contextMessage", "sortChange", "selectedRowsChange", "rowClicked", "rowExpandToggled", "pageChange", "rowsPerPageChange"], [1, "toggle-card"], ["type", "checkbox", 3, "checked", "change"], ["title", "Film catalog", 3, "columns", "data", "pagination", "rowClicked"], ["title", "Searchable releases", 3, "columns", "data", "pagination", "subHeader", "subHeaderTemplate", "sortChange", "pageChange", "rowsPerPageChange"], ["title", "Basic sorting", 3, "columns", "data", "pagination", "sortChange"], ["title", "Default sort by rating", 3, "columns", "data", "pagination", "defaultSortFieldId", "defaultSortAsc", "sortChange"], ["title", "Custom title sort", 3, "columns", "data", "pagination", "sortChange"], ["title", "Server-style sorting", 3, "columns", "data", "pagination", "sortServer", "progressPending", "sortChange"], ["title", "Basic pagination", 3, "columns", "data", "pagination", "pageChange", "rowsPerPageChange"], ["title", "Rows per page options", 3, "columns", "data", "pagination", "paginationPerPage", "paginationRowsPerPageOptions", "pageChange", "rowsPerPageChange"], ["title", "Support tickets", 3, "columns", "data", "pagination", "paginationServer", "paginationDefaultPage", "paginationPerPage", "paginationRowsPerPageOptions", "paginationTotalRows", "progressPending", "pageChange", "rowsPerPageChange", "sortChange"], ["title", "Fixed header", "fixedHeaderScrollHeight", "280px", 3, "columns", "data", "pagination", "fixedHeader", "highlightOnHover", "sortChange"], ["title", "Selectable rows", 3, "columns", "data", "selectableRows", "pagination", "selectableRowsHighlight", "selectedRowsChange"], ["title", "Single selection", 3, "columns", "data", "selectableRows", "selectableRowsSingle", "pagination", "selectedRowsChange"], ["title", "Pre selected rows", 3, "columns", "data", "selectableRows", "selectableRowSelected", "pagination"], ["title", "Pre disabled rows", 3, "columns", "data", "selectableRows", "selectableRowDisabled", "pagination"], ["title", "Visible-page selection", 3, "columns", "data", "selectableRows", "selectableRowsVisibleOnly", "pagination", "paginationPerPage", "selectedRowsChange"], [1, "toolbar", "toolbar-inline"], ["type", "button", 1, "mini-button", "danger", 3, "disabled", "click"], ["type", "button", 1, "mini-button", 3, "disabled", "click"], ["title", "Manage selections", 3, "columns", "data", "selectableRows", "pagination", "clearSelectedRows", "selectedRowsChange"], ["title", "Custom context message", 3, "columns", "data", "selectableRows", "pagination", "contextMessage", "selectedRowsChange"], ["title", "Expandable rows", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "pagination", "rowExpandToggled"], ["title", "Expand on row click", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandOnRowClicked", "pagination", "rowExpandToggled", "rowClicked"], ["title", "Pre expanded", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowExpanded", "pagination"], ["title", "Pre disabled expansion", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowDisabled", "pagination"], ["title", "Hide expander", 3, "columns", "data", "expandableRows", "expandableRowTemplate", "expandableRowsHideExpander", "expandOnRowClicked", "pagination", "rowExpandToggled"], ["title", "Template-driven cells", 3, "columns", "data", "pagination"], ["title", "Formatter columns", 3, "columns", "data", "pagination", "sortChange"], ["title", "Omit column", 3, "columns", "data", "pagination"], ["type", "button", 1, "mini-button", 3, "click"], ["title", "Dynamic omit", 3, "columns", "data", "pagination"], ["title", "Alignment and wrap", 3, "columns", "data", "pagination"], ["title", "Conditional rows", 3, "columns", "data", "conditionalRowStyles", "pagination", "highlightOnHover", "pointerOnHover"], ["title", "Loading pending", 3, "columns", "data", "pagination", "progressPending"], ["title", "Empty state", "noDataText", "No archived releases found.", 3, "columns", "data", "pagination"], ["title", "Dark theme", "theme", "dark", 3, "columns", "data", "pagination", "highlightOnHover", "pointerOnHover", "expandableRows", "expandableRowTemplate", "selectableRows"], ["title", "Dense and striped", 3, "columns", "data", "pagination", "dense", "striped", "highlightOnHover", "pointerOnHover"], ["title", "Subheader tools", 3, "columns", "data", "pagination", "subHeader", "subHeaderTemplate"], ["title", "No header", 3, "columns", "data", "pagination", "noHeader"], ["title", "No table head", 3, "columns", "data", "pagination", "noTableHead", "selectableRows"], ["title", "Film catalog", 3, "columns", "data", "pagination"], [1, "log-entry"], ["type", "search", "placeholder", "Search titles, directors, genres, or status", 3, "ngModel", "ngModelChange"], ["type", "search", "placeholder", "Filter by title, director, genre, status, or summary", 3, "ngModel", "ngModelChange"], [1, "status-pill", 3, "ngClass"], [1, "metric-stack"], [1, "priority-pill", 3, "ngClass"], [1, "priority-pill", "status-tone", 3, "ngClass"], [1, "detail-grid"], [1, "detail-label"], [1, "detail-summary"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "@stackline/angular-data-table-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " A maintained Angular data table component with a full Angular-first example explorer: sorting, selection, expansion, pagination, conditional rows, themes, loading states, and template-driven cells across every maintained Angular line. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Story-rich docs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " The docs now cover the full Angular API surface instead of a short flat sample list. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Template-native cells");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Rich cells and expanded content use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "TemplateRef");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " instead of framework adapters. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5)(22, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Table workflows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Sorting, pagination, selection, expansion, hover states, and context bars all stay visible. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5)(26, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Versioned docs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Each maintained Angular release line keeps its own docs app and compiled history. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6)(30, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Explore examples");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " README ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Setup in 3 steps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10)(38, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div")(41, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Install");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10)(46, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div")(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Register the module");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10)(54, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div")(57, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Render the table");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "section", 12)(62, "div", 13)(63, "article", 14)(64, "div", 15)(65, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Example explorer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " This gallery rebuilds the docs into a navigable explorer so the Angular API surface is easy to browse on desktop and mobile while staying faithful to the real component capabilities. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 16)(70, "aside", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, AppComponent_section_71_Template, 5, 3, "section", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 19)(73, "div", 20)(74, "div", 21)(75, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "pre", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, AppComponent_ng_container_86_Template, 7, 27, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, AppComponent_ng_container_87_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, AppComponent_ng_container_88_Template, 5, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, AppComponent_ng_container_89_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, AppComponent_ng_container_90_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, AppComponent_ng_container_91_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, AppComponent_ng_container_92_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, AppComponent_ng_container_93_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, AppComponent_ng_container_94_Template, 2, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, AppComponent_ng_container_95_Template, 2, 10, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, AppComponent_ng_container_96_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, AppComponent_ng_container_97_Template, 5, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, AppComponent_ng_container_98_Template, 5, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, AppComponent_ng_container_99_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, AppComponent_ng_container_100_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, AppComponent_ng_container_101_Template, 5, 7, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, AppComponent_ng_container_102_Template, 10, 8, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, AppComponent_ng_container_103_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, AppComponent_ng_container_104_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, AppComponent_ng_container_105_Template, 2, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, AppComponent_ng_container_106_Template, 2, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, AppComponent_ng_container_107_Template, 2, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, AppComponent_ng_container_108_Template, 2, 7, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, AppComponent_ng_container_109_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, AppComponent_ng_container_110_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, AppComponent_ng_container_111_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, AppComponent_ng_container_112_Template, 6, 4, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, AppComponent_ng_container_113_Template, 2, 3, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, AppComponent_ng_container_114_Template, 2, 6, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, AppComponent_ng_container_115_Template, 6, 4, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, AppComponent_ng_container_116_Template, 2, 4, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, AppComponent_ng_container_117_Template, 2, 8, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, AppComponent_ng_container_118_Template, 2, 7, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, AppComponent_ng_container_119_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, AppComponent_ng_container_120_Template, 2, 4, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, AppComponent_ng_container_121_Template, 2, 5, "ng-container", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, AppComponent_ng_container_122_Template, 2, 3, "ng-container", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "article", 14)(124, "div", 15)(125, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "API reference");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " These inputs, column fields, and outputs are the levers that show up repeatedly across the Angular example tree. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 28)(130, "div", 29)(131, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Core inputs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "table", 30)(134, "thead")(135, "tr")(136, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "tbody")(141, "tr")(142, "td")(143, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Declarative column definitions with selectors, sort rules, and optional templates.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "tr")(148, "td")(149, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "data");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "The row array to render for the current view.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "tr")(154, "td")(155, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Turns on the built-in footer pagination UI.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "tr")(160, "td")(161, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "paginationServer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Stops client slicing so the host component controls which rows are loaded.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "tr")(166, "td")(167, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "sortServer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Leaves sorting to the host component while still exposing the sort event payload.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "tr")(172, "td")(173, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "theme");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Switch between the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "default");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " presets.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 29)(184, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Selection and expansion");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "table", 30)(187, "thead")(188, "tr")(189, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "tbody")(194, "tr")(195, "td")(196, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "selectableRows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Enables checkbox or radio row selection.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "tr")(201, "td")(202, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "selectableRowsSingle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Restricts selection to a single active row.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "tr")(207, "td")(208, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "selectableRowSelected");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Programmatically preselect rows from host rules.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "tr")(213, "td")(214, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "selectableRowDisabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Disables rows without removing them from the dataset.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "tr")(219, "td")(220, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "expandableRows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Enables expandable detail rows.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "tr")(225, "td")(226, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "expandableRowTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Angular template used to render expanded row content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 29)(231, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Column capabilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "table", 30)(234, "thead")(235, "tr")(236, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "tbody")(241, "tr")(242, "td")(243, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "selector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Read values through a property key or a row function.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "tr")(248, "td")(249, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "format");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Return custom display text without a full template.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "tr")(254, "td")(255, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "cellTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Use an Angular template for richer cell layouts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "tr")(260, "td")(261, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "sortFunction");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Override comparison logic for a single column.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "tr")(266, "td")(267, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "omit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Hide a column while keeping it in the declarative config.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "tr")(272, "td")(273, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "wrap / right / center");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Control cell alignment and text wrapping declaratively.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 29)(278, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Outputs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "table", 30)(281, "thead")(282, "tr")(283, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Output");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "tbody")(288, "tr")(289, "td")(290, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "sortChange");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Fires with the current column, direction, and visible rows.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "tr")(295, "td")(296, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "selectedRowsChange");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Returns the selection state and selected rows array.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "tr")(301, "td")(302, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "pageChange");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Fires when the current page changes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "tr")(307, "td")(308, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "rowsPerPageChange");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Fires when the footer page size changes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "tr")(313, "td")(314, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "rowClicked");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Fires when a row is clicked.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "tr")(319, "td")(320, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "rowExpandToggled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Fires when a detail row opens or closes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "aside", 31)(325, "section", 32)(326, "div", 33)(327, "div")(328, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Event Log");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Interact with the demos to watch Angular events and host-side table workflows appear here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_332_listener() {
        return ctx.clearLog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](335, AppComponent_div_335_Template, 2, 1, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 37)(337, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Release line");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "This docs build is pinned to the same Angular release line and package version published on npm.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 38)(342, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Package line");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 38)(347, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Angular compatibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 38)(352, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Docs path");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 38)(357, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Pattern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "versioned docs-src + compiled docs history");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](361, AppComponent_ng_template_361_Template, 4, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](363, AppComponent_ng_template_363_Template, 4, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](365, AppComponent_ng_template_365_Template, 2, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](367, AppComponent_ng_template_367_Template, 5, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](369, AppComponent_ng_template_369_Template, 2, 2, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](371, AppComponent_ng_template_371_Template, 2, 2, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](373, AppComponent_ng_template_373_Template, 26, 5, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ANGULAR ", ctx.angularLine, " \u00B7 DATA TABLE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.installCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.setupCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.renderCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.demoGroups)("ngForTrackBy", ctx.trackByGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDemo.category);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDemo.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDemo.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDemo.summary);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDemo.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.selectedDemo.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "kitchen-sink");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "basic-table");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "filtering");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sorting-basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sorting-default");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sorting-custom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "sorting-server");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "pagination-basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "pagination-options");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "pagination-remote");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "fixed-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-single");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-preselected");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-predisabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-visible-only");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-manage");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "selectable-context-message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandable-basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandable-row-click");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandable-preexpanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandable-predisabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "expandable-hide-expander");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "columns-template-cells");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "columns-formatters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "columns-omit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "columns-omit-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "columns-alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "conditional-rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "loading-pending");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "loading-empty");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "theme-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "theme-dense");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "headers-subheader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "headers-no-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "headers-no-table-head");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](214);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logEntries);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.packageLine);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.angularLine);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.docsPath, "/");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_4__.DataTableComponent],
  styles: ["[_nghost-%COMP%] {\n  color: #102033;\n  display: block;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.shell[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(circle at top right, rgba(254, 228, 179, 0.5), transparent 32%),\n    radial-gradient(circle at left 18%, rgba(170, 219, 255, 0.4), transparent 28%),\n    linear-gradient(180deg, #fff9f0 0%, #f5fbff 55%, #eef4fb 100%);\n  min-height: 100vh;\n  padding: 2rem 1.25rem 3.5rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", serif;\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n\np[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\ncode[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n}\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 0.95fr);\n  margin: 0 auto 1.5rem;\n  max-width: 1440px;\n}\n\n.hero-card[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%] {\n  backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(191, 206, 223, 0.8);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(23, 50, 77, 0.12);\n  min-width: 0;\n  padding: 1.5rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background: #102033;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n  padding: 0.35rem 0.65rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4vw, 3.4rem);\n  margin-bottom: 0.85rem;\n}\n\n.hero-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .log-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .feature[_ngcontent-%COMP%], .demo-note[_ngcontent-%COMP%] {\n  color: #59708a;\n  line-height: 1.6;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 1.25rem 0;\n}\n\n.feature[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.92);\n  border: 1px solid #d9e2ec;\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n}\n\n.feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n\n.cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #c15d3f, #9e4a31);\n  border-radius: 999px;\n  color: #fff;\n  padding: 0.72rem 1.1rem;\n  text-decoration: none;\n}\n\n.btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #c7d4e2;\n  color: #102033;\n}\n\n.hero-setup[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: auto minmax(0, 1fr);\n}\n\n.step-num[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #0c73b8;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.8rem;\n  font-weight: 700;\n  height: 1.9rem;\n  justify-content: center;\n  width: 1.9rem;\n}\n\n.hero-setup[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .code[_ngcontent-%COMP%] {\n  background: #13263a;\n  border-radius: 14px;\n  color: #edf4fb;\n  font-size: 0.83rem;\n  line-height: 1.6;\n  margin: 0.55rem 0 0;\n  overflow: auto;\n  padding: 0.95rem 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.layout[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  gap: 1.25rem;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.panels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  margin-bottom: 1rem;\n}\n\n.example-explorer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: minmax(240px, 280px) minmax(0, 1fr);\n  min-width: 0;\n}\n\n.demo-nav[_ngcontent-%COMP%] {\n  align-self: start;\n  display: grid;\n  gap: 0.9rem;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.demo-group[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.demo-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n\n.demo-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.demo-link[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.1);\n  border-radius: 12px;\n  color: #14324f;\n  cursor: pointer;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;\n  width: 100%;\n}\n\n.demo-link[_ngcontent-%COMP%]:hover {\n  background: #f1f6fb;\n}\n\n.demo-link.active[_ngcontent-%COMP%] {\n  background: #102033;\n  border-color: transparent;\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.demo-stage[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  min-width: 0;\n  padding: 1.1rem;\n}\n\n.demo-stage-header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n\n.demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.meta-pill[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #102033;\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  padding: 0.3rem 0.65rem;\n  text-transform: uppercase;\n}\n\n.meta-pill.light[_ngcontent-%COMP%] {\n  background: #edf4fa;\n  border: 1px solid rgba(20, 50, 79, 0.08);\n  color: #14324f;\n}\n\n.table-host[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  border-radius: 16px;\n  margin-top: 0.95rem;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 0.95rem;\n}\n\n.table-host[_ngcontent-%COMP%]   revive-data-table[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\n.demo-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n}\n\n.demo-note[_ngcontent-%COMP%] {\n  background: #edf4fa;\n  border-radius: 12px;\n  padding: 0.75rem 0.9rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n}\n\n.toolbar-inline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #c8d5e3;\n  border-radius: 12px;\n  flex: 1 1 260px;\n  min-width: 0;\n  padding: 0.75rem 0.9rem;\n}\n\n.toggle-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n\n.toggle-card[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 14px;\n  color: #14324f;\n  display: flex;\n  gap: 0.6rem;\n  padding: 0.8rem 0.9rem;\n}\n\n.toggle-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n\n.mini-button[_ngcontent-%COMP%], .clear-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(16, 32, 51, 0.14);\n  border-radius: 999px;\n  color: #14324f;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0.55rem 0.85rem;\n}\n\n.mini-button[_ngcontent-%COMP%]:hover, .clear-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6fc;\n}\n\n.mini-button.danger[_ngcontent-%COMP%] {\n  border-color: rgba(161, 41, 41, 0.2);\n  color: #a12929;\n}\n\n.status-pill[_ngcontent-%COMP%], .priority-pill[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 0.28rem 0.58rem;\n  text-transform: uppercase;\n}\n\n.status-pill.stable[_ngcontent-%COMP%], .priority-pill.low[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.status-pill.review[_ngcontent-%COMP%], .priority-pill.medium[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.status-pill.critical[_ngcontent-%COMP%], .priority-pill.high[_ngcontent-%COMP%] {\n  background: rgba(180, 35, 24, 0.14);\n  color: #8d2219;\n}\n\n.priority-pill.status-tone.open[_ngcontent-%COMP%] {\n  background: rgba(12, 115, 184, 0.12);\n  color: #0c5e93;\n}\n\n.priority-pill.status-tone.pending[_ngcontent-%COMP%] {\n  background: rgba(210, 106, 42, 0.14);\n  color: #8b451b;\n}\n\n.priority-pill.status-tone.resolved[_ngcontent-%COMP%] {\n  background: rgba(32, 128, 79, 0.12);\n  color: #17653a;\n}\n\n.metric-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n}\n\n.metric-stack[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n}\n\n.metric-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.78rem;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  color: #59708a;\n  display: block;\n  font-size: 0.78rem;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n}\n\n.detail-summary[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.detail-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #102033;\n  margin: 0;\n}\n\n.ref-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.ref-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid #d9e2ec;\n  border-radius: 18px;\n  padding: 1rem;\n}\n\n.ref-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\n.api-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9e2ec;\n  padding: 0.7rem 0;\n  text-align: left;\n  vertical-align: top;\n}\n\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #59708a;\n  font-size: 0.82rem;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.log-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  max-height: calc(100vh - 2.4rem);\n  overflow: hidden;\n  position: sticky;\n  top: 1.2rem;\n}\n\n.log-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  gap: 0.8rem;\n  justify-content: space-between;\n}\n\n.log-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  max-height: calc(100vh - 16rem);\n  overflow-y: auto;\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  background: rgba(245, 247, 251, 0.96);\n  border: 1px solid #d9e2ec;\n  border-radius: 12px;\n  color: #41566f;\n  font-family: \"IBM Plex Mono\", \"Courier New\", monospace;\n  font-size: 0.76rem;\n  line-height: 1.5;\n  padding: 0.65rem 0.72rem;\n  word-break: break-word;\n}\n\n.release-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n\n.api-row[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fff 0%, #f7fafc 100%);\n  border: 1px solid rgba(16, 32, 51, 0.08);\n  border-radius: 16px;\n  display: grid;\n  gap: 0.3rem;\n  padding: 0.85rem 0.95rem;\n}\n\n.api-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102033;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 1240px) {\n  .example-explorer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-nav[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@media (max-width: 1180px) {\n  .layout[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-panel[_ngcontent-%COMP%] {\n    max-height: min(360px, 50vh);\n    order: 2;\n    position: static;\n  }\n\n  .ref-grid[_ngcontent-%COMP%], .detail-grid[_ngcontent-%COMP%], .feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .hero-card[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 1rem;\n  }\n\n  .cta-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .table-host[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n\n  .toggle-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .log-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFOzs7a0VBR2dFO0VBQ2hFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7Ozs7RUFJRSw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNkRBQTZEO0VBQzdELHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDBEQUEwRDtFQUMxRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMERBQTBEO0VBQzFELHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsK0VBQStFO0VBQy9FLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0RBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMERBQTBEO0VBQzFELHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7SUFHRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztJQUVFLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJBdmVuaXIgTmV4dFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2hlbGwge1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIHJpZ2h0LCByZ2JhKDI1NCwgMjI4LCAxNzksIDAuNSksIHRyYW5zcGFyZW50IDMyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBsZWZ0IDE4JSwgcmdiYSgxNzAsIDIxOSwgMjU1LCAwLjQpLCB0cmFuc3BhcmVudCAyOCUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmY5ZjAgMCUsICNmNWZiZmYgNTUlLCAjZWVmNGZiIDEwMCUpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMnJlbSAxLjI1cmVtIDMuNXJlbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQge1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBtYXJnaW46IDA7XG59XG5cbnAsXG50ZCxcbnRoLFxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5jb2RlLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLmhlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuMjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuOGZyKSBtaW5tYXgoMzIwcHgsIDAuOTVmcik7XG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG59XG5cbi5oZXJvLWNhcmQsXG4ucGFuZWwge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkxLCAyMDYsIDIyMywgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDYwcHggcmdiYSgyMywgNTAsIDc3LCAwLjEyKTtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICMxMDIwMzM7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC42NXJlbTtcbn1cblxuLmhlcm8tbWFpbiBoMSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMi40cmVtLCA0dncsIDMuNHJlbSk7XG4gIG1hcmdpbi1ib3R0b206IDAuODVyZW07XG59XG5cbi5oZXJvLW1haW4gcCxcbi5wYW5lbC1oZWFkZXIgcCxcbi5sb2ctcGFuZWwgcCxcbi5mZWF0dXJlLFxuLmRlbW8tbm90ZSB7XG4gIGNvbG9yOiAjNTk3MDhhO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZmVhdHVyZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjhyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgbWFyZ2luOiAxLjI1cmVtIDA7XG59XG5cbi5mZWF0dXJlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjUxLCAwLjkyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMC45NXJlbSAxcmVtO1xufVxuXG4uZmVhdHVyZSBzdHJvbmcge1xuICBjb2xvcjogIzEwMjAzMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLmN0YS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjMTVkM2YsICM5ZTRhMzEpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNzJyZW0gMS4xcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4uc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjN2Q0ZTI7XG4gIGNvbG9yOiAjMTAyMDMzO1xufVxuXG4uaGVyby1zZXR1cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLnN0ZXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbm1heCgwLCAxZnIpO1xufVxuXG4uc3RlcC1udW0ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMGM3M2I4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiAxLjlyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMS45cmVtO1xufVxuXG4uaGVyby1zZXR1cCBwcmUsXG4uY29kZSB7XG4gIGJhY2tncm91bmQ6ICMxMzI2M2E7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiAjZWRmNGZiO1xuICBmb250LXNpemU6IDAuODNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMC41NXJlbSAwIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwLjk1cmVtIDFyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmxheW91dCB7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG59XG5cbi5wYW5lbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMjVyZW07XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC40NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmV4YW1wbGUtZXhwbG9yZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI0MHB4LCAyODBweCkgbWlubWF4KDAsIDFmcik7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmRlbW8tbmF2IHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC45cmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEuMnJlbTtcbn1cblxuLmRlbW8tZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmIDAlLCAjZjdmYWZjIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZGVtby1ncm91cCBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLmRlbW8tbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uZGVtby1saW5rIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMzIsIDUxLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogIzE0MzI0ZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjdyZW0gMC44cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2UsIGNvbG9yIDEyMG1zIGVhc2UsIHRyYW5zZm9ybSAxMjBtcyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbW8tbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMWY2ZmI7XG59XG5cbi5kZW1vLWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzEwMjAzMztcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmRlbW8tc3RhZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmIDAlLCAjZjdmYWZjIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDllMmVjO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDEuMXJlbTtcbn1cblxuLmRlbW8tc3RhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kZW1vLWJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xufVxuXG4ubWV0YS1waWxsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzEwMjAzMztcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMC42NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1ldGEtcGlsbC5saWdodCB7XG4gIGJhY2tncm91bmQ6ICNlZGY0ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAsIDUwLCA3OSwgMC4wOCk7XG4gIGNvbG9yOiAjMTQzMjRmO1xufVxuXG4udGFibGUtaG9zdCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDAuOTVyZW07XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjk1cmVtO1xufVxuXG4udGFibGUtaG9zdCByZXZpdmUtZGF0YS10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVtby1zdGFjayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC45NXJlbTtcbn1cblxuLmRlbW8tbm90ZSB7XG4gIGJhY2tncm91bmQ6ICNlZGY0ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC45cmVtO1xufVxuXG4udG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLnRvb2xiYXItaW5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyIGlucHV0LFxuLnRvb2xiYXIgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4ZDVlMztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZmxleDogMSAxIDI2MHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC45cmVtO1xufVxuXG4udG9nZ2xlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpO1xufVxuXG4udG9nZ2xlLWNhcmQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjUxLCAwLjk2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgY29sb3I6ICMxNDMyNGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC42cmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMC45cmVtO1xufVxuXG4udG9nZ2xlLWNhcmQgaW5wdXQge1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG5cbi5taW5pLWJ1dHRvbixcbi5jbGVhci1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAzMiwgNTEsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY29sb3I6ICMxNDMyNGY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMC41NXJlbSAwLjg1cmVtO1xufVxuXG4ubWluaS1idXR0b246aG92ZXIsXG4uY2xlYXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VmZjZmYztcbn1cblxuLm1pbmktYnV0dG9uLmRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNjEsIDQxLCA0MSwgMC4yKTtcbiAgY29sb3I6ICNhMTI5Mjk7XG59XG5cbi5zdGF0dXMtcGlsbCxcbi5wcmlvcml0eS1waWxsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuMjhyZW0gMC41OHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0YXR1cy1waWxsLnN0YWJsZSxcbi5wcmlvcml0eS1waWxsLmxvdyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDEyOCwgNzksIDAuMTIpO1xuICBjb2xvcjogIzE3NjUzYTtcbn1cblxuLnN0YXR1cy1waWxsLnJldmlldyxcbi5wcmlvcml0eS1waWxsLm1lZGl1bSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEwLCAxMDYsIDQyLCAwLjE0KTtcbiAgY29sb3I6ICM4YjQ1MWI7XG59XG5cbi5zdGF0dXMtcGlsbC5jcml0aWNhbCxcbi5wcmlvcml0eS1waWxsLmhpZ2gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMzUsIDI0LCAwLjE0KTtcbiAgY29sb3I6ICM4ZDIyMTk7XG59XG5cbi5wcmlvcml0eS1waWxsLnN0YXR1cy10b25lLm9wZW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMTUsIDE4NCwgMC4xMik7XG4gIGNvbG9yOiAjMGM1ZTkzO1xufVxuXG4ucHJpb3JpdHktcGlsbC5zdGF0dXMtdG9uZS5wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTAsIDEwNiwgNDIsIDAuMTQpO1xuICBjb2xvcjogIzhiNDUxYjtcbn1cblxuLnByaW9yaXR5LXBpbGwuc3RhdHVzLXRvbmUucmVzb2x2ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAxMjgsIDc5LCAwLjEyKTtcbiAgY29sb3I6ICMxNzY1M2E7XG59XG5cbi5tZXRyaWMtc3RhY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMTVyZW07XG59XG5cbi5tZXRyaWMtc3RhY2sgc3Ryb25nIHtcbiAgY29sb3I6ICMxMDIwMzM7XG59XG5cbi5tZXRyaWMtc3RhY2sgc3BhbiB7XG4gIGNvbG9yOiAjNTk3MDhhO1xuICBmb250LXNpemU6IDAuNzhyZW07XG59XG5cbi5kZXRhaWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC45NXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4uZGV0YWlsLWxhYmVsIHtcbiAgY29sb3I6ICM1OTcwOGE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kZXRhaWwtc3VtbWFyeSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbi5kZXRhaWwtc3VtbWFyeSBwIHtcbiAgY29sb3I6ICMxMDIwMzM7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJlZi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5yZWYtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5yZWYtY2FyZCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG5cbi5hcGktdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwaS10YWJsZSB0aCxcbi5hcGktdGFibGUgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZTJlYztcbiAgcGFkZGluZzogMC43cmVtIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hcGktdGFibGUgdGgge1xuICBjb2xvcjogIzU5NzA4YTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xufVxuXG4uc2lkZWJhciB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmxvZy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC44cmVtO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMi40cmVtKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxLjJyZW07XG59XG5cbi5sb2ctaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC44cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sb2ctbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC41NXJlbTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE2cmVtKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmxvZy1lbnRyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDcsIDI1MSwgMC45Nik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWUyZWM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiAjNDE1NjZmO1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDAuNjVyZW0gMC43MnJlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLnJlbGVhc2UtY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uYXBpLXJvdyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmN2ZhZmMgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDMyLCA1MSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4zcmVtO1xuICBwYWRkaW5nOiAwLjg1cmVtIDAuOTVyZW07XG59XG5cbi5hcGktcm93IHN0cm9uZyB7XG4gIGNvbG9yOiAjMTAyMDMzO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xuICAuZXhhbXBsZS1leHBsb3JlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZGVtby1uYXYge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExODBweCkge1xuICAubGF5b3V0LFxuICAuaGVybyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAubG9nLXBhbmVsIHtcbiAgICBtYXgtaGVpZ2h0OiBtaW4oMzYwcHgsIDUwdmgpO1xuICAgIG9yZGVyOiAyO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAucmVmLWdyaWQsXG4gIC5kZXRhaWwtZ3JpZCxcbiAgLmZlYXR1cmUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5zaGVsbCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5oZXJvLWNhcmQsXG4gIC5wYW5lbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmN0YS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudGFibGUtaG9zdCB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgfVxuXG4gIC50b2dnbGUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAubG9nLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stackline/angular-data-table-component */ 7775);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_5__.DataTableModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _stackline_angular_data_table_component__WEBPACK_IMPORTED_MODULE_5__.DataTableModule]
  });
})();

/***/ }),

/***/ 3109:
/*!******************************!*\
  !*** ./src/app/docs-meta.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANGULAR_LINE": () => (/* binding */ ANGULAR_LINE),
/* harmony export */   "DOCS_PATH": () => (/* binding */ DOCS_PATH),
/* harmony export */   "PACKAGE_LINE": () => (/* binding */ PACKAGE_LINE)
/* harmony export */ });
const ANGULAR_LINE = '15.2.x';
const PACKAGE_LINE = '15.0.0';
const DOCS_PATH = 'angular-15';

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(error => console.error(error));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);