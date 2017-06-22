# ionic2-transparent-bar
A transparent bar DEMO in ionic2

## Running
* Clone this repository: `https://github.com/HsuanXyz/ionic2-transparent-bar.git`.
* Run `npm install` from the project root.
* If you do not install the ionic CLI (`npm install -g ionic`)
* Run `ionic serve` in a terminal from the project root.

## App Preview
<img src="https://github.com/HsuanXyz/hsuanxyz.github.io/blob/master/assets/ionic2-transparent-bar/demo.gif?raw=true" alt="Preview">

## File Structure
```
.
├── LICENSE
├── README.md
├── config.xml
├── ionic.config.json
├── package.json
├── resources
├── src
│   ├── index.html
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.html
│   │   ├── app.module.ts
│   │   ├── app.scss
│   │   └── main.ts
│   ├── assets
│   │   └── icon
│   │       └── favicon.ico
│   ├── pages
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.scss
│   │   │   └── about.ts
│   │   ├── contact
│   │   │   ├── contact.html
│   │   │   ├── contact.scss
│   │   │   └── contact.ts
│   │   ├── home
│   │   │   ├── home.html        
│   │   │   ├── home.scss         
│   │   │   └── home.ts           
│   │   ├── transparent-bar                  * transparent-bar page
│   │   │   ├── transparent-bar.html         * transparent-bar template
│   │   │   ├── transparent-bar.scss         * transparent-bar stylesheet
│   │   │   └── transparent-bar.ts           * transparent-bar code
│   │   └── tabs
│   │       ├── tabs.html
│   │       └── tabs.ts
│   ├── service-worker.js
│   └── theme
│       └── variables.scss
├── tsconfig.json
└── tslint.json
```
## Environment
```
Cordova CLI: 6.4.0

global packages:

    @ionic/cli-utils : 1.0.0
    Ionic CLI        : 3.0.0

local packages:

    @ionic/app-scripts              : 1.3.7
    @ionic/cli-plugin-ionic-angular : 1.3.1
    Ionic Framework                 : ionic-angular 3.4.1

```
