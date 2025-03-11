import React from 'react';
import Slider from '../../components/Slider';
import State from '../../components/State';
import TeacherCarousal from '../../components/TeacherCarousal';

const Home = () => {
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <State></State>
            </section>
            <section>
                <TeacherCarousal></TeacherCarousal>
            </section>
        </div>
    );
};

export default Home;