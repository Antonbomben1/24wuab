let text = ""
function changeText() {
    document.getElementById("popup").innerHTML    = text;
}

document.getElementById("lasmer1").addEventListener("click", () => { 
    text = `Lindås Waves innebandyklubb grundades 1993 och är en framstående innebandyklubb baserad i Lindås, Sverige.
    Klubben har genom åren etablerat sig som en av de ledande klubbarna inom svensk innebandy och har haft framgång både på herr- och damsidan. 
    Lindås Waves har utvecklat många talangfulla spelare och har bidragit till sportens tillväxt och popularitet i regionen.`
    changeText();
});
document.getElementById("lasmer2").addEventListener("click", () => { 
    text = `Lindås waves herrlag har under de senaste åren varit en av de ledande klubbarna inom svensk innebandy. 
    Lindås Waves herrlag har dock en stark historia och har varit en av de mest framgångsrika klubbarna inom svensk innebandy.
    Damerna har också haft framgångar och har varit en av de ledande klubbarna inom svensk innebandy. Just nu spelar de i innebandyallsvenskan och jobbar sig upp mot högsta ligan SSL.`
    changeText();
});
document.getElementById("lasmer3").addEventListener("click", () => { 
    text = Image1;
    text += Image2;
    text += Image3;
    changeText();
});

Image1 = `<img src="img/Nordic-Welness.jpg" alt="Nordic-Welness logga" style="width: 25%; height: 25%; margin: 2%;">`
Image2 = `<img src="img/wallenstam.png" alt="wallenstam logga" style="width: 25%; height: 25%; margin: 2%;">`
Image3 = `<img src="img/421-logga.png" alt="421 logga" style="width: 25%; height: 25%; margin: 2%;">`


