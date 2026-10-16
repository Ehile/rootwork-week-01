## Part 5: Explanation of the Logic

### What each variable represents

- `age`: The applicant's age in years.
- `score`: The applicant's scholarship assessment score.
- `hasLaptop`: A Boolean indicating whether the applicant has access to a laptop.
- `hasInternet`: A Boolean indicating whether the applicant has internet access.
- `completedApplication`: A Boolean indicating whether the applicant has completed the application.

The `const` keyword declares each variable so its assigned value cannot be reassigned.

### What each condition does

- `age >= 18` checks whether the applicant is at least 18 years old.
- `score >= 60` checks whether the applicant meets the minimum score.
- `hasLaptop === true` checks whether laptop access is available.
- `hasInternet === true` checks whether internet access is available.
- `completedApplication === true` checks whether the application is complete.
- `score >= 85` checks whether the applicant meets the priority score threshold.

### Logical operators used

I used `&&`, which means AND. It requires every connected condition to be true before the combined expression evaluates to true.

I also used comparison operators such as `>=` to check whether values meet minimum thresholds, and `===` to check whether Boolean values are exactly true.

### Why the order of the conditions matters

The priority condition must be checked before the normal eligibility condition. A priority candidate also satisfies the normal eligibility requirements. If the general eligibility condition were checked first, the program could print "Eligible" for a priority candidate without ever reaching the priority condition.

The final `else` handles applicants who do not satisfy the normal requirements.

### Why a high score does not guarantee eligibility

A high score alone is not enough. The applicant must also meet the age requirement, complete the application, and have laptop and internet access. Because all the normal requirements are compulsory, failing even one of them results in "Not eligible."

### Difference between `&&` and `||`

The `&&` operator means AND. Both conditions must be true for the combined expression to be true.

The `||` operator means OR. At least one of the connected conditions must be true for the combined expression to be true.

For this scholarship, `&&` is appropriate for the normal requirements because every requirement must be satisfied. Using `||` to connect the requirements would incorrectly allow applicants to qualify when only one requirement is met.

### One bug or mistake and how I fixed it

My mistake was checking the general eligibility condition before the priority condition. Since priority candidates also meet all the normal requirements, the program could classify them as simply eligible.

To solve it what I did was to check the complete priority condition first and then check the normal eligibility condition. This ensures that the program returns the most appropriate result.
