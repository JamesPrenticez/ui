import time
from io import BytesIO

import pandas as pd
import threading

class CreateExcelSpreadsheet(threading.Thread):
	def __init__(self, current_app):
		self.app_context = current_app.app_context()
		self.progress = 0
		self.result = None
		super().__init__()

	def run(self):
		# Push App Context
		self.app_context.push() 

		# Define a excel workbook
		bytes_io = BytesIO()
		writer = pd.ExcelWriter(
			bytes_io, 
			engine='xlsxwriter',
			engine_kwargs={'options': {'strings_to_numbers': True}}
		)

		workbook = writer.book

		# Get Data
		mockData = [{"name": "james"}]

		df = pd.DataFrame(mockData)

		# Write data to sheet
		df.to_excel(writer, "Summary", index=False)

		# Save
		writer.close() 

		# # TEST LOOP
		# results = [
		# 	{ 
		# 		"catergory": "cats",
		# 		"name": "gap"
		# 	},
		# 	{
		# 		"catergory": "dogs",
		# 		"name": "spot"
		# 	}
		# ]

		# item_list = pd.DataFrame(results)
		# #print(item_list)

		# # Handle progress Divide 100% by linky list
		# #percentageEach = math.floor(100 / len(linky_list))
		# percentageEach = 100 / len(results)

		# If sheet already created then we want to append to it
		# So we need to store the last row that data was writen on
		# storeLastRow = {}

		# Loop through all linkys and run stored proc
		# for index, item in item_list.iterrows():
		# 	print(item['catergory'])
		# 	# Write to

		# 	print(item)
		# 	tab_name = f"{item['catergory']}"

		# 	# Check if sheet already exists
		# 	# If it does we include the columns headers
		# 	# we also want store the last row so we can keep appending from where we last left off
		# 	if storeLastRow.get(f"{tab_name}") is None:
		# 		storeLastRow[tab_name] = len(df.index) + 2
		# 		df.to_excel(writer, f"{tab_name}", index=False, startrow=1)
		# 	else:
		# 		df.to_excel(writer, f"{tab_name}", index=False,	header=False, startrow=storeLastRow[tab_name])
		# 		storeLastRow[tab_name] = storeLastRow[tab_name] + len(df.index)

		# 	# Write data to sheet
		# 	writer.sheets[f"{tab_name}"]

		# 	# Update progress each time we write a linky to a sheet
		# 	self.progress += percentageEach

		# Finish writing to file

		# Set results AKA file to be sent

		bytes_io.seek(0)
		self.result = bytes_io.read()

		# Gives a chance to fetch '100%' before going to complete
		time.sleep(1)

		# Change progress from 100% to 'complete' which allows us to trigger a download
		self.progress = "complete"

		# Keep thread open for 10seconds to allow for delay in fetching download
		time.sleep(10)

		# Return to close thread
		return

# https://dev.azure.com/Digibill-Datacom/Digibill/_git/backing-sheets?version=GCf99f9b5d4274a8dbe0f0b56e55656cd4863fd6dc&path=/FlaskApp/functions/generate_backing_sheet.py
# https://stackoverflow.com/questions/72541670/why-flask-app-context-is-lost-in-child-thread-when-application-factory-pattern-i
