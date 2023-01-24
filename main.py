from flask import Flask, request

import math

app = Flask('Pitagoras')


@app.route('/ladoCResultado', methods=['POST'])
def ladoCResultado():

    data = request.get_json()
    cateto_a = data["cateto_a"]
    cateto_b = data["cateto_b"]
    

    hipotenusa = math.sqrt(cateto_a**2 + cateto_b**2)
    return {"O valor da Hipotenusa é": hipotenusa}



@app.route('/ladoAResultado', methods=['POST'])
def ladoAResultado():

   data = request.get_json()
   cateto_b = data["cateto_b"]
   hipotenusa = data["hipotenusa"]

   cateto_a = math.sqrt(hipotenusa**2 - cateto_b**2)
   return { "O valor do Cateto A é:": cateto_a }


@app.route('/ladoBResultado', methods=['POST'])
def ladoBResultado():

    data = request.get_json()
    cateto_a = data["cateto_a"]
    hipotenusa = data["hipotenusa"]
    

    cateto_b = math.sqrt(hipotenusa**2 - cateto_a**2)
    return {"O valor do Cateto B é": cateto_b}





app.run()