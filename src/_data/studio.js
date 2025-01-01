// const Fetch = require("@11ty/eleventy-fetch");

// module.exports = async function () {
//   try {
//     let url = "https://11ty-from-scratch-content-feeds.piccalil.li/media.json";

//     console.log("Fetching data from URL:", url);

//     /* This returns a promise */
//     const data = await Fetch(url, {
//       duration: "1d",
//       type: "json",
//     });

//     console.log("Fetched data:", data); // Debug the response
//     return data;
//   } catch (e) {
//     console.error("Error fetching data:", e);
//     return {};
//   }
// };

module.exports = async function () {
  process.stdout.write("Studio.js is running!"); // Log awal
  try {
    process.stdout.write("Fetching data...");
    const data = [
      { alt: "Static Test Image", medium: "https://via.placeholder.com/300" },
    ]; // Ganti dengan API jika perlu
    process.stdout.write("Data fetched:", data);
    return data;
  } catch (error) {
    console.error("Error in studio.js:", error);
    return [];
  }
};