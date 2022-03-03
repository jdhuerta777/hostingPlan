function Plan(name,price,space,transfer,pages,discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    // We will define the method as prototype of the constructor
    Plan.prototype.calcAnnual=function(percentIfDisc) {
        var bestPrice = this.price;
        console.log("Price" + bestPrice);
        var currDate = new Date();
        console.log("Current Date" + currDate);
        var thisMo = currDate.getMonth();
        console.log("This Month" + thisMo);
            for (var i = 0; i < this.discountMonths.length; i++ ) {
                console.log(this.discountMonths.length);
                if (this.discountMonths[i] === thisMo) {
                    bestPrice = this.price * percentIfDisc;
                    console.log("Price after discount" + bestPrice);
                    break;
                }
            }
            console.log("Price with no discount" + bestPrice);
            return bestPrice * 12;
    }
}

var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0, 7]);
var p2 = new Plan("Professional", 5.99, 500, 5000, 50, [0, 7, 11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0, 7]);

var annualPrice = p1.calcAnnual(.80);
console.log(annualPrice);
document.getElementById("p1price").innerHTML = annualPrice;

var annualPrice = p2.calcAnnual(.80);
console.log(annualPrice);
document.getElementById("p2price").innerHTML = annualPrice;

var annualPrice = p3.calcAnnual(.80);
console.log(annualPrice);
document.getElementById("p3price").innerHTML = annualPrice;

function validate() {
	var firstname = document.myForm.fname;
	var lastname = document.myForm.lname;
	var eletter = document.myForm.mail;
    var planType = document.myForm.plan;

	if(letterOnlyF(firstname)) {
		if(letterOnlyL(lastname)) {
			if(mailSpecial(eletter)) {
                if(chosenPlan(planType)) {
                }
			}
		}
	}
	return false;
}

function letterOnlyF(firstname) {
	var letters = /^[A-Za-z]+$/;
	if (firstname.value.length==0) {
		alert('Enter first name please !!!');
		firstname.focus();
		return false;
	}
	else if(firstname.value.match(letters)) {
		return true;
	}
	else {
		alert('Please use letters only !!!!');
		firstname.focus();
		return false;
	}
}

function letterOnlyL(lastname) {
	var letters = /^[A-Za-z]+$/;
	if (lastname.value.length==0) {
		alert('Enter last name please !!!');
		lastname.focus();
		return false;
	}
	else if(lastname.value.match(letters)) {
		return true;
	}
	else {
		alert('Please use letters only !!!!');
		lastname.focus();
		return false;
	}
}

function mailSpecial(eletter) {
	var characters = /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-_]+.[A-Za-z]$/ /*/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3}$/*/;
	if (eletter.value.length==0) {
		alert('Enter email plz!!!!!');
		eletter.focus();
		return false;
	}
	else if(eletter.value.match(characters)) {
		return true;
	}
	else {
		alert('Please enter valid email!!!!');
		eletter.focus();
		return false;
	}
}

function chosenPlan(planType) {

    var annualPrice = planType.calcAnnual(.80);
    console.log(annualPrice);
    alert("Annual Price " + annualPrice);
}


/*var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0, 7]);
var p2 = new Plan("Professional", 5.99, 500, 5000, 50, [0, 7, 11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0, 7]);

var annualPrice = planType.calcAnnual(.80);
console.log(annualPrice);
alert("Annual Price " + annualPrice);*/
