const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    acceptReferrals: {
        type: String,
    }
    descriptionOfProgram: {
        type: String,
    },
    coreServicesOffered: {
        type: String,
    },
    populationServed: {
        type: String,
    },
    eligibilityRequirements: {
        type: String,
    },
    locationOfProgram: {
        type: String,
    },
    servicesOnlyOfferedAtProgramSite {
        type: String,
    },
    email {
        type: String,
    },
    phonenumber {
        type: String,
    },
    altProgramName{
        type: String,
    },
    location {
        type: String,
    },
    phonenumber {
        type: String,
    },

    phonenumber {
        type: String,
    },

    phonenumber {
        type: String,
    },

    phonenumber {
        type: String,
    },


    phonenumber {
        type: String,
    },


    "clientAge": ["0 - 4", "5 - 10", "11 - 13", "14 - 18", "18 - 24", "25 - 65"],
    "inSchool": ["In School", "Out of School"],
    "veteran": "false",
    "interestedInTraining": "false",
    "interestedAfterSchoolPrograms": "true",
    "interestedInCriminalServices": "false",
    "interestedInCompletingDiploma": "true"
    date: {
        type: Date,
        default: Date.now
    }


});





// {
//     "name": "FamilySource Center - Case Management",
//     "department": "Community & Family Support",
//     "acceptReferrals": "Yes",
//     "descriptionOfProgram": "Case manager's work with individuals and families to assess the client's needs and develop a service plan to assist them in increasing their overall stability. Case manager's provide client's with linkages to both internal and external resources in the community based on the needs of the case, as well as assist them in completing various applications for public benefits, housing and pre-employment support services to name a few services. Case managers also assist the client's with advocacy as needed based on the client's needs.",
//     "coreServicesOffered": "Case Management; public benefits enrollment, pre-employment support, legal assistance, emergency support services, monthly grocery distribution, citizenship application support",
//     "populationServed": "Youth to Adults",
//     "eligibilityRequirements": "City of Los Angeles Resident, Low income based on Federal Guidelines",
//     "locationOfProgram": "1075 N Western Ave #110, LA CA 90029",
//     "servicesOnlyOfferedAtProgramSite": "Some services are through referral/linage to other agencies",
//     "contactPerson": "Gloria Salgado",
//     "email": "gloria.salgado@ypi.org",
//     "phonenumber": "213-836-0055",
//     "altProgramName": "FamilySource Center Case Management",
//     "location": "Los Angeles",
//     "clientAge": ["0 - 4", "5 - 10", "11 - 13", "14 - 18", "18 - 24", "25 - 65"],
//     "inSchool": ["In School", "Out of School"],
//     "veteran": "false",
//     "interestedInTraining": "false",
//     "interestedAfterSchoolPrograms": "true",
//     "interestedInCriminalServices": "false",
//     "interestedInCompletingDiploma": "true"
//   },




 module.exports = User = mongoose.model('program', ProgramSchema); 