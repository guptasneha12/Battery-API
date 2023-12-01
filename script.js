const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDischargingTime = document.querySelector(".batteryDischargingTime");



// BATTERY API

const battery = () => {
    if ("getBattery" in navigator) {
        navigator.getBattery().then(battery => {
            // this function takes all the function of battery status
            function updateAllBatteryDetails() {
                updateChargingInfo();
                updateLevelChange();
                updateDischargingTimeInfo();
                updateChargingTimeInfo();
            }

            updateAllBatteryDetails();






            // battery level change
            battery.addEventListener("levelchange",()=>{
                updateLevelChange();
            });
            function updateLevelChange(){
                const level=battery.level*100 + "%";
                batteryLevel.innerHTML=level;
            }








            // battery charging status change
            battery.addEventListener("chargingchange",()=>{
                updateChargingInfo();
            })
            function updateChargingInfo(){
                const isCharging=battery.charging? "Yes" : "No";
                batteryCharging.innerHTML=isCharging;
            }










            // battery charging time
            battery.addEventListener("chargingtimechange",()=>{
                updateChargingTimeInfo();
            })
            function updateChargingTimeInfo(){
                batteryChargingTime.innerHTML=battery.chargingTime + " seconds";     
             }








             // battery discharging time
             battery.addEventListener("dischargingtimechange",()=>{
                updateDischargingTimeInfo();
             })
             function updateDischargingTimeInfo(){
                batteryDischargingTime.innerHTML=battery.dischargingTime + " seconds";
             }

});
    }
};


battery();