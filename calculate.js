function calculate() {
  // accessing the marks from input declearing the variables for marks
  let a = Number(document.getElementById('physics').value);
  let b = Number(document.getElementById('chemistry').value);
  let c = Number(document.getElementById('math').value);
  let d = Number(document.getElementById('biology').value);
  let e = Number(document.getElementById('eng').value);

  // alerting if the marks are greater than 100(maximum marks)
  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
    alert('Please enter the valid input');
  } else {
    // Calculating Obtained Marks
    let obtained = a + b + c + d + e;
    document.getElementById('obtainedMarks').innerHTML = obtained;

    // Calculating Percentage
    let percent = (obtained / 500) * 100;
    document.getElementById('per').innerHTML = percent + '%';

    // reviewing whether is passed or failed
    if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
      document.getElementById('review').innerHTML =
        '<span style="color:green;background-color:white;font-weight:bold">Passed</span>';
    } else {
      document.getElementById('review').innerHTML =
        '<span style="color:red;background-color:white; font-weight:bold;padding:3px 8px">Failed</span>';
    }

    if (percent >= 80) {
      document.getElementById('grade').innerHTML = 'A';
    } else if (percent >= 70) {
      document.getElementById('grade').innerHTML = 'B';
    } else if (percent >= 60) {
      document.getElementById('grade').innerHTML = 'C';
    } else if (percent >= 50) {
      document.getElementById('grade').innerHTML = 'D';
    } else if (percent >= 40) {
      document.getElementById('grade').innerHTML = 'E';
    } else {
      document.getElementById('grade').innerHTML = 'F';
    }
  }
}
