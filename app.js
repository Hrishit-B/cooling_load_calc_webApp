const form1 = document.getElementById("form1");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  const area = document.getElementById("area").value;
  const num_of_occs = document.getElementById("occupants").value;
  const t_outdoor = document.getElementById("t_outdoor").value;
  const t_indoor = document.getElementById("t_indoor").value;

  const getBuildingType = document.getElementsByName("type");

  let selectedType = "";

  for (let i = 0; i < getBuildingType.length; i++) {
    if (getBuildingType[i].checked) {
      selectedType = getBuildingType[i].value;
      break;
    }
  }

  let coolingLoad = 0;

  if (selectedType === "residential") {
    coolingLoad = 100 * num_of_occs;
  } else if (selectedType === "commercial") {
    coolingLoad = 150 * num_of_occs;
  }

  const T_diff = t_outdoor - t_indoor;

  const q_conduction = 30 * area * T_diff;

  const sensibleCoolingLoad = q_conduction + coolingLoad;

  console.log(sensibleCoolingLoad);

  document.getElementById(
    "result"
  ).innerHTML = `The Sensible Cooling Load of the Building is: ${sensibleCoolingLoad}`;
});
