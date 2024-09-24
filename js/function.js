
// all-section & transaction hidden
function allUnhide(hide){
    const transactionsHistory =document.getElementById('HistoryInfo').classList.add('hidden')
    const allSectionForm =document.getElementById('all-section-form').classList.add('hidden')

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


