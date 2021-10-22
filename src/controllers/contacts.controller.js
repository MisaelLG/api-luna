import Contacts from "../models/Contacts.js";

export const getContacts = async (req, res) => {
  const contacts = await Contacts.find();

  console.log(contacts);
  res.json(contacts);
};
export const createContacts = async (req, res) => {
  const { name, phone, email, location } = req.body;

  const imgURL = "http://192.168.43.178:8080/img/avatar/" + req.file.filename;

  const newContacts = new Contacts({ name, phone, email, location, imgURL });

  const contactsSaved = await newContacts.save();

  res.status(201).json(contactsSaved);
  console.log(contactsSaved);
};

export const getContactsById = async (req, res) => {
  const contact = await Contacts.findById(req.params.contactsId);
  res.status(200).json(contact);
};
export const updateContactsById = async (req, res) => {
  const updateContatc = await Contacts.findByIdAndUpdate(
    req.params.contactsId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateContatc);
};
export const deleteContactsById = async (req, res) => {
  const { contactsId } = req.params;
  await Contacts.findOneAndDelete(contactsId);
  res.status(204).json();
};
