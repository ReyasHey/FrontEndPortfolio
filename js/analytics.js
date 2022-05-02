function hidePopup () {
    document.getElementById("cookies-Popup").style.display = "none";
}

function changeScene (which) {
    if (which == 1) {       // Show cookie policy div
        document.getElementById("cookiesForm").style.display = "none";
        document.getElementById("cookiePolicy").style.display = "block";
    } else {                // Show default cookie popup
        document.getElementById("cookiesForm").style.display = "block";
        document.getElementById("cookiePolicy").style.display = "none";
    }
}

function acceptCookies () {
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
    });
}

function denyCookies () {
    gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
    });
}
