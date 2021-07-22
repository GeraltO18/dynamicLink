const express = require("express");
const { DateTime } = require("luxon");
const luxon = require("luxon");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT;

dotenv.config();

// app.route('/g1').get((req,res) => {
//     res.redirect(classurl1)
// })
const Datatime = luxon.DateTime;
const Interval = luxon.Interval;
const timezone = "Asia/Colombo";
const firstHourInterval = Interval.fromDateTimes(
  DateTime.fromObject({ hour: 08, minute: 25 }, { zone: timezone }),
  Datatime.fromObject({ hour: 09, minute: 35 }, { zone: timezone })
);
const secondHourInterval = Interval.fromDateTimes(
  DateTime.fromObject({ hour: 09, minute: 40 }, { zone: timezone }),
  Datatime.fromObject({ hour: 10, minute: 50 }, { zone: timezone })
);
const thirdHourInterval = Interval.fromDateTimes(
  DateTime.fromObject({ hour: 10, minute: 55 }, { zone: timezone }),
  Datatime.fromObject({ hour: 12, minute: 05 }, { zone: timezone })
);
const fourthHourInterval = Interval.fromDateTimes(
  DateTime.fromObject({ hour: 13, minute: 40 }, { zone: timezone }),
  Datatime.fromObject({ hour: 14, minute: 50 }, { zone: timezone })
);
const wedFourthHourInterval = Interval.fromDateTimes(
  DateTime.fromObject({ hour: 13, minute: 40 }, { zone: timezone }),
  Datatime.fromObject({ hour: 16, minute: 05 }, { zone: timezone })
);
const fifthHourInterval = Interval.fromDateTimes(
  DateTime.fromObject({ hour: 14, minute: 55 }, { zone: timezone }),
  Datatime.fromObject({ hour: 16, minute: 05 }, { zone: timezone })
);

app.route("/g2").get((req, res) => {
  let nowtime = luxon.DateTime.now().setZone(timezone);
  switch (nowtime.weekday) {
    case 0:
      res.send("<h1>Innaiku sunday da dei<h1>");
    case 1:
      if (firstHourInterval) {
        return res.status(301).redirect(process.env.SOFTE);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DM);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.ML);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.IOT);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(process.env.WS);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 2:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.LIB);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.IOT);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.SOFTE);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DM);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(process.env.CYBER);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 3:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.ML);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.WS);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DAA);
      } else if (wedFourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.IOTLAB);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 4:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.CYBER);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DM);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.SOFTE);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DAALAB);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(process.env.LIB);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 5:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.WS);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DAA);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.IOT);
      } else if (wedfourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DMLAB);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 6:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.TWM);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.DAA);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.CYBER);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(process.env.ML);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(process.env.SOFTE);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }
  }
});

app.listen(PORT || 3000);
