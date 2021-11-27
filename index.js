import './src/config/env.js';
import * as http from 'http'
import * as os from 'os'
import express from 'express';
import rootRouter from './src/routes.js'
import { constants } from './src/config/config.js';
import { BASE_PATH } from './src/config/envars.js';

const port = parseInt(constants.process_env_PORT);
const welcome = p => () => {
    console.log(
      `Up and listening22 in @: ${os.hostname()} on port: ${p}`
    )
  }

let app = express();
app.use(express.json({ limit: constants.process_env_REQUEST_LIMIT }))
app.use(
    express.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT
    })
  )
app.use(express.text({ limit: constants.process_env_REQUEST_LIMIT }))

console.log(`Base path: ${BASE_PATH}`)

app.use(BASE_PATH, rootRouter);

http.createServer(app).listen(port, welcome(port))