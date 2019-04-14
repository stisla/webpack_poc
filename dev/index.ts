import "./load";

if ((module as any).hot) {
    (module as any).hot.accept("./load", () => {
        console.log("Updating Scss");
    })
}
