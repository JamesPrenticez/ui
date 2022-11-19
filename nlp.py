from keybert import KeyBERT
import time
from pprint import pprint


desc = "Number of out of service laptops each month"

reporting_linky_list = \
[
  {
    "CustCNum": "C11883",
    "DateCreatedDateTime": "Wed, 09 Nov 2022 20:22:24 GMT",
    "FriendlyName": "Total number of tickets recieved for the month",
    "LinkyCode": "0C3960E2-A992-EC11-A507-501AC54829AF",
    "PersonEmail": "james.prentice@datacom.co.nz",
    "ReportID": 1147
  },
  {
    "CustCNum": "C11660",
    "DateCreatedDateTime": "Thu, 10 Nov 2022 02:22:47 GMT",
    "FriendlyName": "Laptops that were decommissioned this month",
    "LinkyCode": "2C11A23A-9E60-ED11-ADE6-28187838D58B",
    "PersonEmail": "james.prentice@datacom.co.nz",
    "ReportID": 1149
  },
  {
    "CustCNum": "C11660",
    "DateCreatedDateTime": "Thu, 10 Nov 2022 02:22:47 GMT",
    "FriendlyName": "Hours worked by service desk support staff",
    "LinkyCode": "2C11A23A-9E60-ED11-ADE6-28187838D58B",
    "PersonEmail": "james.prentice@datacom.co.nz",
    "ReportID": 1149
  }
]

my_list = [
  "Hours worked by service desk support staff",
  "Laptops that were decommissioned this month",
  "Total number of tickets recieved for the month"
]

# pprint(reporting_linky_list)



# info = (my_list_of_descriptions[:10] + '..') if len(my_list_of_descriptions) > 10 else my_list_of_descriptions
# print(info)
# kw_model = KeyBERT()
# keywords = kw_model.extract_keywords(my_list, keyphrase_ngram_range=(1,3))

# string = str(keywords[0][0])
# result = string.replace(' ', '_')

# kw_model = KeyBERT()

# for descriptions in my_list_of_descriptions:
#     keywords = kw_model.extract_keywords(descriptions, keyphrase_ngram_range=(1,3))
#     print(keywords) 
#     print("--- %s seconds ---" % (time.time() - start_time))

# print(keywords) 
# print("--- %s seconds ---" % (time.time() - start_time))

kw_model = KeyBERT()

my_list_of_descriptions = [
  "Hours worked by service desk support staff",
  "Laptops that were decommissioned this month",
  "Total number of tickets recieved for the month"
]


print("========================================")
print("Original")
print("========================================")
for my_str in my_list:
  print(my_str)

start_time = time.time()

print("========================================")
print("Shortened")
print("========================================")
for my_str in my_list:
  result = my_str[:31] + '...' if len(my_str) > 5 else my_str
  print(result)

print("--- %s seconds ---" % (time.time() - start_time))
lap_time = time.time()

print("========================================")
print("Keywords")
print("========================================")

for my_str in my_list:
  keywords = kw_model.extract_keywords(my_str, keyphrase_ngram_range=(1,4))
  my_string = keywords[0][0]
  my_snake_case_string = my_string.replace(' ', '_')
  result = my_snake_case_string[:31]
  length = result + ":" + str(len(result))
  print(length)

print("--- %s seconds ---" % (time.time() - lap_time))