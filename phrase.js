const naturalLanguageClassifier = require("./nlc");

const phrase = (req, res) => {
  const { phrase } = req.body;
  naturalLanguageClassifier.classify(
    {
      text: phrase,
      classifier_id: process.env.CLASSIFIER_ID,
    },
    function (err, response) {
      if (err) {
        res.status(403).send(err);
      } else {
        res.send(JSON.stringify(response, null, 2));
      }
    }
  );

  res.status(200);
};

module.exports = phrase;
