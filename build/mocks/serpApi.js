"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // "search_metadata": {
    //   "id": "639a482c925641676c08b9e4",
    //   "status": "Success",
    //   "json_endpoint": "https://serpapi.com/searches/6644e26fcebbf288/639a482c925641676c08b9e4.json",
    //   "created_at": "2022-12-14 22:03:24 UTC",
    //   "processed_at": "2022-12-14 22:03:24 UTC",
    //   "google_url": "https://www.google.com/search?q=hola&oq=hola&uule=w+CAIQICIjQnVlbm9zIEFpcmVzLEJ1ZW5vcyBBaXJlcyxBcmdlbnRpbmE&gl=ar&num=10&start=0&sourceid=chrome&ie=UTF-8",
    //   "raw_html_file": "https://serpapi.com/searches/6644e26fcebbf288/639a482c925641676c08b9e4.html",
    //   "total_time_taken": 0.65
    // },
    // "search_parameters": {
    //   "engine": "google",
    //   "q": "hola",
    //   "location_requested": "Buenos Aires, Buenos Aires, Argentina",
    //   "location_used": "Buenos Aires,Buenos Aires,Argentina",
    //   "google_domain": "google.com",
    //   "gl": "ar",
    //   "start": 0,
    //   "num": "10",
    //   "device": "desktop"
    // },
    // "search_information": {
    //   "organic_results_state": "Results for exact spelling",
    //   "query_displayed": "hola",
    //   "total_results": 1360000000,
    //   "time_taken_displayed": 0.47,
    //   "menu_items": [{"position": 1, "title": "Todos"}, {
    //     "position": 2,
    //     "title": "Videos",
    //     "link": "https://www.google.com/search?q=hola&gl=ar&source=lnms&tbm=vid&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ_AUoAXoECAIQAw",
    //     "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0&tbm=vid"
    //   }, {
    //     "position": 3,
    //     "title": "Imágenes",
    //     "link": "https://www.google.com/search?q=hola&gl=ar&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ_AUoAnoECAIQBA",
    //     "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0&tbm=isch"
    //   }, {
    //     "position": 4,
    //     "title": "Maps",
    //     "link": "https://maps.google.com/maps?gl=ar&uule=w+CAIQICIjQnVlbm9zIEFpcmVzLEJ1ZW5vcyBBaXJlcyxBcmdlbnRpbmE&q=hola&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ_AUoA3oECAIQBQ"
    //   }, {
    //     "position": 5,
    //     "title": "Noticias",
    //     "link": "https://www.google.com/search?q=hola&gl=ar&source=lnms&tbm=nws&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ_AUoBHoECAIQBg",
    //     "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0&tbm=nws"
    //   }]
    // },
    // "knowledge_graph": {
    //   "title": "¡Hola!",
    //   "type": "Revista",
    //   "description": "¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia, ...",
    //   "source": {"name": "Wikipedia", "link": "https://es.wikipedia.org/wiki/%C2%A1Hola!"},
    //   "jefe_de_redacción": "Eduardo Sánchez Pérez",
    //   "jefe_de_redacción_links": [{
    //     "text": "Jefe De Redacción",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+jefe+de+redacci%C3%B3n&stick=H4sIAAAAAAAAAOPgE-LUz9U3MCmoTDHQUskot9JPzs_JSU0uyczP0y9ILcrMT8lMTswptiooTcrJLM5ILVrEKnVoYUZ-TqKiQlZqWqpCSqpCUWpKYnJy5uHNeQB_vArOUAAAAA&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECGwQAg"
    //   }, {
    //     "text": "Eduardo Sánchez Pérez",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+eduardo+s%C3%A1nchez+p%C3%A9rez&stick=H4sIAAAAAAAAAOPgE-LUz9U3MCmoTDFQ4tVP1zc0TDNLyU0zsCzTUskot9JPzs_JSU0uyczP0y9ILcrMT8lMTswptiooTcrJLM5ILVrEKn9oYUZ-TqKiQmpKaWJRSr5C8eGFeckZqVUKBYdXFqVW7WBl3MXOxMEAAH500-BsAAAA&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQmxMoAXoECGwQAw"
    //   }],
    //   "primera_publicación": "2 de septiembre de 1944",
    //   "primera_publicación_links": [{
    //     "text": "Primera Publicación",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+primera+publicaci%C3%B3n&stick=H4sIAAAAAAAAAOPgE-LUz9U3MCmoTDHQUssot9JPzs_JSU0uyczP0y9ILcrMT8lMTswptkosKEhNLFJISSxJXcQqc2hhRn5OoqJCQVFmbmpRokJBaVIOUF1y5uHNeQCsNV5OVAAAAA&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECG4QAg"
    //   }],
    //   "issn": "0214-3895",
    //   "issn_links": [{
    //     "text": "ISSN",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+issn&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECG8QAg"
    //   }],
    //   "costo": "2,40 €",
    //   "costo_links": [{
    //     "text": "Costo",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+costo&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECHEQAg"
    //   }],
    //   "compañía": "Hola S.L",
    //   "compañía_links": [{
    //     "text": "Compañía",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+compa%C3%B1%C3%ADa&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECHYQAg"
    //   }],
    //   "editor": "Martín Silveira",
    //   "editor_links": [{
    //     "text": "Editor",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+editor&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECHAQAg"
    //   }],
    //   "frecuencia": "Semanal",
    //   "frecuencia_links": [{
    //     "text": "Frecuencia",
    //     "link": "https://www.google.com/search?gl=ar&q=%C2%A1hola!+frecuencia&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ6BMoAHoECG0QAg"
    //   }]
    // },
    // "inline_images": [{
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh8EAA#imgrc=hYNxKuq6lXCKYM",
    //   "source": "https://es.wikipedia.org/wiki/%C2%A1Hola!",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad53626719fc46b500b8a3eba67c2f03772d04fb538169dc92e74699.png"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh7EAA#imgrc=FqCllzRkX0vZGM",
    //   "source": "https://www.20minutos.es/minuteca/revista-hola/",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267b49799c931f454b619da8fd5d7465682f9f2fc6f60e7380c.png"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BQiCARAA#imgrc=9Z1Za8mNNEdQPM",
    //   "source": "https://www.youtube.com/watch?v=mlBZeNKCbSI",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad5362675f31524cd31db0ea43a7bb6864097b01346374a9da05e81c.jpeg"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh4EAA#imgrc=yWzAIjkrK1EaNM",
    //   "source": "https://www.facebook.com/HolaTvAmerica/",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad53626729a17d63448914f8cad1a6b23af5ea47330c1c087069f0a2.png"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAhqEAA#imgrc=Ex7EB5_9Nsl_LM",
    //   "source": "https://www.hola.com/plus/",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad5362675d668edc5e65743598db02c5758b557a3344a2f0b176443f.png"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BQiBARAA#imgrc=qPd4MF_1jJQCpM",
    //   "source": "https://mobile.twitter.com/holacomar",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-82mx7BaUSWl3ZYIGqsNp1reFnBGINg_pYRElFGQgA&s"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh_EAA#imgrc=3rieXkn738vX1M",
    //   "source": "https://www.20minutos.es/minuteca/revista-hola/",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpv-V-gjasHB1GBnzpl7wnDHsYA-HpdH81D9NKxO_yMg&s"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh6EAA#imgrc=Q9DOIALoOWO3eM",
    //   "source": "https://www.facebook.com/holargentina/",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5ZxJ9LGBp48K9zxL-jbOo4eJloxde2rScXHujOADEg&s"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh-EAA#imgrc=YmnVUEpW5lwaMM",
    //   "source": "https://www.youtube.com/watch?v=4deUxsQOGps",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8h4l_O6qeCIXH7OMGqkYrWXSIo6AF6rmVilp7IBXKFQ&s"
    // }, {
    //   "link": "https://www.google.com/search?source=univ&tbm=isch&q=hola&gl=ar&fir=hYNxKuq6lXCKYM%252Cc9oqyiEBYEAZUM%252C_%253BFqCllzRkX0vZGM%252CJAtpBaUUcJmZgM%252C_%253B9Z1Za8mNNEdQPM%252CtC6G6pltOPiSUM%252C_%253ByWzAIjkrK1EaNM%252C75w2_KhObsMe7M%252C_%253BEx7EB5_9Nsl_LM%252CRuzRG8S1Ps1sjM%252C_%253BqPd4MF_1jJQCpM%252CX_AyUBnT0bKkwM%252C_%253B3rieXkn738vX1M%252CJAtpBaUUcJmZgM%252C_%253BQ9DOIALoOWO3eM%252CTo2U4Gl5FTanIM%252C_%253BYmnVUEpW5lwaMM%252CeQa9LwK_-s89WM%252C_%253BPtxQH4CehfZqqM%252CPtl-hsgQyONBrM%252C_&usg=AI4_-kQod2bZy4-6afFmNZqxRmH8xN3K-A&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ9AF6BAh3EAA#imgrc=PtxQH4CehfZqqM",
    //   "source": "https://www.infobae.com/tag/revista-hola/",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlx2dWcGMzhN0DNFLqwLAAydUklGvaFUp7voyzE-lRog&s"
    // }],
    // "inline_images_suggested_searches": [{
    //   "name": "miranda",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:miranda:MPHJhIf4R8A%3D&usg=AI4_-kRwQLvBKiZZZWQR9f1cDfn8-bI53g&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAB6BAgzEA8",
    //   "chips": "q:hola,online_chips:miranda:MPHJhIf4R8A%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Amiranda%3AMPHJhIf4R8A%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9f782d62729a8fe7f897516436e7ebdf89.png"
    // }, {
    //   "name": "hola mundo",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:hola+mundo:AE76GkSVzpI%3D&usg=AI4_-kSega8U5M21ciG119QJ1FLU31tV9Q&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAF6BAgzEBM",
    //   "chips": "q:hola,online_chips:hola+mundo:AE76GkSVzpI%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Ahola%2Bmundo%3AAE76GkSVzpI%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9fadffa69950b0522778cf5d36017f19da.jpeg"
    // }, {
    //   "name": "canciones infantiles",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:canciones+infantiles:eaVzo_X3fYU%3D&usg=AI4_-kRuYmTufAzcpCf1Kcy9N_b7UpGRzA&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAJ6BAgzEBc",
    //   "chips": "q:hola,online_chips:canciones+infantiles:eaVzo_X3fYU%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Acanciones%2Binfantiles%3AeaVzo_X3fYU%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9f808aa52ad12ef5b25580f7fa92466f40.jpeg"
    // }, {
    //   "name": "joey montana",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:joey+montana:CGJ_3uglfW4%3D&usg=AI4_-kRdsxpRTXouoR8rRTRPUoMlkU7Hrg&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAN6BAgzEBs",
    //   "chips": "q:hola,online_chips:joey+montana:CGJ_3uglfW4%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Ajoey%2Bmontana%3ACGJ_3uglfW4%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9f2b98a782a94dc137ee3fd428a809743f.jpeg"
    // }, {
    //   "name": "revista hola",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:revista+hola:S19kNJeloBY%3D&usg=AI4_-kTbN0bXwnYa-M-5muijLCgWeXKeKg&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAR6BAgzEB8",
    //   "chips": "q:hola,online_chips:revista+hola:S19kNJeloBY%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Arevista%2Bhola%3AS19kNJeloBY%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9f57a6c4d8ff05844e3cf9922b2457865d.png"
    // }, {
    //   "name": "super simple",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:super+simple:8SajT7PaXps%3D&usg=AI4_-kRv0NV3sW5UqCpZspJB7XZ_ZBcmBg&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAV6BAgzECM",
    //   "chips": "q:hola,online_chips:super+simple:8SajT7PaXps%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Asuper%2Bsimple%3A8SajT7PaXps%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9fe42c0c3ab7e2ca9f70d12568cd91e8f8.jpeg"
    // }, {
    //   "name": "hola remix",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:hola+remix:a7hOd4KYb7M%3D&usg=AI4_-kTD-7iRnwinGu4TfYa4AJkhYXYkKw&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAZ6BAgzECc",
    //   "chips": "q:hola,online_chips:hola+remix:a7hOd4KYb7M%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Ahola%2Bremix%3Aa7hOd4KYb7M%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/ac7cfe67ad536267e87a00a1d4f90989ff5617cedebfe72157a3e55aaf86ff9fde658499918fd9a2f86be30e35c29f41.jpeg"
    // }, {
    //   "name": "títeres",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:t%C3%ADteres&usg=AI4_-kQr9BitnKVl8ZkCrx01tWRgai2UVQ&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAd6BAgzECs",
    //   "chips": "q:hola,online_chips:t%C3%ADteres",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3At%25C3%25ADteres&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0"
    // }, {
    //   "name": "logo",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:logo:GPugPfhkc9s%3D&usg=AI4_-kTxe57F0nD-GSV4jNjpZ1O3IOgkTA&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAh6BAgzEC4",
    //   "chips": "q:hola,online_chips:logo:GPugPfhkc9s%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Alogo%3AGPugPfhkc9s%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMZLVJJWL_zJ3Bthv9yn_9uzBILZaspC0rrWmB5XuZA&s"
    // }, {
    //   "name": "holatv",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:holatv:LpNSVAiqg_c%3D&usg=AI4_-kSmmQlG0VsVxCkEHhypUEse9e-rqw&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAl6BAgzEDI",
    //   "chips": "q:hola,online_chips:holatv:LpNSVAiqg_c%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Aholatv%3ALpNSVAiqg_c%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9Ztjzg_o1TNFjvMW8ocxU6ty6n6uUDLpAkw56t1vbA&s"
    // }, {
    //   "name": "hola argentina",
    //   "link": "https://www.google.com/search?gl=ar&q=hola&tbm=isch&chips=q:hola,online_chips:hola+argentina:YznoAiDO0EM%3D&usg=AI4_-kRBgzRAX-p4OrFQDK1OSOmea-HpMg&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQgIoDKAp6BAgzEDY",
    //   "chips": "q:hola,online_chips:hola+argentina:YznoAiDO0EM%3D",
    //   "serpapi_link": "https://serpapi.com/search.json?chips=q%3Ahola%2Conline_chips%3Ahola%2Bargentina%3AYznoAiDO0EM%253D&device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=0",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEQn4XaMzcDf7nA8yO9bIZQDwNFyezjp1UFwhOCFulQ&s"
    // }],
    // "inline_videos": [{
    //   "position": 1,
    //   "title": "Dalex - Hola Remix ft. Lenny Tavárez, Chencho Corleone ...",
    //   "link": "https://www.google.com#fpstate=ive&vld=cid:2555c583,vid:nlXqp3FVrq8",
    //   "thumbnail": "https://i.ytimg.com/vi/nlXqp3FVrq8/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3lyQWkDCtfkezpJ6T1VQDHE9dpg0w",
    //   "channel": "Dalex",
    //   "duration": "4:12",
    //   "platform": "YouTube",
    //   "date": "1 nov 2019"
    // }, {
    //   "position": 2,
    //   "title": "Joey Montana - Hola",
    //   "link": "https://www.youtube.com/watch?v=Mfu9jgj_z18",
    //   "thumbnail": "https://i.ytimg.com/vi/Mfu9jgj_z18/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3mq59Lra9cWpKTE2blXdZvgteSGYw",
    //   "channel": "JoeyMontanaVEVO",
    //   "duration": "3:30",
    //   "platform": "YouTube",
    //   "date": "30 sept 2016"
    // }, {
    //   "position": 3,
    //   "title": "Dalex - Hola Remix ft. Lenny Tavárez, Chencho Corleone ...",
    //   "link": "https://www.google.com#fpstate=ive&vld=cid:5a28ed3c,vid:QB7FGXPu46A",
    //   "thumbnail": "https://i.ytimg.com/vi/QB7FGXPu46A/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3mE_f29Hs4ocggGBjOen5zI8XS80g",
    //   "channel": "Dalex",
    //   "duration": "4:10",
    //   "platform": "YouTube",
    //   "date": "8 nov 2019"
    // }],
    // "top_stories": [{
    //   "title": "Las parejas de los futbolistas que siguen viviendo con emoción el mundial desde Qatar",
    //   "link": "https://www.hola.com/actualidad/galeria/20221214222860/parejas-futbolistas-mundial-viven-emocion-qatar/1/",
    //   "source": "Hola",
    //   "date": "hace 2 horas",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/83fcc764a1baaa21abedf431bf22a48660453a99b2eb1307.jpeg"
    // }, {
    //   "title": "Exanatemas virales: qué son y cuál es su tratamiento",
    //   "link": "https://www.hola.com/padres/20221214340327/exantema-viral-ninos-que-es-sh/",
    //   "source": "Hola",
    //   "date": "hace 4 horas",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/83fcc764a1baaa2105088aed55b7638a03be7043e32611dc.jpeg"
    // }, {
    //   "title": "Qué tipo de extractor le conviene a tu cocina",
    //   "link": "https://www.hola.com/decoracion/galeria/20221214222844/extractor-cocina-tipos-claves-diseno-nu/1/",
    //   "source": "Hola",
    //   "date": "hace 5 horas",
    //   "thumbnail": "https://serpapi.com/searches/639a482c925641676c08b9e4/images/83fcc764a1baaa21a9ea5c30d3c203331d1881e429e4b3e5.jpeg"
    // }, {
    //   "title": "Becky G y su novio comparten detalles de su compromiso",
    //   "link": "https://www.hola.com/us-es/celebrities/20221214340363/becky-g-sebastian-lletget-compromiso-detalles-mensaje/",
    //   "source": "Hola",
    //   "date": "hace 5 horas",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr55Ew1upxRSVcHSrkgbIUD9Ne7leR0HbQD9Ow--T-ufW7GE2YCnSUpNx&usqp=CAI&s"
    // }, {
    //   "title": "Acidez o ardor de estómago: remedios naturales para combatirlo",
    //   "link": "https://www.hola.com/estar-bien/20221214222845/remedios-ardor-de-estomago/",
    //   "source": "Hola",
    //   "date": "hace 6 horas",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHt4RffW7AYB08vorrOWBpMycr3rY9oBKP0h2CGcF1tqKSk0-6hEawXVDf&usqp=CAI&s"
    // }, {
    //   "title": "Por qué, a veces, los niños se desbordan emocionalmente",
    //   "link": "https://www.hola.com/padres/galeria/20221214340300/desbordes-emocionales-ninos-sh/1/",
    //   "source": "Hola",
    //   "date": "hace 9 horas",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA53Le9_GY0YZW_2SIh1OUD2irsMy6vorkDvL5Zaabf3pNYRRDYnllzCDp&usqp=CAI&s"
    // }, {
    //   "title": "Libros infantiles y juveniles de temática navideña",
    //   "link": "https://www.hola.com/padres/galeria/20221214340090/libros-infantiles-juveniles-tematica-navidena/1/",
    //   "source": "Hola",
    //   "date": "hace 10 horas",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqe1Dnksu5ONVGWt3nSP2LWG0_8NbWv79cjHXsFxBnz6br6IkzDF-R14e&usqp=CAI&s"
    // }, {
    //   "title": "El príncipe Harry y Meghan Markle: 20 revelaciones que provocan la ruptura",
    //   "link": "https://www.hola.com/realeza/casa_inglesa/20221214340301/principe-harry-meghan-markle-revelaciones-documental-ruptura-familia-real/",
    //   "source": "Hola",
    //   "date": "hace 16 horas",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjdH5WX2Owl8k0_fVxi5uZLDmJ45v1T3gArmjfrtKJLWHlHBERbnwrN9X&usqp=CAI&s"
    // }, {
    //   "title": "Meghan Markle y la supuesta 'guerra' lanzada contra ella desde Palacio, protagonistas del nuevo tráiler...",
    //   "link": "https://www.hola.com/realeza/casa_inglesa/20221214222856/meghan-markle-guerra-palacio-trailer-documental/",
    //   "source": "Hola",
    //   "date": "hace 1 hora",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFy86XdrfvLwtkXNn3izl91muwBbIWAx6Y2gSWwMDTHAOtQHguhd2uHHcn&usqp=CAI&s"
    // }],
    // "related_questions": [{
    //   "question": "¿Quién creó el HOLA?",
    //   "snippet": "50 millones de lectores en todo el mundo avalan el éxito de una fórmula que partió del amor de una pareja, el periodista Antonio Sánchez y su esposa Mercedes Junco, que pensaron en hacer algo que les permitiera pasar más tiempo juntos.",
    //   "title": "La historia detrás de '¡Hola!', la 'biblia' de la prensa del corazón - El País",
    //   "date": "19 sept 2019",
    //   "link": "https://elpais.com/elpais/2019/09/18/gente/1568818291_689295.html",
    //   "displayed_link": "https://elpais.com › elpais › 2019/09/18 › gente",
    //   "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK/UXVpw6luIGNyZcOzIGVsIEhPTEE/IiwibGsiOiJHaFJ4ZFduRHFXNGdZM0psdzdNZ1pXd2dhRzlzWVEiLCJicyI6ImMtT1M0UklfdEQtd05QUHd5anlGNUtMVXc1c1ZVbk1VUFB4OUhPMGwxc1Z5S1hMSkhOcnZYSHA0WVY1SmZyRkM0dUdOUUxJa016VXZGYXJrdVJ5WFBwY1dWRWxLdmtKeFlrNnFRcUpDVHFKQ1dXcGVDWmhSbEZxV1dReGtRalRzaU9ReTVOS0JtNm1RWEpwYWpLbE9JVFZQd2JXNEFHaGZvcjNFTVZrQlJnQSJ9",
    //   "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK%2FUXVpw6luIGNyZcOzIGVsIEhPTEE%2FIiwibGsiOiJHaFJ4ZFduRHFXNGdZM0psdzdNZ1pXd2dhRzlzWVEiLCJicyI6ImMtT1M0UklfdEQtd05QUHd5anlGNUtMVXc1c1ZVbk1VUFB4OUhPMGwxc1Z5S1hMSkhOcnZYSHA0WVY1SmZyRkM0dUdOUUxJa016VXZGYXJrdVJ5WFBwY1dWRWxLdmtKeFlrNnFRcUpDVHFKQ1dXcGVDWmhSbEZxV1dReGtRalRzaU9ReTVOS0JtNm1RWEpwYWpLbE9JVFZQd2JXNEFHaGZvcjNFTVZrQlJnQSJ9"
    // }, {
    //   "question": "¿Cuántos años tiene HOLA?",
    //   "title": "Germán Garmendia - Wikipedia, la enciclopedia libre",
    //   "link": "https://es.wikipedia.org/wiki/Germ%C3%A1n_Garmendia",
    //   "displayed_link": "https://es.wikipedia.org › wiki › Germán_Garmendia",
    //   "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK/Q3XDoW50b3MgYcOxb3MgdGllbmUgSE9MQT8iLCJsayI6IkdobGpkY09oYm5SdmN5Qmh3N0Z2Y3lCMGFXVnVaU0JvYjJ4aCIsImJzIjoiYy1PUzRSSV90RC13TlBQd3lqeUY1S0xVdzVzVlVuTVVQUHg5SE8wbDFzVnlLWExKSE5ydlhIcDRZVjVKZnJGQzR1R05RTElrTXpVdkZhcmt1UnlYUHBjV1ZFbEt2a0p4WWs2cVFxSkNUcUpDV1dwZUNaaFJsRnFXV1F4a1FqVHNpT1F5NU5LQm02bVFYSnBhaktsT0lUVlB3Ylc0QUdoZm9yM0VNVmtCUmdBIn0=",
    //   "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK%2FQ3XDoW50b3MgYcOxb3MgdGllbmUgSE9MQT8iLCJsayI6IkdobGpkY09oYm5SdmN5Qmh3N0Z2Y3lCMGFXVnVaU0JvYjJ4aCIsImJzIjoiYy1PUzRSSV90RC13TlBQd3lqeUY1S0xVdzVzVlVuTVVQUHg5SE8wbDFzVnlLWExKSE5ydlhIcDRZVjVKZnJGQzR1R05RTElrTXpVdkZhcmt1UnlYUHBjV1ZFbEt2a0p4WWs2cVFxSkNUcUpDV1dwZUNaaFJsRnFXV1F4a1FqVHNpT1F5NU5LQm02bVFYSnBhaktsT0lUVlB3Ylc0QUdoZm9yM0VNVmtCUmdBIn0%3D"
    // }, {
    //   "question": "¿Cuándo sale a la venta la revista HOLA?",
    //   "snippet": "le ofrece cada semana a sus lectores exclusivas y reportajes de lujo, fotos de de gran calidad, noticias de actualidad, toda la revista ¡HOLA! al completo página a página. Hazte Premium y accede a esta revista y decenas más de manera ilimitada.",
    //   "title": "Hola - Kiosko y más",
    //   "link": "https://www.kioskoymas.com/Publicacion/hola/Hola",
    //   "displayed_link": "https://www.kioskoymas.com › Publicacion › hola › Hola",
    //   "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK/Q3XDoW5kbyBzYWxlIGEgbGEgdmVudGEgbGEgcmV2aXN0YSBIT0xBPyIsImxrIjoiYzVQU0xpdzl2RkloNWZEYVJJV1VWSVdjUklYaTFOekVQQ0NWbUFQbUZxV1daUmFYSkNwazVPY2tBZ0EiLCJicyI6ImMtT1M0UklfdEQtd05QUHd5anlGNUtMVXc1c1ZVbk1VUFB4OUhPMGwxc1Z5S1hMSkhOcnZYSHA0WVY1SmZyRkM0dUdOUUxJa016VXZGYXJrdVJ5WFBwY1dWRWxLdmtKeFlrNnFRcUpDVHFKQ1dXcGVDWmhSbEZxV1dReGtRalRzaU9ReTVOS0JtNm1RWEpwYWpLbE9JVFZQd2JXNEFHaGZvcjNFTVZrQlJnQSJ9",
    //   "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK%2FQ3XDoW5kbyBzYWxlIGEgbGEgdmVudGEgbGEgcmV2aXN0YSBIT0xBPyIsImxrIjoiYzVQU0xpdzl2RkloNWZEYVJJV1VWSVdjUklYaTFOekVQQ0NWbUFQbUZxV1daUmFYSkNwazVPY2tBZ0EiLCJicyI6ImMtT1M0UklfdEQtd05QUHd5anlGNUtMVXc1c1ZVbk1VUFB4OUhPMGwxc1Z5S1hMSkhOcnZYSHA0WVY1SmZyRkM0dUdOUUxJa016VXZGYXJrdVJ5WFBwY1dWRWxLdmtKeFlrNnFRcUpDVHFKQ1dXcGVDWmhSbEZxV1dReGtRalRzaU9ReTVOS0JtNm1RWEpwYWpLbE9JVFZQd2JXNEFHaGZvcjNFTVZrQlJnQSJ9"
    // }, {
    //   "question": "¿Cuánto cuesta la revista HOLA en España?",
    //   "snippet": "A través de HOLA.com podrás acceder a los diferentes planes de suscripción disponibles y elegir el que más se adapte a tus necesidades: el pase semanal que, gracias a la oferta de lanzamiento, podrás conseguir por solo 1 €; la suscripción mensual, por 4,90 €/mes; o la suscripción anual, que estará disponible por 49€.",
    //   "title": "La revista ¡HOLA! lanza ¡HOLA! Plus, contenido exclusivo",
    //   "date": "20 ene 2021",
    //   "link": "https://www.hola.com/actualidad/20210120182596/revista-hola-plus-lanzamiento/",
    //   "displayed_link": "https://www.hola.com › actualidad › revista-hola-plus-lan...",
    //   "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kUJgdOJL9Xim3J-tH4dZCpljBDTOzqW1pL7jJ6Pc&s",
    //   "next_page_token": "eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK/Q3XDoW50byBjdWVzdGEgbGEgcmV2aXN0YSBIT0xBIGVuIEVzcGHDsWE/IiwibGsiOiJjNVBTU0M1TnpDdkpWMGd1VFMwdVNWVElTVlFvU2kzTEJERXo4b0djMUR5RjFPS0N4TU1iRXdFIiwiYnMiOiJjLU9TNFJJX3RELXdOUFB3eWp5RjVLTFV3NXNWVW5NVVBQeDlITzBsMXNWeUtYTEpITnJ2WEhwNFlWNUpmckZDNHVHTlFMSWtNelV2RmFya3VSeVhQcGNXVkVsS3ZrSnhZazZxUXFKQ1RxSkNXV3BlQ1poUmxGcVdXUXhrUWpUc2lPUXk1TktCbTZtUVhKcGFqS2xPSVRWUHdiVzRBR2hmb3IzRU1Wa0JSZ0EifQ==",
    //   "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiI2MjAiLCJmYyI6IkVxRUJDbUpCUVhSV2JHSkRVRnBMWVdwRFh6TTJXbFZTU2xaQ1RrMDRRVTVsYTAxTFVsTjVjVFZWWDBkaWVGaHlWMVJXV0RacmRrNVVMUzFZTlUxVlIyRm5SamxUVGtoVlgzVjNiVGxSYlZCTVowcHdTRTVPZEhoSFVUUkNOaTFWVlhaelJsTTJkeElYVEVWcFlWazNVMFZDZGtkbU5VNXZVRzh0ZFZWdFFYTWFJa0ZFVlhsRlIyUXRaV2cyZEZWMVgyRk9VM2hIYTB0NlMzbGphbTltZFhaNmMyYyIsImZjdiI6IjMiLCJlaSI6IkxFaWFZN1NFQnZHZjVOb1BvLXVVbUFzIiwicWMiOiJDZ1JvYjJ4aEVBNTlYUVFsUHciLCJxdWVzdGlvbiI6IsK%2FQ3XDoW50byBjdWVzdGEgbGEgcmV2aXN0YSBIT0xBIGVuIEVzcGHDsWE%2FIiwibGsiOiJjNVBTU0M1TnpDdkpWMGd1VFMwdVNWVElTVlFvU2kzTEJERXo4b0djMUR5RjFPS0N4TU1iRXdFIiwiYnMiOiJjLU9TNFJJX3RELXdOUFB3eWp5RjVLTFV3NXNWVW5NVVBQeDlITzBsMXNWeUtYTEpITnJ2WEhwNFlWNUpmckZDNHVHTlFMSWtNelV2RmFya3VSeVhQcGNXVkVsS3ZrSnhZazZxUXFKQ1RxSkNXV3BlQ1poUmxGcVdXUXhrUWpUc2lPUXk1TktCbTZtUVhKcGFqS2xPSVRWUHdiVzRBR2hmb3IzRU1Wa0JSZ0EifQ%3D%3D"
    // }],
    // "organic_results": [{
    //   "position": 1,
    //   "title": "HOLA.com, diario de actualidad, moda y belleza",
    //   "link": "https://www.hola.com/",
    //   "displayed_link": "https://www.hola.com",
    //   "snippet": "Número 1 en actualidad y tendencias de moda, belleza y estilo de vida. Noticias diarias sobre las estrellas de cine, la música, tendencias de moda, ...",
    //   "sitelinks": {
    //     "expanded": [{
    //       "title": "Realeza Flecha",
    //       "link": "https://www.hola.com/realeza/",
    //       "snippet": "Reino Unido - Familia Real danesa - Casa Real de Suecia"
    //     }, {
    //       "title": "Revista ¡HOLA!",
    //       "link": "https://www.hola.com/tags/revista-hola/",
    //       "snippet": "Revista Hola - Descubre las últimas noticias, vídeos y fotos ..."
    //     }, {
    //       "title": "HOLA.com, tu revista en internet",
    //       "link": "https://www.hola.com/plus/",
    //       "snippet": "Actualidad - Realeza - Revistas - Moda - Casas - ..."
    //     }, {
    //       "title": "Actualidad",
    //       "link": "https://www.hola.com/actualidad/",
    //       "snippet": "La actualidad más completa para estar informada diariamente de ..."
    //     }]
    //   }
    // }, {
    //   "position": 2,
    //   "title": "Noticias de Revista ¡HOLA! - LA NACION",
    //   "link": "https://www.lanacion.com.ar/revista-hola/",
    //   "displayed_link": "https://www.lanacion.com.ar › revista-hola",
    //   "snippet": "Últimas Noticias de Revista ¡HOLA!: Wanda Nara nos recibe en su casa de Tigre y habla de su separación de Icardi y la división de bienes, Entramos a la Isla ...",
    //   "snippet_highlighted_words": ["HOLA"],
    //   "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:WzQOkQiTIn8J:https://www.lanacion.com.ar/revista-hola/&cd=34&hl=es-419&ct=clnk&gl=ar"
    // }, {
    //   "position": 3,
    //   "title": "¡Hola! - Wikipedia, la enciclopedia libre",
    //   "link": "https://es.wikipedia.org/wiki/%C2%A1Hola!",
    //   "displayed_link": "https://es.wikipedia.org › wiki › ¡Hola!",
    //   "snippet": "¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales ...",
    //   "snippet_highlighted_words": ["Hola"],
    //   "rich_snippet": {
    //     "bottom": {
    //       "extensions": ["Fundador: Antonio Sánchez Gómez y Mercedes ...", "País: España", "Sede central: Madrid", "Fundación: 1944"],
    //       "detected_extensions": {"fundación": 1944}
    //     }
    //   },
    //   "cached_page_link": "https://webcache.googleusercontent.com/search?q=cache:c9oqyiEBYEAJ:https://es.wikipedia.org/wiki/%25C2%25A1Hola!&cd=38&hl=es-419&ct=clnk&gl=ar",
    //   "related_pages_link": "https://www.google.com/search?gl=ar&q=related:https://es.wikipedia.org/wiki/%25C2%25A1Hola!+hola&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQH3oECDYQCQ"
    // }, {
    //   "position": 4,
    //   "title": "¡Hola! Argentina (@holaarg) • Instagram photos and videos",
    //   "link": "https://www.instagram.com/holaarg/?hl=es",
    //   "displayed_link": "https://www.instagram.com › holaarg",
    //   "snippet": "340k Followers, 652 Following, 3362 Posts - See Instagram photos and videos from ¡Hola! Argentina (@holaarg)",
    //   "snippet_highlighted_words": ["Hola"]
    // }],
    // "related_searches": [{
    //   "query": "hola vpn",
    //   "link": "https://www.google.com/search?gl=ar&q=Hola+VPN&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhXEAE"
    // }, {
    //   "query": "hola argentina",
    //   "link": "https://www.google.com/search?gl=ar&q=HOLA+Argentina&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhWEAE"
    // }, {
    //   "query": "hola españa",
    //   "link": "https://www.google.com/search?gl=ar&q=HOLA+Espa%C3%B1a&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhVEAE"
    // }, {
    //   "query": "hola méxico",
    //   "link": "https://www.google.com/search?gl=ar&q=HOLA+M%C3%A9xico&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhTEAE"
    // }, {
    //   "query": "hola argentina última",
    //   "link": "https://www.google.com/search?gl=ar&q=Hola+Argentina+%C3%BAltima&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhPEAE"
    // }, {
    //   "query": "revista hola",
    //   "link": "https://www.google.com/search?gl=ar&q=Revista+HOLA&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhOEAE"
    // }, {
    //   "query": "hola como estás",
    //   "link": "https://www.google.com/search?gl=ar&q=Hola+como+est%C3%A1s&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhNEAE"
    // }, {
    //   "query": "hola wikipedia",
    //   "link": "https://www.google.com/search?gl=ar&q=Hola+Wikipedia&sa=X&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ1QJ6BAhLEAE"
    // }],
    // "pagination": {
    //   "current": 1,
    //   "next": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=10&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8NMDegQIARAW",
    //   "other_pages": {
    //     "2": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=10&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAE",
    //     "3": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=20&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAG",
    //     "4": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=30&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAI",
    //     "5": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=40&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAK",
    //     "6": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=50&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAM",
    //     "7": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=60&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAO",
    //     "8": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=70&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAQ",
    //     "9": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=80&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAS",
    //     "10": "https://www.google.com/search?q=hola&gl=ar&ei=LEiaY7SEBvGf5NoPo-uUmAs&start=90&sa=N&ved=2ahUKEwi0you-jvr7AhXxD1kFHaM1BbMQ8tMDegQIARAU"
    //   }
    // },
    // "serpapi_pagination": {
    //   "current": 1,
    //   "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=10",
    //   "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=10",
    //   "other_pages": {
    //     "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=10",
    //     "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=20",
    //     "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=30",
    //     "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=40",
    //     "6": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=50",
    //     "7": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=60",
    //     "8": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=70",
    //     "9": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=80",
    //     "10": "https://serpapi.com/search.json?device=desktop&engine=google&gl=ar&google_domain=google.com&location=Buenos+Aires%2C+Buenos+Aires%2C+Argentina&num=10&q=hola&start=90"
    //   }
    // }
    search_metadata: {
        id: "63c3ab6014b245ec5feb655d",
        status: "Success",
        json_endpoint: "https://serpapi.com/searches/73d35abf88d11a25/63c3ab6014b245ec5feb655d.json",
        created_at: "2023-01-15 07:29:36 UTC",
        processed_at: "2023-01-15 07:29:36 UTC",
        google_url: "https://www.google.com/search?q=coffee&oq=coffee&uule=w+CAIQICImU2FuIEZyYW5jaXNjbyxDYWxpZm9ybmlhLFVuaXRlZCBTdGF0ZXM&gl=us&num=10&tbm=&start=0&sourceid=chrome&ie=UTF-8",
        raw_html_file: "https://serpapi.com/searches/73d35abf88d11a25/63c3ab6014b245ec5feb655d.html",
        total_time_taken: 6.29,
    },
    search_parameters: {
        engine: "google",
        q: "coffee",
        location_requested: "San Francisco, California, United States",
        location_used: "San Francisco,California,United States",
        google_domain: "google.com",
        gl: "us",
        start: 0,
        num: "10",
        device: "desktop",
    },
    search_information: {
        organic_results_state: "Results for exact spelling",
        query_displayed: "coffee",
        total_results: 3990000000,
        time_taken_displayed: 0.71,
        menu_items: [
            {
                position: 1,
                title: "Images",
                link: "https://www.google.com/search?gl=us&q=coffee&tbm=isch&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ0pQJegQIChAB",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=0&tbm=isch",
            },
            {
                position: 2,
                title: "Maps",
                link: "https://maps.google.com/maps?q=coffee&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ0pQJegQICRAB",
            },
            {
                position: 3,
                title: "Shopping",
                link: "https://www.google.com/search?gl=us&q=coffee&tbm=shop&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ0pQJegQIBxAB",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=0&tbm=shop",
            },
            {
                position: 4,
                title: "Videos",
                link: "https://www.google.com/search?gl=us&q=coffee&tbm=vid&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ0pQJegQIBhAB",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=0&tbm=vid",
            },
        ],
    },
    local_map: {
        link: "https://www.google.com/search?gl=us&q=coffee&npsic=0&rflfq=1&rldoc=1&rllag=37775570,-122417814,233&tbm=lcl&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQtgN6BAguEAE",
        image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/4bef88fb458669316f1a56ddb508a54b.png",
        gps_coordinates: {
            latitude: 37.77557,
            longitude: -122.417814,
            altitude: 233,
        },
    },
    local_results: {
        more_locations_link: "https://www.google.com/search?gl=us&tbs=lf:1,lf_ui:9&tbm=lcl&q=coffee&rflfq=1&num=10&uule=w+CAIQICImU2FuIEZyYW5jaXNjbyxDYWxpZm9ybmlhLFVuaXRlZCBTdGF0ZXM&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQjGp6BAgvEAI",
        places: [
            {
                position: 1,
                title: "Blue Bottle Coffee",
                place_id: "6594796727466431486",
                lsig: "AB86z5WHuJrvT45mfoRwdra21fgv",
                place_id_search: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&lsig=AB86z5WHuJrvT45mfoRwdra21fgv&ludocid=6594796727466431486&num=10&q=coffee&start=0&tbm=lcl",
                reviews: 20,
                price: "$$",
                type: "Coffee shop",
                hours: "Closed ⋅ Opens 7 AM Sun",
                address: "55 S Van Ness Ave",
                thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/87ee4004900b558117eea9a4691f9d4de347af5f252001fb713b65f1e56999c0680e66f501790f2c.jpeg",
                gps_coordinates: { latitude: 37.773903, longitude: -122.4186 },
            },
            {
                position: 2,
                title: "Peet's Coffee",
                place_id: "8508373650890724757",
                lsig: "AB86z5UFjibWHhAnFdLlJvlyPXDV",
                place_id_search: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&lsig=AB86z5UFjibWHhAnFdLlJvlyPXDV&ludocid=8508373650890724757&num=10&q=coffee&start=0&tbm=lcl",
                reviews: 448,
                price: "$",
                type: "Coffee shop",
                hours: "Closed ⋅ Opens 6:30 AM Mon",
                address: "1400 Mission St Suite 130",
                thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/87ee4004900b558117eea9a4691f9d4dac41757d1f8850834d3c11c6e61f696dc2a2ff481c0254e8.jpeg",
                gps_coordinates: { latitude: 37.775284, longitude: -122.41619 },
            },
            {
                position: 3,
                title: "Starbucks",
                place_id: "10137591685604930318",
                lsig: "AB86z5V-7r9t47kMW6tZgjvers98",
                place_id_search: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&lsig=AB86z5V-7r9t47kMW6tZgjvers98&ludocid=10137591685604930318&num=10&q=coffee&start=0&tbm=lcl",
                reviews: 73,
                price: "$$",
                type: "Coffee shop",
                hours: "Closed ⋅ Opens 6 AM Sun",
                address: "150 Van Ness Ave · In 150 Van Ness",
                thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/87ee4004900b558117eea9a4691f9d4d61f904e2cd08cb5d88685762bb3c01795ea1a4a58b8e47f0.jpeg",
                gps_coordinates: { latitude: 37.777237, longitude: -122.41944 },
            },
        ],
    },
    knowledge_graph: {
        title: "Coffee",
        type: "Drink",
        kgmid: "/m/02vqfm",
        knowledge_graph_search_link: "https://www.google.com/search?kgmid=/m/02vqfm&hl=en-US&q=Coffee&kgs=dc445234ed0436ce&shndl=0&source=sh/x/kp/1",
        serpapi_knowledge_graph_search_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en-US&kgmid=%2Fm%2F02vqfm&location=San+Francisco%2C+California%2C+United+States&num=10&q=Coffee&start=0",
        tabs: [
            {
                text: "beans",
                link: "https://www.google.com/search?gl=us&q=Coffee+beans&uds=Cw6AW3sibCI6ImJlYW5zIiwicHEiOiJjb2ZmZWUifV0D&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxKsJegUIrQEQAQ&ictx=0",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Coffee+beans&start=0",
            },
            {
                text: "near me",
                link: "https://www.google.com/search?gl=us&q=Coffee+near+me&uds=Cw-AW3sibCI6Im5lYXIgbWUiLCJwcSI6ImNvZmZlZSJ9XQM&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxKsJegUIrgEQAQ&ictx=0",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Coffee+near+me&start=0",
            },
            {
                text: "brands",
                link: "https://www.google.com/search?gl=us&q=Coffee+brands&uds=iw6AW3sibCI6ImJyYW5kcyIsInBxIjoiY29mZmVlIn1dAw&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxKsJegUIrAEQAQ&ictx=0",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Coffee+brands&start=0",
            },
            {
                text: "Best",
                link: "https://www.google.com/search?gl=us&q=Best+coffee&uds=iw2AW3sibCI6IkJlc3QiLCJwcSI6ImNvZmZlZSJ9XQM&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxKsJegUIqwEQAQ&ictx=0",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Best+coffee&start=0",
            },
        ],
        header_images: [
            {
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510fc6220957dc51c43027f9f8289c6fba2a6f7886a31e9be055.jpeg",
                source: "https://en.wikipedia.org/wiki/Coffee",
            },
            {
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510fc6220957dc51c4300af91d509aedaa936c19960b3d6d38ac.jpeg",
                source: "https://www.tastingtable.com/718678/coffee-brands-ranked-from-worst-to-best/",
            },
            {
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510fc6220957dc51c4303f04ce2124c6a003c51885ac88e60024.jpeg",
                source: "https://sf.eater.com/maps/best-coffee-shops-san-francisco",
            },
            {
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510fc6220957dc51c4309b0d0f7bc4ba1095fb68850ba4baed3f.jpeg",
                source: "https://www.medicalnewstoday.com/articles/270202",
            },
            {
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510fc6220957dc51c4302acd926fa6d93b0c27a204b9bb80dc1c.jpeg",
                source: "https://www.1951coffee.com/",
            },
        ],
        description: "Coffee is a drink prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It is the most popular hot drink in the world. Seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans.",
        source: { name: "Wikipedia", link: "https://en.wikipedia.org/wiki/Coffee" },
        acidity_level: "4.85 to 5.10 healthline.com",
        acidity_level_links: [
            {
                text: "Acidity level",
                link: "https://www.google.com/search?gl=us&q=coffee+acidity+level&stick=H4sIAAAAAAAAAOPgE-LUz9U3MCorTMvVksjPttIvzsgvKklLTC6xSkzOTInPSS1LzVnEKpKcn5aWmqoAEsssqVQACwMA6FvyLz4AAAA&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ6BMoAHoECH8QAg",
            },
        ],
        buttons: [
            {
                text: "Caffeine",
                subtitle: "How Much Caffeine In Coffee",
                title: "How Much Caffeine in a Cup of Coffee? A Detailed Guide - Healthline",
                link: "https://www.healthline.com/nutrition/how-much-caffeine-in-coffee#:~:text=The%20average%20caffeine%20content%20of,of%20caffeine%20(on%20average).",
                displayed_link: "https://www.healthline.com › nutrition › how-much-caffei...",
                date: "Jun 3, 2017",
                snippet: "The average caffeine content of an 8-oz, brewed cup of coffee is 95 mg. A single espresso or espresso-based drink contains 63 mg, and decaf coffee contains about 3 mg of caffeine (on average).",
                snippet_highlighted_words: ["95 mg"],
                search_link: "https://www.google.com/search?gl=us&q=how+much+caffeine+in+coffee&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQrooIegUIiAEQBA",
                serpapi_search_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=how+much+caffeine+in+coffee&start=0",
            },
            {
                text: "Energy Amount",
                subtitle: "How Many Calories In Coffee",
                table: [
                    [
                        "Amount Per 1 fl oz (29.6 g)100 grams6 fl oz (178 g)1 cup (8 fl oz) (237 g)1 cup (8 fl oz) (237 g)",
                    ],
                    ["Calories 1"],
                ],
                search_link: "https://www.google.com/search?gl=us&q=how+many+calories+in+coffee&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQrooIegUIiAEQCA",
                serpapi_search_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=how+many+calories+in+coffee&start=0",
            },
            {
                text: "Price",
                subtitle: "Price Of Coffee",
                title: "1-2 tablespoons",
                link: "https://www.swiftrivercoffee.com/blog/2019/3/6/how-to-brew-the-perfect-pot-of-coffee#:~:text=The%20standard%20ratio%20for%20brewing,to%2012%20ounces%20or%20larger.",
                displayed_link: "https://www.swiftrivercoffee.com › blog › how-to-brew-t...",
                date: "Mar 6, 2019",
                snippet: "The standard ratio for brewing coffee is 1-2 tablespoons of ground coffee per 6 ounces of water – 1 tablespoon for lighter coffee and 2 for stronger coffee. That 6-ounce measure is equivalent to one “cup” in a standard coffeemaker, but keep in mind that the standard mug size is closer to 12 ounces or larger.",
                snippet_highlighted_words: [
                    "1-2 tablespoons of ground coffee per 6 ounces of water",
                ],
                answer: "1-2 tablespoons",
                search_link: "https://www.google.com/search?gl=us&q=price+of+coffee&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQrooIegUIiAEQDA",
                serpapi_search_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=price+of+coffee&start=0",
            },
            {
                text: "Benefits",
                subtitle: "Benefits Of Coffee",
                thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw291F_bMI7I2Y9Wqq5HQ4rby-E36s6Nn58K_CnQ2xYQ&s",
                title: "9 Health Benefits of Coffee, Based on Science - Healthline",
                link: "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
                displayed_link: "https://www.healthline.com › nutrition › top-evidence-bas...",
                snippet: "9 Unique Benefits of Coffee",
                snippet_highlighted_words: ["9 Unique Benefits of Coffee"],
                list: [
                    "Boosts energy levels. ... ",
                    "May be linked to a lower risk of type 2 diabetes. ... ",
                    "Could support brain health. ... ",
                    "May promote weight management. ... ",
                    "Linked to a lower risk of depression. ... ",
                    "Could protect against liver conditions. ... ",
                    "Supports heart health. ... ",
                    "Could increase longevity.",
                ],
                search_link: "https://www.google.com/search?gl=us&q=benefits+of+coffee&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQrooIegUIiAEQEg",
                serpapi_search_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=benefits+of+coffee&start=0",
            },
            {
                text: "Brands",
                subtitle: "Coffee Brands",
                title: "95 Coffee Brand Names For Your Brew-Tiful Brand | Kidadl",
                link: "https://kidadl.com/baby-names/inspiration/coffee-brand-names-for-your-brew-tiful-brand#:~:text=Some%20of%20the%20popular%20coffee,roasted%20Arabica%20or%20Java%20beans.",
                displayed_link: "https://kidadl.com › baby-names › inspiration › coffee-br...",
                snippet: "Some of the popular coffee brands in present times are Maxwell House, Starbucks, Costa Coffee, Lavazza, Keurig, Gevalia, Folgers, Peet's Coffee, and Caribou Coffee. In America and Canada, millions of people every day like to enjoy a delicious and rich cup of coffee prepared from roasted Arabica or Java beans.",
                snippet_highlighted_words: [
                    "Maxwell House, Starbucks, Costa Coffee, Lavazza, Keurig, Gevalia, Folgers, Peet's Coffee, and Caribou Coffee",
                ],
                search_link: "https://www.google.com/search?gl=us&q=coffee+brands&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQrooIegUIiAEQFg",
                serpapi_search_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee+brands&start=0",
            },
        ],
        people_also_search_for: [
            {
                name: "Tea",
                link: "https://www.google.com/search?gl=us&q=Tea&si=AEcPFx6l3RvH8SFlhHZyn7jIc6m2bU9vmoFvFAMQv2WWSYjXN-FbUNwAoS2r52z2bmCxqRoQ7_-R9-0Bbor7JUlQxt927gredoA_AXxO2ROINfUz-a-OSowoxsA4qmlR4Y9ESg4dWEJ7IQ2VdzKiRbLbxXV_2AgquGWPsCyWjiIIW9JG4qlmw0NXFjip6b-D_rNwtgiSne7YdxIiqld-qpPR8DKRv-wLtLmrhzdIktgJg437lQPlUVvjmQ1wClxddFTiZnotS4E7XXVtZ-DGWioVXC9EldBqxw%3D%3D&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxA16BQiCARAF",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Tea&si=AEcPFx6l3RvH8SFlhHZyn7jIc6m2bU9vmoFvFAMQv2WWSYjXN-FbUNwAoS2r52z2bmCxqRoQ7_-R9-0Bbor7JUlQxt927gredoA_AXxO2ROINfUz-a-OSowoxsA4qmlR4Y9ESg4dWEJ7IQ2VdzKiRbLbxXV_2AgquGWPsCyWjiIIW9JG4qlmw0NXFjip6b-D_rNwtgiSne7YdxIiqld-qpPR8DKRv-wLtLmrhzdIktgJg437lQPlUVvjmQ1wClxddFTiZnotS4E7XXVtZ-DGWioVXC9EldBqxw%3D%3D&start=0",
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510f20879872cf3b46150622bed8dcfa6a83309bc639fdeb88ebf84d94476f6c9190.jpeg",
            },
            {
                name: "Espresso",
                link: "https://www.google.com/search?gl=us&q=Espresso&si=AEcPFx6l3RvH8SFlhHZyn7jIc6m2bU9vmoFvFAMQv2WWSYjXN6GHyLTR_RgSxpNpg3kMU0AJHCEhu57u8AWLIyEc8_v_FULctdb3LNustFf7E1MTl_zzpxMh_3RdstloCs8dgBQAAAYVqvOvvSLO2_YLJbmpfdSLrYNbwiSnodaSLxtx_LfZmrg6e7Zo0NnHXDf9dxEoNZJju1MHgCUYavsgSukbW9LPrheOOmsx_rgpvRE4_ZXIMGaGV7-ECPuCM7j0EUEP59Tlp6ntUdKq5GR1YiepMyya73uVkQigmigUH8U_NTVtHMA%3D&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxA16BQiCARAH",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Espresso&si=AEcPFx6l3RvH8SFlhHZyn7jIc6m2bU9vmoFvFAMQv2WWSYjXN6GHyLTR_RgSxpNpg3kMU0AJHCEhu57u8AWLIyEc8_v_FULctdb3LNustFf7E1MTl_zzpxMh_3RdstloCs8dgBQAAAYVqvOvvSLO2_YLJbmpfdSLrYNbwiSnodaSLxtx_LfZmrg6e7Zo0NnHXDf9dxEoNZJju1MHgCUYavsgSukbW9LPrheOOmsx_rgpvRE4_ZXIMGaGV7-ECPuCM7j0EUEP59Tlp6ntUdKq5GR1YiepMyya73uVkQigmigUH8U_NTVtHMA%3D&start=0",
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510f20879872cf3b46150622bed8dcfa6a8396789076802fb3baeb6cc748815a9d51.jpeg",
            },
            {
                name: "Cappuccino",
                link: "https://www.google.com/search?gl=us&q=Cappuccino&si=AEcPFx6l3RvH8SFlhHZyn7jIc6m2bU9vmoFvFAMQv2WWSYjXN5METOZax3nqx2meQLt7FY3NiAeK5tsqNzGN0PwtD6Xs-l-h7Irk0Wg7s0etjulToZNyMqcNjnplJ0ENMbUEvAdSxbXDluddG5TqenL2snKAG39eUj0G9BMQhsRpFAN3nA_-s0se0PUt5WKxYoqQPAYwYxGWVA9vzI6ucKIWIUMidiZLQvohV0DIFVa8GQd8-1cxgvRUw7V3fWqrKwKALecmIYu6OqoUqk4V-qsd9__b9mQQ6UYGA6FVkzit1ghMU0Vxxq4%3D&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxA16BQiCARAJ",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Cappuccino&si=AEcPFx6l3RvH8SFlhHZyn7jIc6m2bU9vmoFvFAMQv2WWSYjXN5METOZax3nqx2meQLt7FY3NiAeK5tsqNzGN0PwtD6Xs-l-h7Irk0Wg7s0etjulToZNyMqcNjnplJ0ENMbUEvAdSxbXDluddG5TqenL2snKAG39eUj0G9BMQhsRpFAN3nA_-s0se0PUt5WKxYoqQPAYwYxGWVA9vzI6ucKIWIUMidiZLQvohV0DIFVa8GQd8-1cxgvRUw7V3fWqrKwKALecmIYu6OqoUqk4V-qsd9__b9mQQ6UYGA6FVkzit1ghMU0Vxxq4%3D&start=0",
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510f20879872cf3b46150622bed8dcfa6a830945c2cd6108571a6b40a6299b581fe3.jpeg",
            },
            {
                name: "Latte",
                link: "https://www.google.com/search?gl=us&q=Latte&si=AEcPFx5y3cpWB8t3QIlw940Bbgd-HLN-aNYSTraERzz0WyAsdOYqWumhiATXi7pDPXYwZ86G1X3peLv4z07uyK-xZunZfEBD_MXfbyjDoZ_eW1AQ-7dg8smo3GzxHFre7-j4L6p-Ge4uDQKG-FWYGyY2vDaS_xAWbneeM8k-FPKyDlUdeZaoa44tBSaESTqAklajJKPB-v9LtF3pyL0DoHZU3PrsZ0YRq8eZyRcqRkXP3cIlY9cYNkPq-XWPpFQ0aNch4VWTAoG1KMFHC5uSaBXq-4p1BkUjJG2aA3Za1oui3kOZEyQD-wc%3D&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQxA16BQiCARAL",
                serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=Latte&si=AEcPFx5y3cpWB8t3QIlw940Bbgd-HLN-aNYSTraERzz0WyAsdOYqWumhiATXi7pDPXYwZ86G1X3peLv4z07uyK-xZunZfEBD_MXfbyjDoZ_eW1AQ-7dg8smo3GzxHFre7-j4L6p-Ge4uDQKG-FWYGyY2vDaS_xAWbneeM8k-FPKyDlUdeZaoa44tBSaESTqAklajJKPB-v9LtF3pyL0DoHZU3PrsZ0YRq8eZyRcqRkXP3cIlY9cYNkPq-XWPpFQ0aNch4VWTAoG1KMFHC5uSaBXq-4p1BkUjJG2aA3Za1oui3kOZEyQD-wc%3D&start=0",
                image: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/9993ebff4a1c0fdb5d47ac2c7ef2510f20879872cf3b46150622bed8dcfa6a832c6d299e1f7fe19bed62ab04e2bf840b.jpeg",
            },
        ],
        people_also_search_for_link: "https://www.google.com/search?gl=us&q=Coffee&stick=H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1BIMzU1LLEyuL_VIrSoJLUguKF7GyOeenpaWm7mBlBABkIv_mNwAAAA&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQMSgAegUIggEQAQ",
        people_also_search_for_stick: "H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1BIMzU1LLEyuL_VIrSoJLUguKF7GyOeenpaWm7mBlBABkIv_mNwAAAA",
        list: {
            trans_fat_regulation: ["0 g"],
            sugar: ["0 g"],
            caffeine: ["95 mg"],
            vitamin_c: ["0%"],
            calcium: ["0%"],
            iron: ["0%"],
            vitamin_d: ["0%"],
            vitamin_b6: ["0%"],
            cobalamin: ["0%"],
            magnesium: ["1%"],
        },
    },
    inline_images: [
        {
            link: "https://www.google.com/search?q=coffee&gl=us&tbm=isch&source=iu&ictx=1&vet=1&fir=cHhAmJrw8EtbWM%252CU6oJMnF-eeVTAM%252C%252Fm%252F02vqfm%253B9M1X2EDxsYNTZM%252CO0p2m8H_t7E6nM%252C_%253B59qm0h0fyrCXpM%252CFnVdc3HJuUKCjM%252C_%253BNXqDTA92ATu5eM%252CkzmdGVh8xu2RsM%252C_%253BHxDB5Vf9lDMcOM%252CQWNGPGJLuHfcYM%252C_&usg=AI4_-kREi7Nadv1oXnYu0B0ojkuB2jHjKA&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ_B16BQiFARAB#imgrc=cHhAmJrw8EtbWM",
            source: "https://en.wikipedia.org/wiki/Coffee",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/89d08b7a43695701cc036883578fb928659e4a86fb01aeafa3ff97828806b389.jpeg",
        },
        {
            link: "https://www.google.com/search?q=coffee&gl=us&tbm=isch&source=iu&ictx=1&vet=1&fir=cHhAmJrw8EtbWM%252CU6oJMnF-eeVTAM%252C_%253B9M1X2EDxsYNTZM%252CO0p2m8H_t7E6nM%252C_%253B59qm0h0fyrCXpM%252CFnVdc3HJuUKCjM%252C_%253BNXqDTA92ATu5eM%252CkzmdGVh8xu2RsM%252C_%253BHxDB5Vf9lDMcOM%252CQWNGPGJLuHfcYM%252C_&usg=AI4_-kS8JYzWjGorqQdaWRGbu7Suu2gM4Q&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ_h16BAh9EAE#imgrc=9M1X2EDxsYNTZM",
            source: "https://www.tastingtable.com/718678/coffee-brands-ranked-from-worst-to-best/",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/89d08b7a43695701279cbb37c57612d3cf564362591d98726f8c37ebc888c1a3.jpeg",
        },
        {
            link: "https://www.google.com/search?q=coffee&gl=us&tbm=isch&source=iu&ictx=1&vet=1&fir=cHhAmJrw8EtbWM%252CU6oJMnF-eeVTAM%252C_%253B9M1X2EDxsYNTZM%252CO0p2m8H_t7E6nM%252C_%253B59qm0h0fyrCXpM%252CFnVdc3HJuUKCjM%252C_%253BNXqDTA92ATu5eM%252CkzmdGVh8xu2RsM%252C_%253BHxDB5Vf9lDMcOM%252CQWNGPGJLuHfcYM%252C_&usg=AI4_-kS8JYzWjGorqQdaWRGbu7Suu2gM4Q&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ_h16BQiEARAB#imgrc=59qm0h0fyrCXpM",
            source: "https://sf.eater.com/maps/best-coffee-shops-san-francisco",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/89d08b7a43695701268a7ae055ec1f7c8836da3738ef4d54d6320ae945a3b722.jpeg",
        },
        {
            link: "https://www.google.com/search?q=coffee&gl=us&tbm=isch&source=iu&ictx=1&vet=1&fir=cHhAmJrw8EtbWM%252CU6oJMnF-eeVTAM%252C_%253B9M1X2EDxsYNTZM%252CO0p2m8H_t7E6nM%252C_%253B59qm0h0fyrCXpM%252CFnVdc3HJuUKCjM%252C_%253BNXqDTA92ATu5eM%252CkzmdGVh8xu2RsM%252C_%253BHxDB5Vf9lDMcOM%252CQWNGPGJLuHfcYM%252C_&usg=AI4_-kS8JYzWjGorqQdaWRGbu7Suu2gM4Q&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ_h16BQiDARAB#imgrc=NXqDTA92ATu5eM",
            source: "https://www.medicalnewstoday.com/articles/270202",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/89d08b7a436957012cd59ac5e454dcf21268baa4f4ea7edd84a334c4b977aabf.jpeg",
        },
        {
            link: "https://www.google.com/search?q=coffee&gl=us&tbm=isch&source=iu&ictx=1&vet=1&fir=cHhAmJrw8EtbWM%252CU6oJMnF-eeVTAM%252C_%253B9M1X2EDxsYNTZM%252CO0p2m8H_t7E6nM%252C_%253B59qm0h0fyrCXpM%252CFnVdc3HJuUKCjM%252C_%253BNXqDTA92ATu5eM%252CkzmdGVh8xu2RsM%252C_%253BHxDB5Vf9lDMcOM%252CQWNGPGJLuHfcYM%252C_&usg=AI4_-kS8JYzWjGorqQdaWRGbu7Suu2gM4Q&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ_h16BQiBARAB#imgrc=HxDB5Vf9lDMcOM",
            source: "https://www.1951coffee.com/",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/89d08b7a436957018fa987b70291ca48a3f6b115fb9c2cd3f7313cf06d32c1ce.jpeg",
        },
    ],
    related_questions: [
        {
            question: "Is coffee good for health?",
            snippet: "“For most people, moderate coffee consumption can be incorporated into a healthy diet.” Hu said that moderate coffee intake—about 2–5 cups a day—is linked to a lower likelihood of type 2 diabetes, heart disease, liver and endometrial cancers, Parkinson's disease, and depression.",
            title: "Is coffee good or bad for your health? | News",
            link: "https://www.hsph.harvard.edu/news/hsph-in-the-news/is-coffee-good-or-bad-for-your-health/#:~:text=%E2%80%9CFor%20most%20people%2C%20moderate%20coffee,%2C%20Parkinson's%20disease%2C%20and%20depression.",
            displayed_link: "https://www.hsph.harvard.edu › news › hsph-in-the-news",
            next_page_token: "eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiSXMgY29mZmVlIGdvb2QgZm9yIGhlYWx0aD8iLCJsayI6IkdoeHBjeUJwZENCamIyWm1aV1VnWjI5dlpDQm1iM0lnYUdWaGJIUm8iLCJicyI6ImMtT1M1NUx5TEZaSXprOUxTMDFWU01fUFQxRkl5eTlTeUVoTnpDbkpzSmU0WThDbHlxVVFucEZZb3BBSlY1V1lsNktRV1ZLc2tKU2FsNW9HWk5oTFRLcmxVdUNTRHNfSVRNNVFTQ29DeVVPVlpvSlVGWmZZU193MzRGTGhrZ2NibEZpVXFsQ1NrYXBnb2xCU1daQmFySkNmQmxWdExfR0dYWUFSQUEiLCJpZCI6ImZjXzEifQ==",
            serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiSXMgY29mZmVlIGdvb2QgZm9yIGhlYWx0aD8iLCJsayI6IkdoeHBjeUJwZENCamIyWm1aV1VnWjI5dlpDQm1iM0lnYUdWaGJIUm8iLCJicyI6ImMtT1M1NUx5TEZaSXprOUxTMDFWU01fUFQxRkl5eTlTeUVoTnpDbkpzSmU0WThDbHlxVVFucEZZb3BBSlY1V1lsNktRV1ZLc2tKU2FsNW9HWk5oTFRLcmxVdUNTRHNfSVRNNVFTQ29DeVVPVlpvSlVGWmZZU193MzRGTGhrZ2NibEZpVXFsQ1NrYXBnb2xCU1daQmFySkNmQmxWdExfR0dYWUFSQUEiLCJpZCI6ImZjXzEifQ%3D%3D",
        },
        {
            question: "What is coffee and its benefits?",
            snippet: "Coffee is a popular beverage that researchers have studied extensively for its many health benefits, including its ability to increase energy levels, promote weight management, enhance athletic performance, and protect against chronic disease.",
            title: "9 Health Benefits of Coffee, Based on Science - Healthline",
            date: "Jan 11, 2022",
            link: "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee#:~:text=Coffee%20is%20a%20popular%20beverage,and%20protect%20against%20chronic%20disease.",
            displayed_link: "https://www.healthline.com › Wellness Topics › Nutrition",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNbtRyoyOSY2CDzF9TgPhpTeMSswGP7s5DM8Ll19R1w&s",
            next_page_token: "eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiV2hhdCBpcyBjb2ZmZWUgYW5kIGl0cyBiZW5lZml0cz8iLCJsayI6IkdoOTNhR0YwSUdseklHTnZabVpsWlNCaGJtUWdhWFJ6SUdKbGJtVm1hWFJ6IiwiYnMiOiJjLU9TNTVMeUxGWkl6azlMUzAxVlNNX1BUMUZJeXk5U3lFaE56Q25Kc0plNFk4Q2x5cVVRbnBGWW9wQUpWNVdZbDZLUVdWS3NrSlNhbDVvR1pOaExUS3JsVXVDU0RzX0lUTTVRU0NvQ3lVT1Zab0pVRlpmWVNfdzM0Rkxoa2djYmxGaVVxbENTa2FwZ29sQlNXWkJhckpDZkJsVnRMX0dHWFlBUkFBIiwiaWQiOiJmY18xIn0=",
            serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiV2hhdCBpcyBjb2ZmZWUgYW5kIGl0cyBiZW5lZml0cz8iLCJsayI6IkdoOTNhR0YwSUdseklHTnZabVpsWlNCaGJtUWdhWFJ6SUdKbGJtVm1hWFJ6IiwiYnMiOiJjLU9TNTVMeUxGWkl6azlMUzAxVlNNX1BUMUZJeXk5U3lFaE56Q25Kc0plNFk4Q2x5cVVRbnBGWW9wQUpWNVdZbDZLUVdWS3NrSlNhbDVvR1pOaExUS3JsVXVDU0RzX0lUTTVRU0NvQ3lVT1Zab0pVRlpmWVNfdzM0Rkxoa2djYmxGaVVxbENTa2FwZ29sQlNXWkJhckpDZkJsVnRMX0dHWFlBUkFBIiwiaWQiOiJmY18xIn0%3D",
        },
        {
            question: "Which brand coffee is best?",
            title: "Best Coffee Brands",
            date: "Oct 26, 2022",
            link: "https://www.foodnetwork.com/how-to/packages/shopping/best-coffee-brands",
            list: [
                "Best Overall: La Colombe.",
                "Best Budget: Cafe Bustelo.",
                "Best Splurge: Intelligentsia's Choice.",
                "Best Espresso: Stumptown Hair Bender.",
                "Best Flavored: Chicago French Press.",
                "Best K-Cups: The Organic Coffee Co.",
                "Best Decaf: Peet's Decaf Major Dickason's Blend.",
            ],
            displayed_link: "https://www.foodnetwork.com › packages › shopping › b...",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkyF5eio1zch3JRdfs7KOFraHtpXI8Eo7cI3zqHZVfg&s",
            next_page_token: "eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiV2hpY2ggYnJhbmQgY29mZmVlIGlzIGJlc3Q/IiwibGsiOiJHaHAzYUdsamFDQmljbUZ1WkNCamIyWm1aV1VnYVhNZ1ltVnpkQSIsImJzIjoiYy1PUzU1THlMRlpJems5TFMwMVZTTV9QVDFGSXl5OVN5RWhOekNuSnNKZTRZOENseXFVUW5wRllvcEFKVjVXWWw2S1FXVktza0pTYWw1b0daTmhMVEtybFV1Q1NEc19JVE01UVNDb0N5VU9WWm9KVUZaZllTX3czNEZMaGtnY2JsRmlVcWxDU2thcGdvbEJTV1pCYXJKQ2ZCbFZ0TF9HR1hZQVJBQSIsImlkIjoiZmNfMSJ9",
            serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiV2hpY2ggYnJhbmQgY29mZmVlIGlzIGJlc3Q%2FIiwibGsiOiJHaHAzYUdsamFDQmljbUZ1WkNCamIyWm1aV1VnYVhNZ1ltVnpkQSIsImJzIjoiYy1PUzU1THlMRlpJems5TFMwMVZTTV9QVDFGSXl5OVN5RWhOekNuSnNKZTRZOENseXFVUW5wRllvcEFKVjVXWWw2S1FXVktza0pTYWw1b0daTmhMVEtybFV1Q1NEc19JVE01UVNDb0N5VU9WWm9KVUZaZllTX3czNEZMaGtnY2JsRmlVcWxDU2thcGdvbEJTV1pCYXJKQ2ZCbFZ0TF9HR1hZQVJBQSIsImlkIjoiZmNfMSJ9",
        },
        {
            question: "What are the 4 types of coffee?",
            snippet: "There are 4 types of coffee bean. Arabica, Robusta, Excelsa and Liberica. All four have radically different taste profiles.",
            title: "Coffee beans guide: Origin & different types | NESCAFÉ MENA - Nescafe",
            link: "https://www.nescafe.com/mena/en-ae/understanding-coffee/coffee-beans-guide#:~:text=There%20are%204%20types%20of,have%20radically%20different%20taste%20profiles.",
            displayed_link: "https://www.nescafe.com › en-ae › understanding-coffee",
            next_page_token: "eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiV2hhdCBhcmUgdGhlIDQgdHlwZXMgb2YgY29mZmVlPyIsImxrIjoiR2g1M2FHRjBJR0Z5WlNCMGFHVWdOQ0IwZVhCbGN5QnZaaUJqYjJabVpXVSIsImJzIjoiYy1PUzU1THlMRlpJems5TFMwMVZTTV9QVDFGSXl5OVN5RWhOekNuSnNKZTRZOENseXFVUW5wRllvcEFKVjVXWWw2S1FXVktza0pTYWw1b0daTmhMVEtybFV1Q1NEc19JVE01UVNDb0N5VU9WWm9KVUZaZllTX3czNEZMaGtnY2JsRmlVcWxDU2thcGdvbEJTV1pCYXJKQ2ZCbFZ0TF9HR1hZQVJBQSIsImlkIjoiZmNfMSJ9",
            serpapi_link: "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRW9zQkNreEJRMUIzYW1wUlpFeHpkQzFRTFZWdExUWktkVVE1VmpaSll6QnVVbTE0ZWs5b1ZqTXdUWEk1ZVZONWVtUnphRU5FT0d4bkxWaHFVamxKVVZZd1h6Rm9ORjl1WmxGTWVFNXdabWRWRWhkWmNYWkVXVGR1VEVseFEyODFUbTlRWjFBeWNUUkJjeG9pUVVaZk5rMUJUblZwWlhvd1RqTnhWSEpsZDI1aVUwTTRUMU53ZVVwUFgxaDJadyIsImZjdiI6IjMiLCJlaSI6IllxdkRZN25MSXFDbzVOb1BnUDJxNEFzIiwicWMiOiJDZ1pqYjJabVpXVVFBSDNNR2kwXyIsInF1ZXN0aW9uIjoiV2hhdCBhcmUgdGhlIDQgdHlwZXMgb2YgY29mZmVlPyIsImxrIjoiR2g1M2FHRjBJR0Z5WlNCMGFHVWdOQ0IwZVhCbGN5QnZaaUJqYjJabVpXVSIsImJzIjoiYy1PUzU1THlMRlpJems5TFMwMVZTTV9QVDFGSXl5OVN5RWhOekNuSnNKZTRZOENseXFVUW5wRllvcEFKVjVXWWw2S1FXVktza0pTYWw1b0daTmhMVEtybFV1Q1NEc19JVE01UVNDb0N5VU9WWm9KVUZaZllTX3czNEZMaGtnY2JsRmlVcWxDU2thcGdvbEJTV1pCYXJKQ2ZCbFZ0TF9HR1hZQVJBQSIsImlkIjoiZmNfMSJ9",
        },
    ],
    organic_results: [
        {
            position: 1,
            title: "Coffee - Wikipedia",
            link: "https://en.wikipedia.org/wiki/Coffee",
            displayed_link: "https://en.wikipedia.org › wiki › Coffee",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f090e73b891a70ebcc884460609648479.jpeg",
            snippet: "Coffee is a drink prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due ...",
            snippet_highlighted_words: ["Coffee", "coffee", "coffee"],
            sitelinks: {
                inline: [
                    {
                        title: "Coffee bean",
                        link: "https://en.wikipedia.org/wiki/Coffee_bean",
                    },
                    {
                        title: "History",
                        link: "https://en.wikipedia.org/wiki/History_of_coffee",
                    },
                    {
                        title: "Coffee production",
                        link: "https://en.wikipedia.org/wiki/Coffee_production",
                    },
                    {
                        title: "Coffee preparation",
                        link: "https://en.wikipedia.org/wiki/Coffee_preparation",
                    },
                ],
            },
            rich_snippet: {
                bottom: {
                    extensions: [
                        "Region of origin: Horn of Africa and ‎South Ara...‎",
                        "Ingredients: Roasted coffee beans",
                        "Introduced: 15th century",
                        "Color: Black, dark brown, light brown, beige",
                    ],
                    detected_extensions: { introduced_th_century: 15 },
                },
            },
            about_this_result: {
                source: {
                    description: "Wikipedia is a multilingual free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system. Wikipedia is the largest and most-read reference work in history.",
                    source_info_link: "https://en.wikipedia.org/wiki/Coffee",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9fddf3bbdeb9a654e7cf60363e8102b41f6a3af7d141a6c1be97b4d820e91bc699.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://en.wikipedia.org/wiki/Coffee&tbm=ilp&ilps=AB_Lh3r6_OJa08Qjy9ATVRP8iusahHLqtQ",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3r6_OJa08Qjy9ATVRP8iusahHLqtQ&q=About+https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCoffee",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:U6oJMnF-eeUJ:https://en.wikipedia.org/wiki/Coffee&cd=5&hl=en&ct=clnk&gl=us",
            related_pages_link: "https://www.google.com/search?gl=us&q=related:https://en.wikipedia.org/wiki/Coffee+coffee",
        },
        {
            position: 2,
            title: "The Coffee Bean & Tea Leaf | CBTL",
            link: "https://www.coffeebean.com/",
            displayed_link: "https://www.coffeebean.com",
            snippet: "Born and brewed in Southern California since 1963, The Coffee Bean & Tea Leaf® is passionate about connecting loyal customers with carefully handcrafted ...",
            snippet_highlighted_words: ["Coffee"],
            sitelinks: {
                inline: [
                    {
                        title: "Store locator",
                        link: "https://www.coffeebean.com/store-locator",
                    },
                    {
                        title: "Coffee",
                        link: "https://www.coffeebean.com/cafe-menu/coffee",
                    },
                    {
                        title: "Cafe Menu",
                        link: "https://www.coffeebean.com/cafe-menu",
                    },
                    {
                        title: "Coffee Sourcing",
                        link: "https://www.coffeebean.com/our-story/coffee-sourcing",
                    },
                ],
            },
            about_this_result: {
                source: {
                    description: "The Coffee Bean & Tea Leaf is an American coffee shop chain founded in 1963. Since 2019, it is a trade name of Ireland-based Super Magnificent Coffee Company Ireland Limited. Its 80% stake is by multinational company Jollibee Foods Corporation.",
                    source_info_link: "https://www.coffeebean.com/",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f5a5aed9c82e3c708015c2984f1335d1827d670ced801f8628fe2c9f7b6bcf018.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.coffeebean.com/&tbm=ilp&ilps=AB_Lh3o9F36mBodptkArkMHI_uiIi-oD1g",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3o9F36mBodptkArkMHI_uiIi-oD1g&q=About+https%3A%2F%2Fwww.coffeebean.com%2F",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:WpQxSYo2c6AJ:https://www.coffeebean.com/&cd=16&hl=en&ct=clnk&gl=us",
            related_pages_link: "https://www.google.com/search?gl=us&q=related:https://www.coffeebean.com/+coffee",
        },
        {
            position: 3,
            title: "What is Coffee? - National Coffee Association",
            link: "https://www.ncausa.org/About-Coffee/What-is-Coffee",
            displayed_link: "https://www.ncausa.org › About Coffee",
            snippet: "cof·fee /ˈkôfē,ˈkäfē/ noun The berries harvested from species of Coffea plants. Everyone recognizes a roasted coffee bean, but you might not recognize an actual ...",
            snippet_highlighted_words: ["coffee"],
            about_this_result: {
                source: {
                    description: "The National Coffee Association or, is the main market research, consumer information, and lobbying association for the coffee industry in the United States.",
                    source_info_link: "https://www.ncausa.org/About-Coffee/What-is-Coffee",
                    security: "secure",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.ncausa.org/About-Coffee/What-is-Coffee&tbm=ilp&ilps=AB_Lh3pnZZSgQF9ozF8IK8yQmvayLa5kRg",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3pnZZSgQF9ozF8IK8yQmvayLa5kRg&q=About+https%3A%2F%2Fwww.ncausa.org%2FAbout-Coffee%2FWhat-is-Coffee",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:ENqpL6s3VPIJ:https://www.ncausa.org/About-Coffee/What-is-Coffee&cd=17&hl=en&ct=clnk&gl=us",
        },
        {
            position: 4,
            title: "Peet's Coffee: The Original Craft Coffee",
            link: "https://www.peets.com/",
            displayed_link: "https://www.peets.com",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f50d5ad2a5d8116284b37902ffc5fb93c.jpeg",
            snippet: "Since 1966, Peet's Coffee has offered superior coffees and teas by sourcing the best quality coffee beans and tea leaves in the world and adhering to strict ...",
            snippet_highlighted_words: ["Coffee", "coffees", "coffee"],
            about_this_result: {
                source: {
                    description: "Peet's Coffee is a San Francisco Bay Area-based specialty coffee roaster and retailer owned by JAB Holding Company via JDE Peet's.",
                    source_info_link: "https://www.peets.com/",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9fa8fbd113e2e25db93d095af6de0b3319d797a29e9b5a61d5da6bf39b3996c67e.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.peets.com/&tbm=ilp&ilps=AB_Lh3onE-hGVK5u07w_VqLSdlhqHPxbBQ",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3onE-hGVK5u07w_VqLSdlhqHPxbBQ&q=About+https%3A%2F%2Fwww.peets.com%2F",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:BCjzno6zP6wJ:https://www.peets.com/&cd=18&hl=en&ct=clnk&gl=us",
            related_pages_link: "https://www.google.com/search?gl=us&q=related:https://www.peets.com/+coffee",
        },
        {
            position: 5,
            title: "Coffee | Origin, Types, Uses, History, & Facts | Britannica",
            link: "https://www.britannica.com/topic/coffee",
            displayed_link: "https://www.britannica.com › ... › Food",
            thumbnail: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9ff1d5b60904cc4c5ba84b4ed08871e8fc.jpeg",
            snippet: "coffee, beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin. Coffee is one of the three most popular ...",
            snippet_highlighted_words: ["coffee", "coffee", "Coffee"],
            about_this_result: {
                source: {
                    description: "britannica.com was first indexed by Google more than 10 years ago",
                    source_info_link: "https://www.britannica.com/topic/coffee",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9ff0725c2a49f783ec539d83e3bd258c384dc983ccbfef1d8e99b6656665982965.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.britannica.com/topic/coffee&tbm=ilp&ilps=AB_Lh3oeTYObofQhGrdCE_UnDf88VK0mEQ",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3oeTYObofQhGrdCE_UnDf88VK0mEQ&q=About+https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fcoffee",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:Wikbu4ipU28J:https://www.britannica.com/topic/coffee&cd=19&hl=en&ct=clnk&gl=us",
            related_pages_link: "https://www.google.com/search?gl=us&q=related:https://www.britannica.com/topic/coffee+coffee",
            related_questions: [
                {
                    question: "What is coffee?",
                    snippet: "Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Coffee is one of the three most popular beverages in the world (alongside water and tea), and it is one of the most profitable international commodities.",
                },
                {
                    question: "Where did coffee originate?",
                    snippet: "Wild coffee plants, probably from Kefa (Kaffa), Ethiopia, were taken to southern Arabia and placed under cultivation in the 15th century. The popularity of coffee in the Arab world led to the creation of the coffeehouse, first in Mecca and then in Constantinople in the 15th and 16th centuries, respectively. Coffee was introduced into one European country after another throughout the 16th and 17th centuries.",
                },
            ],
        },
        {
            position: 6,
            title: "Starbucks Coffee Company",
            link: "https://www.starbucks.com/",
            displayed_link: "https://www.starbucks.com",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnOGiHIYLwe0_KbuCqbGrIZD1RZQSj6Qe0G_N9VqL0ANUxyn6dC_k&usqp=CAE&s",
            snippet: "More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.",
            snippet_highlighted_words: ["coffee"],
            about_this_result: {
                source: {
                    description: "Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It is the world's largest coffeehouse chain.\nAs of November 2021, the company had 33,833 stores in 80 countries, 15,444 of which were located in the United States.",
                    source_info_link: "https://www.starbucks.com/",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f41c5b66f03538af2f0a7b2525f8c18ee43d9d527e616ed251cda754168d88c44.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.starbucks.com/&tbm=ilp&ilps=AB_Lh3q7OjpnTCwfh8GBm-adQ08X0gjL1g",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3q7OjpnTCwfh8GBm-adQ08X0gjL1g&q=About+https%3A%2F%2Fwww.starbucks.com%2F",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:1vGXgo_FlHkJ:https://www.starbucks.com/&cd=20&hl=en&ct=clnk&gl=us",
            related_pages_link: "https://www.google.com/search?gl=us&q=related:https://www.starbucks.com/+coffee",
        },
        {
            position: 7,
            title: "Coffee | The Nutrition Source | Harvard T.H. Chan School ...",
            link: "https://www.hsph.harvard.edu/nutritionsource/food-features/coffee/",
            displayed_link: "https://www.hsph.harvard.edu › ... › Food Features",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4hF7tisyF6ugg1mKnOeGrRH-hFw1PIdQavpXC5AmoE2SFLk2gVoU&usqp=CAE&s",
            snippet: "Coffee beans are the seeds of a fruit called a coffee cherry. Coffee cherries grow on coffee trees from a genus of plants called Coffea. There are a wide ...",
            snippet_highlighted_words: ["Coffee", "coffee", "Coffee", "coffee"],
            about_this_result: {
                source: {
                    description: "The Harvard T.H. Chan School of Public Health is the public health school of Harvard University, located in the Longwood Medical Area of Boston, Massachusetts.",
                    source_info_link: "https://www.hsph.harvard.edu/nutritionsource/food-features/coffee/",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f9f3de736c34fc835224476e754c072490d90b0cc6f0d4889e5b30f2c797f50fa.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.hsph.harvard.edu/nutritionsource/food-features/coffee/&tbm=ilp&ilps=AB_Lh3oJu7Tse7mmEVMxU2G6_bqJopzs4g",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3oJu7Tse7mmEVMxU2G6_bqJopzs4g&q=About+https%3A%2F%2Fwww.hsph.harvard.edu%2Fnutritionsource%2Ffood-features%2Fcoffee%2F",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:aCQFR0EWgPwJ:https://www.hsph.harvard.edu/nutritionsource/food-features/coffee/&cd=21&hl=en&ct=clnk&gl=us",
        },
        {
            position: 8,
            title: "31 Coffee Brands, Ranked From Worst To Best",
            link: "https://www.tastingtable.com/718678/coffee-brands-ranked-from-worst-to-best/",
            displayed_link: "https://www.tastingtable.com › coffee-brands-ranked-fr...",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbKwc_XPeJDMpYB72QQ9gDtxMu3fnuYp3dVPBKNRH58VXOyFxTPIK&usqp=CAE&s",
            date: "Feb 18, 2022",
            snippet: "From café chains to retail roasters, we've ranked some of the most popular coffee brands from worst to first.",
            snippet_highlighted_words: ["coffee"],
            sitelinks: {
                inline: [
                    {
                        title: "Coffee Shop",
                        link: "https://www.tastingtable.com/374113/the-best-coffee-shop-in-every-state/",
                    },
                    {
                        title: "Coffee Beans",
                        link: "https://www.tastingtable.com/690198/how-to-store-coffee-beans-how-to-buy-coffee-beans/",
                    },
                    {
                        title: "19 Hot Cocoa Mixes, Ranked...",
                        link: "https://www.tastingtable.com/1098797/hot-cocoa-mixes-ranked-from-worst-to-best/",
                    },
                ],
            },
            about_this_result: {
                source: {
                    description: "Tasting Table is a digital media company focused on food and drink. The brand's website and email newsletter report on food and drink trends in the categories of dining, wine, cocktails, cooking and food travel.",
                    source_info_link: "https://www.tastingtable.com/718678/coffee-brands-ranked-from-worst-to-best/",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f7539ddc62a485a962fe26e3b10bd906297cd967a2d651c1fa498d1b02305bed6.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.tastingtable.com/718678/coffee-brands-ranked-from-worst-to-best/&tbm=ilp&ilps=AB_Lh3raN8DxlDNHYuq1dN9HJBOL_OIMPw",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3raN8DxlDNHYuq1dN9HJBOL_OIMPw&q=About+https%3A%2F%2Fwww.tastingtable.com%2F718678%2Fcoffee-brands-ranked-from-worst-to-best%2F",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:O0p2m8H_t7EJ:https://www.tastingtable.com/718678/coffee-brands-ranked-from-worst-to-best/&cd=22&hl=en&ct=clnk&gl=us",
        },
        {
            position: 9,
            title: "9 Health Benefits of Coffee, Based on Science - Healthline",
            link: "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
            displayed_link: "https://www.healthline.com › Wellness Topics › Nutrition",
            date: "Jan 11, 2022",
            snippet: "Coffee is a popular beverage that researchers have studied extensively for its many health benefits, including its ability to increase energy ...",
            snippet_highlighted_words: ["Coffee"],
            about_this_result: {
                source: {
                    description: "Healthline Media, Inc. is an American website and provider of health information headquartered in San Francisco, California. It was founded in 1999, relaunched in 2006, and established as a standalone entity in January 2016.",
                    source_info_link: "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9fa39ee05fb74f7b9423f3d0f2fa85b90179bea225bafb38b74136d7fe0854bf88.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee&tbm=ilp&ilps=AB_Lh3qfGaP-aQfnaKJgNlx7nDttVz3SWw",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3qfGaP-aQfnaKJgNlx7nDttVz3SWw&q=About+https%3A%2F%2Fwww.healthline.com%2Fnutrition%2Ftop-evidence-based-health-benefits-of-coffee",
            cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:r1UW6FGz3F4J:https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee&cd=23&hl=en&ct=clnk&gl=us",
        },
        {
            position: 10,
            title: "Is Coffee Good for You? - The New York Times",
            link: "https://www.nytimes.com/2020/02/13/style/self-care/coffee-benefits.html",
            displayed_link: "https://www.nytimes.com › Style › Self-Care",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdNoKoMgOeVqgS_1y2NbEzAOIjOh9LM48ZJc6luu-N5ixtoPqMP0O&usqp=CAE&s",
            date: "Nov 12, 2021",
            snippet: "In addition to caffeine, coffee is a dark brew of a thousand chemical compounds that could have potential therapeutic effects on the body. One ...",
            snippet_highlighted_words: ["coffee"],
            about_this_result: {
                source: {
                    description: "The New York Times is a daily newspaper based in New York City with a worldwide readership reported in 2022 to comprise 740,000 paid print subscribers, and 8.6 million paid digital subscribers. It also is a producer of popular podcasts such as The Daily. Founded in 1851, it is published by The New York Times Company.",
                    source_info_link: "https://www.nytimes.com/2020/02/13/style/self-care/coffee-benefits.html",
                    security: "secure",
                    icon: "https://serpapi.com/searches/63c3ab6014b245ec5feb655d/images/75ee4c3ec82b2503dfabbc921f050a9f517c42a7e8a187e010ecfb86eb7ca84c0d55fb18257400d56d0658c8635e1cfe.png",
                },
            },
            about_page_link: "https://www.google.com/search?q=About+https://www.nytimes.com/2020/02/13/style/self-care/coffee-benefits.html&tbm=ilp&ilps=AB_Lh3oGopubCe4NZcJd88VLbbwf2Kuycg",
            about_page_serpapi_link: "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&ilps=AB_Lh3oGopubCe4NZcJd88VLbbwf2Kuycg&q=About+https%3A%2F%2Fwww.nytimes.com%2F2020%2F02%2F13%2Fstyle%2Fself-care%2Fcoffee-benefits.html",
        },
    ],
    related_searches: [
        {
            query: "coffee bean and tea leaf near me",
            link: "https://www.google.com/search?gl=us&q=Coffee+Bean+and+tea+Leaf+near+me&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ1QJ6BAhcEAE",
        },
        {
            query: "peet's coffee menu",
            link: "https://www.google.com/search?gl=us&q=Peet%27s+coffee+menu&sa=X&ved=2ahUKEwi5hIPvhsn8AhUgFFkFHYC-CrwQ1QJ6BAhZEAE",
        },
    ],
    pagination: {
        current: 1,
        next: "https://www.google.com/search?q=coffee&oq=coffee&gl=us&num=10&start=10&sourceid=chrome&ie=UTF-8",
        other_pages: {
            "2": "https://www.google.com/search?q=coffee&oq=coffee&gl=us&num=10&start=10&sourceid=chrome&ie=UTF-8",
            "3": "https://www.google.com/search?q=coffee&oq=coffee&gl=us&num=10&start=20&sourceid=chrome&ie=UTF-8",
            "4": "https://www.google.com/search?q=coffee&oq=coffee&gl=us&num=10&start=30&sourceid=chrome&ie=UTF-8",
            "5": "https://www.google.com/search?q=coffee&oq=coffee&gl=us&num=10&start=40&sourceid=chrome&ie=UTF-8",
        },
    },
    serpapi_pagination: {
        current: 1,
        next_link: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=10",
        next: "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=10",
        other_pages: {
            "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=10",
            "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=20",
            "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=30",
            "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&location=San+Francisco%2C+California%2C+United+States&num=10&q=coffee&start=40",
        },
    },
};
