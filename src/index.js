import React from 'react';
import ReactDOM from 'react-dom';
import Shelf from './containers/Shelf';

const initialState = {
  "allBooks": [],
  "nowReading": [
    {
      "id": 1,
      "cover": "../assets/static/img/shoe-dog.jpg",
      "title": "Shoe Dog",
      "author": "Phil Knight",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "cover": "../assets/static/img/de-cero-a-uno.jpg",
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "El hombre en busca de sentido",
      "author": "Viktor Frankl",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
  ],
  "read": [
    {
      "id": 1,
      "title": "The Hard Thing About Hard Things",
      "author": "Ben Horowitz",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Every Tool's a Hammer",
      "author": "Adam Savage",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Exactly",
      "author": "Simon Winchester",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Life in Code",
      "author": "Ellen Ullman",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
  ],
  "wantToRead": [
    {
      "id": 1,
      "title": "Las mil y una noches",
      "author": "Varios",
      "format": "Audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Los bandidos de río frío",
      "author": "Manuel Payno",
      "format": "paper",
      "dateStart": "21/04/2020",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Hábitos atómicos",
      "author": "James Clear",
      "format": "audiobook",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Rey, Dama, Valet",
      "author": "Vladimir Nabokov",
      "format": "paper",
      "dateStart": "",
      "dateEnd": "",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
    {
      "id": 1,
      "title": "Search Inside Yourself",
      "author": "Chade-Meng Tan",
      "format": "Audiobook",
      "dateStart": "21/04/2020",
      "dateEnd": "24/04/2020",
      "excerpt": "Lorem Ipsum",
      "category": "Business",
      "tags": ['startups','entrepreneurship','business','technology'],
      "duration": "10h 25m"
    },
  ]
}

ReactDOM.render(
  <Shelf {...initialState} />, document.getElementById('root')
);
