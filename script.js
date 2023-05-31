document.getElementById("compare-btn").addEventListener("click", function() {
    const playerAverage = parseFloat(document.getElementById("player-average").value);
    const testPoints = parseFloat(document.getElementById("test-points").value);
  
    const result = comparePointsToAverage(playerAverage, testPoints);
    document.getElementById("result").textContent = result;
  });
  
  function comparePointsToAverage(playerAverage, testPoints) {
    // Calculate the standard deviation and bounds
    const standardDeviation = playerAverage / 2;
    const lowerBound = playerAverage - standardDeviation;
    const upperBound = playerAverage + standardDeviation;
  
    // Compare the test points to the bounds and return the result
    if (testPoints < lowerBound) {
      return "Below average";
    } else if (testPoints > upperBound) {
      return "Above average";
    } else {
      return "Around average";
    }
  }
  