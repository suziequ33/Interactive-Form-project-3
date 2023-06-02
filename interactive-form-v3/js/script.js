//console.log('test');
/*test to make sure script and index is working. */

/**Name Filed */

const nameFocus = document.getElementById('name');
nameFocus.focus();
/**Job Role */
const titleJob = document.getElementById('title'); 
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

titleJob.addEventListener('change', e => {
    if(titleJob.value ==='other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});
/**T-Shirt Info */
const shirtColor = document.getElementById('color');
const shirtDesign = document.getElementById('design');
//const colorChildren = shirtColor.children;
shirtColor.disabled = true;

shirtDesign.addEventListener('change', () => {
    const selectDesign = shirtDesign.value;

    shirtColor.selectedIndex = 0;

    for(let i = 1; i < shirtColor.options.length; i++) {
        const option = shirtColor.options[i];
        const theme = option.getAttribute('data-theme');

        if(theme === selectDesign) {
           option.style.display = 'block';
    } else {
        option.style.display = 'none';
    }
}
    shirtColor.disabled = selectDesign === '';

    if (!shirtColor.disabled) {
      let visibleOptIndex = -1;
    for(let i = 1; i < shirtColor.options.length; i++) {
        const currentOption = shirtColor.options[i];

        if(currentOption.style.display !== 'none') {
            visibleOptIndex = i;
            break;
        }
    }
    if (visibleOptIndex > -1) {
        shirtColor.selectedIndex = visibleOptIndex;
    }
    }
});
/**Register for Activites */
const activitiesFieldset = document.getElementById('activities');
const checkBox = activitiesFieldset.querySelectorAll('input[type="checkbox"]');
const totalCostElem = document.getElementById('activities-cost');

activitiesFieldset.addEventListener('change', event => {
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
const payMethod = document.getElementById('payment');
const creditCardSection = document.getElementById('credit-card');
const paypalSecetion = document.getElementById('paypal');
const bitcoinSectionn = document.getElementById('bitcoin');

payMethod.value = 'credit-card';

paypalSecetion.style.display = 'none';
bitcoinSectionn.style.display = 'none';

payMethod.addEventListener('change', e => {
    const selectPayment = payMethod.value;

    creditCardSection.style.display = 'none';
    paypalSecetion.style.display = 'none';
    bitcoinSectionn.style.display = 'none';

    if (selectPayment === 'credit-card') {
        creditCardSection.style.display = 'block';
    } else if (selectPayment === 'paypal') {
        paypalSecetion.style.display = 'block';
    } else if (selectPayment === 'bitcoin') {
        bitcoinSectionn.style.display = 'block';
    }
});
creditCardSection.style.display = 'block'
paypalSecetion.style.display = 'none';
bitcoinSectionn.style.display = 'none';

/**Form Validation */
const form = document.querySelector('form');
const nameInput = document.getElementById('name');    
const nameHint = nameInput.parentElement.lastElementChild;
const emailInput = document.getElementById('email');
const emailHint = document.getElementById('email-hint');
const activitiesInput = document.querySelector('.activities');
const paymentMethods = document.getElementById('payment');
const ccNumberInput = document.getElementById('cc-num');
const ccHint = document.getElementById('cc-hint');
const zipInput = document.getElementById('zip');
const zipHint = document.getElementById('zip-hint');
const cvvInput = document.getElementById('cvv');
const cvvHint = document.getElementById('cvv-hint');
const activitiesCheckboxes = document.querySelectorAll('.activities input[type="checkbox"]');

//show the name hint on focus and hide it on blur
function addFoucsBlurEvents(inputElement, hintElement) {
    inputElement.addEventListener('focus', () => {
        hintElement.style.display = 'block';
    });
    inputElement.addEventListener('blur', () => {
        if (inputElement.value.trim() === '') {
        hintElement.style.display = 'none';
        }
        //console.log('blur event triggered for input: ${inputElement.id}');
    });
}

addFoucsBlurEvents(nameInput, nameHint);
addFoucsBlurEvents(emailInput, emailHint);
addFoucsBlurEvents(ccNumberInput, ccHint);
addFoucsBlurEvents(zipInput, zipHint);
addFoucsBlurEvents(cvvInput, cvvHint);

//adds focus and blur eventListeners to activity checkboxes
activitiesCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('focus', e => {
        e.target.parentElement.classList.add('focus');
    });

    checkbox.addEventListener('blur', e => {
        const parentLabel = e.target.parentElement;
        const focusLable = document.querySelector('.focus');
        if (focusLable === parentLabel) {
        parentLabel.classList.remove('focus');
        }
    });
});

//validate name field
form.addEventListener('submit', e => {

    if(nameInput.value.trim() === '') {
        e.preventDefault();
        nameInput.parentElement.classList.add('not-valid');
        nameInput.parentElement.classList.remove('valid');
        nameHint.style.display = 'block';
    } else {
        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
        nameHint.style.display = 'none';
    }

    //Validate email field
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailValid.test(emailInput.value.trim())) {
        e.preventDefault();
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        emailHint.style.display = 'block';
    } else {
        emailInput.parentElement.classList.add('valid');
        emailInput.parentElement.classList.remove('not-valid');
        emailHint.style.display = 'none';
    }
    
    //Validate activities field
    const activitiesChecked = activitiesInput.querySelectorAll('input[type="checkbox"]:checked');
    if(activitiesChecked.length === 0) {
        e.preventDefault();
        activitiesInput.classList.add('not-valid');
        activitiesInput.classList.remove('valid');
        activitiesInput.lastElementChild.style.display = 'block';
    } else {
        activitiesInput.classList.add('valid');
        activitiesInput.classList.remove('not-valid');
        activitiesInput.lastElementChild.style.display = 'none';
    }
 
    //Validate credit card fields IF payment is credit card
    if(paymentMethods.value === 'credit-card') {
        const ccNumRegex = /^\d{13,16}$/;
        if(!ccNumRegex.test(ccNumberInput.value.trim())) {
            e.preventDefault();
           ccNumberInput.parentElement.classList.add('not-valid');
            ccNumberInput.parentElement.classList.remove('valid');
           ccHint.style.display = 'block';
        } else {
           ccNumberInput.parentElement.classList.add('valid');
            ccNumberInput.parentElement.classList.remove('not-valid');
           ccHint.style.display = "none";
        }
    
    //Validate zip code field 
    const zipRegex =  /^\d{5}$/;
    if (!zipRegex.test(zipInput.value.trim())) {
       e.preventDefault();
        zipInput.parentElement.classList.add('not-valid');
        zipInput.parentElement.classList.remove('valid');
        zipHint.style.display = 'block';
    } else {
        zipInput.parentElement.classList.add('valid');
        zipInput.parentElement.classList.remove('not-valid');
        zipHint.style.display = 'none'; 
    }

    //Validate credit card CVV field
  
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvvInput.value.trim())) {
        e.preventDefault();
        cvvInput.parentElement.classList.add('not-valid');
        cvvInput.parentElement.classList.remove('valid');
        cvvHint.style.display = 'block';
    } else {
        cvvInput.parentElement.classList.add('valid');
        cvvInput.parentElement.classList.remove('not-valid');
        cvvHint.style.display = 'none'; 
    }
    }      
    });
   

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
/**T-Shirt Info */
/*found code example for disabled element at w3schools.com */
/*took me awhile to get children elements for color but i found an exampleat developer.mozilla. */
/* haad trubble with the funcion it kept saying cannot read properites value or removeAttributeis not a funciton. Relized i needed to more the getAttribute inot the funcion to work.
/*Found that example developer.mozilla/<select.:The HTML Select element. this is where i found most of the code example for this funcion.  */
/*the mozilla/select element is where i found and used setAttribute/removeAttribute*/
/*console kept telling me that removeAttribute still wasnt doing what i needed it to unil i rememberd we used the [i] for referencesto a collection of elements children.
notes DOM Scription my examble./filter invitess who have not responded.took a few trys to find where to put them. 
I submitted form and it needed more work. 
relized you have to code this 2x.  
the firs block updates the visibility of the color options based on the selected design.
And the second code block ensures that when the user selects a design, the shirtColor dropdown is updated to show the first available color option associated with that design.
I found examples of selectedIndex at developer.mozilla and w3schools.com. 
the value -1 is used as a default value for 'visibleOptIndex' to indicate that no visible option has been found yet. if a visible option is found
during the loop, its index is assigned to 'visibleOptIndex and later if visibleOptIndex is greater than -1 the corresponding option is selected. */

