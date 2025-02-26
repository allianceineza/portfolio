import Contact from "../models/contactModal.js"
export const createContact=async(req,res)=>{
    try{
        const{name, email, subject, message, phone,status}=req.body;
       
        const newContact=new Contact({name,email,subject,message,phone,status});
        await newContact.save();
        console.log(newContact)

        res.status(201).json({ success:true, message: "contact created seccessfully", Contact:newContact});
    }catch(error){
        res.status(500).json({ success: false, message: "Server Error", error: error.message});
        
    }
}
export const getAllContact=async (req,res)=>{
    try{
const contacts= await Contact.find();
res.status(200).json({success:true,contacts})
    }
    catch(error){
res.status(200).json({ success: false, message: "Server Error", error: error.message});

    }
}
export const getContactById=async(req,res)=>{
try{
    const{id}=req.params;
const contacts=await Contact.findById(id);
if(!contacts){
    return res.status(400).json({ success:false, message:"contact not found"});
}
res.status(200).json({ success: true, contacts});
}
catch(error)
{
    res.stutas(500).json({success:false, message:"server Error", error: error.message});
}}


export const deleteContactById =async (req,res)=>{
    try{
        const{id}= req.params;
const contacts= await Contact.findByIdDelete(id);
if(!contacts){
res.status(404).json({ success:false, message:"can not found"});
}
res.status(200).json({ success: true, message:"deleted successfull"});
}
catch(error)
{
    res.stutas(500).json({success:false, message:"server Error", error: error.message});
}};

export const updateContactById=async(req,res)=>{
    try{
   const {id}=req.params;
   const updatedData= await Contact.findByIdAndUpdate(id,req.body);
   if(!updatedData){
  res.status(404).json({ success:false, message:"can not found"});
}
res.status(200).json({ success: true, message:"contact updated successfull"});
}

    catch(error){
        {
            res.status(500).json({success:false, message:"server Error", error: error.message});
        }};
    }

