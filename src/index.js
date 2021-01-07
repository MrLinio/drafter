import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ReactDOM from "react-dom";
import Card from "./card.js";
import { aeonCardsData } from "./aeonCards";
import "./index.css";

class Drafter extends React.Component {

  /*
  37 sorts
  16 reliques
  16 Gemmes
  */

  initialCardsList(rawCards){
    let refinedCardsList = {
      "Gemme" : [],
      "Sort" : [],
      "Relique" : [],
    };
    rawCards.forEach(card => {
      refinedCardsList[card.type].push(card);
    });
    return refinedCardsList;
  }

  generateCardsList(){
    this.setState(this.generateSelection());
  }

  generateSelection(){
    const cardList = this.initialCardsList(aeonCardsData);

    return {
      number: aeonCardsData.length,
      gems: shuffle(cardList["Gemme"]).splice(-3),
      relics : shuffle(cardList["Relique"]).splice(-2),
      spells: shuffle(cardList["Sort"]).splice(-4),
    };

  }

  constructor(props) {
    super(props);

    this.state = this.generateSelection();

  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Drafter
          </Typography>
        </Toolbar>
        </AppBar>
      <Container>

      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Coût</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.gems.map((card) => (
            <TableRow key={card.name}>
              <TableCell component="th" scope="row">
                {card.name}
              </TableCell>
              <TableCell align="right">{card.cost}</TableCell>
              <TableCell align="right">{card.type}</TableCell>
            </TableRow>
          ))}

          {this.state.relics.map((card) => (
            <TableRow key={card.name}>
              <TableCell component="th" scope="row">
                {card.name}
              </TableCell>
              <TableCell align="right">{card.cost}</TableCell>
              <TableCell align="right">{card.type}</TableCell>
            </TableRow>
          ))}

          {this.state.spells.map((card) => (
            <TableRow key={card.name}>
              <TableCell component="th" scope="row">
                {card.name}
              </TableCell>
              <TableCell align="right">{card.cost}</TableCell>
              <TableCell align="right">{card.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        <div>
          <b>Il y a {this.state.number} cartes enregistrées.</b>
        </div>
        
        <Button variant="contained" color="primary" onClick={() => {this.generateCardsList()}}>
          Nouveau tirage
        </Button>
      </Container>
      </React.Fragment>
      
    );
  }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// ========================================

ReactDOM.render(<Drafter />, document.getElementById("root"));
