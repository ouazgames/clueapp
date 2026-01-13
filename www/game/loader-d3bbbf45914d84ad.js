// Puzzle Map - SECRET! Do not share!
// Master Secret: d3bbbf45914d84ad
// Generated puzzle hash map - 39 valid levels

const PUZZLE_HASHES = {
  1: "165362d90111",
  2: "175ca6478890",
  3: "23c43dbe2a37",
  4: "262ff76dcd13",
  5: "2f42fbfcdaf9",
  6: "43537ae10d78",
  7: "48ce3cb8cfbd",
  8: "4d49ca3e2134",
  9: "5096b4d921c5",
  10: "51f3ecf10a81",
  11: "5e9419f2e0fa",
  12: "5ea3be3177d5",
  13: "6310edfd1b2b",
  14: "656f4ab5e464",
  15: "684233c01fca",
  16: "6c1a70232b95",
  17: "6cbf6d256778",
  18: "6e2c04ee211d",
  19: "6efda75291c8",
  20: "703916bb416d",
  21: "78e820375276",
  22: "83f5e2a2c9d3",
  23: "8aa15091a232",
  24: "92471ae08a9c",
  25: "98c74c6d6e44",
  26: "9c53c1ae5344",
  27: "ab644e25dde8",
  28: "b3eef6f8d2bb",
  29: "b7b982ec1191",
  30: "bad1fcbd0ec5",
  31: "bb3664b02089",
  32: "c629d699bf3c",
  33: "d645485f7161",
  34: "d9e838da8fb9",
  35: "da0bb9fb2cd9",
  36: "dae6db907d2b",
  37: "de6c2fb44bd1",
  38: "e8dde6ff8dc1",
  39: "ed23e2304ae8",
};

// Get puzzle hash by level number
function getPuzzleHash(levelNum) {
  const puzzleNum = ((levelNum - 1) % 39) + 1;
  return PUZZLE_HASHES[puzzleNum];
}
