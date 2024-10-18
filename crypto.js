const api_key = "8bc61fc8c7a8a6850ae3968428c8fbd8fb4938bdc449f2ef6dbed4da15810ff5";

    const url = "https://min-api.cryptocompare.com/data";

    async function convertCurrency() {
      const sourceCurrency = document.getElementById("sourceCurrency").value;
      const targetCurrency = document.getElementById("targetCurrency").value;   

      const amount = document.getElementById("amount").value;   


      if (!amount || amount <= 0) {
        alert("Please enter a valid amount (greater than 0).");
        return;
      }

      try {
        const response = await fetch(`${url}/price?fsym=${sourceCurrency}&tsyms=${targetCurrency}&api_key=${api_key}`);
        const data = await response.json();

        if (data["Response"] === "Error") {
          alert(`Error: ${data["Message"]}`);
        } else {
          const conversionRate = data[targetCurrency];
          const convertedAmount = amount * conversionRate;
          result =  convertedAmount;
          const resultElement = document.getElementById("result");
resultElement.textContent 
            
 = `${amount} ${sourceCurrency} is equal to ${result} ${targetCurrency}`; //`${sourceCurrency} is equivalent to approximately ${convertedAmount.toFixed(4)} ${targetCurrency}.`;//
        }
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
        alert("An error occurred during conversion. Please try again later.");
      }
    }

    const convertButton = document.getElementById("convertButton");
 convertButton.addEventListener("click", convertCurrency);
  