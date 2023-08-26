const express = require("express");
const router = express.Router();
const adminSchema = require("../models/AdminReg");
const studentSchema = require("../models/studentReg");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = "Thisisahostelmanagementproject";

router.post(
  "/adminreg",
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
      await adminSchema.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        phonumber: req.body.phonumber,
        dept: req.body.dept,
        fathername: req.body.fathername,
        gender: req.body.gender,
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
    "/adminlogin",
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
        let adminData = await adminSchema.findOne({ email });
        if (!adminData) {
          return res
            .status(400)
            .json({ errors: "tr Logging with correct credential" });
        }
        const pwdCompare = await bcrypt.compare(
          req.body.password,
          adminData.password
        );
        if (!pwdCompare) {
          return res
            .status(400)
            .json({
              errors: "triy Logging with correct credential",
              pass: adminData.password,
              l: req.body.password,
            });
        }
        console.log(adminData);
        // res.render(adminData);
        return res.json({ success: true });
      } catch (error) {
        console.log(error);
        // console.log("error happened");
        res.json({ success: false });
      }
    }
  );

  router.post(
    "/adminpage",
    async (req, res) => {
      let email = req.body.email;
      try {
        let adminData = await adminSchema.findOne({ email }).select(
          "-password"
        );
        if (!adminData) {
          res.status(400).json({ errors: "Error displaying student data" });
        }
        // console.log(adminData, "log from api");
        let hostelStudents = await studentSchema.find({hostelno:adminData.hostelno});
        res.send([adminData,hostelStudents]);
      } catch (error) {
        res.send("Server Error", error.message);
      }
    }
  );
module.exports = router;
