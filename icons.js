var icons = {};

// Get and call insertIcons()
function getIcons(){
    $.get("https://komakweb.duckdns.org/hshIcons.json",
        function (data, textStatus, jqXHR) {
            icons = data;
            insertIcons();
        }
    );
}

// Insert all the icons from the json file by iconClass
function insertIcons(){
    $(".iconHolderWrapper").empty();
    for (const iconKey in icons) {
        if (Object.hasOwnProperty.call(icons, iconKey)) {
            const icon = icons[iconKey];
            $(`i.hsh.${icon.iconClass}`).html(icon.svg);
        }
    }
}