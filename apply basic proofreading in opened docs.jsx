
#include "Document/applyBasicProofreading.jsx"


var docs =  app.documents;
var docCount = docs.count();

for (var d = 0; d < docCount; d++) {

	var doc = docs.item(d);
	applyBasicProofreading(doc, true);

}
