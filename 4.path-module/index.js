const path = require("path");

const directoryName = path.dirname(__filename);
console.log("Directory name:", directoryName);

const fileName = path.basename(__filename);
console.log("File name:", fileName);

const fileExtension = path.extname(__filename);
console.log("Extension name:", fileExtension);

const joinedPath = path.join("/users", "tables", "address");
console.log("Joined path:", joinedPath);

const resolvePath = path.resolve("users", "tables", "address");
console.log("Reslove path:", resolvePath);

const normalizPath = path.normalize("/users/.documents/../node/actions");
console.log("Normalize path:", normalizPath);
