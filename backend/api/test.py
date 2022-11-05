from io import BytesIO
from flask import send_file, current_app
import random
from . import blueprint
from ..functions.create_excel_spreadsheet import CreateExcelSpreadsheet
import time
threads = {}

@blueprint.route('/test', methods=['GET'])
def backing_sheets_start():
  thread_id = random.randint(0, 10000)

  threads[thread_id] = CreateExcelSpreadsheet(current_app)
  threads[thread_id].start()

  print(threads[thread_id].progress)

  # Delay or no data....
  time.sleep(3)

  file_name =  "test.xlsx"
  byte_obj = threads[thread_id].result

  print(byte_obj)

  return send_file(
    BytesIO(byte_obj),
    download_name=file_name,
    as_attachment=True,
    mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  )