import express from 'express';
import cors from 'cors';

import apirouters from "./api-routes.js";

const listen_port =3005

const app = express()

app.use(cors({origin: "*"}));

app.use("/",apirouters);
app.listen(listen_port,() => {
    

} )
