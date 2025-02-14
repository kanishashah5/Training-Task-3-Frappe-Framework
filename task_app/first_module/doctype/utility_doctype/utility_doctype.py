# Copyright (c) 2025, Sanskar Technolab and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from frappe.utils import *

class UtilityDocType(Document):
	def validate(self):
		self.date = today()
