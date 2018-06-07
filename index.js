"use strict";

var differenceInWeeks = require("date-fns/difference_in_weeks");
var addHours = require("date-fns/add_hours");

function isOdd(num) {
  return num % 2;
}

exports.handler = (event, context, callback) => {
  var binNight = 4;
  var today = new Date();
  today = addHours(today, 10);
  var todayNumber = today.getDay();
  var gardenBin = new Date("2018-06-07T00:00:00.112Z");

  var diff = differenceInWeeks(new Date(today), new Date(gardenBin));

  if (todayNumber == 4) {
    if (isOdd(diff)) {
      var json = {
        dialogAction: {
          type: "Close",
          fulfillmentState: "Fulfilled",
          message: {
            contentType: "PlainText",
            content: "Recycle bin night tonight"
          }
        }
      };
      callback(null, json);
    }
    var json = {
      dialogAction: {
        type: "Close",
        fulfillmentState: "Fulfilled",
        message: {
          contentType: "PlainText",
          content: "Garden bin night tonight."
        }
      }
    };
    callback(null, json);
  }
  var json = {
    dialogAction: {
      type: "Close",
      fulfillmentState: "Fulfilled",
      message: {
        contentType: "PlainText",
        content: "Tonight is not bin night"
      }
    }
  };
  callback(null, json);
};
