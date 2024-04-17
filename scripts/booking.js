/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numberDaySelected = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let halfDay = document.getElementById("half");
let fullDay = document.getElementById("full");
let clearButton = document.getElementById("clear-button");

function mondayClicked()
{
    
    if (!monday.classList.contains("clicked"))
    {
    monday.classList.add("clicked");
    numberDaySelected += 1;
}   else {
    monday.classlist.remove("clicked");
    numberDaySelected -= 1;
    
}
    calculate();
}
monday.addEventListener("click", mondayClicked);

function tuesdayClicked()
{
    
    if (!tuesday.classList.contains("clicked"))
    {
    tuesday.classList.add("clicked");
    numberDaySelected += 1;
}   else {
    tuesday.classlist.remove("clicked");
    numberDaySelected -= 1;
    
}
    calculate();
}
tuesday.addEventListener("click", tuesdayClicked);

function wednesdayClicked()
{
    
    if (!wednesday.classList.contains("clicked"))
    {
    wednesday.classList.add("clicked");
    numberDaySelected += 1;
}   else {
    wednesday.classlist.remove("clicked");
    numberDaySelected -= 1;
    
}
    calculate();
}
wednesday.addEventListener("click", wednesdayClicked);

function thursdayClicked()
{
    
    if (!thursday.classList.contains("clicked"))
    {
    thursday.classList.add("clicked");
    numberDaySelected += 1;
}   else {
    thursday.classlist.remove("clicked");
    numberDaySelected -= 1;
}
    calculate();
}
thursday.addEventListener("click", thursdayClicked);

function fridayClicked()
{
    
    if (!friday.classList.contains("clicked"))
    {
    friday.classList.add("clicked");
    numberDaySelected += 1;
}   else {
    friday.classlist.remove("clicked");
    numberDaySelected -= 1;
    
}
    calculate();
}
friday.addEventListener("click", fridayClicked);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearButtonClicked()
{
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    numberDaySelected = 0;
    costPerDay = 0;
    calculate();
}
clearButton.addEventListener("click", clearButtonClicked);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayButtonClicked()
{
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    costPerDay = 20;
    calculate();
}
halfDay.addEventListener("click", halfDayButtonClicked);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayButtonClicked()
{
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    costPerDay = 35;
    calculate();
}
fullDay.addEventListener("click", fullDayButtonClicked);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate()
{
    let calculatedCost = costPerDay * numberDaySelected;
    document.getElementById("calculated-cost").innerHTML = calculatedCost;
}

