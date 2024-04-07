"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOptions) {
    const carInfo = Object.assign({ manufacturer: manufacturer, modelName: modelName }, Object.assign({}, ...extraOptions));
    return carInfo;
}
let result = storeCarInfo("Honda", "Civic", { color: "black" }, { features: ["Navigation", "Power window"] });
console.log(result);
