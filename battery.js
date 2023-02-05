const chargeLevel = document.getElementById("charge-level");
const charge = document.getElementById("charge");
const chargingTimeRef = document.getElementById("charging-time");

window.onload = () => {
  if (!navigator.getBattery) {
    alert("Battery Status Api Is Not Supported In Your Browser");
    return false;
  }
};

navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargingInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateAllBatteryInfo();
  });

  battery.addEventListener("levelchange", () => {
    updateAllBatteryInfo();
  });

  function updateChargingInfo() {
    if (battery.charging) {
      charge.classList.add("active");
      chargingTimeRef.innerText = "";
    } else {
      charge.classList.remove("active");
    }
  }

  function updateLevelInfo() {
    let batteryLevel = `${parseInt(battery.level * 100)}%`;
    charge.style.width = batteryLevel;
    chargeLevel.textContent = batteryLevel;
  }
});
