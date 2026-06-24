# **ERROR ENCOUNTERED:**

PS C:\Users\HP\Downloads\Mobile_development_XcelerateAI\week-01-launch-environment\mission-1.2-first-js-mission-log> node mission-log.js 
C:\Users\HP\Downloads\Mobile_development_XcelerateAI\week-01-launch-environment\mission-1.2-first-js-mission-log\mission-log.js:11
console.log("The boss mission:", finalMission
                                 ^^^^^^^^^^^^

SyntaxError: missing ) after argument list
    at wrapSafe (node:internal/modules/cjs/loader:1787:18)
    at Module._compile (node:internal/modules/cjs/loader:1828:20)
    at Object..js (node:internal/modules/cjs/loader:1985:10)
    at Module.load (node:internal/modules/cjs/loader:1577:32)
    at Module._load (node:internal/modules/cjs/loader:1379:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.16.0

## INTERPRETATION:

>The issue is from the "mission-log" file, Line 11.
Line 8: A missing **)** is causing the error and hence, must be inputted into the code.
