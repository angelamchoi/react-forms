import React from "react";
import "./index.css";


 class App extends React.Component {
   state = {
     skills: [{ skill: "JavaScript", level: 4 }],
     skill: "",
     level: 3
   };
 
   addSkill = () => {
     alert("ADD SKILL CLICKED");
   };
 
   render() {
     return (
       <section>
         <h2>DEV SKILLS</h2>
         <hr />
         {this.state.skills.map(s => (
           <article key={s.skill}>
             <div>{s.skill}</div> <div>{s.level}</div>
           </article>
         ))}
         <hr />
         <form>
           <label>
             <span>SKILL</span>
             <input name='skill' value={this.state.skill}
             onChange={this.handleChange} />
             
           </label>
           <label>
             <span>LEVEL</span>
             <select name='level' value={this.state.level}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
             </select>
           </label>
           <button onClick={this.addSkill}>ADD SKILL</button>
         </form>
       </section>
     );
   }
 }

 export default App;