import React from 'react';
import bookCover from '../assets/static/img/de-cero-a-uno.jpg';

class Book extends React.Component {
  render() {
    const { title, author, format } = this.props;
    console.log(title)
    return (
      <article>
        <img src={bookCover} />
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li>Formato: {format}</li>
          <li>Fecha Inicio:</li>
          <li>Fecha Fin:</li>
          <li>Resumen:</li>
          <li>Categoría</li>
          <li>Etiquetas:
            <ul>
              <li>etiqueta 1</li>
              <li>etiqueta 2</li>
              <li>etiqueta 3</li>
            </ul>
          </li>
          <li>Duración:</li>
        </ul>
      </article>
    );
  }
}

/* class Bookk {
  constructor(title, author, format, startDate, finishDate, excerpt, category, tags, duration) {
    this.title = title;
    this.author = author;
    this.format = format;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.excerpt = excerpt;
    this.category = category;
    this.tags = tags;
    this.duration = duration;
  }
} */

export default Book;
