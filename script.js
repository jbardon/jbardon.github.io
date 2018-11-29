(function IIFE() {
    function showCryptedLink(event) {
        event.preventDefault();

        const cryptedLink1 = [89, 109, 70, 121, 98, 87, 70, 112, 98, 50, 48, 61];
        const cryptedLink2 = [90, 71, 57, 117, 90, 87, 49, 53];
        const cryptedLink3 = [97, 109, 86, 121, 77, 85, 66, 110, 98, 67, 53, 106];

        let allBytes = [cryptedLink1[0], cryptedLink1[1], cryptedLink1[2], cryptedLink1[3]];
        allBytes = allBytes.concat([cryptedLink2[0], cryptedLink2[1], cryptedLink2[2], cryptedLink2[3]]);
        allBytes = allBytes.concat([cryptedLink3[0], cryptedLink3[1], cryptedLink3[2], cryptedLink3[3]]);
        allBytes = allBytes.concat([cryptedLink2[4], cryptedLink2[5], cryptedLink2[6], cryptedLink2[7]]);
        allBytes = allBytes.concat([cryptedLink3[4], cryptedLink3[5], cryptedLink3[6], cryptedLink3[7]]);
        allBytes = allBytes.concat([cryptedLink1[4], cryptedLink1[5], cryptedLink1[6], cryptedLink1[7]]);
        allBytes = allBytes.concat([cryptedLink3[8], cryptedLink3[9], cryptedLink3[10], cryptedLink3[11]]);
        allBytes = allBytes.concat([cryptedLink1[8], cryptedLink1[9], cryptedLink1[10], cryptedLink1[11]]);
        allBytes = String.fromCharCode.apply(String, allBytes);

        let place = document.getElementById('secretPlace');
        place.textContent = atob(allBytes);
        // place.select();
        // document.execCommand('copy');
        return false;
    }

    let link = document.getElementById('secretLink');
    link.addEventListener('click', showCryptedLink, false);
})();