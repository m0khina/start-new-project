import React from 'react';
import AboutCourse from "./AboutCourse/AboutCourse";
import HeroTeam from "./HeroTeam/HeroTeam";
import CourseInfo from "./CourseInfo/CourseInfo";
import FollowCourse from "./FollowCourse/FollowCourse";
import ShowCourse from "./ShowCourse/ShowCourse";

const TeamBuilding = () => {
    return (
        <div>
            <HeroTeam/>
            <AboutCourse/>
            <CourseInfo/>
            <ShowCourse/>
            <FollowCourse/>
        </div>
    );
};

export default TeamBuilding;