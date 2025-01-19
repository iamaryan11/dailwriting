
const motivationalQuotes = [
    "Write a little every day, without hope and without despair. - Isak Dinesen",
    "The secret to getting ahead is getting started. - Mark Twain",
    "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Writing is the painting of the voice. - Voltaire",
    "The scariest moment is always just before you start. - Stephen King",
    "A writer is someone for whom writing is more difficult than it is for other people. - Thomas Mann",
    "Don’t focus on having a great idea; focus on having lots of ideas. - Adam Grant",
    "The art of writing is the art of discovering what you believe. - Gustave Flaubert",
    "Every day is a new page to your story. Write wisely.",
    "The only way to write is to write.",
    "Small daily steps lead to big writing achievements.",
    "Set your goals high, and don’t stop till you get there. - Bo Jackson",
    "The best time for planning a book is while you’re doing the dishes. - Agatha Christie",
    "Keep writing. Keep striving. The world needs your words.",
    "Don’t wait for inspiration. It comes while working. - Henri Matisse",
    "Start writing, no matter what. The water does not flow until the faucet is turned on. - Louis L’Amour",
    "Write what disturbs you, what you fear, what you have not been willing to speak about. Be willing to be split open. - Natalie Goldberg",
    "Good writing is rewriting. - Truman Capote",
    "A journey of a thousand miles begins with a single step. - Lao Tzu",
    "The habit of writing daily is the foundation of greatness.",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Write drunk, edit sober. - Ernest Hemingway",
    "You are the author of your own story. Make it count.",
    "The only limit to your impact is your imagination and commitment. - Tony Robbins",
    "A word after a word after a word is power. - Margaret Atwood",
    "Be willing to write badly. It’s the first step toward writing well.",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Your daily writing is an investment in your future self.",
    "Don’t let yesterday take up too much of today. - Will Rogers",
    "Write with the door closed, rewrite with the door open. - Stephen King",
    "Dream big, but write small steps to get there.",
    "You don’t write because you want to say something; you write because you have something to say. - F. Scott Fitzgerald",
    "Write what you know. - Mark Twain",
    "If you don’t have time to write, you don’t have the time to become a great writer. - Stephen King",
    "Words are free. It’s how you use them that may cost you. - KushandWizdom",
    "You can always edit a bad page. You can’t edit a blank page. - Jodi Picoult",
    "Don’t be a writer. Be writing. - William Faulkner",
    "Consistency beats perfection.",
    "The pen is the tongue of the mind. - Horace",
    "Write like it matters, and it will.",
    "Believe you can, and you’re halfway there. - Theodore Roosevelt",
    "Stay inspired. Stay persistent. Stay writing.",
    "Write your heart out. Someone out there needs your words.",
    "The difference between a dream and a goal is a plan. Start writing today.",
    "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
    "Writing is an exploration. Start with nothing and learn as you go. - E. L. Doctorow",
    "Write as if no one is watching.",
    "Success doesn’t come from what you do occasionally, but from what you do consistently.",
    "Today is your opportunity to write something amazing."
  ];
function motivation(){
    const quotes=document.getElementById('quote-here');
    const luv_index=Math.floor(Math.random()*motivationalQuotes.length);
    quotes.innerText=motivationalQuotes[luv_index];

}
setInterval(motivation,4000);


//to change font-family dynamically
function change_font(){
    const changeit=document.getElementById('fontchange');
    const txtarea=document.getElementById('main-write');
    changeit.addEventListener('change',()=>{
       txtarea.style.fontFamily=changeit.value;
    })
}
change_font();

//to chnage font-style
function change_fontstyle(){

const txt01=document.getElementById('main-write');
const bld=document.getElementById('font-bold');
const itls=document.getElementById('font-italics');
const rst=document.getElementById('font-reset');
bld.addEventListener('click',()=>{
    
    if(txt01.style.fontWeight==='bold'){
        txt01.style.fontWeight='normal';
}
else{
        txt01.style.fontWeight='bold';
    }
})

itls.addEventListener('click',()=>{
    if(txt01.style.fontStyle==='italic'){
        txt01.style.fontStyle='normal';
    }
    else{
        txt01.style.fontStyle='italic';
    }
})
rst.addEventListener('click',()=>{
    txt01.style.fontWeight='normal';
    txt01.style.fontStyle='normal';
})

}
change_fontstyle(); 







