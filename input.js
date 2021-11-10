let connection;
const setupInput = function (conn) {
  // console.log(connect);
  connection = conn;
  const stdin = process.stdin;
  // console.log(conn);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === "w") {
    connection.write(`Move: up`);
  }
  if (key === "a") {
    connection.write(`Move: left`);
  }
  if (key === "s") {
    connection.write(`Move: down`);
  }
  if (key === "d") {
    connection.write(`Move: right`);
  }
  if (key === "m") {
    connection.write("Say: Hello everyone!");
  }
  if (key === "\u0003") {
    process.exit();
  }
};

// };

module.exports = { setupInput };
