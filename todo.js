// Untuk mengambil element form dan input
const form = document.getElementById("form");
const inputForm = document.getElementById("input-form");

// Akhir untuk mengambil element form dan input

// Fungsi untuk menambah todo
const addTodo = (todo) => {
  // Untuk membuat element baru
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const completedButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  // Akhir untuk membuat element baru

  // Untuk meberi text dan memberi id pada button delete
  li.setAttribute("id", "todoItem");
  // Akhir untuk meberi text dan memberi id pada button delete

  // Untuk meberi text dan memberi id pada div
  div.setAttribute("id", "todo");
  // Akhir untuk meberi text dan memberi id pada div

  // Untuk meberi text dan memberi id pada button completed
  completedButton.setAttribute("id", "completed");
  completedButton.textContent = "Completed";
  // Akhir ntuk meberi text dan memberi id pada button completed

  // Untuk meberi text dan memberi id pada span
  span.setAttribute("id", "massage");
  span.textContent = todo;
  // Akhi untuk meberi text dan memberi id pada span

  // Untuk meberi text dan memberi id pada button delete
  deleteButton.setAttribute("id", "delete");
  deleteButton.textContent = "Delete";
  // Akhir ntuk meberi text dan memberi id pada button delete

  // Untuk menggabungkan element yang dibutuhkan
  ul.append(li);
  li.append(div);
  div.append(completedButton);
  div.append(span);
  li.append(deleteButton);
  // Akhir untuk menggabungkan element yang dibutuhkan

  // Event untuk menghapus
  deleteButton.addEventListener("click", () => {
    const del = deleteButton.parentElement;
    del.remove();
    alert("Data Berhasil Di Hapus");
  });
  // Event untuk menghapus

  // Event untuk memberi efek coretan
  completedButton.addEventListener("click", () => {
    span.classList.toggle("line");
    alert("Todo Telah Selesai dikerjakan");
  });
  // Event untuk memberi efek coretan
};
// Akhir fungsi untuk menambah todo

// Event Untuk tombol submit setelah dijalankan
form.addEventListener("submit", (event) => {
  // Membatalkan fungsi default
  event.preventDefault();
  // AKhir untuk membatalkan fungsi default

  // Fungsi addTodo
  addTodo(inputForm.value);
  // Akhir fungsi addTodo

  // Untuk memberi umpan balik pada user dan mengkosongi input
  alert("Data Berhasil Di Inputkan");
  inputForm.value = "";
  // Akhir untuk memberi umpan balik pada user dan mengkosongi input
});
// Event Untuk tombol submit setelah dijalankan