function timing(){

    const timer=document.getElementById('time-div');
    const now=new Date();
    const indian_time=now.toLocaleTimeString();
    timer.innerHTML=indian_time;
    
}

setInterval(timing,1000);


// theme logics:
// script.js

document.getElementById('theme-change').addEventListener('change', function(event) {
    const body = document.body;
  
    // Clear any previous theme or background class
    body.classList.remove('basic-theme', 'spm1', 'mountains');
  
    // Check the selected value and apply the corresponding class
    if (event.target.value === 'basic') {
      body.classList.add('basic-theme');
    } else if (event.target.value === 'spm1') {
      body.classList.add('spm1');
    } else if (event.target.value === 'mountains') {
      body.classList.add('mountains');
    }
  });
  

    



function addthegoal(){
    const newb=document.getElementById('new-goal-button');
    const div_goal=document.getElementById('newgoalcontainer');
    const closebutton=document.getElementById('closenewgoal');
    newb.addEventListener('click',()=>{
        // alert("button got clicked")
        div_goal.classList.remove('hidden');
    })
    closebutton.addEventListener('click',()=>{
        div_goal.classList.add('hidden')
    })
}





function delthegoal(){
    const deletegoal=document.getElementById('del-goal');
    const delformcontainer=document.getElementById('delgoalcont');
    const closethediv=document.getElementById('closedeletegoal');
    deletegoal.addEventListener('click',()=>{
        delformcontainer.classList.remove('delhide');
    })
    closethediv.addEventListener('click',()=>{
        delformcontainer.classList.add('delhide')
    })
}





function editGoal(){
    const editmygoal=document.getElementById('edit-goal');
const editformcontainer=document.getElementById('editgoalcont');
const closethediv=document.getElementById('closeeditgoal');
editmygoal.addEventListener('click',()=>{
    editformcontainer.classList.remove('edithide');
})
closethediv.addEventListener('click',()=>{
    editformcontainer.classList.add('edithide');
})
}

// function editGoal() {
//     const editGoalButton = document.getElementById("edit-goal");
//     const editFormContainer = document.getElementById("editGoalModal");
//     const closeEditDiv = document.getElementById("closeeditgoal"); // Add this if you have a close button
//     const editGoalForm = document.getElementById("editGoalForm");
  
//     // Event Listener to Show Edit Form
//     editGoalButton.addEventListener("click", () => {
//       const title = editGoalButton.getAttribute("data-title"); // Get title from data attribute
//       const goals = JSON.parse(localStorage.getItem("goals")) || [];
  
//       // Find the goal by title
//       const goal = goals.find((goal) => goal.title === title);
  
//       if (!goal) {
//         alert("Goal not found.");
//         return;
//       }
  
//       // Pre-fill the form with the goal's current title and word limit
//       document.getElementById("editGoalTitle").value = goal.title;
//       document.getElementById("editWordLimit").value = goal.words_goal;
  
//       // Show the form
//       editFormContainer.classList.remove("edithide");
//     });
  
//     // Event Listener to Close the Form
//     closeEditDiv?.addEventListener("click", () => {
//       editFormContainer.classList.add("edithide");
//     });
  
//     // Event Listener for Edit Goal Form Submission
//     editGoalForm.addEventListener("submit", (e) => {
//       e.preventDefault(); // Prevent page refresh
  
//       const title = document.getElementById("editGoalTitle").value.trim();
//       const newWordLimit = parseInt(document.getElementById("editWordLimit").value.trim(), 10);
  
//       // Validate the new word limit
//       if (isNaN(newWordLimit) || newWordLimit <= 0) {
//         alert("Please enter a valid word limit greater than 0.");
//         return;
//       }
  
//       // Retrieve goals from localStorage
//       const goals = JSON.parse(localStorage.getItem("goals")) || [];
  
//       // Find the goal by title and update its word limit
//       const goalIndex = goals.findIndex((goal) => goal.title === title);
  
//       if (goalIndex === -1) {
//         alert("Goal not found.");
//         return;
//       }
  
//       goals[goalIndex].words_goal = newWordLimit; // Update word limit
  
//       // Save updated goals to localStorage
//       localStorage.setItem("goals", JSON.stringify(goals));
  
//       // Confirm update and refresh the UI
//       alert(`Word limit for "${title}" updated to ${newWordLimit}.`);
//       renderGoals(); // Refresh the UI with updated goals
//       editGoalForm.reset(); // Reset the form
//       editFormContainer.classList.add("edithide"); // Hide the form
//     });
//   }
  



