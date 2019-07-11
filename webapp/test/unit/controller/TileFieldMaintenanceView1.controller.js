/*global QUnit*/

sap.ui.define([
	"TileFieldMaintenance/TileFieldMaintenance/controller/TileFieldMaintenanceView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileFieldMaintenanceView1 Controller");

	QUnit.test("I should test the TileFieldMaintenanceView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});