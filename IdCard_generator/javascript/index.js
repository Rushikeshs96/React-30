function generateCard(){

    const nameElement= document.getElementById("name");
    const nameValue=nameElement.value;

    const cardNameElement=document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;


    const collegeElement=document.getElementById("cname");
    const collegeValue=collegeElement.value;

    const cardCollegeElement=document.getElementById("collegeName");
    cardCollegeElement.innerHTML=collegeValue;

    const locationElement=document.getElementById("location");
    const locationValue=locationElement.value;

    const cardLocationElement=document.getElementById("locationName");
    cardLocationElement.innerHTML=collegeValue;



    document.getElementById("collegeCard").style.display="block";
}