function show_history_button(){
    
    const showhistory=document.getElementById('history-goal');
    const historycontainer=document.getElementById('histgoalcont');
    const closethediv=document.getElementById('closehistory');
    showhistory.addEventListener('click',()=>{
        historycontainer.classList.remove('sh-history');
    })
    closethediv.addEventListener('click',()=>{
        historycontainer.classList.add('sh-history')
    })}




const adduserbutton=document.getElementById('add-user');
const add_user_cont=document.getElementById('addusercont');
const closeit=document.getElementById('closeadduser');
adduserbutton.addEventListener('click',()=>{
    add_user_cont.classList.remove('adus');
})
closeit.addEventListener('click',()=>{
    add_user_cont.classList.add('adus');
})





// CORE LOGIC:-
adduserbutton.addEventListener('click',()=>{
   
})
const greettheuser=document.querySelector('.hellouser');
const user_form=document.querySelector('#addkarouser');
user_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const aduser=document.getElementById('adddduser');
   
    greettheuser.innerHTML=`Hi ${aduser.value}`;
})



// initialise kiya object ko-1
const newgoalform=document.querySelector('#newgoalform');

const nayagoal=document.querySelector('#title');
const nayidate=document.querySelector('#date');
const shabdno=document.querySelector('#wordlimits');

const txarea=document.querySelector('#main-write');

const editgoalform=document.getElementById('editgoal');
const editbutton=document.getElementById('editgoalcont');// ye div ki id lgi thi editgoalcont
const goaltitleinput=document.querySelector('#edit');
const editmessage=document.querySelector('#editsuccess')
let goalsArray = JSON.parse(localStorage.getItem('newgoaldata')) || [];
let goaltoedit=null;
let goalObject = {};

newgoalform.addEventListener('submit',(event)=>{
    event.preventDefault();
    const enteredDate = new Date(nayidate.value);
    const currentDate = new Date();
     // Check if the entered date is in the past
  if (enteredDate < currentDate) {
    // Show error message and prevent form submission
    alert('bhai ye date nikal chuki hai jeevan me thoda sa aage bdo :)')
    // dateErrorMessage.style.display = 'block';
    return;
  }

  // Hide the error message if the date is valid
//   dateErrorMessage.style.display = 'none';
    goalObject={
        ...goalObject,
        title:nayagoal.value,
        words_goal:shabdno.value,
        time:new Date().toISOString,
        mygoalwritten:'',
    };
    goalsArray.push(goalObject);
    const reflect_title=document.getElementById('enter-title');
    reflect_title.innerText=`Title: ${goalObject.title}`;
    const rangekitni=document.querySelector('#rangeapply');
    rangekitni.innerText=`Word limit of this goal: ${shabdno.value}`;
    localStorage.setItem('newgoaldata',JSON.stringify(goalsArray));
    txarea.TEXT_NODE=""; 
    newgoalform.reset();
    updateProgressBar(); 

    
});



//applying to event listener to edit goal button
editbutton.addEventListener('click',()=>{
 
});

//event listener on edit goal form
// editgoalform.addEventListener('submit',(event)=>{
    // event.preventDefault();
    document.getElementById("editgoal").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission from refreshing the page
      
        // Get the values from the form inputs
        const title = document.getElementById("editGoalTitle").value.trim();
        const newWordLimit = parseInt(document.getElementById("editWordLimit").value.trim(), 10);
      
        // Validate the new word limit
        if (isNaN(newWordLimit) || newWordLimit <= 0) {
          alert("Please enter a valid word limit greater than 0.");
          return;
        }
      
        // Retrieve existing goals from localStorage
        const goals = JSON.parse(localStorage.getItem("goals")) || [];
      
        // Find the goal to be edited by its title
        const goalIndex = goals.findIndex((goal) => goal.title === title);
      
        if (goalIndex === -1) {
          alert("Goal not found.");
          return;
        }
      
        // Update the word limit of the found goal
        goals[goalIndex].words_goal = newWordLimit;
      
        // Save the updated goals back to localStorage
        localStorage.setItem("goals", JSON.stringify(goals));
      
        // Confirm the update to the user
        alert(`Word limit for "${title}" updated to ${newWordLimit}.`);
      
        // Optionally refresh the UI or close the edit form
        renderGoals(); // Ensure this function re-renders the goals list
        document.getElementById("editGoalForm").reset(); // Reset the form
        document.getElementById("editGoalModal").style.display = "none"; // Close the modal (if applicable)
      });
      
      // Function to populate the Edit Goal form with existing data
      function populateEditForm(title, wordLimit) {
        document.getElementById("editGoalTitle").value = title; // Pre-fill the title (read-only)
        document.getElementById("editWordLimit").value = wordLimit; // Pre-fill the word limit
      }

