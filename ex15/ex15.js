import fsn from "fs";
import path from "path";
import fs from "fs/promises";

const base = "C:\\Users\\jiya jain\\OneDrive\\Documents\\GitHub\\learn\\ex15"

let files = await fs.readdir(base)

for (const element of files) {
    let ext = element.split(".")[1]
    if (ext != "js" && ext != "json") {
        if (fsn.existsSync(path.join(base, ext))) {
                fs.rename(path.join(base, element), path.join(base, ext, element))
        }
        else {
            fs.mkdir(path.join(base, ext))
            fs.rename(path.join(base, element), path.join(base, ext, element), (err) => {
                if (err) throw err;
                console.log("File moved successfully.");
            })
        }
    }
}