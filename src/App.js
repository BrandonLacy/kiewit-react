import React from "react";

function App() {
  const courses = [
    { id: 1, title: "Clean Code" },
    { id: 2, title: "React Fundamentals" }
  ];

  return (
    <>
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{courses.map(renderTitle)}</tbody>
      </table>
    </>
  );
  function renderTitle(course) {
    return (
      <tr>
        <td>{course.id}</td>
        <td>{course.title}</td>
      </tr>
    );
  }
}

export default App;
