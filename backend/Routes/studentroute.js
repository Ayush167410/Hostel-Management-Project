const express = require("express");
const router = express.Router();
const StudentSchema = require("../models/studentReg");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = "Thisisahostelmanagementproject";
router.post(
  "/studentreg",
  [
    body("email", "Invalid Email").isEmail(),
    body("name", "Short name").isLength({ min: 5 }),
    body("password", "Short Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await StudentSchema.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        phonumber: req.body.phonumber,
        regnumber: req.body.regnumber,
        rollnum: req.body.rollnum,
        dept: req.body.dept,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        gender: req.body.gender,
        roomno: req.body.roomno,
        semester: req.body.semester,
        dob: req.body.dob,
        hostelno: req.body.hostelno,
      });
      res.json({ success: true });
      console.log("created");
    } catch (error) {
      console.log(error);
      // alert(error)
      // console.log("error happened");
      res.json({ success: false });
    }
  }
);
router.post(
  "/studentlogin",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Short Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let studentData = await StudentSchema.findOne({ email });
      if (!studentData) {
        return res
          .status(400)
          .json({ errors: "tr Logging with correct credential" });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        studentData.password
      );
      if (!pwdCompare) {
        return res.status(400).json({
          errors: "triy Logging with correct credential",
          pass: studentData.password,
          l: req.body.password,
        });
      }
      const data = {
        student: {
          id: studentData.id,
        },
      };
      const authToken = jwt.sign(data, jwtsecret);

      return res.json({
        success: true,
        authToken: authToken,
        studentData: studentData,
      });
    } catch (error) {
      console.log(error);
      // console.log("error happened");
      res.json({ success: false });
    }
  }
);
router.post(
  "/studentpage",
  async (req, res) => {
    let email = req.body.email;
    try {
      let studentData = await StudentSchema.findOne({ email }).select(
        "-password"
      );
      if (!studentData) {
        res.status(400).json({ errors: "Error displaying student data" });
      }

      console.log(studentData, "log from api");
      res.json(studentData);
    } catch (error) {
      res.send("Server Error", error.message);
    }
  }
);
module.exports = router;
