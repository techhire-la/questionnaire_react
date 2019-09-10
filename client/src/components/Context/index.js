import React, { Component } from 'react';

const LoginContext = React.createContext();


export class Provider extends Component {
    state = {
        email: "",
        password: "",
        token: ""
      };


    //   handleScoreChange = (index, delta) => {
    //     this.setState( prevState => ({
    //       score: prevState.players[index].score += delta
    //     }));
    //   }
    
    //   handleAddPlayer = (name) => {
    //     this.setState( prevState => {
    //       return {
    //         players: [
    //           ...prevState.players,
    //           {
    //             name,
    //             score: 0,
    //             id: this.prevPlayerId += 1
    //           }
    //         ]
    //       };
    //     });
    //   }
    
      handleRemovePlayer = (id) => {
        this.setState( prevState => {
          return {
            players: prevState.players.filter(p => p.id !== id)
          };
        });
      }



      render(){
        return (
            <ScoreboardContext.Provider value={
                {
                  players: this.state.players, 
                  actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                  }
                }
              }>

              {this.props.children}
        
            </ScoreboardContext.Provider>
          )
      }





}

export default Provider;



export const Consumer = LoginContext.Consumer;