// });

txarea.addEventListener('input',(event)=>{
   
    goalObject.mygoalwritten = event.target.value.trim().replace(/\n/g,'');
    localStorage.setItem('newgoaldata', JSON.stringify(goalsArray));
    const wordlogss=document.querySelector('#wordslogged');
    wordlogss.innerText=`Words written:${((event.target.value.trim().replace(/\n/g,'')).split(" ")).length}`;
    updateProgressBar();
});
txarea.addEventListener('input',(event)=>{
    if(goaltoedit){
        goaltoedit.mygoalwritten=event.target.value;
        localStorage.setItem('newgoaldata',JSON.stringify(goalsArray));
    }
});
editgoalform.addEventListener('submit',(event)=>{
    event.preventDefault();
//     // if(goaltoedit){
    //     goaltoedit.title=document.querySelector('#edit').value;
    //     goaltoedit.words_goal=document.querySelector('#wordlim').value;
    //     goaltoedit.mygoalwritten=txarea.value;
    //     localStorage.setItem('newgoaldata',JSON.stringify(goalsArray));
       
    // }
    // Event Listener for Edit Goal Form Submission
// document.getElementById("editGoalForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent form submission from refreshing the page
  
//     // Get the values from the form inputs
//     const title = document.getElementById("editGoalTitle").value.trim();
//     const newWordLimit = parseInt(document.getElementById("editWordLimit").value.trim(), 10);
  
//     // Validate the new word limit
//     if (isNaN(newWordLimit) || newWordLimit <= 0) {
//       alert("Please enter a valid word limit greater than 0.");
//       return;
//     }
  
//     // Retrieve existing goals from localStorage
//     const goals = JSON.parse(localStorage.getItem("goals")) || [];
  
//     // Find the goal to be edited by its title
//     const goalIndex = goals.findIndex((goal) => goal.title === title);
  
//     if (goalIndex === -1) {
//       alert("Goal not found.");
//       return;
//     }
  
//     // Update the word limit of the found goal
//     goals[goalIndex].words_goal = newWordLimit;
  
//     // Save the updated goals back to localStorage
//     localStorage.setItem("goals", JSON.stringify(goals));
  
//     // Confirm the update to the user
//     alert(`Word limit for "${title}" updated to ${newWordLimit}.`);
  
//     // Optionally refresh the UI or close the edit form
//     renderGoals(); // Ensure this function re-renders the goals list
//     document.getElementById("editGoalForm").reset(); // Reset the form
//     document.getElementById("editGoalModal").style.display = "none"; // Close the modal (if applicable)
//   });
  
//   // Function to populate the Edit Goal form with existing data
//   function populateEditForm(title, wordLimit) {
//     document.getElementById("editGoalTitle").value = title; // Pre-fill the title (read-only)
//     document.getElementById("editWordLimit").value = wordLimit; // Pre-fill the word limit
//   }
  

  

});


const deletegoalform=document.querySelector('#deleteGoalform');
const deletegoaltitleinput=document.querySelector('#title-delete');
const deletgoal=document.querySelector('#deletekaro');
goalsArray = JSON.parse(localStorage.getItem('newgoaldata')) || [];

deletegoalform.addEventListener('submit',(event)=>{
event.preventDefault();
const goaltodelete=deletegoaltitleinput.value.trim();
const goalindex=goalsArray.findIndex(goal=>goal.title===goaltodelete);
if(goalindex!==-1){
    goalsArray.splice(goalindex,1);
    localStorage.setItem('newgoaldata',JSON.stringify(goalsArray));
    
    deletegoalform.reset();
    displaygoals();
}
else{
    alert('Goals not found please check the title and try again');
}
})

function displaygoals(){
    const goallist=document.querySelector('#goallist');
    goallist.innerHTML="";
    goalsArray.forEach((goal,index) => {
        const goalDiv=document.createElement('div');
        goalDiv.classList.add('goal-item');
        goalDiv.innerHTML=`<h3>${goal.title}</h3>
                        <p>word limit:${goal.words_goal}</p>
                         <p>Written Goal: ${goal.mygoalwritten}</p>
      <button class="deleteGoalButton" data-goal="${goal.title}">Delete Goal</button>`;
      goallist.appendChild(goalDiv);
        
    });
}



