const NaturalLanguageClassifier = require("watson-developer-cloud/natural-language-classifier/v1");

module.exports = new NaturalLanguageClassifier({
  iam_apikey: process.env.I_AM_API_KEY,
});
