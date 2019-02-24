script1 = open("soupnazi.txt", "r");
script2 = open("parkinggarage.txt", "r");
script3 = open("puffy.txt", "r");
script4 = open("strike.txt", "r");
script5 = open("marinebiologist.txt", "r");
script6 = open("contest.txt", "r");
jerry_data = open("jerry.txt", "w")
george_data = open("george.txt", "w")
elaine_data = open("elaine.txt", "w")
kramer_data = open("kramer.txt", "w")

script = script1.read()
script += script2.read()
script += script3.read()
script += script4.read()
script += script5.read()
script += script6.read()

script1.close();
script2.close();
script3.close();
script4.close();
script5.close();
script6.close();

jerry_data.write("let jerry_data = ` \n")
george_data.write("let george_data = ` \n")
elaine_data.write("let elaine_data = ` \n")
kramer_data.write("let kramer_data = ` \n")

jerry = False
george = False
elaine = False
kramer = False

for word in script.split():
    if word[-1] == ":" and (word[-2].isupper() or word[-2].isdigit()):
        jerry = False
        george = False
        elaine = False
        kramer = False
    if jerry:
        jerry_data.write(word + " ")
    if george:
        george_data.write(word + " ")
    if elaine:
        elaine_data.write(word + " ")
    if kramer:
        kramer_data.write(word + " ")
    if word == "JERRY:":
        jerry = True
        george = False
        elaine = False
        kramer = False
    elif word == "GEORGE:":
        jerry = False
        george = True
        elaine = False
        kramer = False
    elif word == "ELAINE:":
        jerry = False
        george = False
        elaine = True
        kramer = False
    elif word == "KRAMER:":
        jerry = False
        george = False
        elaine = False
        kramer = True

jerry_data.write("\n `")
george_data.write("\n `")
elaine_data.write("\n `")
kramer_data.write("\n `")

jerry_data.close()
george_data.close()
elaine_data.close()
kramer_data.close()

print('Done.')

    