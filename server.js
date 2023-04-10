const express = require("express");
const server = express();
const routes = require("./routes");

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(routes);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);  
});
