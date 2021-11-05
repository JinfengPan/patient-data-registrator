const patients = [
  {
    _id: "",
    name: "张三",
    age: "",
    gender: "",
    hometown: "",
    onsetTime: "",
    courseOfDisease: "",

    hasHeadache: true,
    hasConvulsion: true,
    hasConsciousnessDisorder: true,
    hasHemiplegia: true,
    hasIncontinence: true,

    headacheDesc: "",
    convulsionDesc: "",
    ConsciousnessDisorderDesc: "",
    HemiplegiaDesc: "",
    IncontinenceDesc: "",

    hasUseDrug: true,
    drugType: "",
    specificDrug: "",

    hasSurgery: true,
    surgeryMethod: "",

    complicationHeadache: true,
    complicationInfection: true,
    complicationConvulsion: true,
    complicationSecondSurgery: true,

    followUpTime: "",
  },
];

export function getPatients() {
  return patients;
}

export function savePatient(patient){
  

}
