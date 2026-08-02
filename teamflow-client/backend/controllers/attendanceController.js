import Attendance from "../models/Attendance.js";
import User from "../models/User.js";
import Employee from "../models/Employee.js";

export const getEmployees = async (
  req,
  res
) => {
  try {
    const employees =
      await Employee.find()
        .sort({ createdAt: -1 });

    res.json(employees);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteEmployee = async (
  req,
  res
) => {
  try {
    const employee =
      await Employee.findByIdAndDelete(
        req.params.id
      );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json({
      message:
        "Employee deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const registerEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      department,
      role,
      rfidUid,
    } = req.body;

    console.log("RFID Registration:", req.body);

    if (!name || !rfidUid) {
      return res.status(400).json({
        message: "Name and RFID UID are required",
      });
    }

    const existingEmployee =
      await Employee.findOne({
        rfidUid,
      });

    if (existingEmployee) {
      return res.status(400).json({
        message: "RFID card already assigned",
      });
    }

    const employee =
      await Employee.create({
        name,
        email,
        department,
        role,
        rfidUid,
      });

    res.status(201).json({
      message: "Employee RFID Registered",
      employee,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

// =============================
// Register RFID Card To User
// =============================
export const registerRFID = async (
  req,
  res
) => {
  try {
    const {
      userId,
      rfidUid,
    } = req.body;

    const user =
      await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.rfidUid = rfidUid;

    await user.save();

    res.json({
      message:
        "RFID Registered Successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// =============================
// Scan RFID & Mark Attendance
// =============================
export const scanRFID = async (
  req,
  res
) => {
  try {
    const { rfidUid } = req.body;

    const user =
      await User.findOne({
        rfidUid,
      });

    if (!user) {
      return res.status(404).json({
        message: "Unknown RFID Card",
      });
    }

    const today = new Date()
      .toISOString()
      .split("T")[0];

    const alreadyMarked =
      await Attendance.findOne({
        employee: user._id,
        date: today,
      });

    if (alreadyMarked) {
      return res.json({
        message:
          "Attendance already marked",
        attendance:
          alreadyMarked,
      });
    }

    const now = new Date();

    let status = "Present";

    const hour =
      now.getHours();

    const minute =
      now.getMinutes();

    if (
      hour > 9 ||
      (hour === 9 &&
        minute > 15)
    ) {
      status = "Late";
    }

    const attendance =
      await Attendance.create({
        employee: user._id,
        date: today,
        checkIn: now,
        status,
      });

    res.status(201).json({
      message:
        "Attendance Marked",
      employee: user.name,
      status,
      attendance,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// =============================
// Attendance Dashboard Stats
// =============================
export const getAttendanceStats =
  async (req, res) => {
    try {
      const today = new Date()
        .toISOString()
        .split("T")[0];

      const present =
        await Attendance.countDocuments(
          {
            date: today,
            status: "Present",
          }
        );

      const late =
        await Attendance.countDocuments(
          {
            date: today,
            status: "Late",
          }
        );

      const total =
        await User.countDocuments();

      const absent =
        total -
        (present + late);

      res.json({
        total,
        present,
        late,
        absent,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

// =============================
// Today's Attendance
// =============================
export const getTodayAttendance =
  async (req, res) => {
    try {
      const today = new Date()
        .toISOString()
        .split("T")[0];

      const attendance =
        await Attendance.find({
          date: today,
        }).populate(
          "employee",
          "name email role"
        );

      res.json(attendance);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

// =============================
// Attendance History
// =============================
export const getAttendanceHistory =
  async (req, res) => {
    try {
      const history =
        await Attendance.find()
          .populate(
            "employee",
            "name email role"
          )
          .sort({
            createdAt: -1,
          });

      res.json(history);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };