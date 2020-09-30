$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("weatherForecast.feature");
formatter.feature({
  "line": 1,
  "name": "weather_forecast",
  "description": "A happy holiday maker",
  "id": "weather-forecast",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "A happy holiday maker",
  "description": "",
  "id": "weather-forecast;a-happy-holiday-maker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I like to holiday in \"\u003ccity\u003e\" and \"\u003ccountryCode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I only like to holiday on \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I look up the the weather forecast for the next \u003cnoOfDays\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Check if it has rained previous days",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the temperature is between \u003cminTemp\u003e to \u003cmaxTemp\u003e degrees degrees in Bondi Beach",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see that it won\u0027t be snowing for the next \u003cnoOfDays\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "weather-forecast;a-happy-holiday-maker;",
  "rows": [
    {
      "cells": [
        "city",
        "countryCode",
        "day",
        "noOfDays",
        "minTemp",
        "maxTemp"
      ],
      "line": 12,
      "id": "weather-forecast;a-happy-holiday-maker;;1"
    },
    {
      "cells": [
        "Bondi",
        "AU",
        "Thursday",
        "14",
        "20",
        "30"
      ],
      "line": 13,
      "id": "weather-forecast;a-happy-holiday-maker;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "A happy holiday maker",
  "description": "",
  "id": "weather-forecast;a-happy-holiday-maker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I like to holiday in \"Bondi\" and \"AU\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I only like to holiday on \"Thursday\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I look up the the weather forecast for the next 14",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Check if it has rained previous days",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the temperature is between 20 to 30 degrees degrees in Bondi Beach",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see that it won\u0027t be snowing for the next 14",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bondi",
      "offset": 22
    },
    {
      "val": "AU",
      "offset": 34
    }
  ],
  "location": "weatherForecast_steps.i_like_to_holiday_in(String,String)"
});
formatter.result({
  "duration": 1117765300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thursday",
      "offset": 27
    }
  ],
  "location": "weatherForecast_steps.i_only_like_to_holiday_on(String)"
});
formatter.result({
  "duration": 41098800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 48
    }
  ],
  "location": "weatherForecast_steps.i_look_up_the_the_weather_forecast_for_the_next(int)"
});
formatter.result({
  "duration": 5483480200,
  "status": "passed"
});
formatter.match({
  "location": "weatherForecast_steps.check_if_it_has_rained_previous_days()"
});
formatter.result({
  "duration": 337616500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 37
    },
    {
      "val": "30",
      "offset": 43
    }
  ],
  "location": "weatherForecast_steps.i_can_see_the_temperature_is_between_to_degrees_degrees_in_Bondi_Beach(int,int)"
});
formatter.result({
  "duration": 1172400,
  "error_message": "java.lang.AssertionError: Thursday 2020-10-01, temperature is not in between 20 and 30 degrees and suitable for holiday\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat stepDefinitions.weatherForecast_steps.i_can_see_the_temperature_is_between_to_degrees_degrees_in_Bondi_Beach(weatherForecast_steps.java:131)\r\n\tat ✽.Then I can see the temperature is between 20 to 30 degrees degrees in Bondi Beach(weatherForecast.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 48
    }
  ],
  "location": "weatherForecast_steps.i_can_see_that_it_won_t_be_snowing_for_the_next(int)"
});
formatter.result({
  "status": "skipped"
});
});