
// all-section & transaction hidden
function allUnhide(hide){
    const allSectionForm =document.getElementById('AllDonatePart').classList.add('hidden')
    const HistoryInfo =document.getElementById('HistoryInfo').classList.add('hidden')
   
    const unhide =document.getElementById(hide).classList.remove('hidden')

}




//  work-02 money
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}

// balance add & out
function getTextFieldValueById(id){
const textValue = document.getElementById(id).innerText;
const textNumber =parseFloat(textValue);
return textNumber;

}


