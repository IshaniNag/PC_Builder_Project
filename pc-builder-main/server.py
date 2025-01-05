from flask import Flask, jsonify
import pcpartpicker

app = Flask(__name__)


@app.route('/api/cpus', methods=['GET'])
def get_cpus():
    cpus = pcpartpicker.parts.search("cpu")
    return jsonify(cpus)

@app.route('/api/gpus', methods=['GET'])
def get_gpus():
    gpus = pcpartpicker.parts.search("gpu")
    return jsonify(gpus)

if __name__ == '__main__':
    app.run(debug=True)
