function initContacts(){
    captureContactSubmit();
}

function captureContactSubmit(){
    $(".contactForm").on("submit", function (e) {
        e.preventDefault();
        let inputs = $(this).serializeArray();
        for (const input of inputs) {
            if(input.value == ""){
                $(`input[name="${input.name}"]`).addClass("emptyInput");
                $(`span.emptyInputNoty[for="${input.name}"]`).show();
                setTimeout(() => {
                    $(`span.emptyInputNoty[for="${input.name}"]`).fadeOut("slow");
                    $(`input[name="${input.name}"]`).removeClass("emptyInput");
                }, 1000);
            }
        }
        console.log("Contact Inputs: ", inputs);
    });
}