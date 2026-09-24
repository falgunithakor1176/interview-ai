require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

const PORT = 3000;

const server = app.listen(PORT, "127.0.0.1", () => {
    console.log(`✅ Server ACTUALLY listening on http://127.0.0.1:${PORT}`);
});

server.on("error", (error) => {
    console.error("❌ SERVER ERROR:", error);
});