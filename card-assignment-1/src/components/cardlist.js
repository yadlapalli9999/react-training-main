import React, { Component } from 'react'

export class CardList extends Component {
    state ={
    cards:[
        {id:1,name:'Declarative',content:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},

        {id:2,name:'Component-Based',content:'Build encapsulated components that manage their own state, then compose them to make complex UIs.'},
        {id:3,name:'Learn Once, Write Anywhere',content:'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.'},
        
    ]
}
    render() {
        return (
            <div className="row">
                {this.state.cards.map((card)=>{
                  return  <div class="col-md-4">
                  
                  <div class="card">
                  <h5>{card.name}</h5>
                  <div class="card-body">{card.content}</div>
                  </div>
                </div>
                })}
            </div>
        )
    }
}

export default CardList
