//if else

// i want to execute this block based on the condition
// conditin true then executes the block if false no
let isHDFCBankAccess = false;
let isSBIBankAccess = false;
let isICiciBankAccess = true;
//chaining
if (isHDFCBankAccess) {
    console.log("YOu are belonging to the hdfc bank");
}
else if (isSBIBankAccess) {
    console.log("YOu are belonging to the sbi bank");
}
else if (isICiciBankAccess) {
    console.log("YOu are belonging to the icici bank");
}
else {
    console.log("you do't the account");
}

let bank1Name = "HDFC";
let bank2Name = "SBI";
let bank3Name = "ICICI";

let bankNameAccess = "SBI";

//      ""HDFC""
switch (bankNameAccess) {
    case bank1Name: {
        console.log("Hey !! Madan you are having the hdfc bank access");
        break;
    }
    case bank2Name: {
        console.log("Hey !! Madan you are having the sbi bank access");
        break;
    }
    case bank3Name: {
        console.log("Hey !! Madan you are having the icici bank access");
        break;
    }
    default: {
        console.log("Hey !! Sorry you do't have any bacnk account id");
    }
}


let day = 14;

switch (day%7) {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    } case 3: {
        console.log("Wednesday");
        break;
    } case 4: {
        console.log("thursday");
        break;
    } case 5: {
        console.log("friday");
        break;
    } case 6: {
        console.log("saturday");
        break;
    }
    case 7: {
        console.log("sunday");
        break;
    }
    default: {
        console.log("your input is wrong .please check the proper input")
    }


}