
"use strict"

const net = require("net");
// const stdin = process.stdin;

// stdin.setEncoding = ('uft8');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`stretchActivity`);
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect',() => {

    conn.write('Name: FST');
    // setInterval(() => {
    //   conn.write();
    // }, 50);
  });
  return conn;
};
    
module.exports = {connect};