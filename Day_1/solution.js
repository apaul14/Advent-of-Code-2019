const fuelCalculator = arr => {
  const fuelPerModule = arr.map(module => Math.floor(module/3) - 2)
  const totalFuel = fuelPerModule.reduce((a,b) => a + b)
  return totalFuel
}