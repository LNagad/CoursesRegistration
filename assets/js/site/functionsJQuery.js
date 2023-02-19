
function InputReset() {
    $("#name").val("").removeClass("border border-success").removeClass("border border-danger")
    $("#state").val("").removeClass("border border-success").removeClass("border border-danger")
    $("#city").val("").removeClass("border border-success").removeClass("border border-danger")
    $("#district").val("").removeClass("border border-success").removeClass("border border-danger")
    $("#street").val("").removeClass("border border-success").removeClass("border border-danger")
    $("#career").val("").removeClass("border border-success").removeClass("border border-danger")
}

function Validate() {
    const inputList = [$("#name"), $("#state"), $("#city"), $("#district"), $("#street"), $("#career")]
    let isValid = true

    inputList.forEach(element => {
        isValid = inputValidate(element, element.val(), isValid)
    })

    return isValid
}

function inputValidate(input, value, isValid) {

    if (value == "" || value == null || value == undefined) {

        $("#validationFeedback").show()
        input.addClass("border border-danger")
        input.removeClass("border border-success")
        return false;

    } else {

        $("#validationFeedback").hide()
        input.addClass("border border-success")
        input.removeClass("border border-danger")

        if (!isValid) {
            return false;
        }
        return true;
    }
}

function removeConfirmationCard() {
    $(".card")[0].remove()
    $("#tableContainer").remove()
}