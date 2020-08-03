import React from 'react';
import TeamMember from './../TeamMember/TeamMember';


const AboutUsPage = () => {
    return (
        <div>       
            <TeamMember
                img = {"https://i.ibb.co/ggfTJc3/karin.jpg"}
                name = {"Karin Gluzman"}
                description = {"Results-oriented customer success manager in the tech industry who specializes in quality customer success, customer support, customer retention, productivity, and team management. Highly experienced in software-as-a-service customer success and dedicated to providing excellent customer service and making operational and procedural improvements. Offer excellent communication, interpersonal skills, and problem-solving skills."}
                linkedinURL = {"https://www.linkedin.com/in/karin-gluzman/"}
                emailURL = {"mailto:karingluz@gmail.com"}
            />  
            <TeamMember
                img = {"https://i.ibb.co/nrZfKNn/sergey.png"}
                name = {"Sergey Aronov"}
                description = {"Software Engineering graduate with a special interest in web development. Solid web development knowledge using JavaScript, HTML, CSS, React, Redux, Python, Flask and Sklearn."}
                linkedinURL = {"https://www.linkedin.com/in/sergey-aronov-61a93a16a/"}
                emailURL = {"mailto:aronovsergeyy@gmail.com"}
            />
        </div>
    );
};

export default AboutUsPage;