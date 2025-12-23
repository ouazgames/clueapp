// Puzzle Map - SECRET! Do not share!
// Master Secret: d3bbbf45914d84ad
// Generated puzzle hash map

const PUZZLE_HASHES = {
  1: "8aa15091a232",
  2: "bad1fcbd0ec5",
  3: "684233c01fca",
  4: "23c43dbe2a37",
  5: "9c53c1ae5344",
  6: "78e820375276",
  7: "de6c2fb44bd1",
  8: "b6b573e8de8e",
  9: "da0bb9fb2cd9",
  10: "6baae50faf8a",
  11: "6cbf6d256778",
  12: "b7b982ec1191",
  13: "656f4ab5e464",
  14: "f3042cb0f5ec",
  15: "6c1a70232b95",
  16: "d6235521a569",
  17: "21493e6b6140",
  18: "703916bb416d",
  19: "5a5aa0bd997c",
  20: "98c74c6d6e44",
  21: "51f3ecf10a81",
  22: "e8dde6ff8dc1",
  23: "6efda75291c8",
  24: "63b339a39097",
  25: "175ca6478890",
  26: "262ff76dcd13",
  27: "ed23e2304ae8",
  28: "bb3664b02089",
  29: "2f42fbfcdaf9",
  30: "c629d699bf3c",
  31: "521c0eb12288",
  32: "83f5e2a2c9d3",
  33: "92471ae08a9c",
  34: "11cb6872e594",
  35: "48ce3cb8cfbd",
  36: "c72891018b1b",
  37: "4d49ca3e2134",
  38: "5ea3be3177d5",
  39: "b3eef6f8d2bb",
  40: "6e2c04ee211d",
  41: "6310edfd1b2b",
  42: "d9e838da8fb9",
  43: "ab644e25dde8",
  44: "d645485f7161",
  45: "5e9419f2e0fa",
  46: "5096b4d921c5",
  47: "dae6db907d2b",
  48: "43537ae10d78",
  49: "5220a658f51b",
  50: "165362d90111",
};

// Get puzzle hash by level number
function getPuzzleHash(levelNum) {
  const puzzleNum = ((levelNum - 1) % 50) + 1;
  return PUZZLE_HASHES[puzzleNum];
}
