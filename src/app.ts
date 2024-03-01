import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routeradmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/types/config";
/**  1-ENTERANCE **/

            const app = express();
            console.log("dirname:", __dirname);
            app.use(express.static(path.join(__dirname, "public")));
            app.use(express.urlencoded({ extended: true }));
            app.use(express.json());

/**  2-SESSIONS **/

/**  3-VIEWS **/

        app.set("view", path.join(__dirname, "views"));
        app.set("view engine", "ejs");

/**  4-ROUTERS **/

    app.use("/admin", routerAdmin);  //BSSR: EJS => For Admin
    app.use("/",router);            // SPA: REACT => Public

    //app.use("/",router); //MiddLewaral Design Pattern

export default app;