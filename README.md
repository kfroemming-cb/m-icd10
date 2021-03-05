## Basic Usage

- Clone this repository
- in the `.env` file add your I_AM key and your classifier ID from the IBM watson model
- node index.js
- Use postman to GET json in the body

## API ENDPOINTS

#### `/collection` `GET`

- Takes a large `text` string that is broken down using a RAKE algorithm into key words
- This is then returned in a collection of results ranking with the most likely diagnosis and icd10 code at the top

#### Example

In the body

```json
{
  "text": "the patient has pneumonia, flu, common cold, and bronchitis"
}
```

Response

```json
{
  "collection": [
    {
      "text": "pneumonia flu common cold",
      "top_class": "A3",
      "classes": [
        {
          "class_name": "A3",
          "confidence": 0.23999492124507438
        },
        {
          "class_name": "D8",
          "confidence": 0.10250172305178838
        }
      ]
    },
  ]
}
```
 
#### `/phrase` `GET`

Phrase is used when you would like a raw sentence analyzed by the model
```json
{
  "phrase": "the patient has pneumonia, flu, common cold, and bronchitis"
}
```

The response is below

```json
{
  "text": "The patient has Hypertension",
  "top_class": "S62",
  "classes": [
    {
      "class_name": "S62",
      "confidence": 0.16554323341706262
    },
    {
      "class_name": "D3",
      "confidence": 0.11393657516941087
    },
    {
      "class_name": "E6",
      "confidence": 0.0755987370963675
    }
  ]
}
```

The model right now is limited but I will continue to train it with more data until I hit a cap
After, I will revise the training data and remove outliers
