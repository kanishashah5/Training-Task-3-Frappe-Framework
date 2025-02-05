# # Copyright (c) 2025, Sanskar Technolab and contributors
# # For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class ServerSideScripting(Document):
	pass
	# def validate(self):
	# 	frappe.msgprint("Hello !")

	
	# def before_save(self):
	# 	frappe.msgprint("Hello !")

	
	# def after_insert(self):
	# 	frappe.msgprint("Hello !")	
	
	# def on_update(self):
	# 	frappe.msgprint("Hello !")


	# def validate(self):
	# 	self.get_list()


	# def get_list(self):
	# 	doc = frappe.db.get_list("Client Side Scripting",
	# 	filters={
	# 		'enable' : 1
	# 	},
	# 	fields = ['first_name' , 'age'])

	# 	for d in doc:
	# 		frappe.msgprint(_("The Parent First name is {0} and age is {1}").format(d.first_name,d.age))

@frappe.whitelist()
def create_record(d_name):
	record = frappe.get_doc("Client Side Scripting" , d_name)
	new_record = frappe.new_doc("Server Side Scripting")
	new_record.first_name = record.first_name
	new_record.middle_name = record.middle_name
	new_record.last_name = record.last_name
	new_record.docstatus = 1


	new_record.insert()
	frappe.db.commit()
	

