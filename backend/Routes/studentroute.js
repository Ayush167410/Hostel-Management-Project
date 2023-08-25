const express = require("express");
const router = express.Router();
const StudentSchema = require("../models/studentReg");
const { body, validationResult } = require("express-validator");

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
    try {
      await StudentSchema.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
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
        if (!(req.body.password === studentData.password)) {
          return res
            .status(400)
            .json({
              errors: "triy Logging with correct credential",
              pass: studentData.password,
              l: req.body.password,
            });
        }
        console.log(studentData);
        // res.render(studentData);
        return res.json({ success: true });
      } catch (error) {
        console.log(error);
        // console.log("error happened");
        res.json({ success: false });
      }
    }
  );
module.exports = router;
