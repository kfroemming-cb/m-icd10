const rakejs = require("@shopping24/rake-js");
const naturalLanguageClassifier = require("./nlc");
const stops = require("./stops");

const rakeCollection = (text) => {
  const articles = "a an the and has";
  const { result } = rakejs
    .extract(text)
    .setOptions({
      stopWords: stops,
      articles,
    })
    .pipe(rakejs.extractKeyPhrases)
    .pipe(rakejs.extractAdjoinedKeyPhrases)
    .pipe(rakejs.keywordLengthFilter)
    .pipe(rakejs.distinct)
    .pipe(rakejs.scoreWordFrequency)
    .pipe(rakejs.sortByScore);
  return result;
};

const collection = (req, res) => {
  const { text } = req.body;
  const result = rakeCollection(text);
  const collection = result.map((el) => {
    return { text: el.phrase };
  });
  naturalLanguageClassifier.classifyCollection(
    {
      classifier_id: process.env.CLASSIFIER_ID,
      collection,
    },
    function (err, response) {
      if (err) {
        res.status(403).send(err);
      } else {
        res.status(200).send(JSON.stringify(response, null, 2));
      }
    }
  );
};

module.exports = collection;
