import "./loadCss";

if ((module as any).hot) {
    (module as any).hot.accept("./loadCss", () => {
        console.log("Updating Scss");
    })
}
