const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: maxOfTomorrow } = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


const LOCAL_FORECAST1 = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast1) {
    "use strict";

    const { tomorrow: { max: maxOfTomorrow } } = forecast1;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST1));