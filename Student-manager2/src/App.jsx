import { useReducer, useEffect, useRef, useMemo } from "react";
import StudentList from "./components/StudentList";

const initialState = JSON.parse(localStorage.getItem("students")) || [];

function studentReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), ...action.payload }];
    case "UPDATE":
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case "DELETE":
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [students, dispatch] = useReducer(studentReducer, initialState);
  const nameRef = useRef();
  const scoreRef = useRef();
  const editingRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleAddOrUpdateStudent = () => {
    const name = nameRef.current.value.trim();
    const score = parseFloat(scoreRef.current.value);

    if (!name || isNaN(score) || score < 0 || score > 10) return;

    if (editingRef.current) {
      dispatch({
        type: "UPDATE",
        payload: { id: editingRef.current, name, score },
      });
      editingRef.current = null;
    } else {
      dispatch({ type: "ADD", payload: { name, score } });
    }

    nameRef.current.value = "";
    scoreRef.current.value = "";
  };

  const handleEdit = (student) => {
    nameRef.current.value = student.name;
    scoreRef.current.value = student.score;
    editingRef.current = student.id;
  };

  const averageScore = useMemo(() => {
    return students.length
      ? (
          students.reduce((acc, s) => acc + s.score, 0) / students.length
        ).toFixed(2)
      : 0;
  }, [students]);

  return (
    <div className="container">
      <h1>📚 Quản lý sinh viên</h1>
      <div className="input-container">
        <input ref={nameRef} type="text" placeholder="Tên sinh viên" />
        <input ref={scoreRef} type="number" placeholder="Điểm (0 - 10)" />
        <button onClick={handleAddOrUpdateStudent}>Lưu</button>
      </div>
      <StudentList
        students={students}
        dispatch={dispatch}
        onEdit={handleEdit}
      />
      <h3>🎯 Điểm trung bình: {averageScore}</h3>
    </div>
  );
}

export default App;
