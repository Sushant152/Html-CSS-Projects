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

// -----------------------------Log input value and timestamp
     const recorDttime = new Date()

     logItem = {
      input: `${inpValue}`,
      recordedDateTime: `${recorDttime.getFullYear()}-${recorDttime.getMonth()}-${recorDttime.getDate()}
                        T${recorDttime.getHours()}:${recorDttime.getMinutes()}:${recorDttime.getSeconds()}`,
      isTaskCompleted : "N"
    }
    console.log("Log Item task added",logItem);
    logTask(logItem); 

//----------------------------------------------------------
    console.log(liEle);
    saveEleToLocalStorage("task");
  }
  inpEle.value = "";
});

const taskEle = document.querySelector(".todoList");

taskEle.addEventListener("click", (e) => {
  // if (e.target.classList.contains("task-item")) {     -- worked
  // if(e.target ="<li>"){                                -- worked

  /* Why LI in uppercase?
    tagName always returns uppercase, even if your HTML tag is lowercase.
    e.target.tagName = "li"	❌ No	tagName is read-only
 */
  // if target is LI : for marking checked(task completed)
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked", true);
    saveEleToLocalStorage("task");

    // UPDATE isCompleted flag for completed task
    const allTaskLogArr = JSON.parse(localStorage.getItem("logHistory"))
    const shallowArr = allTaskLogArr;
   for (const item of shallowArr) {
   if( e.target.textContent.includes(item.input)){
      let index = shallowArr.indexOf(item)

      index != "-1" ?allTaskLogArr[index].isTaskCompleted = "Y" : console.log("completed item not matched in logHistory")
        console.log("index",index)
    }
  } 
  // update flag Y in logHistory
    localStorage.setItem("logHistory",JSON.stringify(allTaskLogArr))

    // console.log("found li");
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

/* document.addEventListener("click",(e)=>{
    console.log("clicked item", e)
}) */

// create and addd cross
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
  console.log("Saved item");
}

function getTaskEle() {
  taskSaved.innerHTML = localStorage.getItem("task");
}
getTaskEle();

// --------------------------remove all completed task after 10 min

function removeCompletedTask() {
  setTimeout(() => {
    const doneTask = document.querySelectorAll(".checked");

    doneTask.forEach((task) => {
      console.log(`Completed task removed: ${task}`);
      task.remove();
      saveEleToLocalStorage("task");
    });
    
  }, 1000 * 10);
}

removeCompletedTask();
//-------------------------------------------------------------

//--------------------- code to log input data in logHistory -------------------------------------------

function logTask(logItemObj){
let logItemArray = [];

if(localStorage.getItem("logHistory") == null || localStorage.getItem("logHistory") == ""){

  console.log("logHistory empty")
  logItemArray.push(logItemObj) ;
  console.log("logHistory added first log object")

} else {
  // console.log("Log Item exist in localstorage", JSON.parse(localStorage.getItem("logHistory")))
  
  const savedLogArray = JSON.parse(localStorage.getItem("logHistory"))
  console.log("savedLogArray",savedLogArray)
  for (const savedLog of savedLogArray) {
    logItemArray.push(savedLog)
  } 
  logItemArray.push(logItemObj)  
}

localStorage.setItem("logHistory", JSON.stringify(logItemArray))
console.log("Final Log Array", logItemArray)

} 

//--------------------------------------------------------------------

//---------------- To populated saved task from Local storage to  <table class="log-table">

function populateAndOpenSavedLog(){
  

  const tableEle = document.querySelector(".log-table")
  tableEle.innerHTML = ""


  const logsArray = JSON.parse(localStorage.getItem("logHistory"))
  var seqNbr = null;

  // Update sequence number for ID column
  if(localStorage.getItem("seqNumber") == "" ||  localStorage.getItem("seqNumber") == null || seqNbr == null){
    localStorage.setItem("seqNumber", 1)
    seqNbr = 1;
  } 

  // add header for table
    let logHeaderEle = null;
    logHeaderEle = document.createElement("tr")
    logHeaderEle.innerHTML = `<th>Task ID</th>
                              <th>Task Name</th>
                              <th>Task creation dateTime</th>
                              <th>IsCompleted</th>`
    tableEle.appendChild(logHeaderEle)

  // loop all the objects in local storage and populate the date in table
  for (const logObj of logsArray) {
     
    let logItemEle = null;
    logItemEle = document.createElement('tr')
    logItemEle.innerHTML = `<td contenteditable="false">${seqNbr}</td>
                            <td contenteditable="false">${logObj.input}</td>
                            <td contenteditable="false">${logObj.recordedDateTime}</td>
                            <td contenteditable="false">${logObj.isTaskCompleted}</td>`;  
    tableEle.appendChild(logItemEle)
    seqNbr++;
    console.log(tableEle)
  }

    localStorage.setItem("seqNumber", seqNbr)
    console.log(tableEle.innerHTML)

  // Invoke openTasklog() to enable display of saved task on UI
  openTasklog()

}

//-----------------------------------------------------------------

// code when hover span id="show-text" ->  show some text on top of background
var info = document.querySelector("#hide-log-info");
function showInfo(e) {
  info.style.display = "block";

  let left = e.clientX - 110;
  let top = e.clientY + 30;
  info.style.left = left + "px";
  info.style.top = top + "px";
}

// code to hide comment
function hideInfo(e) {
  info.style.display = "none";
}

// open task log and log container displayed/removed. Also, update toggle icon
function openTasklog() {
  const logContainer = document.querySelector(".log-container");
  const btn2 = document.querySelector("#btn-2")
  if (logContainer.style.display == "" || logContainer.style.display == "none"){
    logContainer.style.display = "flex";
    btn2.classList.replace("fa-toggle-off","fa-toggle-on")
  }
  else {
    logContainer.style.display = "none";
    btn2.classList.replace("fa-toggle-on","fa-toggle-off")
  }
}

// completely reset Log History
function fullResetLog(){

  const isConfirm = confirm("ARE YOU SURE TO RESET THE LOG");
 /* localStorage.getItem("logHistory")?.length ? 
    localStorage.removeItem("logHistory"): console.log("logHistory empty") */

if(localStorage.getItem("logHistory").length > 0 && isConfirm){

  console.log(JSON.parse(localStorage.getItem("logHistory")))
  localStorage.removeItem("logHistory")
  localStorage.removeItem("seqNumber")

}
else if(!isConfirm) console.log("Revoked Log clearance")
  else
  console.log("Log History empty")
}