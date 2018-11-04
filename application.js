//opdracht 1

const button = document.getElementById('submit');
button.addEventListener('click', clickEventHandler);

function clickEventHandler() {
    let number = document.getElementById('displayNumber').innerHTML;
    number++;
    if(number < 10) {
        document.getElementById('displayNumber').innerHTML = number;
    }
    else if(number == 10) {
        document.getElementById('displayNumber').innerHTML = number;
        document.getElementById('submit').style.height = "20px";
        document.getElementById('submit').style.width = "30px";
        document.getElementById('submit').style.fontSize = "x-small";
    }
    else if(number < 20) {
        document.getElementById('displayNumber').innerHTML = number;
    }
    else if(number == 20) {
        document.getElementById('displayNumber').innerHTML = number;
        document.getElementById('submit').style.height = "10px";
        document.getElementById('submit').style.width = "15px";
        document.getElementById('submit').innerHTML = '';
    }
    else if(number > 20) {
        document.getElementById('displayNumber').innerHTML = number;
    }

    else {
        document.getElementById('displayNumber').innerHTML = 'Er ging iets fout.';
    }
}

//------------------------------------------------------------------

//opdracht 2

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', clickEventExecuter);

let i = 1;

function clickEventExecuter(event) {
    event.preventDefault();
    let productInput = document.getElementById('productInput').value;
    if (productInput && productInput.length >= 1)
      {       
          var firstChar = productInput.charAt(0);
          var remainingStr = productInput.slice(1);
          productInput = firstChar.toUpperCase() + remainingStr;
      }
    let priceInput = document.getElementById('priceInput').value;
    if(isNaN(priceInput)){
        priceInput = priceInput.replace(/,/g, '.');
    }
    let totalPrice = document.getElementById('totalPrice').innerHTML;
    totalPrice = Number(totalPrice);

    if (productInput == '' && priceInput == '') {
        document.getElementById('alertWarning').innerHTML = 'Melding: vul uw product en prijs in.';
    } else if (priceInput == '') {
        document.getElementById('alertWarning').innerHTML = 'Melding: vul uw prijs in.';
    } else if (productInput == '') {
        document.getElementById('alertWarning').innerHTML = 'Melding: vul uw product in.';
    } else if (isNaN(priceInput)) {
        document.getElementById('alertWarning').innerHTML = 'Melding: vul uw prijs in.'; 
    } else {
        
        priceInput = Number(priceInput).toFixed(2);
        document.getElementById('alertWarning').innerHTML = '';
        const tr = document.createElement("tr");
        tr.setAttribute("id", `row${i}`);
        const product = document.createElement("td");
        const price = document.createElement("td");
        price.setAttribute("id", `price${i}`);
        price.setAttribute("class", "totalPrice");
        const deletion = document.createElement("td");
        deletion.setAttribute("id", `deletion${i}`);
        const tbody = document.getElementById("tbody");
        product.innerHTML = productInput;
        price.innerHTML = priceInput;
        deletion.innerHTML = `<a href="javascript:deletion(${i})">Verwijder</a>`;
        tr.appendChild(product);
        tr.appendChild(price);
        tr.appendChild(deletion);
        tbody.appendChild(tr);

        let result = parseFloat(totalPrice) + parseFloat(priceInput);
        result = result.toFixed(2);
        document.getElementById('totalPrice').innerHTML = result;

        i++;
    }
}

function deletion(number) {
    let deletionRow = "row" + number;
    let totalPrice = document.getElementById('totalPrice').innerHTML;
    totalPrice = Number(totalPrice);
    let deletePrice = document.getElementById(`price${number}`).innerHTML;
    deletePrice = Number(deletePrice);
    let result = parseFloat(totalPrice) - parseFloat(deletePrice);
    result = result.toFixed(2);
    document.getElementById('totalPrice').innerHTML = result;
    document.getElementById(deletionRow).remove();

}