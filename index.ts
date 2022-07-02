import  express  from "express";
import  multer  from "multer";
import { storage } from "./multerConfig";


const upload = multer({ storage: storage});
const app= express();

app.use("/assets/images", express.static("../Front-End/univesp-frontend/src/public/assets/images"));

app.post("/assets/images", upload.single("file"), (req, res) => {
    return res.json(req.file?.filename);
});

app.listen(3003);