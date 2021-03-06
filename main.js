Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 100,
    dest_width: 300,
    dest_height: 250

});
camera = document.getElementById("camera");
Webcam.attach(camera);

function capture() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = "<img src='" + data_url + "' id='captured_img'>";
    });
}

console.log("ML5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZpeZUoOA7/model.json", modelloaded);

function modelloaded() {
    console.log("Model Loaded");
}

function recognize() {
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}