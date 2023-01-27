import React from "react";
import SkillElement from "./skillElement/skillElement";
function Skills() {
  return (
    <div className="skills py-5">
      <div className="container">
        <div className="head text-center mb-6">
          <h2 style={{ color: "#F4BC11" }}>Skills</h2>
        </div>
        <div className="row text-capitalize">
       
       {/* skill */}

          <SkillElement name="ui | ux"/>
          <SkillElement name="html | css"/>
          <SkillElement name="reactJs"/>
          <SkillElement name="angular"/>

        </div>
      </div>
    </div>
  );
}

export default Skills;