// Selecting elements
const viewHistoryForm = document.querySelector('#historygoalform');
const historyTitleInput = document.querySelector('#title-delete');
const showAllButton = document.querySelector('#showAllButton');
const historyContainer = document.querySelector('#historyContainer');

// Load goals from localStorage
 goalsArray = JSON.parse(localStorage.getItem('newgoaldata')) || [];

// Function to display history for a specific goal
viewHistoryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleToFind = historyTitleInput.value.trim();
  
  // Find the goal by title
  const goal = goalsArray.find(goal => goal.title === titleToFind);
  
  // Clear the history container
  historyContainer.innerHTML = '';

  if (goal) {
    // Display the found goal
    const goalHTML = `
      <div class="goal-item_history">
        <h3>Title: ${goal.title}</h3>
        <p>Word Limit: ${goal.words_goal}</p>
        <p>Written Goal: ${goal.mygoalwritten}</p>
      </div>
    `;
    historyContainer.innerHTML = goalHTML;
  } else {
    historyContainer.innerHTML = `<p>Goal with title "${titleToFind}" not found.</p>`;
  }

  // Reset the form
  viewHistoryForm.reset();
});

// Function to display all goals
showAllButton.addEventListener('click', () => {
  // Clear the history container
  historyContainer.innerHTML = '';

  if (goalsArray.length > 0) {
    goalsArray.forEach((goal) => {
      const goalHTML = `
        <div class="goal-item_history">
          <h3>Title: ${goal.title}</h3>
          <p>Word Limit: ${goal.words_goal}</p>
          <p>Written Goal: ${goal.mygoalwritten}</p>
        </div>
      `;
      historyContainer.innerHTML += goalHTML; // Append each goal's details
    });
  } else {
    historyContainer.innerHTML = `<p>No goals found.</p>`;
  }
});




// Select elements
const showAllGoalsButton = document.querySelector('#showmygoals');
const allGoalsContainer = document.querySelector('#allGoalsContainer');
const exitButton = document.querySelector('#exitButton');
const goalsList = document.querySelector('#goalsList');

// Load goals from localStorage
goalsArray = JSON.parse(localStorage.getItem('newgoaldata')) || [];

// Event listener for "Show All Goals" button
showAllGoalsButton.addEventListener('click', () => {
  // Remove the hidden class to show the modal
  allGoalsContainer.classList.remove('show_all_hidden');

  // Clear previous content
  goalsList.innerHTML = '';

  if (goalsArray.length > 0) {
    // Display all goals
    goalsArray.forEach((goal, index) => {
      const goalHTML = `
        <div class="goal-item">
          <h3>Goal #${index + 1}</h3>
          <p><strong>Title:</strong> ${goal.title}</p>
          <p><strong>Word Limit:</strong> ${goal.words_goal}</p>
          <p><strong>Written Goal:</strong> ${goal.mygoalwritten}</p>
        </div>
      `;
      goalsList.innerHTML += goalHTML;
    });
  } else {
    // No goals message
    goalsList.innerHTML = `<p>No goals found. Please add some goals first.</p>`;
  }
});

// Event listener for "Exit" button
exitButton.addEventListener('click', () => {
  // Add the hidden class to hide the modal
  allGoalsContainer.classList.add('show_all_hidden');
});


// Example data structure for goals
goalsArray = JSON.parse(localStorage.getItem('newgoaldata')) || [];

// Function to calculate and update progress
function updateProgressBar() {
  const totalWordLimit = goalsArray.reduce((acc, goal) => acc + parseInt(goal.words_goal || 0), 0);
  const totalWordsWritten = goalsArray.reduce((acc, goal) => acc + (goal.mygoalwritten?.split(/\s+/).filter(Boolean).length || 0), 0);

  // Calculate progress percentage
  const progressPercentage = totalWordLimit > 0 ? (totalWordsWritten / totalWordLimit) * 100 : 0;

  // Update the progress bar width and text
  const progressBar = document.querySelector('#progressBar');
  const progressText = document.querySelector('#progressText');

  progressBar.style.width = `${Math.min(progressPercentage, 100)}%`; // Cap at 100%
  progressText.textContent = `You have written ${totalWordsWritten} words out of ${totalWordLimit} (${Math.round(progressPercentage)}%)`;
//   const wordlogss=document.querySelector('#wordslogged');
//   wordlogss.innerText=`${totalWordsWritten}`;
}

