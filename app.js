import { 
  collection, addDoc, query, where, onSnapshot 
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

import { db } from "./firebase.js";

const form = document.getElementById('addForm');
const list = document.getElementById('list');
const gpaBox = document.getElementById('gpa');

// user fake (đỡ phải Auth)
const userId = "demo";

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addDoc(collection(db, "grades"), {
    userId,
    course: course.value,
    credit: Number(credit.value),
    score: Number(score.value),
    semester: semester.value
  });
  form.reset();
});

const q = query(collection(db, "grades"), where("userId", "==", userId));

onSnapshot(q, (snap) => {
  let html = "";
  let credits = 0;
  let total = 0;
  snap.forEach(doc => {
    const d = doc.data();
    html += `<div>${d.course} (${d.semester}) — ${d.score}</div>`;
    credits += d.credit;
    total += d.credit * d.score;
  });
  list.innerHTML = html;
  if (credits > 0) gpaBox.innerText = "GPA: " + (total/credits).toFixed(2);
});
