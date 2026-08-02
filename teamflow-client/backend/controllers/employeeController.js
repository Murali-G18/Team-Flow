import Employee from "../models/Employee.js";

export const registerRFID =
async (req,res) => {

  const {
    employeeId,
    rfidUid
  } = req.body;

  const employee =
  await Employee.findOne({
    employeeId
  });

  if(!employee){
    return res.status(404).json({
      message:"Employee not found"
    });
  }

  employee.rfidUid = rfidUid;

  await employee.save();

  res.json({
    message:
    "RFID Registered Successfully"
  });
};