import * as Glob from "glob";

export const getFilenameFromPath = (path: string): string => {
    const parts = path.split("/");
    return parts[parts.length - 1];
};

export const getBagFromFilename = (filename: string): string => {
    const parts = filename.split(".");
    return parts.length === 3 ? parts[1] : "core";
};

export const getFileConfig = () => {
    const bag: {[key: string]: string[]} = {};
    const files = Glob.sync("./src/**/*.scss");
    return files.reduce(((previousValue, currentValue) => {
        const filename = getFilenameFromPath(currentValue);
        const bagName = getBagFromFilename(filename);
        if (!previousValue[bagName]) {
            previousValue[bagName] = [];
        }
        previousValue[getBagFromFilename(filename)].push(currentValue);
        return previousValue;
    }), bag);
};
