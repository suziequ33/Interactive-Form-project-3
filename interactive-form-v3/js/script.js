//console.log('test');
/*test to make sure script and index is working. */

/**Name Filed */
const nameFocus = document.getElementById('name');
nameFocus.focus();
/**Job Role */
/*I had som trubble with this one. I know it was just a true or false answer
/* but i made it more complicated then it needed to be.
/* i first tried to querySelecorAll for the title and i kept saying the the addEventListener wasnt a funcion. then i changed the title to getElementById and that work.
/* i then made sure that all the other were right. With the help of note unit2 JavaScript and the DOM-select an elemt by id.
/*i had trubble with the change event. i look that up at mosilaa. i was still not getting the textbox.I tried a for loop but knew that it was too much code.
/* then found an example of code at mozilla.vom but keep code e.target.value; and didnt get any results.tried a few combination | didnt work.
/* I then found errorfixing.com and the example if(element.value === ) workd after i tried that. also found aother example of addEventListener change and option selection
/* at stockoverflow.com .
*/
const titleJob = document.getElementById('title'); 
const otherJobRole = document.getElementById('other-job-role');
//const titleOption = document.querySelectorAll('title option');
otherJobRole.style.display = 'none';

titleJob.addEventListener('change', e => {
    if(titleJob.value ==='other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});
/**T-Shirt Info */
/*found code example for disabled element at w3schools.com */
/*took me awhile to get children elements for color but i found an exampleat developer.mozilla. */
/* haad trubble with the funcion it kept saying cannot read properites value or removeAttributeis not a funciton. Relized i needed to more the getAttribute inot the funcion to work.
/*Found that example developer.mozilla/<select.:The HTML Select element. this is where i found most of the code example for this funcion.  */
/*the mozilla/select element is where i found and used setAttribute/removeAttribute*/
/*console kept telling me that removeAttribute still wasnt doing what i needed it to unil i rememberd we used the [i] for referencesto a collection of elements children.
notes DOM Scription my examble./filter invitess who have not responded.took a few trys to find where to put them. */
document.getElementById('color').disable = true;
const shirtColor = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorChildren = document.getElementById('color').children;

shirtDesign.addEventListener('change', e => {
    shirtColor.disabled = false;
  
    for(i = 0; i < colorChildren.length; i++) {
        const jsPuns = colorChildren[i].getAttribute('data-theme');

     if(shirtDesign.value === jsPuns) {       
        colorChildren[i].hidden = false;
        colorChildren[i].setAttribute('selected', '');
    } else {
        colorChildren[i].hidden = true;
        colorChildren[i].removeAttribute('selected');
    }
}
});
/**Register for Activites */
//selet the fieldset element
//get the name chaeckbox within fieldset element
// gets the total cost of element in activites-cost
//found example for parseInt in StingManipulation with JavaScript to turn the string into a number value.
//i had trouble with i found the .replace in notes 2-Regular Expressions in JavaScript(Flags) and also examples on stackoverflow.
//update the total cost .
const activitesFieldset = document.getElementById('activities');
const checkBox = activitesFieldset.querySelectorAll('input[type="checkbox"]');
const totalCostElem = document.getElementById('activities-cost');

activitesFieldset.addEventListener('change', event => {
const boxChecked = event.target;
   
if(boxChecked.type === 'checkbox') {
    const cost = parseInt(boxChecked.getAttribute('data-cost'));
    let totalCost = parseInt(totalCostElem.textContent.replace(/[^0-9]/g, ''));

    if (boxChecked.checked) {
        totalCost += cost;
    } else {
        totalCost -= cost;
    }
   
totalCostElem.textContent = 'Total: $' + totalCost;
    }
}); 
/**Payment infor*/
//get the payment method dropdown 'payment'
//gets all the payment sections. example of selectorAll in JavaScript and the DOM.also on mdn web docs
//.forEach loop checks each payment section and hides then by setting display property to 'none'.
//sectionPayment shows the selected payment sections. 
//the last .forEach loop hides all payment except for credit-card on page load.
//I found example of this .forEach loop on w3school.com
const payMethod = document.getElementById('payment');
const paymentSections = document.querySelectorAll('.credit-card, .paypal, .bitcoin');
document.getElementById('credit-card').style.display = 'block';

payMethod.addEventListener('change', e => {
    const selectPayment = e.target.value;

    paymentSections.forEach(section => {
        section.style.display = 'none';
    });

    const sectionPayment = document.getElementById(selectPayment);
    sectionPayment.style.display ='block';
});

paymentSections.forEach(section => {
    if (section.id !== 'credit-card') {
        section.style.display = 'none';
    }
});
/**Form Validation */
// I found a example of form submit event at javasript.plainenglish 
//e.preventDefault DOM Dctiption By Example(RSVP Checkbox)
//isValid variable represent whether a form filed is valid.- 2-Regular Expression in JS(challenge)
//.trim() Sting Manipulation with JavaSript(Modification Methods)
//I found an example of how to Validate and they used .classList. I also looked up .classList @ w3schools.com
//I had trouble with 'name-hint'. I was trying just name element. Or querySeletALL. Until you see in index.html name-hint
//in Accessibility for Web Developers(Deliver Information Screen) hint- to provide instructions for the forms.
//email validate on stackflow exapmle. Notes 2-Regular Expressions in JS(Validating an Email)
//!emailValid !- logical Not operator. To check if the field is invalid.
//for activietieInput i copyed the same code from name/email input.
/**OMG this ws hard code */
//the zipField would't load until i moved it outside the if statement.
//was missing a few characters in the CVVRegex and the zipRegex.
//had a few missspelling in activities and CVV not cw....
//found an example of cc selected payment method at locastic.com/learnersbucket.com and a youtube vidio/how to create credit form(Web Dev Simplifed)
//cvvRegex, zipRegex, ccRegex , emailRegex stackoverflow/geeksforgeeks/w3resource
document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form');
const activiChecknoxes = document.querySelectorAll('input[type="checkbox"]');
var nameInput = document.getElementById('name');    
var emailInput = document.getElementById('email');
var activitiesInput = document.getElementById('activities');
var paymentMethods = document.getElementById('payment');
var ccNumberInput = document.getElementById('cc-num');
var zipInput = document.getElementById('zip');
var cvvInput = document.getElementById('cvv');


function activityFocusBlur() {


activiChecknoxes.forEach((checkbox) => {
    checkbox.addEventListener('focus', () => {
        checkbox.parentNode.classList.add('focus');
    });
    checkbox.addEventListener('blur', () => {
        checkbox.parentNode.classList.remove('focus');
    });
});

form.addEventListener('submit', e => {
    e.preventDefault();

const formField = [nameInput, emailInput, activitiesInput, ccNumberInput, zipInput, cvvInput];
const fieldsets = form.querySelectorAll('fieldset');
formField.forEach((field) => {
    const parentElement = field.parentElement;
    parentElement.classList.remove('valid');
    parentElement.classList.add('not-valid');
    parentElement.lastElementChild.style.display = "block";
});
fieldsets.forEach((fieldset) {
    fieldset.classList.remove('not-valid');
    fieldset.classList.add('valid');
    fieldset.lastElementChild.style.display = 'none';
});

    if (nameInput.value.trim() === '') {
        const parentElement = nameInput.parentElement;
        nameInput.classList.add('error-border');
        document.getElementById('name-hint').style.display = 'block';
    } else {
        nameInput.classList.remove('error-border');
        document.getElementById('name-hint').style.display = 'none';
    }

    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailValid.test(emailInput.value.trim())) {
      
       emailInput.classList.add('error-border');
       document.getElementById('email-hint').style.display = 'block';
    } else {
        emailInput.classList.remove('error-border');
        document.getElementById('email-hint').style.display = 'none';
    }

    var activitiesBox = document.getElementById('activities-box');
    var checkedActivities = activitiesBox.querySelectorAll('input[type="checkbox"]:checked');
    if(checkedActivities.length === 0) {
   
        activitiesInput.classList.add('error-border');
        document.getElementById('activities-hint').style.display = 'block';
    } else {
        activitiesInput.classList.remove('error-border');
        document.getElementById('activities-hint').style.display = 'none';
    }
    
    });
});
/**Accessibility */
//Relized needed to add the focus, blur and valid not valid into the DOMContentLoaded event. 
//found example of focus and blur in Unit 4,Callback Functions in JS(Using the Same Callback on Multiple Elements.)
// need to add .not-valid into form addEventListener... befor 


if(paymentMethods === 'credit-card') {
       
    var ccNumRegex = /^\d{13,16}$/;
    if(!ccNumRegex.test(ccNumber.value.trim())) {
        isValid = false;
        ccNumber.classList.add('error-border');
        document.getElementById('cc-hint').style.display = 'block';
    } else {
        ccNumber.classList.remove('error-border');
        document.getElementById('cc-hint').style.display = 'none';
    }

var zipRegex = /^\d{5}$/;
if (!zipRegex.test(zipField.value.trim())) {
    isValid = false;
    zipField.classList.add('error-border');
    document.getElementById('zip-hint').style.display = 'block';
} else {
    zipField.classList.remove('error-border');
    document.getElementById('zip-hint').style.display = 'none';
}

var cvvRegex = /^\d{3}$/;
if (!cvvRegex.test(cvvField.value.trim())) {
    isValid = false;
    cvvField.classList.add('error-border');
    document.getElementById('cvv-hint').style.display = 'block';
} else {
    cvvField.classList.remove('error-border');
    document.getElementById('cvv-hint').style.display = 'none';
}
}













