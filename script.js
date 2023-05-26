let baseUrl = "https://api.adviceslip.com/advice",
adviceNum = document.getElementById("adviceNum"),
getAdvice = document.getElementById("getAdvice"),
adviceQuote = document.getElementById("adviceQuote");

const generateAdvice = async () => {
    try {
        const response = await fetch(baseUrl);
        let adviceJson = await response.json();
        adviceQuote.innerText = `"${adviceJson.slip.advice}"`;
        // console.log(adviceJson);
        adviceNum.innerText = `ADVICE #${adviceJson.slip.id}`;
    } catch (error) {
        console.log(error);
    };
}

getAdvice.addEventListener("click", generateAdvice);
window.addEventListener("load", generateAdvice);