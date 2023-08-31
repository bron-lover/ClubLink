import { Injectable } from '@angular/core';
import { Club } from 'src/app/services/Club.Model';
import { createClient } from '@supabase/supabase-js';

@Injectable({
    providedIn: 'root',
})
export class ClubService {
    clubs: Club[] = [
       {id:1, name: 'The Origami Club', 
       description: 'Making different origmai every Tuesday at lunch! Instruction/instuctor, handouts, and paper provided. Projects are usually individual but some stretch to 2 weeks. The club celebrates fun events with themed projects. It takes place in room 207 with Mrs. Griffin.', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mrs. Griffin', 
       clubPresident: 'Emma Winter', 
       meetingInfo: 'Every Tuesday at lunch in Room 207.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:2, name: 'Use Your Voice', 
       description: "Use Your Voice is a club about amplifying student voices; they will be amplified by creating change at our school. We've seen that there are certain things that can be implemented to create a more welcoming school environment and a safer-space for minority students (such as people of color, women, disabled people, those in the lgbtqia+ community, etc.). We will work on multiple projects, which will include gathering information and data about a topic of concern (such as the lack of gender neutrality in school, lack of awareness for student of colors issues, etc.) and creating a detailed action plan for making these changes. These projects will hopefully be brought to the attention of the principal and/or assistant principal, so our club can collaborate with them to start making some needed changes on campus.", 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mrs. Priesz', 
       clubPresident: 'Niharika Koka', 
       meetingInfo: 'Every Tuesday at lunch in Room 937.', 
       joinLink: '',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
       "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
       "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"] },
       {id:3, name: 'International English Club', 
       description: 'We will contact schools, community centers, and religious institutions of countries where education is not properly taught and collab with these institutions to give a chance for an online English lesson and experience. ', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Victor Limon', 
       clubPresident: 'Joshua Cho', 
       meetingInfo: 'Tuesdays and Thursdays at Lunch in Room 927.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:4, name: 'Fellowship of Christian Athletes (FCA)', 
       description: 'FCA is a club that unites the Christian athletes on our high school campus to create fellowship. We meet every other week to listen to a message from a pastor around Santa Clarita and eat a free meal together. FCA creates a community across campus for Christians to come together and support one another! Philippians 2:1-4', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Michelle Rivas', 
       clubPresident: 'Gracie Brooke', 
       meetingInfo: 'Mondays at lunch in room 829.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[ 
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"] },
       {id:5, name: 'Valencia Red Cross ', 
       description: 'Our club of generous officers and members share a goal of preventing and relieving suffering, here at home and around the world. We work to donate time, money and blood. We will learn or teach life-saving skills so our communities can be better prepared when the need arises.', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Michelle Fischer', 
       clubPresident: 'Kenzie Megid', 
       meetingInfo: 'Every Friday at lunch', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:6, name: 'Filipino Culture Club', 
       description: "Valencia’s Filipino Culture Club is dedicated to celebrating Filipino culture as well as providing resources to support the Filipino community. ", 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mr. Benham', 
       clubPresident: 'Maddox Espinosa', 
       meetingInfo: 'Every Tuesday at lunch in Room 112.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:7, name: 'Valencia high school speech and debate ', 
       description: 'Valencia Speech and Debate seeks to promote education in public speaking, philosophy, policymaking, critical thinking and current events, through discussion and tournament competition.  ', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Ms. Ford ', 
       clubPresident: 'Vedant Khadiya', 
       meetingInfo: 'Everyday after school in room 933', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:8, name: 'KPOPPERS Anonymous', 
       description: 'KPOPPERS Anonymous is a club for kpop fans at VHS. With not many kpop events available in SCV, the goal of this club is to bring those events for fans here to enjoy. We will be doing craft activities, photo card trading and decorating, cup sleeve events at cafes, and so much more!', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mrs. Avanessian', 
       clubPresident: 'Alina Tatoian', 
       meetingInfo: 'Every friday at lunch in room 939.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:9, name: 'Hart District Music Festival Planning Commitee', 
       description: "We are a planning committee for the upcoming Hart District Music Festival. We will use this position as a club in order to be able to advertise and help raise funds for the event.", 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mr. Benham', 
       clubPresident: 'Elliot So', 
       meetingInfo: 'Every Friday after school in ASB Room.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:10, name: 'Across the Sea', 
       description: "Organization made to assist foreign students that are interested in transferring to US schools. ", 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mr. Benham', 
       clubPresident: 'Sooa Kim',  
       meetingInfo: 'Every Wednesday after school in ASB Room.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:11, name: 'VHS Upcycling Club', 
       description: 'Our purpose is to help students on campus express themselves through fashion but by being sustainable. Rather than focusing strictly on fashion and being environmentally conscious, we aim to combine both concepts in the VHS Upcycling Club. Our club will host meetings to inform students about issues surrounding fashion and the fashion industry, teach students ways to practice fashion sustainably, and actively practice and engage in fashion sustainability as a club.', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mrs. Whempner', 
       clubPresident: 'Palakh Agarwal ', 
       meetingInfo: 'Every thursday at lunch in room 103.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:12, name: 'Operation Smile Club', 
       description: 'The Operation Smile Club cooperates with medical professionals to provide surgical care to help children who suffer from cleft lips/palettes. Through fundraisers and multiple service hour events, our club strives to advocate for the surgeries of these children.', 
       email: 'example@gmail.com', 
       teacherAdvisor: 'Mrs. Rivas', 
       clubPresident: 'Ava Boyer', 
       meetingInfo: 'Every Tuesday at lunch in Room 829.', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:13, name: 'Valencia Historical Society', 
       description: '', 
       email: '', 
       teacherAdvisor: 'Alisa Salem', 
       clubPresident: 'Gabriel Bell', 
       meetingInfo: '', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv',
       images:[
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
       ] },
       {id:14, name: 'DECA', 
       description: '', 
       email: '', 
       teacherAdvisor: '', 
       clubPresident: '', 
       meetingInfo: '', 
       joinLink: 'https://classroom.google.com/c/NjEzNzQ2Njg2NTY2?cjc=lqfmmcv', 
       images:
       ["https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
       "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
    ] },
      
];
    getClubs(): Club[] { 
        return this.clubs;
    } 
    
    getClub(id: number): Club | undefined { 
        return this.getClubs().find((club) => club.id == id);
    }
    
}