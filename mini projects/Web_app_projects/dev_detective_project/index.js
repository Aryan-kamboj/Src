let username = document.getElementById("search_field");

let profile_picture = document.getElementById("profile_picture");
let real_name = document.getElementById("name");
let profile_link = document.getElementById("profile_link")
let date_joined = document.getElementById("date_joined");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let loc = document.getElementById("location");
let personal_site = document.getElementById("personal_site");
let twitter = document.getElementById("twitter");
let company = document.getElementById("company");

let light_dark = document.getElementById("light_dark");
let dark_mode = true;
let root_css = document.querySelector(":root");

function mode_switch(){
    if(dark_mode)
    {
        dark_mode=!dark_mode;
        light_dark.innerHTML='LIGHT <i class="fa-solid fa-sun"></i>';
        root_css.style.setProperty('--text-color', 'white');
        root_css.style.setProperty("--wrapper-bg-color","rgb(20, 29, 48)");
        root_css.style.setProperty("--text-color-black-white","white");
        root_css.style.setProperty("--main-bg-color","rgb(29, 42, 71)")
        root_css.style.setProperty("--profile-stats-color"," rgb(20, 29, 47)");
    }
    else{
        dark_mode=!dark_mode;
        light_dark.innerHTML='DARK <i class="fa-solid fa-moon"></i>';
        root_css.style.setProperty('--text-color', 'rgb(76, 106, 155)');
        root_css.style.setProperty("--wrapper-bg-color","#f6f8ff");
        root_css.style.setProperty("--text-color-black-white","black");
        root_css.style.setProperty("--main-bg-color","white");
        root_css.style.setProperty("--profile-stats-color","  rgb(244,246,253)")



    }
}
function get_user_data(u_name){
    fetch("https://api.github.com/users/"+u_name)
        .then((response)=>response.json())
        .then((data)=>
        {
            console.log(data)
            render_data(data);
        })
}
async function render_data(u_info)
{
    profile_picture.src=u_info.avatar_url;
    real_name.innerText = u_info.name === null ? u_info.login : u_info.name;// this ternary operator is used in sitiuatios where we want to protect our ui from breaking
    profile_link.innerText=`@${u_info.login}`
    profile_link.href=u_info.html_url;
    bio.innerText=u_info.bio === null ? "This profile has no bio.":u_info.bio;
    repos.innerText = u_info.public_repos;
    followers.innerText = u_info.followers;
    following.innerText = u_info.following;
    loc.innerText = u_info.location === null ? "Not Available":u_info.location;
    personal_site.innerText = u_info.blog === "" ? "Not Available":u_info.blog; 
    twitter.innerText =u_info.twitter_username === null ? "Not Available":u_info.twitter_username;
    company.innerText = u_info.company === null ? "Not Available":u_info.company;
}
async function search(){
    get_user_data(username.value);
}
username.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    {
        get_user_data(username.value);
    }
},false);
// {
//     "login": "Aryan-kamboj",
//     "id": 90714196,
//     "node_id": "MDQ6VXNlcjkwNzE0MTk2",
//     "avatar_url": "https://avatars.githubusercontent.com/u/90714196?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Aryan-kamboj",
//     "html_url": "https://github.com/Aryan-kamboj",
//     "followers_url": "https://api.github.com/users/Aryan-kamboj/followers",
//     "following_url": "https://api.github.com/users/Aryan-kamboj/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Aryan-kamboj/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Aryan-kamboj/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Aryan-kamboj/subscriptions",
//     "organizations_url": "https://api.github.com/users/Aryan-kamboj/orgs",
//     "repos_url": "https://api.github.com/users/Aryan-kamboj/repos",
//     "events_url": "https://api.github.com/users/Aryan-kamboj/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Aryan-kamboj/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 13,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 5,
//     "created_at": "2021-09-14T16:30:56Z",
//     "updated_at": "2023-03-31T06:07:42Z"
// }
