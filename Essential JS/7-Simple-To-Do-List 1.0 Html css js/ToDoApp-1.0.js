
const btnEle = document.querySelector(".btn");
const inpEle = document.querySelector(".inp-element");

var logItem = {};

btnEle.addEventListener("click", (e) => {
  // check whether input is empty and alert box
  let inpValue = inpEle.value;

  if (inpValue == "") {
    alert("Please enter the task");
  } else if (inpValue.length > 50) {
    alert("Please enter task within 50 characters");
  } else {
    // create task-item element and add within todoList
    const liEle = document.querySelector(".todoList");

    const taskItemEle = document.createElement("li");
    taskItemEle.className = "task-item";
    liEle.appendChild(taskItemEle);

    //taskItemEle.classList.add("task-item");
    const spanEleChildOfLi = document.createElement("span");
    spanEleChildOfLi.className = "parent-span";
    spanEleChildOfLi.textContent = inpValue;
    taskItemEle.appendChild(spanEleChildOfLi);

    // create span element for cross icon
    createSpanCrossEle(".parent-span");

    console.log(liEle);

    // save the tasl element ot Localstorage
    saveEleToLocalStorage("task");

  }
  inpEle.value = "";
});

const taskEle = document.querySelector(".todoList");

// for populating checked or removing incomplete task
taskEle.addEventListener("click", (e) => {
  // if (e.target.classList.contains("task-item")) {      -- worked
  // if(e.target ="<li>"){                                -- worked

  /* Why LI in uppercase?
    tagName always returns uppercase, even if your HTML tag is lowercase.
    e.target.tagName = "li"	❌ No	tagName is read-only
 */
  // if target is LI : for marking checked(task completed)
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked", true);
    saveEleToLocalStorage("task");

    
  } else if (
    e.target.tagName == "SPAN" &&
    e.target.parentElement.tagName == "SPAN"
  ) {

    const removedTaskItem = e.target.parentElement?.parentElement;
    removedTaskItem.remove();
    console.log("cross clicke and removed element", removedTaskItem);
    saveEleToLocalStorage("task");

  } else {
    console.log("Different target", e);
  }
});


// create and add cross symbol
function createSpanCrossEle(parentEleClassName) {
  console.log(parentEleClassName);

  const spanCrossEle = document.createElement("span");
  spanCrossEle.classList.add("span-cross");
  spanCrossEle.textContent = "\u274C";

  document.querySelectorAll(parentEleClassName).forEach((parent) => {
    parent.appendChild(spanCrossEle);
    saveEleToLocalStorage("task");
  });
}

const taskSaved = document.querySelector(".todoList");

// saving task element to local storage so that on refreshing task added persists
function saveEleToLocalStorage(key) {
  localStorage.setItem(key, taskSaved.innerHTML);
  console.log("Saved item: ",taskSaved.innerHTML);
}

// fetching already saved task items
function getTaskEle() {
  taskSaved.innerHTML = localStorage.getItem("task");
}
getTaskEle();

// remove all completed task after 10 min
function removeCompletedTask() {
  setTimeout(() => {
    const doneTask = document.querySelectorAll(".checked");
    doneTask.forEach((task) => {
      task.remove();
      saveEleToLocalStorage("task")
    });

  }, 1000*10);
}

removeCompletedTask();