// Call the function to initialize the progress bar
updateProgressBar();

// Optional: Recalculate and update progress when a new goal is added or updated
const newGoalForm = document.querySelector('#newgoalform');
newGoalForm.addEventListener('submit', () => {
  updateProgressBar();
});

const textArea = document.querySelector('#main-write');
textArea.addEventListener('input', () => {
  updateProgressBar();
});





// Array to store deadlines
// let deadlines = JSON.parse(localStorage.getItem('deadlines')) || [];

// // Function to handle adding a deadline
// function addDeadline(event) {
//     event.preventDefault();

//     const deadlineDate = document.getElementById('deadline-date').value;
//     const deadlineText = document.getElementById('deadline-text').value;

//     if (!deadlineDate || !deadlineText) {
//         alert('Please provide both date and description for the deadline');
//         return;
//     }

//     // Create a new deadline object
//     const newDeadline = {
//         date: deadlineDate,
//         text: deadlineText
//     };

//     // Add new deadline to the array and save it in localStorage
//     deadlines.push(newDeadline);
//     localStorage.setItem('deadlines', JSON.stringify(deadlines));

//     // Clear form fields
//     document.getElementById('add-deadline-form').reset();

//     // Re-render calendar with updated deadlines
//     renderCalendar();
// }

// // Attach the add deadline function to the form submit event
// document.getElementById('add-deadline-form').addEventListener('submit', addDeadline);






// // Function to render the calendar with deadlines
// function renderCalendar() {
//     const calendar = document.getElementById('calendar');
//     const dateCells = calendar.querySelectorAll('.day');

//     // Reset the calendar content
//     dateCells.forEach(cell => {
//         cell.classList.remove('deadline');
//         cell.innerHTML = ''; // Clear the day cell
//     });

//     // Iterate through each deadline and add it to the correct day
//     deadlines.forEach(deadline => {
//         const deadlineDate = new Date(deadline.date);
//         const formattedDate = deadlineDate.toISOString().split('T')[0]; // Get the date in YYYY-MM-DD format

//         // Find the corresponding day cell in the calendar
//         const dayCell = Array.from(dateCells).find(cell => {
//             return cell.dataset.date === formattedDate;
//         });

//         if (dayCell) {
//             // Add a deadline class and description to the cell
//             dayCell.classList.add('deadline');
//             const deadlineSpan = document.createElement('span');
//             deadlineSpan.textContent = deadline.text;
//             dayCell.appendChild(deadlineSpan);
//         }
//     });
// }

// // Call renderCalendar to load the calendar with existing deadlines
// renderCalendar();








// // Function to handle deleting a deadline
// function deleteDeadline(event) {
//     if (!event.target.classList.contains('deadline')) return;

//     const deadlineText = event.target.textContent;
//     const deadlineDate = event.target.closest('.day').dataset.date;

//     // Find the index of the deadline to remove
//     const deadlineIndex = deadlines.findIndex(deadline => {
//         return deadline.text === deadlineText && deadline.date === deadlineDate;
//     });

//     if (deadlineIndex !== -1) {
//         // Remove the deadline from the array
//         deadlines.splice(deadlineIndex, 1);
//         localStorage.setItem('deadlines', JSON.stringify(deadlines));

//         // Re-render the calendar to reflect changes
//         renderCalendar();
//     }
// }

// // Attach the delete deadline function to the calendar click event
// document.getElementById('calendar').addEventListener('click', deleteDeadline);
// const calendar = document.getElementById('calendar');
// const addDeadlineForm = document.getElementById('add-deadline-form');
// const deadlineDateInput = document.getElementById('deadline-date');
// const deadlineTextInput = document.getElementById('deadline-text');

// let deadlines = JSON.parse(localStorage.getItem('deadlines')) || [];

// // Function to render the calendar days
// function renderCalendar() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();

//     // Get the first and last day of the current month
//     const firstDayOfMonth = new Date(year, month, 1);
//     const lastDayOfMonth = new Date(year, month + 1, 0);

//     // Get the number of days in the current month
//     const daysInMonth = lastDayOfMonth.getDate();
    
//     // Clear the previous calendar content
//     calendar.innerHTML = '';

//     // Add empty cells for the previous month days (padding)
//     const paddingDays = firstDayOfMonth.getDay();
//     for (let i = 0; i < paddingDays; i++) {
//         const emptyCell = document.createElement('div');
//         calendar.appendChild(emptyCell);
//     }

