import React from 'react';
import AboutCourse from "./AboutCourse/AboutCourse";
import HeroTeam from "./HeroTeam/HeroTeam";
import CourseInfo from "./CourseInfo/CourseInfo";
import CourseProgramme from "./CourseProgramme/CourseProgramme";
import FollowCourse from "./FollowCourse/FollowCourse";

const TeamBuilding = () => {
    return (
        <div>
            <HeroTeam/>
            <AboutCourse/>
            <CourseInfo/>
            <CourseProgramme/>
            <FollowCourse/>
        </div>
    );
};

export default TeamBuilding;