const express = require("express");
const { DateTime } = require("luxon");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const bodyParser = require("body-parser");
const {
  firstHourInterval,
  secondHourInterval,
  thirdHourInterval,
  fourthHourInterval,
  fifthHourInterval,
  labFourthHourInterval,
  timezone,
} = require("./timeInterval/timeInterval");

dotenv.config();
const PORT = process.env.PORT;
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.route('/g1').get((req,res) => {
//     res.redirect(classurl1)
// })
classes = process.env;

let timeTable = {
  1: {
    firstHour: classes.SOFTE,
    secondHour: classes.DM,
    thirdHour: classes.ML,
    fourthHour: classes.IOT,
    fifthHour: classes.WS,
  },
  2: {
    firstHour: classes.LIB,
    secondHour: classes.DM,
    thirdHour: classes.ML,
    fourthHour: classes.IOT,
    fifthHour: classes.WS,
  },
  3: {
    firstHour: classes.SOFTE,
    secondHour: classes.DM,
    thirdHour: classes.ML,
    fourthHour: classes.IOT,
    fifthHour: classes.WS,
  },
  4: {
    firstHour: classes.SOFTE,
    secondHour: classes.DM,
    thirdHour: classes.ML,
    fourthHour: classes.IOT,
    fifthHour: classes.WS,
  },
  5: {
    firstHour: classes.SOFTE,
    secondHour: classes.DM,
    thirdHour: classes.ML,
    fourthHour: classes.IOT,
    fifthHour: classes.WS,
  },
  6: {
    firstHour: classes.SOFTE,
    secondHour: classes.DM,
    thirdHour: classes.ML,
    fourthHour: classes.IOT,
    fifthHour: classes.WS,
  },
};

cron.schedule("0 0 * * 0", () => {
  let timeTable = {
    1: {
      firstHour: classes.SOFTE,
      secondHour: classes.DM,
      thirdHour: classes.ML,
      fourthHour: classes.IOT,
      fifthHour: classes.WS,
    },
    2: {
      firstHour: classes.LIB,
      secondHour: classes.DM,
      thirdHour: classes.ML,
      fourthHour: classes.IOT,
      fifthHour: classes.WS,
    },
    3: {
      firstHour: classes.SOFTE,
      secondHour: classes.DM,
      thirdHour: classes.ML,
      fourthHour: classes.IOT,
      fifthHour: classes.WS,
    },
    4: {
      firstHour: classes.SOFTE,
      secondHour: classes.DM,
      thirdHour: classes.ML,
      fourthHour: classes.IOT,
      fifthHour: classes.WS,
    },
    5: {
      firstHour: classes.SOFTE,
      secondHour: classes.DM,
      thirdHour: classes.ML,
      fourthHour: classes.IOT,
      fifthHour: classes.WS,
    },
    6: {
      firstHour: classes.SOFTE,
      secondHour: classes.DM,
      thirdHour: classes.ML,
      fourthHour: classes.IOT,
      fifthHour: classes.WS,
    },
  };
});
const keyVal = {
  SOFTE: classes.SOFTE,
  DM: classes.DM,
  ML: classes.ML,
  WS: classes.WS,
  CYBER: classes.CYBER,
  LIB: classes.LIB,
  IOT: classes.IOT,
  IOTLAB: classes.IOTLAB,
  DAA: classes.DAA,
  DAALAB: classes.DAALAB,
  DMLAB: classes.DMLAB,
  TWM: classes.TWM,
};

app.route("/g2/update").post((req, res) => {
  const { day, hour, classLink } = req.body;
  timeTable[day][hour] = keyVal[classLink];
  res.redirect("/g2/update");
});
app.route("/g2/update").get((req, res) => {
  res.render("update.html");
});

app.route("/g2").get((req, res) => {
  let nowtime = DateTime.now().setZone(timezone);
  let today = nowtime.weekday;
  period = timeTable[today];
  switch (today) {
    case 0:
      res.send("<h1>Innaiku sunday da dei<h1>");
    case 1:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.firstHour);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.secondHour);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.thirdHour);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.fourthHour);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(period.fifthHour);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 2:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.firstHour);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.secondHour);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.thirdHour);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.fourthHour);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(period.fifthHour);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 3:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.firstHour);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.secondHour);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.thirdHour);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.fourthHour);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(period.fifthHour);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 4:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.firstHour);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.secondHour);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.thirdHour);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.fourthHour);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(period.fifthHour);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }
    case 5:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.firstHour);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.secondHour);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.thirdHour);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.fourthHour);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(period.fifthHour);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }

    case 6:
      if (firstHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.firstHour);
      } else if (secondHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.secondHour);
      } else if (thirdHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.thirdHour);
      } else if (fourthHourInterval.contains(nowtime)) {
        return res.status(301).redirect(period.fourthHour);
      } else if (fifthHourInterval.contains(nowtime)) {
        return res.redirect(period.fifthHour);
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }
  }
});

app.listen(PORT || 3000);
