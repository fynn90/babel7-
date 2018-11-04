// module.exports = function(api) {
//   api.cache(false);
//   const presets = [
//     [
//       "@babel/env",
//       {
//         useBuiltIns: "usage",
//         targets: {
//           browsers: [
//             "Chrome >= 49",
//             "Firefox >= 45",
//             "Safari >= 10",
//             "Edge >= 13",
//             "iOS >= 10",
//             "Electron >= 0.36"
//           ]
//         }
//       }
//     ]
//   ];
//   return { presets };
// };
const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "usage",
      targets: {
        browsers: [
          "Chrome >= 49",
          "Firefox >= 45",
          "Safari >= 10",
          "Edge >= 13",
          "iOS >= 10",
          "Electron >= 0.36"
        ]
      }
    }
  ]
];
module.exports = { presets, ignore:['./**/b.js'] };
