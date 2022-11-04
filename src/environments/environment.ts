// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseDatabase: 'xxxxxx.firebaseio.com',    // REPLACE WITH YOUR INSTANCE OF FIREBASE :: REALTIME DATABASE
  firebaseAPIKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',    // REPLACE WITH YOUR INSTANCE OF FIREBASE API KEY
  masterEmail: 'masteremail@gmail.com'      // REPLACE WITH MASTER EMAIL. WHEN LOGGED IN WITH THIS EMAIL ADDRESS THIS WILL SET
                                            // THE DEFAULT LIST OF FIRE LINKS USERS WILL SEE IF THEY ARE NOT LOGGED IN.
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