//     // Render each day of the current month
//     for (let i = 1; i <= daysInMonth; i++) {
//         const dayCell = document.createElement('div');
//         dayCell.classList.add('day');
//         dayCell.dataset.date = `${year}-${month + 1}-${i}`;
//         dayCell.innerHTML = `<span>${i}</span>`;

//         // Check if this day has a deadline and show it
//         const dayDeadline = deadlines.find(deadline => deadline.date === dayCell.dataset.date);
//         if (dayDeadline) {
//             const deadlineTag = document.createElement('div');
//             deadlineTag.classList.add('deadline');
//             deadlineTag.innerText = dayDeadline.text;
//             dayCell.appendChild(deadlineTag);
//         }

//         // Event listener to handle clicks on a day (to delete or edit deadline)
//         dayCell.addEventListener('click', () => handleDayClick(dayCell));

//         calendar.appendChild(dayCell);
//     }
// }

// // Function to handle the click event on a day
// function handleDayClick(dayCell) {
//     const dayDate = dayCell.dataset.date;
//     const dayDeadline = deadlines.find(deadline => deadline.date === dayDate);

//     if (dayDeadline) {
//         // If a deadline already exists, ask the user if they want to delete it
//         if (confirm(`Do you want to delete the deadline: "${dayDeadline.text}" for ${dayDate}?`)) {
//             deadlines = deadlines.filter(deadline => deadline.date !== dayDate);
//             localStorage.setItem('deadlines', JSON.stringify(deadlines));
//             renderCalendar(); // Re-render the calendar
//         }
//     } else {
//         // If no deadline exists, show the form and prefill the date
//         deadlineDateInput.value = dayDate;
//         deadlineTextInput.focus();
//     }
// }

// // Function to handle form submission to add a new deadline
// addDeadlineForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const date = deadlineDateInput.value;
//     const text = deadlineTextInput.value.trim();

//     if (date && text) {
//         // Add the new deadline to the deadlines array
//         deadlines.push({ date, text });
//         localStorage.setItem('deadlines', JSON.stringify(deadlines));

//         // Reset the form and re-render the calendar
//         addDeadlineForm.reset();
//         renderCalendar();
//     }
// });

// // Initial call to render the calendar
// renderCalendar();


// // Function to format date as dd-mm-yyyy
// function formatDate(date) {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
// }

// // Function to add deadline to the calendar
// function addDeadlineToCalendar(date, description) {
//     const calendar = document.getElementById('calendar');
//     const formattedDate = formatDate(date);

//     // Create a new deadline element to show
//     const deadlineElement = document.createElement('div');
//     deadlineElement.classList.add('deadline');
//     deadlineElement.innerHTML = `
//         <span>${formattedDate}</span>
//         <p>${description}</p>
//     `;
    
//     // Loop through calendar days and add the deadline to the correct date
//     const days = calendar.querySelectorAll('.day');
//     days.forEach(day => {
//         const daySpan = day.querySelector('span');
//         if (daySpan && daySpan.textContent === formattedDate) {
//             day.appendChild(deadlineElement);
//         }
//     });
// }

// // Function to generate and display the calendar for the current month
// function generateCalendar() {
//     const calendar = document.getElementById('calendar');
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();
//     const firstDay = new Date(currentYear, currentMonth, 1);
//     const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
//     const totalDays = lastDay.getDate();
    
//     // Clear the calendar first
//     calendar.innerHTML = '';

//     // Create the calendar days
//     for (let i = 1; i <= totalDays; i++) {
//         const day = document.createElement('div');
//         day.classList.add('day');
//         day.innerHTML = `<span>${String(i).padStart(2, '0')}</span>`;
//         calendar.appendChild(day);
//     }
// }

// // Modify the submit event listener for adding deadlines
// document.getElementById('add-deadline-form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const deadlineDate = document.getElementById('deadline-date').value;
//     const deadlineText = document.getElementById('deadline-text').value;

//     // Convert the date string to a Date object
//     const [day, month, year] = deadlineDate.split('-');
//     const date = new Date(`${month}-${day}-${year}`);  // Use mm-dd-yyyy format for Date constructor

//     // Ensure the date is valid before adding to the calendar
//     if (isNaN(date)) {
//         alert("Invalid date format. Please use dd-mm-yyyy.");
//         return;
//     }

//     addDeadlineToCalendar(date, deadlineText);