/**Register for Activites */
//selet the fieldset element
//get the name chaeckbox within fieldset element
// gets the total cost of element in activites-cost
//found example for parseInt in StingManipulation with JavaScript to turn the string into a number value.
//i had trouble with i found the .replace in notes 2-Regular Expressions in JavaScript(Flags) and also examples on stackoverflow.
//update the total cost .

/**Payment infor*/
//get the payment method dropdown 'payment'
//gets all the payment sections. example of selectorAll in JavaScript and the DOM.also on mdn web docs
//.forEach loop checks each payment section and hides then by setting display property to 'none'.
//sectionPayment shows the selected payment sections. 
//the last .forEach loop hides all payment except for credit-card on page load.
//I found example of this .forEach loop on w3school.com

/**Form Validation */
// I found a example of form submit event at javasript.plainenglish 
//e.preventDefault DOM Dctiption By Example(RSVP Checkbox)
//.trim() Sting Manipulation with JavaSript(Modification Methods)
//I found an example of how to Validate and they used .classList. I also looked up .classList @ w3schools.com
//email validate on stackflow exapmle. Notes 2-Regular Expressions in JS(Validating an Email)
//!emailValid !- logical Not operator. To check if the field is invalid.
//for activietieInput i copyed the same code from name/email input.
/**OMG this was hard code */
//was missing a few characters in the CVVRegex and the zipRegex.
//had a few missspelling in activities and CVV not cw....
//found an example of cc selected payment method at locastic.com/learnersbucket.com and a youtube vidio/how to create credit form(Web Dev Simplifed)
//cvvRegex, zipRegex, ccRegex , emailRegex stackoverflow/geeksforgeeks/w3resource

