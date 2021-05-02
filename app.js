function produceReport(){

    event.preventDefault();

    let data = [];

     data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
     data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
     data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
     data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);

    let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;

    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<p>Your production in shed A is " + data.shed_A + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed B is " + data.shed_B + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed C is " + data.shed_C + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed D is " + data.shed_D + " litres per day</p>";

    document.getElementById("outputData").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";
    

    dailyIncome = sumData * 45;

    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("outputData").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<Br>"


    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;

     
    document.getElementById("outputData").innerHTML += "<p> Your total income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for December is Ksh. " + incomeDecember + " </p>"


    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"

    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("outputData").innerHTML += "<p>Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<Br>"

    // OPTIONAL TRIAL

    // New price is 49.60
    newDailyIncome = sumData * 49.60;

    newIncomeJanuary = newDailyIncome * 31;
    newIncomeFebruary = newDailyIncome * 29;
    newIncomeMarch = newDailyIncome * 31;
    newIncomeApril = newDailyIncome * 30;
    newIncomeMay = newDailyIncome * 31;
    newIncomeJune = newDailyIncome * 30;
    newIncomeJuly = newDailyIncome * 31;
    newIncomeAugust = newDailyIncome * 31;
    newIncomeSeptember = newDailyIncome * 30;
    newIncomeOctober = newDailyIncome * 31;
    newIncomeNovember = newDailyIncome * 30;
    newIncomeDecember = newDailyIncome * 31;

    newIncomeInLeapYear = 366 * 49.60;

    incomeJanuaryDifference = newIncomeJanuary - incomeJanuary;
    incomeFebruaryDifference = newIncomeFebruary - incomeFebruary;
    incomeMarchDifference = newIncomeMarch - incomeMarch;
    incomeAprilDifference = newIncomeApril - incomeApril;
    incomeMayDifference = newIncomeMay - incomeMay;
    incomeJuneDifference = newIncomeJune - incomeJune;
    incomeJulyDifference = newIncomeJuly - incomeJuly;
    incomeAugustDifference = newIncomeAugust - incomeAugust;
    incomeSeptemberDifference = newIncomeSeptember - incomeSeptember;
    incomeOctoberDifference = newIncomeOctober - incomeOctober;
    incomeNovemberDifference = newIncomeNovember - incomeNovember;
    incomeDecemberDifference = newIncomeDecember - incomeDecember;


    document.getElementById("outputData").innerHTML += "<h3> Comparison and difference in income per month for different prices </h3>";

    document.getElementById("outputData").innerHTML += "<p>January: At price = Ksh. 45, you earn: Ksh. " + incomeJanuary + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJanuary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJanuaryDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>February: At price = Ksh. 45, you earn: Ksh. " + incomeFebruary + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeFebruary) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeFebruaryDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>March: At price = Ksh. 45, you earn: Ksh. " + incomeMarch + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeMarch) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeMarchDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>April: At price = Ksh. 45, you earn: Ksh. " + incomeApril + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeApril) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeAprilDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>May: At price = Ksh. 45, you earn: Ksh. " + incomeMay + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeMay) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeMayDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>June: At price = Ksh. 45, you earn: Ksh. " + incomeJune + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJune) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJuneDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>July: At price = Ksh. 45, you earn: Ksh. " + incomeJuly + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeJuly) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeJulyDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>August: At price = Ksh. 45, you earn: Ksh. " + incomeAugust + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeAugust) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeAugustDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>September: At price = Ksh. 45, you earn: Ksh. " + incomeSeptember + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeSeptember) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeSeptemberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>October: At price = Ksh. 45, you earn: Ksh. " + incomeOctober + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeOctober) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeOctoberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>November: At price = Ksh. 45, you earn: Ksh. " + incomeNovember + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeNovember) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeNovemberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>December: At price = Ksh. 45, you earn: Ksh. " + incomeDecember + ". At price = 49.60, you earn Ksh. " + Math.round(newIncomeDecember) + ". The difference, rounded off to the nearest value, is Ksh. " + Math.round(incomeDecemberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "<Br>"

    
}

// RESET FUNCTION

function resetPage(){


    document.getElementById("outputData").remove("innerHTML");




}


