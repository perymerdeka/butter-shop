const studio = require("./src/_data/studio");

(async () => {
  const data = await studio();
  console.log("Studio data:", data);
})();