import config from "./prod";
import {unlinkSync, existsSync} from "fs";

const entry: {[key: string]: string} = config.entry as any;

const files: string[] = Object.keys(entry)
    .filter((k) => entry[k].endsWith(".scss"))
    .map((k) => `./build/public/${k}.js`);

const rmWithWarning = (file: string) => {
    if (!existsSync(file)) {
        console.error(`Expected file ${file} doesn't exists`);
        return;
    }
    unlinkSync(file);
};

files.forEach((file) => {
    // remove js file
    rmWithWarning(file);
    rmWithWarning(`${file}.map`);
});
// for each file, delete js file if exists
