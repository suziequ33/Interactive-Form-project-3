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
const titleOption = document.querySelectorAll('title option');
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
//i had trouble with i found the .replace in notes 2-Regular Expressions in JavaScript and also examples on stackoverflow.
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



