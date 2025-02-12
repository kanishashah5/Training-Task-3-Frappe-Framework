# Copyright (c) 2025, Sanskar Technolab and contributors
# For license information, please see license.txt

import frappe
from frappe.model.naming import getseries
from frappe.model.document import Document

class Testing_NamingSeries(Document): 
    def autoname(self):
        """Generate a global incrementing name for Project based on First Name and Surname."""
        if self.first_name:
            next_number = getseries("P-", 3)  

            
            self.name = "P-{}-{}".format(self.first_name, next_number)  
        else:
            frappe.throw("First Name are required for naming the Project.")
