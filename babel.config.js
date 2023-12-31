const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ['module-resolver',
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "^@/(.*)": ([, pathname]) => { 
            const resolved = path.resolve("src", pathname);
            console.log('resolved', resolved);
            return resolved;
          }
        },
      },
    ]],
  };
};
