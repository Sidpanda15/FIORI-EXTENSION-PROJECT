jQuery.sap.declare("hcm.myleaverequest.HCM_LRQ_CREExtension.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.myleaverequest",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCM_LRQ_CRE" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.hcm.myleaverequest.Component.extend("hcm.myleaverequest.HCM_LRQ_CREExtension.Component", {
	metadata: {
		version: "1.0.0",
		config: {},
		customizing: {
			"sap.ui.viewReplacements": {
				"hcm.myleaverequest.view.S1": {
					"viewName": "hcm.myleaverequest.HCM_LRQ_CREExtension.view.S1Custom",
					"type": "XML"
				}
			}
		}
	}
});