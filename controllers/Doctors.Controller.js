const createError = require("http-errors");
const { faker } = require("@faker-js/faker");

const generateDoctorData = () => {
  const name = faker.person.fullName();
  const experience = faker.number.int({ min: 2, max: 60 });
  const clinic = faker.company.name();
  const fees = faker.commerce.price({
    min: 100,
    max: 1000,
    dec: 0,
    symbol: "₹",
  });
  const patientsTreated = faker.number.int({ min: 1, max: 10000 });
  const patientsReviewPercentage = faker.number.int(100);
  const cityState = faker.location.city() + " , " + faker.location.state();
  const image = faker.image.avatar();

  return {
    name: "Dr. " + name,
    clinic,
    experience,
    fees,
    cityState,
    patientsReviewPercentage,
    patientsTreated,
    image,
  };
};
module.exports = {
  readDoctors: async (req, res, next) => {
    try {
      const fakeDoctors = Array.from({ length: 10 }, () =>
        generateDoctorData()
      );
      res.status(200).json({
        fakeDoctors,
      });
    } catch (err) {
      next(err);
    }
  },
};
