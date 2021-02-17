// dla 6 tekst “celujący”
// dla 5 tekst “bardzo dobry”
// dla 4 tekst “dobry”
// dla 3 tekst “dostateczny”
// dla 2 tekst “dopuszczalny”
// dla 1 tekst “niedostateczny”

let grade = 55;

switch (grade){
    case 6:{
        console.log("celujący");
        break;
    }
    case 5:{
        console.log("bardzo dobry");
        break;
    }
    case 4:{
        console.log("dobry");
        break;
    }
    case 3:{
        console.log("dostateczny");
        break;
    }
    case 2:{
        console.log("dopuszczający");
        break;
    }
    case 1:{
        console.log("niedostateczny");
        break;
    }
    default: {
        console.log("niepoprawna wartość");
    }
}