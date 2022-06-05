/** Setup envs for local development */
import http from "http";

import { app } from "./express-server";

const PORT = 8020;

/** Instantiate Server */
async function server() {
  const httpServer = http.createServer(app);
  
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

try {
  server();
} catch (e) {
  throw e;
}
