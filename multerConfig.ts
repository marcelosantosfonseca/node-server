import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, path.resolve("../Front-End/univesp-frontend/src/public/assets/images"));
    },
    filename: (req, file, callback) => {
        const time = new Date().toISOString();

        callback(null, `${time}_${file.originalname}`);
    },
});