import { App } from "./src/app";




function Main() {
    const app = new App();
    app.listenOnPort(Number(8080));
}




Main();