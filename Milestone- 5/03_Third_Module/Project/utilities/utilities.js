function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue;
    
}

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseFloat(value);
    return convertValue;
}

function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
}

