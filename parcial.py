from flask import Flask, render_template, request
app = Flask(__name__)
#@app.route("/")
#def index():
#	return "<p><b>Hello, World!!!</b></p>"
#@app.route("/<string:name>")
#def makako(name):
#	return "<p><b>Hello, {}!!!</b></p>".format(name)
@app.route("/")
def index():
	return render_template("main.html")
@app.route("/CV", methods=["POST"])
def CV():
	name=request.form.get("name")
	date=request.form.get("fecha")
	occupation=request.form.get("occupation")
	email=request.form.get("email")
	phone=request.form.get("phone")
	nationality=request.form.get("nationality")
	ilevel=request.form.get("ilevel")
	flevel=request.form.get("flevel")
	profile=request.form.get("profile")
	skill=request.form.get("skill")
	ability=request.form.get("incognito") + ","
	abilityss = []
	i = 0
	j = 0
	for n in ability:
		i = i + 1
		if n == ',':
			abilityss.append(ability[j:i-1])
			j = i
	pro=request.form.get("cognito") + ","
	progra = []
	i = 0
	j = 0
	for n in pro:
		i = i + 1
		if n == ',':
			progra.append(pro[j:i-1])
			j = i
    
	return render_template("CV.html",
        newname=name,
		newdate=date,
        newoccupation=occupation,
        newcel=phone,
        newemail=email,
        newnationality=nationality,
        newilevel=ilevel,
        newflevel=flevel,
        newskill=skill,
        newability=abilityss,
        newpro=progra,
        newprofile=profile)
