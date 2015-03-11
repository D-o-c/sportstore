if (me === undefined || me.username != "admin") {
    console.log("QUESTO SONO IO: " + me);
    cancel("No authorization", 401);
}
