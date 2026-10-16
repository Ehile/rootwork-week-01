const age = 21;
const score = 78;
const hasLaptop = true;
const hasInternet = true;
const completedApplication = true;

if (
  age >= 18 &&
  score >= 60 &&
  hasLaptop === true &&
  hasInternet === true &&
  completedApplication === true &&
  score >= 85
) {
  console.log("Priority candidate");
} else if (
  age >= 18 &&
  score >= 60 &&
  hasLaptop === true &&
  hasInternet === true &&
  completedApplication === true
) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}