export const calculations = input => {
  if (input.length === 0 || !Array.isArray(input)) return 0;

  const calculation = input.reduce((acc, val, idx, arr) => {
    const next = Number(arr[idx + 1]);

    if (isNaN(next)) return acc;

    switch (val) {
      case "+":
        return acc + next;
      case "−":
        return acc - next;
      case "×":
        return acc * next;
      case "÷":
        return acc / next;
    }

    return acc;
  }, Number(input[0]));

  return calculation;
};
