console.log("it's alive")



// // Grade
// if (grade = "A") {
// 	console.log("Awesome job!");
// } else if(grade = "B") {
// 	console.log("Good job!")
// } else{
// 	console.error("error: unknown grade");
// }


var grade = "A";

function getGrade (argument) {
	var grade = prompt("What's your grade?");
	grade = grade.toUpperCase();
}

getGrade();

switch (grade) {
	case "A":
		console.log("radddd");
		break;
	case "B":
		console.log("aiite");
		break;
	case "C":
		console.log("damn homie");
		break;
	default:
		console.error("failblog");
}

