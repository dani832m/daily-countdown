setInterval(() => {
  // Current point in time
  const currentPointInTime = new Date();

  // Stated point in time
  let statedPointInTime = new Date(
    `${currentPointInTime.getMonth() + 1} ${currentPointInTime.getDate()} ${currentPointInTime.getFullYear()} 16:00:00`
  );

  // Difference between stated point in time and current point in time
  let distance = statedPointInTime - currentPointInTime;

  // If the stated point in time has already passed add 1 to current date
  if (distance < 1) {
    statedPointInTime = new Date(
      `${currentPointInTime.getMonth() + 1} ${currentPointInTime.getDate() + 1}, ${currentPointInTime.getFullYear()} 16:00:00`
    );
    // Get the new difference
    distance = statedPointInTime - currentPointInTime;
  }

  // Convert distance to hours, minutes and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display converted values nicely in countdown element
  const content = `Bestil inden ${hours} timer, ${minutes} minutter og ${seconds} sekunder for at få din ordre med dagens sending!`;
  document.getElementById("countdown").innerText = content;
}, 1000);
