// const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_JEX0gejioqLQTdK91fwH17u8Dl2me5zyImKnSeSL&base_currency=USD";


const populate = async(value,currency) =>{
  let str = ""
  const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_JEX0gejioqLQTdK91fwH17u8Dl2me5zyImKnSeSL&base_currency=" + currency;

  let response = await fetch(URL);
  let responsejson = await response.json();
  console.log(responsejson);
  let output = document.querySelector(".output").style.display = "flex";
  console.log(output);
  for(let key of Object.keys(responsejson["data"])){
    str += `
    <tr>
              <td>${key}</td>
              <td>${responsejson["data"][key]["code"]}</td>
              <td>${responsejson["data"][key]["value"]*value}</td>
            </tr>`
    // key,(responsejson["data"])[key]["code"],(responsejson["data"])[key]["value"]
  }
  const tablebody = document.querySelector("tbody");
 console.log(tablebody);

 tablebody.innerHTML = str;
 
}



const button = document.querySelector(".btn");
console.log(button);
button.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log("button was clicked");
  const value = parseInt(document.querySelector("input[name = 'quantity']").value);
  console.log(value);
  const currency = document.querySelector("select[name = 'currency']").value;
  console.log(currency);
  populate(value,currency);
})


