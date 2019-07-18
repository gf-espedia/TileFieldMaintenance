sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileFieldMaintenance.TileFieldMaintenance.controller.TileFieldMaintenanceView1", {
		onInit: function () {
			history.back();
			window.open("https://fieldmaintenance-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});