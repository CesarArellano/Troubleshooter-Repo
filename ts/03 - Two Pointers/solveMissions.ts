function solveMissions(
  alpha2beta: number[],
  beta2alpha: number[],
  missions: number
): number {
  const TIME_UNITS = 100;
  let totalTime = 0;
  let completed = 0;
  let l = 0, r = 0;
  const maxMissions = Math.min(missions, alpha2beta.length, beta2alpha.length);

  while (completed < maxMissions) {
    console.log({totalTime1: totalTime});
    totalTime = Math.max(totalTime, alpha2beta[l]!);
    l++;

    totalTime += TIME_UNITS;
    console.log({totalTime2: totalTime});

    totalTime = Math.max(totalTime, beta2alpha[r]!);
    r++;

    totalTime += TIME_UNITS;
    console.log({totalTime3: totalTime});
    completed++;
  }

  return totalTime;
}

function runTest(label: string, result: number, expected: number) {
  const pass = result === expected;
  console.log(`${pass ? "✅" : "❌"} ${label}: got ${result}, expected ${expected}`);
}

// 1. Zero missions — should always return 0 regardless of inputs
runTest(
  "Zero missions",
  solveMissions([0, 100, 200], [0, 100, 200], 0),
  0
);

// 2. Single mission, both legs instant (time=0)
runTest(
  "Single mission, all-zero travel times",
  solveMissions([0], [0], 1),
  200 // 0 + TIME_UNITS + 0 + TIME_UNITS
);

// 3. Single mission, outbound leg is slow (500), return is instant (0)
runTest(
  "Single mission, slow outbound",
  solveMissions([500], [0], 1),
  700 // 500 + 100 + max(600,0) + 100
);

// 4. missions > array.length — should be capped, not crash or fabricate time
runTest(
  "missions > array length (capped to 2)",
  solveMissions([0, 100], [0, 100], 10),
  400 // same as missions=2
);

// 5. Return trip is consistently slower (beta2alpha >> alpha2beta)
runTest(
  "Beta-to-alpha legs are slower",
  solveMissions([0, 100], [300, 500], 2),
  600
);

// 6. Outbound trip is consistently slower (alpha2beta >> beta2alpha)
runTest(
  "Alpha-to-beta legs are slower",
  solveMissions([300, 500], [0, 100], 2),
  700
);

// 7. Empty arrays — maxMissions=0, should return 0
runTest(
  "Empty arrays",
  solveMissions([], [], 5),
  0
);

// 8. All routes exhausted (missions === array.length)
runTest(
  "All routes used (missions = array.length = 3)",
  solveMissions([0, 100, 200], [0, 100, 200], 3),
  600
);

// 9. Original symmetric case
runTest(
  "Original case — symmetric arrays, 4 missions",
  solveMissions(
    [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    [0, 101, 201, 300, 400, 500, 600, 700, 800, 900],
    4
  ),
  800
);