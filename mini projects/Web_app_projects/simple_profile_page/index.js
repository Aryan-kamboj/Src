function overlay_active()
{
    document.querySelector("#overlay").classList.add("overlay_active");
    document.querySelector(".share_profile").classList.add("share_unhide");
}
function overlay_inactive(){
    document.querySelector(".share_profile").classList.remove("share_unhide");
    document.querySelector("#overlay").classList.remove("overlay_active");
}