/**Accessibility */
//found example of focus and blur in Unit 4,Callback Functions in JS(Using the Same Callback on Multiple Elements.)
// can i give up??
//example of display form validation hint with form elements at stackoverflow.
//lastElementChild property at eveloper.mozilla element: lastElementChild propety.
//valid, not-valid 2-Redular Expressions in JS. 
//had trouble with activititesInput kept saying it waws not a function. Until i first got the checkbox with 
//activitiesInput then added all checked chackboxes into activitiesCecked. 
//forgot to add the hint , i dont even know if i did this right.

/**Peer Review */
//peer reviewed... Jamie Reardon found lots wrong..lol 
//the color field was enabled... needed to disabled this on load. // 
//I took shirtColor.disabled = true; outside of the eventListener and said it was true not false. then inside eventListener ir was false.
// I also need to rework the payment infor. I didnt have credit card selected by default.
//I first get paypall and bitcoin separately. Then have credit-card show and not paypal/bitcoin.
//then when clicked it would show and the others would hide .
//on blur had some trouble. NO lots of problems...
//Jamie said the hint elements showed on blur for invalid fields and also show even on valid fields.
//I kinda didn;t know what he was talking about(dont tell him that). so i googled exactly what he said.
//I found a couple of example of blur fields at stackoverflow and w3school. And i found someone using trim()
//I thought i ccould do the same thing for blur as i did in the zip/ccnumber/cvv fields and check if the input value is empty  with trim()
//I still dont know if it truly worked...
