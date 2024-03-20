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
        $("#process-btn").css("display","none");
    });

    $("#cancel-btn").on("click", function() {
        $(".dish-container").slideToggle(500); // Ensure consistent animation duration
        $("#process-btn").css("display","flex"); // Show the process button again
    });
});
$(".new-product-status").on("change", async function(e) {
    const id = e.target.id;
    const ProductStatus = $(`#${id}.new-product-status`).val(); // Fixed string interpolation
    
    console.log("id:", id);
    console.log("productStatus:", ProductStatus);
    
    try {
        const response = await axios.post(`/admin/product/${id}`, { productStatus: ProductStatus }); // Fixed string interpolation
        console.log("response:", response);
        
        const result = response.data;
        if (result.data) {
            console.log("Product updated!");
            $(".new-product-status").blur();
        } else {
            alert("Product update error!");
        }
    } catch (err) { // Fixed error variable name
        console.log(err); // Fixed error variable name
        alert("Product update failed!");
    }
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