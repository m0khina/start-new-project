import React from 'react';
import AboutCourse from "./AboutCourse/AboutCourse";
import HeroTeam from "./HeroTeam/HeroTeam";
import CourseProgramme from './CourseProgramme/CourseProgramme';
import Reviews from './Reviews/Reviews';

const TeamBuilding = () => {
    return (
        <div>
            <HeroTeam/>
            <AboutCourse/>
            <CourseProgramme/>
            <Reviews/>
        </div>
    );
};

export default TeamBuilding;