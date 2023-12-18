

const Project3 = () => {
    return (
        <>
            <div className="project3">
                <img
                    src="https://images.prismic.io/contrary-research/f039f5b1-4417-4072-b8f0-ea329974cbad_Notion+%283%29.png?auto=compress,format"
                    alt="swiggy homepage"
                    width={500}
                   // height={100}
                />
                <div className="project_description">
                    <h1>STUDY NOTION</h1>
                    <p>
                        Study Notion is a fully functional Ed Tech platform that enables users to create, consume, and
                        rate educational content. The platform is built which includes, NodeJS, ExpressJS,SQL, MongoDB
                        and Mongoose.
                        Features :- User Authentication: Study Notion provides secure user registration and
                        authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their profiles
                        with ease.
                        Courses and Lessons: Instructors can create and edit created courses. Students can enroll in
                        courses, access course materials, and track their progress.
                        Search Functionality: Users can easily search for courses, lessons, and resources using the
                        built-in search feature. This makes it convenient to find relevant content quickly.
                        Instructor Dashboard: Instructors have access to a comprehensive dashboard to view
                        information about their courses, students, and income. The dashboard provides charts and
                        visualizations to present data clearly and intuitively. Instructors can monitor the total
                        number of students enrolled in each course, track course performance, and view their
                        income generated from course sales.

                    </p>
                </div>
            </div>
        </>
    )
}

export default Project3;