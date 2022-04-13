import { config } from "dotenv";

config();

import server from "./server.js";

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
