const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const config = require('config');
// https://github.com/express-validator/express-validator
// DOCUMENTATION: https://express-validator.github.io/docs/
const {check, validationResult} = require('express-validator/check')

const Program = require('../../models/Program')
const User = require('../../models/User');


// router.get('/test', (req, res) => res.send('Program Route'));


// @route    POST api/program
// @desc     Create or update program
// @access   Private
router.post('/addprogram', 
  [
    auth,
      [
        check('name', 'Program name is required')
          .not()
          .isEmpty(),
        check('department', 'Program department is required')
          .not()
          .isEmpty()
      ]
  ],
  
  async (req, res) => {
    // console.log(req.body)
    console.log("post program route")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log("Before Const set up")


    const { 
      name,
      department,
      acceptReferrals,
      descriptionOfProgram,
      coreServicesOffered,
      populationServed,
      eligibilityRequirements,
      locationOfProgram,
      servicesOnlyOfferedAtProgramSite,
      contactPerson,
      email,
      phonenumber,
      altProgramName,
      location,
      clientAge,
      inSchool,
      veteran,
      interestedInTraining,
      interestedAfterSchoolPrograms,
      interestedInCriminalServices,
      interestedInCompletingDiploma,
      programHours 
    } = req.body;

    // Build profile object
    const programFields = {};
    // programFields.user = req.user.id;
    if (name) programFields.name = name;
    if (department) programFields.department = department;
    if (acceptReferrals) programFields.acceptReferrals = acceptReferrals;
    if (descriptionOfProgram) programFields.descriptionOfProgram = descriptionOfProgram;
    if (coreServicesOffered) programFields.coreServicesOffered = coreServicesOffered;
    if (populationServed) programFields.populationServed = populationServed;
    if (eligibilityRequirements) programFields.eligibilityRequirements = eligibilityRequirements;
    if (locationOfProgram) programFields.locationOfProgram = locationOfProgram;
    if (servicesOnlyOfferedAtProgramSite) programFields.servicesOnlyOfferedAtProgramSite = servicesOnlyOfferedAtProgramSite;
    if (contactPerson) programFields.contactPerson = contactPerson;
    if (email) programFields.email = email;
    if (phonenumber) programFields.phonenumber = phonenumber;
    if (altProgramName) programFields.altProgramName = altProgramName;
    if (location) programFields.location = location;
    if (clientAge) programFields.clientAge = clientAge;
    if (inSchool) programFields.inSchool = inSchool;
    if (veteran) programFields.veteran = veteran;
    if (interestedInTraining) programFields.interestedInTraining = interestedInTraining;
    if (interestedAfterSchoolPrograms) programFields.interestedAfterSchoolPrograms = interestedAfterSchoolPrograms;
    if (interestedInCriminalServices) programFields.interestedInCriminalServices = interestedInCriminalServices;
    if (interestedInCompletingDiploma) programFields.interestedInCompletingDiploma = interestedInCompletingDiploma;
    if (programHours) programFields.programHours = programHours;

    console.log("Hopefully have defined programFields, lets see");
    console.log(programFields)

    // if (skills) {
    //   programFields.skills = skills.split(',').map(skill => skill.trim());
    // }
    
    try {

      console.log("in the try")

      // let program = await Program.findOne({'name': programFields.name})
      let program = await Program.findOne({'name': programFields.name, 'department': programFields.department})


      console.log("After Checking if program available")
      if (program) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Program already exists' }] });
      }

      program = new Program(
        programFields
      )
      console.log("After new program")

      await program.save();

      console.log("After save")

      // let program = await Program.findOneAndUpdate(
      //   // { user: req.user.id },
      //   { $set: programFields },
      //   { new: true, upsert: true }
      // );
      res.json(program);

    }catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
)



// @route    Get api/program/:name
// @desc     get program to update
// @access   Private
router.get('/:id', auth, async (req, res) => {


    try {
      
      //find by id
      const program = await Program.findById(req.params.id);
      

      // //find by name
      // const program = await Program.findOne({'name': req.params.name})



      if (!program) {
        return res.status(404).json({ msg: 'Program not found' });
      }
      console.log("program: " + program);
      res.json(program);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Program not found' });
      }
      res.status(500).send('Server Error');
    }
  });
    
   

  router.put('/:id',  
  [
    auth,
      [
        check('name', 'Program name is required')
          .not()
          .isEmpty(),
        check('department', 'Program department is required')
          .not()
          .isEmpty()
      ]
  ],
  
  async (req, res) => {

    // console.log("req.body: ")
    // console.log(req.body)


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      name,
      department,
      acceptReferrals,
      descriptionOfProgram,
      coreServicesOffered,
      populationServed,
      eligibilityRequirements,
      locationOfProgram,
      servicesOnlyOfferedAtProgramSite,
      contactPerson,
      email,
      phonenumber,
      altProgramName,
      location,
      clientAge,
      inSchool,
      veteran,
      interestedInTraining,
      interestedAfterSchoolPrograms,
      interestedInCriminalServices,
      interestedInCompletingDiploma,
      programHours 
    } = req.body;


    // Build profile object
    const programFields = {};
    // programFields.user = req.user.id;
    if (name) programFields.name = name;
    if (department) programFields.department = department;
    if (acceptReferrals) programFields.acceptReferrals = acceptReferrals;
    if (descriptionOfProgram) programFields.descriptionOfProgram = descriptionOfProgram;
    if (coreServicesOffered) programFields.coreServicesOffered = coreServicesOffered;
    if (populationServed) programFields.populationServed = populationServed;
    if (eligibilityRequirements) programFields.eligibilityRequirements = eligibilityRequirements;
    if (locationOfProgram) programFields.locationOfProgram = locationOfProgram;
    if (servicesOnlyOfferedAtProgramSite) programFields.servicesOnlyOfferedAtProgramSite = servicesOnlyOfferedAtProgramSite;
    if (contactPerson) programFields.contactPerson = contactPerson;
    if (email) programFields.email = email;
    if (phonenumber) programFields.phonenumber = phonenumber;
    if (altProgramName) programFields.altProgramName = altProgramName;
    if (location) programFields.location = location;
    if (clientAge) programFields.clientAge = clientAge;
    if (inSchool) programFields.inSchool = inSchool;
    if (veteran) programFields.veteran = veteran;
    if (interestedInTraining) programFields.interestedInTraining = interestedInTraining;
    if (interestedAfterSchoolPrograms) programFields.interestedAfterSchoolPrograms = interestedAfterSchoolPrograms;
    if (interestedInCriminalServices) programFields.interestedInCriminalServices = interestedInCriminalServices;
    if (interestedInCompletingDiploma) programFields.interestedInCompletingDiploma = interestedInCompletingDiploma;
    if (programHours) programFields.programHours = programHours;

    try {

      let program = await Program.findByIdAndUpdate(
        req.body._id,
        // req.params.id,
        { $set: programFields },
        { new: true, upsert: true }
      );

      if (!program) {
        return res.status(404).json({ msg: 'Program not found' });
      }

      res.json(program);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.delete('/:id', auth, async(req, res) => {
    try {
      //find by id
      const program = await Program.findById(req.params.id);
      
      //find by name
      // const program = await Program.findOne({'name': req.params.name})

      if (!program) {
        return res.status(404).json({ msg: 'Program not found' });
      }

      await program.remove();

      res.json({ msg: 'Program removed' });
  
    }catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Program not found' });
      }
      // if (!program) {
      //   return res.status(404).json({ msg: 'Program not found' });
      // }
      res.status(500).send('Server Error');
    }
  })

module.exports = router;