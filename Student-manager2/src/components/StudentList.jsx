function StudentList({ students, dispatch, onEdit }) {
  return (
    <div className="student-list">
      <h2>📋 Danh sách sinh viên ({students.length})</h2>
      {students.length === 0 ? <p>Chưa có sinh viên</p> : null}
      {students.map((student) => (
        <div key={student.id} className="student-item">
          <span>
            {student.name} - Điểm: {student.score}
          </span>
          <div>
            <button onClick={() => onEdit(student)}>✏️ Sửa</button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: student.id })}
            >
              🗑️ Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
