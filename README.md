# NgPabooFireMenu

Paboo's Fire Menu is simple graphic icons to replace the Firestick's sad excuss for bookmarks. Firestick remote's circle 'mouse' is clumsy to use.

So I use this app to save list of bookmarks that will be displayed to use as big clickable icons.

*******************************************************************************************************
*******************************************************************************************************
IMPORTANT SETUP:  Edit the src\enviroments\environment.prod.ts and src\enviroments\environment.prod.ts.
ADD VALUES:

firebaseAPIKey
masterEmail
*******************************************************************************************************
*******************************************************************************************************

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

I had to downgrade my Node.JS to v16.13.0 to resolve compile issue.

Firebase hosting and firebase database (using Realtime Database). 


**************************

Setup so users that are not logged will see the default list of Fire Links (aka bookmarks)

Accomplished by using list of bookmarks set for masterEmail

HENCE... the open read rule for all.  

Make sure to add a 

Realtime database rules:
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
