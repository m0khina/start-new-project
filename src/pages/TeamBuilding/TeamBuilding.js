import React from 'react';
import AboutCourse from "./AboutCourse/AboutCourse";
import HeroTeam from "./HeroTeam/HeroTeam";
import CourseProgramme from './CourseProgramme/CourseProgramme';

const TeamBuilding = () => {
    return (
        <div>
            <HeroTeam/>
            <AboutCourse/>
            <CourseProgramme/>
        </div>
    );
};

export default TeamBuilding;