import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: path.join("img/avatar"),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const uploadAvatar = multer({ storage });

export default uploadAvatar;
