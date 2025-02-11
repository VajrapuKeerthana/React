import React, { Component } from 'react'

export default class MyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
            <label>
                <input type='text' value={this.state.textValue} onChange={this.changeMessage}>
                <br></br>
                <label>Skill</label>
                <select value={this.state.skillValue} onChange={this.changeSkill}>
                    <option>React</option>
                    <option>string</option>
                    <option>java
                        
                    </option>
                </select>
                </input>
            </label>
        </form>
      </div>
    )
  }
}
