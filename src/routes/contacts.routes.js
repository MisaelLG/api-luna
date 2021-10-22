import { Router } from "express";
const router = Router();

import * as contactsCtrl from "../controllers/contacts.controller.js";
import uploadAvatar from "../helpers/uploadAvatar.js";

router.post("/", uploadAvatar.single("avatar"), contactsCtrl.createContacts);

router.get("/", contactsCtrl.getContacts);

router.get("/:contactsId", contactsCtrl.getContactsById);

router.put("/:contactsId", contactsCtrl.updateContactsById);

router.delete("/:contactsId", contactsCtrl.deleteContactsById);

export default router;
