sap.ui.define([
	"sap/ui/vbm/Spots"
], function (Spot) {

	return Spot.extend("com.rahul.covid19-map.controller.NewSpots", {

		metadata: {
			dnd: {
				draggable: true,
				droppable: true
			},
			aggregations: {
				items: {
					type: 'sap.ui.vbm.Spot',
					multiple: true,
					selector: "#{id}-items",
					dnd: {
						draggable: true,
						dropppable: true,
						layout: "Horizontal"
					}
				}
			}
		}
	});

});