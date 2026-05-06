const Course = ({course}) => {
    const totalExercises = course.parts.reduce((total, part) => {
        return total + part.exercises;
    }, 0)
    return <div>

        <h1>{course.name}</h1>

            {course.parts.map(course =>
                <li key={course.id}>
                    {course.name} {course.exercises}
                </li>
            )}
        <b>Total of {totalExercises} exercises</b>

    </div>


}

export default Course