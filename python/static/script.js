function toggleShowMore() {
    var moreContent = document.getElementById("more-content");
    var showMoreButton = document.getElementById("show-more-button");

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        showMoreButton.value = "Show Less"
    } else {
        moreContent.style.display = "none";
        showMoreButton.value = "Show More"
    }
}