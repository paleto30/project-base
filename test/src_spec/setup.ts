import { App } from "../../src/app";




const appIntance = new App();
appIntance.listenOnPort(8090);




export { appIntance };