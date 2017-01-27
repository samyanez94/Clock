$(document).ready(function () {

    function displayTime() {

        //Creates the moment instance to UTC time
        let time = moment.utc();

        //Switches the active list item and adjustes time depending on the name in the list
        switch ($(".active").text()) {
        case "Caracas":
            time = moment.tz("America/Caracas");
            break;
        case "New York":
            time = moment.tz("America/New_York");
            break;
        case "Los Angeles":
            time = moment.tz("America/Los_Angeles");
            break;
        case "Tokyo":
            time = moment.tz("Asia/Tokyo");
            break;
        case "Beijing":
            time = moment.tz("Asia/Hong_Kong");
            break;
        case "Dubai":
            time = moment.tz("Asia/Dubai");
            break;
        case "Cairo":
            time = moment.tz("Africa/Cairo");
            break;
        case "Paris":
            time = moment.tz("Europe/Paris");
            break;
        case "Sao Paulo":
            time = moment.tz("America/Sao_Paulo");
            break;
        default:
        }

        //Displays a formatted version of time inside the clock division
        document.getElementById('clock').innerText = time.format("h:mm:ss A");
    }

    // Selects the button clicked and change its class to '.active'
    $("li").click( () => {
        // Removes the active class form the other list items
        $("li").removeClass("active");
        // Ads the active class to the clicked list item
        $(this).addClass("active");
    });

    // Runs the displayTime function the first time
    displayTime();

    // Runs the displayTime function every second.
    setInterval(displayTime, 500);
});
