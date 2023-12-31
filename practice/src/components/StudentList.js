

// const StudentList = () => {

//   return (
//     <div>
//       <h2>Student Details</h2>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             <strong>Name:</strong> {student.name} <br />
//             <strong>Age:</strong> {student.age} <br />
//             <strong>Grade:</strong> {student.grade}
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;


import React from 'react';


const StudentList = (props) => {
  const { students } = props;

  return (
    <div>
      <h2>Student Details</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Age:</strong> {student.age} <br />
            <strong>Grade:</strong> {student.grade}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
