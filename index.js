const express = require("express");
const moment = require("moment-timezone");
const app = express();
const PORT = process.env.PORT;

// app.route('/g1').get((req,res) => {
//     res.redirect(classurl1)
// })

app.route("/g2").get((req, res) => {
  let nowtime = moment().tz("Asia/Colombo");
  switch (nowtime.day()) {
    case 0:
      res.send("<h1>Innaiku sunday da dei<h1>");
    case 1:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.instagram.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va (still there is time come back later)"
        );
      }

    case 2:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.instagram.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va (still there is time come back later)"
        );
      }

    case 3:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.instagram.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va (still there is time come back later)"
        );
      }

    case 4:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.instagram.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 5:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.instagram.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "innum time irruku aprm va(still there is time come back later)"
        );
      }

    case 6:
      if (
        nowtime.isBetween(moment("08:25", "h:mm a"), moment("09:30", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.netflix.com");
      } else if (
        nowtime.isBetween(moment("09:40", "h:mm a"), moment("10:45", "h:mm a"))
      ) {
        return res.status(301).redirect("https://www.instagram.com");
      } else if (
        nowtime.isBetween(
          moment("10:55", "h:mm a"),
          moment("12:00 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.google.com");
      } else if (
        nowtime.isBetween(
          moment("01:40 pm", "h:mm a"),
          moment("02:45 pm", "h:mm a")
        )
      ) {
        return res.status(301).redirect("https://www.canva.com");
      } else if (
        nowtime.isBetween(
          moment("02:55 pm", "h:mm a"),
          moment("04:00 pm", "h:mm a")
        )
      ) {
        return res.redirect("https://www.instagram.com");
      } else {
        return res.send(
          "<h1>innum time irruku aprm va (still there is time come back later)<h1>"
        );
      }
  }
});

app.listen(PORT || 3000);
