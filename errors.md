ian@ian-ubuntu:~/Desktop/Northcoders/be-nc-news$ heroku logs --tail
2019-07-12T07:48:23.208504+00:00 app[web.1]: throw err;
2019-07-12T07:48:23.208506+00:00 app[web.1]: ^
2019-07-12T07:48:23.208507+00:00 app[web.1]: 
2019-07-12T07:48:23.208509+00:00 app[web.1]: Error: Cannot find module 'express'
2019-07-12T07:48:23.208511+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
2019-07-12T07:48:23.208512+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:562:25)
2019-07-12T07:48:23.208514+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:690:17)
2019-07-12T07:48:23.208515+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:25:18)
2019-07-12T07:48:23.208517+00:00 app[web.1]: at Object.<anonymous> (/app/app.js:1:17)
2019-07-12T07:48:23.208518+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:776:30)
2019-07-12T07:48:23.208520+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
2019-07-12T07:48:23.208523+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:653:32)
2019-07-12T07:48:23.208524+00:00 app[web.1]: at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
2019-07-12T07:48:23.208526+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:585:3)
2019-07-12T07:48:23.214425+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2019-07-12T07:48:23.214793+00:00 app[web.1]: npm ERR! errno 1
2019-07-12T07:48:23.215833+00:00 app[web.1]: npm ERR! be-nc-news@1.0.0 start: `node listen.js`
2019-07-12T07:48:23.215928+00:00 app[web.1]: npm ERR! Exit status 1
2019-07-12T07:48:23.216152+00:00 app[web.1]: npm ERR!
2019-07-12T07:48:23.216273+00:00 app[web.1]: npm ERR! Failed at the be-nc-news@1.0.0 start script.
2019-07-12T07:48:23.216376+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2019-07-12T07:48:23.223315+00:00 app[web.1]: 
2019-07-12T07:48:23.223544+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2019-07-12T07:48:23.223665+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2019-07-12T07_48_23_217Z-debug.log
2019-07-12T07:48:23.261583+00:00 heroku[web.1]: Process exited with status 1
2019-07-12T07:48:24.953209+00:00 heroku[web.1]: Starting process with command `npm start`
2019-07-12T07:48:26.943026+00:00 heroku[web.1]: State changed from starting to crashed
2019-07-12T07:48:26.771752+00:00 app[web.1]: 
2019-07-12T07:48:26.771780+00:00 app[web.1]: > be-nc-news@1.0.0 start /app
2019-07-12T07:48:26.771782+00:00 app[web.1]: > node listen.js
2019-07-12T07:48:26.771784+00:00 app[web.1]: 
2019-07-12T07:48:26.859694+00:00 app[web.1]: internal/modules/cjs/loader.js:638
2019-07-12T07:48:26.859698+00:00 app[web.1]: throw err;
2019-07-12T07:48:26.859700+00:00 app[web.1]: ^
2019-07-12T07:48:26.859702+00:00 app[web.1]: 
2019-07-12T07:48:26.859707+00:00 app[web.1]: Error: Cannot find module 'express'
2019-07-12T07:48:26.859710+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
2019-07-12T07:48:26.859712+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:562:25)
2019-07-12T07:48:26.859715+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:690:17)
2019-07-12T07:48:26.859717+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:25:18)
2019-07-12T07:48:26.859719+00:00 app[web.1]: at Object.<anonymous> (/app/app.js:1:17)
2019-07-12T07:48:26.859721+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:776:30)
2019-07-12T07:48:26.859723+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
2019-07-12T07:48:26.859725+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:653:32)
2019-07-12T07:48:26.859727+00:00 app[web.1]: at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
2019-07-12T07:48:26.859729+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:585:3)
2019-07-12T07:48:26.866089+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2019-07-12T07:48:26.866478+00:00 app[web.1]: npm ERR! errno 1
2019-07-12T07:48:26.867699+00:00 app[web.1]: npm ERR! be-nc-news@1.0.0 start: `node listen.js`
2019-07-12T07:48:26.867805+00:00 app[web.1]: npm ERR! Exit status 1
2019-07-12T07:48:26.868003+00:00 app[web.1]: npm ERR!
2019-07-12T07:48:26.868124+00:00 app[web.1]: npm ERR! Failed at the be-nc-news@1.0.0 start script.
2019-07-12T07:48:26.868247+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2019-07-12T07:48:26.875302+00:00 app[web.1]: 
2019-07-12T07:48:26.875455+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2019-07-12T07:48:26.875548+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2019-07-12T07_48_26_869Z-debug.log
2019-07-12T07:48:26.923196+00:00 heroku[web.1]: Process exited with status 1
2019-07-12T07:48:29.002781+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=rebbit-db.herokuapp.com request_id=efa401f3-8201-466a-9651-7614880956c8 fwd="185.192.69.203" dyno= connect= service= status=503 bytes= protocol=https
2019-07-12T07:48:29.538585+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=rebbit-db.herokuapp.com request_id=c6eb79a4-8426-4600-b1b3-c4b3278b9313 fwd="185.192.69.203" dyno= connect= service= status=503 bytes= protocol=https
2019-07-12T07:52:08.000000+00:00 app[api]: Build started by user kennaleeds@gmail.com
2019-07-12T07:52:35.129014+00:00 heroku[web.1]: State changed from crashed to starting
2019-07-12T07:52:34.935679+00:00 app[api]: Deploy 82481d17 by user kennaleeds@gmail.com
2019-07-12T07:52:34.935679+00:00 app[api]: Release v11 created by user kennaleeds@gmail.com
2019-07-12T07:52:36.000000+00:00 app[api]: Build succeeded
2019-07-12T07:52:36.923035+00:00 heroku[web.1]: Starting process with command `npm start`
2019-07-12T07:52:40.048383+00:00 heroku[web.1]: State changed from starting to crashed
2019-07-12T07:52:39.931133+00:00 app[web.1]: 
2019-07-12T07:52:39.931501+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2019-07-12T07:52:39.931714+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2019-07-12T07_52_39_911Z-debug.log
2019-07-12T07:52:39.661888+00:00 app[web.1]: 
2019-07-12T07:52:39.661907+00:00 app[web.1]: > be-nc-news@1.0.0 start /app
2019-07-12T07:52:39.661910+00:00 app[web.1]: > node listen.js
2019-07-12T07:52:39.661911+00:00 app[web.1]: 
2019-07-12T07:52:39.886904+00:00 app[web.1]: internal/modules/cjs/loader.js:638
2019-07-12T07:52:39.886909+00:00 app[web.1]: throw err;
2019-07-12T07:52:39.886911+00:00 app[web.1]: ^
2019-07-12T07:52:39.886913+00:00 app[web.1]: 
2019-07-12T07:52:39.886915+00:00 app[web.1]: Error: Cannot find module 'express'
2019-07-12T07:52:39.886936+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
2019-07-12T07:52:39.886939+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:562:25)
2019-07-12T07:52:39.886941+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:690:17)
2019-07-12T07:52:39.886943+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:25:18)
2019-07-12T07:52:39.886945+00:00 app[web.1]: at Object.<anonymous> (/app/app.js:1:17)
2019-07-12T07:52:39.886947+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:776:30)
2019-07-12T07:52:39.886949+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
2019-07-12T07:52:39.886951+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:653:32)
2019-07-12T07:52:39.886953+00:00 app[web.1]: at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
2019-07-12T07:52:39.886955+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:585:3)
2019-07-12T07:52:39.899842+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2019-07-12T07:52:39.901539+00:00 app[web.1]: npm ERR! errno 1
2019-07-12T07:52:39.906310+00:00 app[web.1]: npm ERR! be-nc-news@1.0.0 start: `node listen.js`
2019-07-12T07:52:39.906961+00:00 app[web.1]: npm ERR! Exit status 1
2019-07-12T07:52:39.907404+00:00 app[web.1]: npm ERR!
2019-07-12T07:52:39.907774+00:00 app[web.1]: npm ERR! Failed at the be-nc-news@1.0.0 start script.
2019-07-12T07:52:39.908067+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2019-07-12T07:52:40.025088+00:00 heroku[web.1]: Process exited with status 1
2019-07-12T07:53:28.194307+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=rebbit-db.herokuapp.com request_id=0eb1266b-c50f-4166-bee3-ae85758dc6bf fwd="185.192.69.203" dyno= connect= service= status=503 bytes= protocol=https
2019-07-12T07:53:28.632895+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=rebbit-db.herokuapp.com request_id=c1c5b0b4-5885-4422-ae1d-14a724849dd6 fwd="185.192.69.203" dyno= connect= service= status=503 bytes= protocol=https
2019-07-12T07:55:02.616895+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=rebbit-db.herokuapp.com request_id=fbc8388a-6e73-4507-bf19-844b95d69ed8 fwd="185.192.69.203" dyno= connect= service= status=503 bytes= protocol=https
2019-07-12T07:55:03.052547+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=rebbit-db.herokuapp.com request_id=8cd26462-ab70-44eb-8967-a482911f5a1f fwd="185.192.69.203" dyno= connect= service= status=503 bytes= protocol=https

