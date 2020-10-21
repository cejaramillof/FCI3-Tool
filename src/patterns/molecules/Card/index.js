import React from 'react';


const Card = props => <div className="card"> {props.children}</div>;
Card.Header = props => <div className="card-header">{props.children}</div>;
Card.Body = props => <div className="card-body">{props.children}</div>
Card.Title = props => <h5 className="card-title">{props.children}</h5>;
Card.Subtitle = props => <h6 className="card-subtitle mb-2 text-muted">{props.children}</h6>;
Card.Text = props => <div className="card-text">{props.children}</div>;
Card.Image = props => <img className="card-img-top" src={props.src} alt={props.alt}/>;
Card.Footer = props => <div className="card-footer">{props.children}</div>;
export default Card;