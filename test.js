const Fetch = require("@11ty/eleventy-fetch");

(async () => {
  let url = "https://11ty-from-scratch-content-feeds.piccalil.li/media.json";

  try {
    const data = await Fetch(url, {
      duration: "1d",
      type: "json",
    });
    console.log("Fetched data:", data);
  } catch (e) {
    console.error("Error:", e);
  }
})();