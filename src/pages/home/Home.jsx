import React from 'react';
import Slider from '../../components/Slider';
import State from '../../components/State';
import TeacherCarousal from '../../components/TeacherCarousal';
import Categories from '../../components/Categories';
import Category from '../../components/Category';

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
            <section>
                <Categories></Categories>
            </section>
            <section>
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;