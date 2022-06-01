import Contact from "../models/ContactM.js";

export const createContact = async (req, res, next) => {
  try {
    const ContactData = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      message: req.body.message,
    };
    const newContact = new Contact(ContactData);

    await newContact.save();
    res.send(newContact);
  } catch (error) {
    next(error);
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    next(error);
  }
};

export const DeleteContact = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    await Contact.findByIdAndDelete(contactId);
    res.status(200).json({
      data: null,
      message: "contact has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
