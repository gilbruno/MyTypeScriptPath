"use strict";
// Enum in TS works exactlylike in Solidity !!
var STEPS;
(function (STEPS) {
    STEPS[STEPS["STEP_1"] = 0] = "STEP_1";
    STEPS[STEPS["STEP_2"] = 1] = "STEP_2";
    STEPS[STEPS["STEP_3"] = 2] = "STEP_3";
})(STEPS || (STEPS = {}));
const myStep = STEPS.STEP_2;
console.log(myStep);
console.log(STEPS[myStep]);
