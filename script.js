const output = document.getElementsByClassName("Input-label");
const url = document.getElementById("input");
const btn = document.getElementById("btn");

let geturl

btn.addEventListener("click", async () => {
    console.log(output)
    if (!url.value.trim()) return alert("Please enter webhook url.");
    if (!/^https:\/\/discord.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/.test(url.value.trim())) return alert("Please enter valid webhook url.");

    geturl = url.value.trim();
    url.value = ""

    await fetch(geturl, {
        method: 'DELETE',
    }).then(() => {
        return alert("Webhook has been successfully deleted!");
    }).catch(() => {
        return alert("Webhook not found! (Might Already be deleted)");
    });

}, false);