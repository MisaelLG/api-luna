import Order from '../models/Order.js'


 export const createOrder = async (req, res) => {
    

     const {nameid} = req.body

     const docURL =('http://204.93.167.112:8080/docupload/') + req.file.path;

     console.log(req.file.path);

     const newDoc = new Order({nameid, docURL}); 

     const docSaved = await newDoc.save()

     res.status(201).json(docSaved)
     console.log(docSaved);

 }



export const deleteContactsById =  async (req, res) => {

    const {contactsId} = req.params;
    await Order.findOneAndDelete(contactsId)
    res.status(204).json();
}
