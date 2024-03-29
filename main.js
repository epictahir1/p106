//https://teachablemachine.withgoogle.com/models/m9YsOX1a8/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m9YsOX1a8/model.json', modelReady);

}
function modelReady()
{
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
function gotResults( error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1; 
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML='I can hear soun of- '+results[0].label;
        document.getElementById("result_count").innerHTML='detected dog-'+dog+' detected cat- '+ cat;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_img');  

        if(results[0].label=="barking"){
            img.src= 'bark.gif';
            dog=dog+1;
        }
        else if(results[0].label=="meowing"){
            img.src= 'meow.gif';
            cat=cat+1;
        }
    }
}