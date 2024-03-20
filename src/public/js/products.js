console.log("Products frontend javascript file");
$(function() {
    $(".product-collection").on("change", function() {
        const selectedValue = $(this).val(); // Use $(this) instead of $(".product-collection")
        if (selectedValue === "DRINK") {
            $("#product-collection").hide();
            $("#product-volume").show();
        } else {
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    });

    $("#process-btn").on("click", function() {
        $(".dish-container").slideToggle(500);
        $(this).hide(); // Hide the button after toggling the .dish-container
    });

    $("#cancel-btn").on("click", function() {
        $(".dish-container").slideToggle(500); // Ensure consistent animation duration
        $("#process-btn").show(); // Show the process button again
    });
});

function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productStatus = $(".product-status").val();
    const productDesc = $(".product-desc").val();

    if (productName === "" || productPrice === "" 
    || productLeftCount === "" 
    || productCollection === "" 
    || productStatus === "" 
    || productDesc === "") {
        alert("Please insert all required inputs");
        return false;
    } 
    else return true; 
}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input this:", input);
    console.log("imgClassName:", imgClassName);

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file.type;
    const validImageType = ["image/jpeg", "image/jpg", "image/png"];
    if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg, and png files");
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}