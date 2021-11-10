const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    // host: "10.0.2.15", // IP address here,
    // port: 50541,
    // // PORT number here,one
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`client has successfully connected`);
    conn.write("Name: FST");
    conn.on("data", (data) => {
      console.log(data);
    });
  });
  return conn;
};
// connect();
// interpret incoming data as text

module.exports = { connect };
