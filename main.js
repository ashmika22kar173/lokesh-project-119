function preload() {

}

function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_aw87mEjL/model.json', modelloaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresult);
}

function modelloaded() {
    console.log('model loaded');

}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_human").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}