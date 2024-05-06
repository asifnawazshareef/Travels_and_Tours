window.addEventListener("scroll", reveal);



	
// 	wpforms-2364-field_60
	
//   // Get references to the select all checkbox and individual checkboxes
//   const selectAllCheckbox = document.getElementById('wpforms-2364-field_60_1');
//   const customCheckboxes = document.getElementsByClassName('wpforms-valid');

//   // Add event listener to the select all checkbox
//   selectAllCheckbox.addEventListener('change', function() {
//     // Loop through all custom checkboxes and set their state to match the select all checkbox
//     for (let i = 0; i < customCheckboxes.length; i++) {
//       customCheckboxes[i].checked = this.checked;
//     }
//   });

//   // Add event listeners to individual checkboxes
//   for (let i = 0; i < customCheckboxes.length; i++) {
//     customCheckboxes[i].addEventListener('change', function() {
//       // If any individual checkbox is unchecked, uncheck the select all checkbox
//       if (!this.checked) {
//         selectAllCheckbox.checked = false;
//       }
//       // If all individual checkboxes are checked, check the select all checkbox
//       else {
//         let allChecked = true;
//         for (let j = 0; j < customCheckboxes.length; j++) {
//           if (!customCheckboxes[j].checked) {
//             allChecked = false;
//             break;
//           }
//         }
//         selectAllCheckbox.checked = allChecked;
//       }
// 		    // Add 'wpforms-2364-field_60' ID before the 'wpforms-valid' class
//     const currentCheckbox = this;
//     const previousClass = 'wpforms-2364-field_60';
//     if (!currentCheckbox.classList.contains(previousClass)) {
//       currentCheckbox.classList.add(previousClass);
//       currentCheckbox.classList.add('wpforms-valid');
//     }
//     });
//   }
	
// // 	wpforms-2364-field_61
// // 	
//   // Get references to the select all checkbox and individual checkboxes
// const selectAllCheckbox_61 = document.getElementById('wpforms-2364-field_61_1');
// const customCheckboxes_61 = document.getElementsByClassName('wpforms-valid');

// // Add event listener to the select all checkbox
// selectAllCheckbox_61.addEventListener('change', function() {
//   // Loop through all custom checkboxes and set their state to match the select all checkbox
//   for (let i = 0; i < customCheckboxes_61.length; i++) {
//     customCheckboxes_61[i].checked = this.checked;
//   }
// });

// // Add event listeners to individual checkboxes
// for (let i = 0; i < customCheckboxes_61.length; i++) {
//   customCheckboxes_61[i].addEventListener('change', function() {
//     // If any individual checkbox is unchecked, uncheck the select all checkbox
//     if (!this.checked) {
//       selectAllCheckbox_61.checked = false;
//     }
//     // If all individual checkboxes are checked, check the select all checkbox
//     else {
//       let allChecked = true;
//       for (let j = 0; j < customCheckboxes_61.length; j++) {
//         if (!customCheckboxes_61[j].checked) {
//           allChecked = false;
//           break;
//         }
//       }
//       selectAllCheckbox_61.checked = allChecked;
//     }
// 	      // Add 'wpforms-2364-field_61' ID before the 'wpforms-valid' class
//     const currentCheckbox = this;
//     const previousClass = 'wpforms-2364-field_61';
//     if (!currentCheckbox.classList.contains(previousClass)) {
//       currentCheckbox.classList.add(previousClass);
//       currentCheckbox.classList.add('wpforms-valid');
//     }
//   });
// }
  


function synchronizeCheckboxes(selectAllCheckbox, customCheckboxes) {
    selectAllCheckbox.addEventListener('change', function () {
      for (let i = 0; i < customCheckboxes.length; i++) {
        customCheckboxes[i].checked = this.checked;
      }
    });

    for (let i = 0; i < customCheckboxes.length; i++) {
      customCheckboxes[i].addEventListener('change', function () {
        if (!this.checked) {
          selectAllCheckbox.checked = false;
        } else {
          let allChecked = true;
          for (let j = 0; j < customCheckboxes.length; j++) {
            if (!customCheckboxes[j].checked) {
              allChecked = false;
              break;
            }
          }
          selectAllCheckbox.checked = allChecked;
        }
        if (!this.classList.contains(selectAllCheckbox.id)) {
          this.classList.add(selectAllCheckbox.id);
          this.classList.add('wpforms-valid');
        }
      });
    }
  }

  // Set 1
  const selectAllCheckbox_60 = document.getElementById('wpforms-2364-field_60_1');
  const customCheckboxes_60 = document.getElementsByClassName('wpforms-valid');
  synchronizeCheckboxes(selectAllCheckbox_60, customCheckboxes_60);
  console.log(selectAllCheckbox_60);

  // Set 2
  const selectAllCheckbox_61 = document.getElementById('wpforms-2364-field_61_1');
  const customCheckboxes_61 = document.getElementsByClassName('wpforms-valid');
  synchronizeCheckboxes(selectAllCheckbox_61, customCheckboxes_61);



      // Add your custom classes to the body tag
 

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  body.classList.add("transparent-header-page");
});