//     // Clear form inputs after adding
//     document.getElementById('add-deadline-form').reset();
// });

// // Generate the calendar on page load
// window.onload = generateCalendar;

// Function to format date as dd-mm-yyyy
// function formatDate(date) {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
// }

// // Function to add deadline to the calendar
// function addDeadlineToCalendar(date, description) {
//     const calendar = document.getElementById('calendar');
//     const formattedDate = formatDate(date);

//     // Create a new deadline element to show
//     const deadlineElement = document.createElement('div');
//     deadlineElement.classList.add('deadline');
//     deadlineElement.innerHTML = `
//         <span>${formattedDate}</span>
//         <p>${description}</p>
//     `;
    
//     // Loop through calendar days and add the deadline to the correct date
//     const days = calendar.querySelectorAll('.day');
//     days.forEach(day => {
//         const daySpan = day.querySelector('span');
//         if (daySpan && daySpan.textContent === formattedDate.split('-')[0]) {  // Checking the day only
//             day.appendChild(deadlineElement);
//         }
//     });
// }

// // Function to generate and display the calendar for the current month
// function generateCalendar() {
//     const calendar = document.getElementById('calendar');
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();
//     const firstDay = new Date(currentYear, currentMonth, 1);
//     const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
//     const totalDays = lastDay.getDate();
    
//     // Clear the calendar first
//     calendar.innerHTML = '';

//     // Create the calendar days
//     for (let i = 1; i <= totalDays; i++) {
//         const day = document.createElement('div');
//         day.classList.add('day');
//         day.innerHTML = `<span>${String(i).padStart(2, '0')}</span>`;
//         calendar.appendChild(day);
//     }
// }

// // Modify the submit event listener for adding deadlines
// document.getElementById('add-deadline-form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const deadlineDate = document.getElementById('deadline-date').value;
//     const deadlineText = document.getElementById('deadline-text').value;

//     // Convert the date string to a Date object (yyyy-mm-dd format)
//     const date = new Date(deadlineDate);  // Directly using the input's value
    
//     // Ensure the date is valid before adding to the calendar
//     if (isNaN(date)) {
//         alert("Invalid date format. Please use dd-mm-yyyy.");
//         return;
//     }

//     addDeadlineToCalendar(date, deadlineText);

//     // Clear form inputs after adding
//     document.getElementById('add-deadline-form').reset();
// });

// // Generate the calendar on page load
// window.onload = generateCalendar;

// Function to format date as dd-mm-yyyy
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to add deadline to the calendar
function addDeadlineToCalendar(date, description) {
    const calendar = document.getElementById('calendar');
    const formattedDate = formatDate(date);

    // Create a new deadline element to show
    const deadlineElement = document.createElement('div');
    deadlineElement.classList.add('deadline');
    deadlineElement.innerHTML = `
        <span>${formattedDate}</span>
        <p>${description}</p>
    `;
    
    // Loop through calendar days and add the deadline to the correct date
    const days = calendar.querySelectorAll('.day');
    days.forEach(day => {
        const daySpan = day.querySelector('span');
        if (daySpan && daySpan.textContent === formattedDate.split('-')[0]) {  // Checking the day only
            day.appendChild(deadlineElement);
        }
    });
}

// Function to generate and display the calendar for the current month
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
    const totalDays = lastDay.getDate();
    
    // Clear the calendar first
    calendar.innerHTML = '';

    // Create the calendar days
    for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.innerHTML = `<span>${String(i).padStart(2, '0')}</span>`;
        calendar.appendChild(day);
    }
}

// Modify the submit event listener for adding deadlines
document.getElementById('add-deadline-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const deadlineDate = document.getElementById('deadline-date').value;
    const deadlineText = document.getElementById('deadline-text').value;

    // Convert the date string to a Date object (yyyy-mm-dd format)
    const date = new Date(deadlineDate);  // Directly using the input's value
    
    // Ensure the date is valid before adding to the calendar
    if (isNaN(date)) {
        alert("Invalid date format. Please use dd-mm-yyyy.");
        return;
    }

    // Get today's date and reset the time for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset the time part of the current date

    // Check if the input date is in the past
    if (date < today) {
        alert("You cannot set a deadline for a past date. Please choose a future date.");
        return;
    }

    addDeadlineToCalendar(date, deadlineText);

    // Clear form inputs after adding
    document.getElementById('add-deadline-form').reset();
});

// Generate the calendar on page load
window.onload = generateCalendar;
