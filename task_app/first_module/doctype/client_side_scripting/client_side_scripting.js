// Copyright (c) 2025, Sanskar Technolab and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Client Side Scripting", {

    // Custom button in form 

    // refresh(frm) {
    //     frm.add_custom_button(__("Create User"), function(){
    //         frappe.msgprint("Button Clicked which is in form!")
    //     })
    // },


    
    // VALUE FETCHING

//     after_save: function(frm) {
//         frappe.msgprint(__("The full name is '{0}' ",
// [frm.doc.first_name + " " + frm.doc.middle_name + " " + frm.doc.last_name]
//           ))

//           for(let row of frm.doc.family_members){
//             frappe.msgprint(__("{0}. The family member is '{1}' and relation is {2}", 
//                 [row.idx, row.name1 , row.relation]
//             ))
//           }

//     }


// set_intro and is_new methods 

// refresh : function(frm){
//     if(frm.is_new()){
// frm.set_intro("Now you can create new Doctype.");
//     }
    // 
// }
// });



// Custom button in listview

/*function ButtonFunction(listview) {
    frappe.msgprint("Button in Listview");
}

frappe.listview_settings['Client Side Scripting'] = {
   refresh: function(listview) {
       listview.page.add_inner_button("Click Me", function() {
           ButtonFunction(listview);
           
       });
   },
};*/


frappe.ui.form.on('Client Side Scripting', {
	refresh(frm) {
		// your code here
		frm.add_custom_button(__("Create user"), function(){
		    frappe.call({
		        method:'task_app.first_module.doctype.server_side_scripting.server_side_scripting.create_record',
		        args:{
		            d_name:frm.doc.name
		        },
		        
		        callback: function(r){
		            if(r){
		                frappe.msgprint("New User Created!");
		            }
		        }
		    });
		    
		    

        });
	}
});
