// Copyright (c) 2025, Sanskar Technolab and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Dialog Doctype", {
// 	refresh(frm) {

// 	},
// });


// let d = new frappe.ui.Dialog({
//     title: 'Enter details',
//     fields: [
//         {
//             label: 'First Name',
//             fieldname: 'first_name',
//             fieldtype: 'Data'
//         },
//         {
//             label: 'Last Name',
//             fieldname: 'last_name',
//             fieldtype: 'Data'
//         },
//         {
//             label: 'Age',
//             fieldname: 'age',
//             fieldtype: 'Int'
//         }
//     ],
//     size: 'small', // small, large, extra-large 
//     primary_action_label: 'Submit',
//     primary_action(values) {
//         console.log(values);

//         frappe.new_doc("Dialog Doctype" , {
//             first_name : values.first_name,
//             last_name : values.last_name,
//             age : values.age
//         })

//         d.hide();
//     }
// });


// d.show();





// For inserting data of dialog into fields of doctype using API call  


// let d = new frappe.ui.Dialog({
//     title: 'Enter details',
//     fields: [
//         {
//             label: 'First Name',
//             fieldname: 'first_name',
//             fieldtype: 'Data'
//         },
//         {
//             label: 'Last Name',
//             fieldname: 'last_name',
//             fieldtype: 'Data'
//         },
//         {
//             label: 'Age',
//             fieldname: 'age',
//             fieldtype: 'Int'
//         }
//     ],
//     size: 'small', // small, large, extra-large 
//     primary_action_label: 'Submit',
//     primary_action(values) {
//         console.log(values);

//         // Call Python API to insert data into 'Dialog Doctype'
//         frappe.call({
//             method: "task_app.apis.dialog.create_dialog_doc",  // Adjust with your app's path
//             args: values,
//             callback: function(response) {
//                 if (response.message.status === "success") {
//                     frappe.msgprint("Record saved successfully: " + response.message.docname);
//                     d.hide();  // Hide the dialog after saving
//                 } else {
//                     frappe.msgprint("Error: " + response.message.message);
//                 }
//             }
//         });
//     }
// });

// d.show();


// frappe.ui.form.on('Dialog Doctype', {
//     refresh: function(frm) {
//         frappe.msgprint({
//             title: __('Notification'),
//             message: __('Are you sure you want to proceed?'),
//             primary_action: {
//                 label: 'Proceed',
//                 action() {
//                     console.log("Proceed button clicked!");

//                     // Example: Show another notification
//                     frappe.msgprint(__('You clicked Proceed! This is a client-side action.'));
//                 }
//             }
//         });
//     }
// });



//                            WUP 
// frappe.ui.form.on('Dialog Doctype', {
//     refresh: function(frm) {
//         frappe.msgprint({
//             title: __('Notification'),
//             message: __('Are you sure you want to proceed?'),
//             primary_action: {
//                 label: 'Proceed',
//                 action: function() {  // ✅ Ensure button click is being captured
//                     console.log("✅ Button Clicked! Making API Call...");

//                     frappe.call({
//                         method: 'task_app.APIs.dialog.process_dialog_action',
//                         args: { docname: frm.doc.name },
//                         callback: function(response) {
//                             console.log("✅ API Response:", response);
//                             frappe.msgprint(__('Server Response: ' + response.message));
//                         }
//                     });
//                 }
//             }
//         });
//     }
// });

                       // wup 


// frappe.prompt('First Name', console.log, 'Enter First Name', 'Submit');

// frappe.prompt({
//     label: 'Birth Date',
//     fieldname: 'date',
//     fieldtype: 'Date'
// }, (values) => {
//     console.log(values.date);
// })


// frappe.prompt([
//     {
//         label: 'First Name',
//         fieldname: 'first_name',
//         fieldtype: 'Data'
//     },
//     {
//         label: 'Last Name',
//         fieldname: 'last_name',
//         fieldtype: 'Data'
//     },
// ], (values) => {
//     console.log(values.first_name, values.last_name);
// })


// frappe.confirm('Are you sure you want to proceed?',
//     () => {
//        
//         frappe.msgprint(__('You confirmed Yes!'));
//     }, 
//     () => {
//         
//         frappe.msgprint(__('You clicked No!'));
//     }
// );


// frappe.warn('Are you sure you want to proceed?',
//     'There are unsaved changes on this page',
//     () => {
//       frappe.msgprint(__("You clicked Continue.."))
//     },
//     'Continue',
//     true 
// )


// frappe.show_alert({message:'Hi, you have a new message' , indicator:'green'}, 5);

// frappe.show_progress('Loading..', 90, 100, 'Please wait', true);

// let progress = 0;
// let interval = setInterval(() => {
//     progress += 10; 
//     frappe.show_progress('Loading..', progress, 100, 'Please wait', true);
    
//     if (progress >= 100) {
//         clearInterval(interval); 
//     }
// }, 500); 



// frappe.new_doc("Article");


frappe.new_doc("Article", {article_name: "New Task"});


