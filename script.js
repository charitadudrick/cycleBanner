window.onload = initBannerLink;

var theAd = 0;
var adURL = new Array("https://www.etsy.com/shop/SpokenInSilences","https://www.sesamestreet.org/videos?filter=cookie-monster","https://www.facebook.com/ccbobcats/","https://www.utexas.edu/","https://www.spokeninsilences.com/bats.html","https://www.wcupa.edu/");
var adImages = new 
Array("images/cream1.png","images/cooke2.jpg","images/bcbat3.jpg","images/texas4.jpg","images/hype5.jpg","images/westchester6.png");

function rotate() {
theAd++;
if(theAd == adImages.length) {
theAd = 0;  
}
document.getElementById("adBanner").src = adImages[theAd];

setTimeout(rotate,3 * 1000);   

}

function initBannerLink() {
if(document.getElementById("adBanner").parentNode.tagName == "A") 
{
    document.getElementById("adBanner").parentNode.onclick = newLocation;

}

rotate();
}

function newLocation() {
document.location.href = adURL[theAd];

return false;
}


