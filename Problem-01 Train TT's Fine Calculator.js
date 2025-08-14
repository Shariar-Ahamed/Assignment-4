function totalFine(fare) {
    //todo চেক করবো fare কি number কিনা এবং পজিটিভ কিনা
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }

    //todo জরিমানা হিসাব
    let surcharge = fare * 20 / 100;    // ২০% সারচার্জ
    let serviceCharge = 30;            // সার্ভিস চার্জ
    let total = fare + surcharge + serviceCharge;

    //todo মোট জরিমানা রিটার্ন
    return total;
}

console.log(totalFine(200));


//todo Example Test:
console.log(totalFine(200));        //* 270
console.log(totalFine(0));         //* Invalid
console.log(totalFine(50));       //* 90
console.log(totalFine(552));     //* 692.4
console.log(totalFine(-35));    //* Invalid
console.log(totalFine("65"));  //* Invalid
console.log(totalFine("Gorib tai ticket katinai")); //* Invalid